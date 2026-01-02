#!/usr/bin/env node
/**
 * CLI wrapper for Claude Code Website Tester
 */

const path = require('path');
const { spawn } = require('spawn');

// Get URL from arguments
const url = process.argv[2] || 'https://example.com';

// Run the main script
const scriptPath = path.join(__dirname, '..', 'src', 'index.js');
const child = spawn('node', [scriptPath, url], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..')
});

child.on('exit', (code) => {
  process.exit(code);
});
