# Installation Guide

## Prerequisites

Before installing Claude Code Website Tester, ensure you have:

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- **Google Chrome** browser installed
- **Claude Code** CLI installed

## Installation Steps

### 1. Clone the Repository

```bash
git clone git@github.com:AmberjackQQ/claude-code-website-tester.git
cd claude-code-website-tester
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `puppeteer-core` - Browser automation library

### 3. Install Claude Code Command

```bash
npm run install
```

This will copy the slash command to your Claude Code commands directory.

### 4. Verify Installation

```bash
# Test the tool
npm start https://example.com

# Or use the Claude Code command
/test-website https://example.com
```

## Configuration

### Default Configuration

The tool uses sensible defaults, but you can customize settings by editing `src/config.js`:

```javascript
module.exports = {
  browser: {
    headless: false,
    timeout: 30000
  },
  monitoring: {
    duration: 5000,
    screenshot: true
  }
};
```

### Chrome Path

The tool automatically detects Chrome on most systems. If needed, set the path explicitly:

**macOS**:
```javascript
executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
```

**Linux**:
```javascript
executablePath: '/usr/bin/google-chrome'
```

**Windows**:
```javascript
executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
```

## Troubleshooting

### Chrome Not Found

**Error**: `Browser was not found`

**Solution**:
1. Install Google Chrome
2. Update `executablePath` in `src/config.js`

### Permission Denied

**Error**: `EACCES: permission denied`

**Solution**:
```bash
chmod +x bin/claude-website-test.js
```

### Module Not Found

**Error**: `Cannot find module 'puppeteer-core'`

**Solution**:
```bash
npm install
```

## Updating

```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm update
```

## Uninstallation

```bash
# Remove the package
rm -rf claude-code-website-tester

# Remove Claude Code command
rm ~/.claude/commands/test-website.md
```

## Next Steps

- Read the [Usage Guide](EXAMPLES.md)
- Check the [API Documentation](API.md)
- Join our [Discussions](https://github.com/AmberjackQQ/claude-code-website-tester/discussions)
