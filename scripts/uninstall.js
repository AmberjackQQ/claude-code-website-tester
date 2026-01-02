#!/usr/bin/env node
/**
 * Uninstallation script for Claude Code Website Tester
 * Removes the slash command from the Claude Code commands directory
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');
const COMMAND_FILE = path.join(COMMANDS_DIR, 'test-website.md');

console.log('🗑️  Uninstalling Claude Code Website Tester...\n');

// Check if command exists
if (!fs.existsSync(COMMAND_FILE)) {
  console.log('⚠️  Command not found. Nothing to uninstall.');
  process.exit(0);
}

// Remove the command file
try {
  fs.unlinkSync(COMMAND_FILE);
  console.log(`✅ Removed: ${COMMAND_FILE}`);
} catch (error) {
  console.error('❌ Failed to uninstall:', error.message);
  process.exit(1);
}

console.log('\n✅ Uninstallation complete!');
console.log('The /test-website command has been removed from Claude Code.\n');
