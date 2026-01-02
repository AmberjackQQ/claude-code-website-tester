#!/usr/bin/env node
/**
 * Installation script for Claude Code Website Tester
 * Copies the slash command to the Claude Code commands directory
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const CLAUDE_DIR = path.join(os.homedir(), '.claude');
const COMMANDS_DIR = path.join(CLAUDE_DIR, 'commands');
const SOURCE_COMMAND = path.join(__dirname, '..', '.claude', 'commands', 'test-website.md');
const TARGET_COMMAND = path.join(COMMANDS_DIR, 'test-website.md');

console.log('📦 Installing Claude Code Website Tester...\n');

// Create .claude directory if it doesn't exist
if (!fs.existsSync(CLAUDE_DIR)) {
  console.log(`Creating ${CLAUDE_DIR}`);
  fs.mkdirSync(CLAUDE_DIR, { recursive: true });
}

// Create commands directory if it doesn't exist
if (!fs.existsSync(COMMANDS_DIR)) {
  console.log(`Creating ${COMMANDS_DIR}`);
  fs.mkdirSync(COMMANDS_DIR, { recursive: true });
}

// Copy the command file
try {
  fs.copyFileSync(SOURCE_COMMAND, TARGET_COMMAND);
  console.log(`✅ Command installed to: ${TARGET_COMMAND}`);
} catch (error) {
  console.error('❌ Failed to install command:', error.message);
  process.exit(1);
}

console.log('\n✅ Installation complete!');
console.log('\nYou can now use the command in Claude Code:');
console.log('  /test-website https://example.com\n');
