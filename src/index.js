#!/usr/bin/env node
/**
 * Claude Code Website Tester
 * Automated website testing and error detection tool
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

// Get URL from command line or use default
const URL = process.argv[2] || 'https://example.com';

class ClaudeBrowserMonitor {
    constructor(url) {
        this.url = url;
        this.results = {
            url: url,
            timestamp: new Date().toISOString(),
            startTime: Date.now(),
            logs: [],
            errors: [],
            warnings: [],
            networkErrors: [],
            performance: {}
        };
    }

    async init() {
        this.results.browser = await puppeteer.launch({
            headless: config.browser.headless,
            executablePath: config.browser.executablePath,
            args: config.browser.args
        });

        this.results.page = await this.results.browser.newPage();

        // Set viewport
        await this.results.page.setViewport(config.page.viewport);

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        const page = this.results.page;

        // Console 日志
        page.on('console', msg => {
            const log = {
                type: msg.type(),
                text: msg.text(),
                location: msg.location()
            };
            this.results.logs.push(log);

            if (log.type === 'error') {
                this.results.errors.push(log);
            } else if (log.type === 'warning') {
                this.results.warnings.push(log);
            }
        });

        // 页面错误
        page.on('pageerror', error => {
            this.results.errors.push({
                type: 'pageerror',
                message: error.message,
                stack: error.stack
            });
        });

        // 请求失败
        page.on('requestfailed', request => {
            const failure = request.failure();
            if (failure && failure.errorText !== 'net::ERR_ABORTED') {
                this.results.networkErrors.push({
                    url: request.url(),
                    error: failure.errorText,
                    method: request.method(),
                    resourceType: request.resourceType()
                });
            }
        });

        // 性能监控
        page.on('metrics', metrics => {
            this.results.performance.metrics = metrics;
        });
    }

    async navigate() {
        const navStart = Date.now();

        try {
            await this.results.page.goto(this.url, {
                waitUntil: config.page.waitUntil,
                timeout: config.page.timeout
            });
        } catch (error) {
            this.results.navigationError = {
                message: error.message,
                timeout: error.name === 'TimeoutError'
            };
        }

        this.results.performance.navigationTime = Date.now() - navStart;

        // Wait for monitoring
        await new Promise(resolve => setTimeout(resolve, config.monitoring.duration));

        // Collect performance metrics
        const metrics = await this.results.page.metrics();
        this.results.performance.metrics = metrics;
    }

    analyze() {
        // 分析错误严重程度
        this.results.analysis = {
            totalLogs: this.results.logs.length,
            totalErrors: this.results.errors.length,
            totalWarnings: this.results.warnings.length,
            totalNetworkErrors: this.results.networkErrors.length,
            errorSeverity: this.calculateSeverity(),
            healthScore: this.calculateHealthScore()
        };
    }

    calculateSeverity() {
        const severity = { high: [], medium: [], low: [] };
        const thresholds = config.analysis.severityThresholds;

        this.results.errors.forEach(error => {
            const text = error.message || error.text || '';

            // High severity
            if (thresholds.high.some(keyword => text.includes(keyword))) {
                severity.high.push(error);
            }
            // Medium severity
            else if (thresholds.medium.some(keyword => text.includes(keyword))) {
                severity.medium.push(error);
            }
            // Low severity
            else {
                severity.low.push(error);
            }
        });

        return severity;
    }

    calculateHealthScore() {
        let score = 100;
        const penalties = config.analysis.healthScore;

        score -= this.results.analysis.totalErrors * penalties.errorPenalty;
        score -= this.results.analysis.totalWarnings * penalties.warningPenalty;
        score -= this.results.analysis.totalNetworkErrors * penalties.networkErrorPenalty;

        if (this.results.navigationError) {
            score -= penalties.navigationTimeoutPenalty;
        }

        return Math.max(0, Math.min(100, score));
    }

    async saveResults() {
        // Ensure output directory exists
        if (!fs.existsSync(config.output.dir)) {
            fs.mkdirSync(config.output.dir, { recursive: true });
        }

        const outputPath = path.join(config.output.dir, config.output.reportFile);

        fs.writeFileSync(outputPath, JSON.stringify({
            summary: {
                url: this.results.url,
                timestamp: this.results.timestamp,
                duration: Date.now() - this.results.startTime,
                healthScore: this.results.analysis.healthScore,
                totalLogs: this.results.analysis.totalLogs,
                totalErrors: this.results.analysis.totalErrors,
                totalWarnings: this.results.analysis.totalWarnings,
                totalNetworkErrors: this.results.analysis.totalNetworkErrors
            },
            errors: {
                high: this.results.analysis.errorSeverity.high,
                medium: this.results.analysis.errorSeverity.medium,
                low: this.results.analysis.errorSeverity.low,
                network: this.results.networkErrors
            },
            warnings: this.results.warnings,
            performance: this.results.performance,
            navigationError: this.results.navigationError,
            allLogs: this.results.logs.slice(-100)
        }, null, 2));

        // Screenshot
        if (config.monitoring.screenshot) {
            const screenshotPath = path.join(config.output.dir, config.output.screenshotFile);
            await this.results.page.screenshot({
                path: screenshotPath,
                fullPage: config.monitoring.fullPageScreenshot
            });
        }

        return outputPath;
    }

    printSummary() {
        console.log('\n' + '='.repeat(80));
        console.log('🔍 Website Testing Complete');
        console.log('='.repeat(80));

        console.log('\n📊 Test Summary:');
        console.log(`  URL: ${this.results.url}`);
        console.log(`  Health Score: ${this.results.analysis.healthScore}/100`);
        console.log(`  Total Logs: ${this.results.analysis.totalLogs}`);
        console.log(`  Errors: ${this.results.analysis.totalErrors}`);
        console.log(`  Warnings: ${this.results.analysis.totalWarnings}`);
        console.log(`  Network Errors: ${this.results.analysis.totalNetworkErrors}`);

        if (this.results.analysis.totalErrors > 0) {
            console.log('\n❌ Error Classification:');
            console.log(`  High: ${this.results.analysis.errorSeverity.high.length}`);
            console.log(`  Medium: ${this.results.analysis.errorSeverity.medium.length}`);
            console.log(`  Low: ${this.results.analysis.errorSeverity.low.length}`);
        }

        console.log(`\n✅ Results saved to: ${config.output.dir}`);
        console.log('='.repeat(80) + '\n');
    }

    async close() {
        await this.results.browser.close();
    }
}

// Main function
async function main() {
    const monitor = new ClaudeBrowserMonitor(URL);

    try {
        await monitor.init();
        await monitor.navigate();
        await monitor.analyze();
        const reportPath = await monitor.saveResults();
        monitor.printSummary();

        console.log(`📄 Report: ${reportPath}`);

        const exitCode = monitor.results.analysis.totalErrors > 0 ? 2 : 0;
        process.exit(exitCode);

    } catch (error) {
        console.error('✗ Test failed:', error.message);
        process.exit(1);
    } finally {
        await monitor.close();
    }
}

main();
