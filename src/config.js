/**
 * Configuration for Claude Code Website Tester
 */

module.exports = {
  // Browser settings
  browser: {
    headless: false,
    // Chrome executable path - set via environment variable CHROME_PATH or auto-detect
    // macOS: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    // Linux: '/usr/bin/google-chrome'
    // Windows: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    executablePath: process.env.CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  },

  // Page settings
  page: {
    viewport: { width: 1920, height: 1080 },
    timeout: 30000,
    waitUntil: 'domcontentloaded'
  },

  // Monitoring settings
  monitoring: {
    duration: 5000,  // How long to monitor (ms)
    screenshot: true,
    fullPageScreenshot: true
  },

  // Output settings
  output: {
    dir: './output',
    reportFile: 'test-report.json',
    screenshotFile: 'screenshot.png',
    format: 'json'
  },

  // Analysis settings
  analysis: {
    severityThresholds: {
      high: ['Uncaught', 'TypeError', 'ReferenceError', 'SyntaxError'],
      medium: ['404', 'Network', 'Failed to load'],
      low: ['warning', 'deprecation']
    },
    healthScore: {
      errorPenalty: 10,
      warningPenalty: 2,
      networkErrorPenalty: 5,
      navigationTimeoutPenalty: 20
    }
  }
};
