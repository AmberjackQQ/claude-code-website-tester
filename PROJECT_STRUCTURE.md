# Claude Code Website Tester - Project Structure

## 📁 Complete Project Structure

```
claude-code-website-tester/
├── .claude/
│   └── commands/
│       └── test-website.md          # Claude Code slash command definition
│
├── bin/
│   └── claude-website-test.js       # CLI executable wrapper
│
├── docs/
│   ├── INSTALLATION.md              # Detailed installation guide
│   ├── EXAMPLES.md                  # Usage examples
│   ├── API.md                       # API documentation (TODO)
│   └── FAQ.md                       # Frequently asked questions (TODO)
│
├── scripts/
│   ├── install.js                   # Installation script
│   └── uninstall.js                 # Uninstallation script
│
├── src/
│   ├── index.js                     # Main monitoring script
│   ├── config.js                    # Configuration file
│   ├── analyzer.js                  # Error analysis module (TODO)
│   └── reporter.js                  # Report generation (TODO)
│
├── tests/
│   └── test.js                      # Test suite (TODO)
│
├── output/                          # Generated test reports (gitignored)
│   ├── test-report.json
│   └── screenshot.png
│
├── .gitignore                       # Git ignore rules
├── LICENSE                          # MIT License
├── package.json                     # NPM package configuration
├── README.md                        # Project readme
├── CONTRIBUTING.md                  # Contributing guidelines
└── PROJECT_STRUCTURE.md             # This file
```

## 📄 File Descriptions

### Core Files

| File | Description |
|------|-------------|
| `src/index.js` | Main browser monitoring script using Puppeteer |
| `src/config.js` | Configuration settings for browser, monitoring, and analysis |
| `package.json` | NPM package metadata and dependencies |

### Claude Code Integration

| File | Description |
|------|-------------|
| `.claude/commands/test-website.md` | Slash command definition for Claude Code |

### Scripts

| File | Description |
|------|-------------|
| `scripts/install.js` | Installs the slash command to `~/.claude/commands/` |
| `scripts/uninstall.js` | Removes the slash command |
| `bin/claude-website-test.js` | CLI wrapper for the main script |

### Documentation

| File | Description |
|------|-------------|
| `README.md` | Main project documentation |
| `docs/INSTALLATION.md` | Installation instructions |
| `docs/EXAMPLES.md` | Usage examples and scenarios |
| `CONTRIBUTING.md` | Contribution guidelines |

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:AmberjackQQ/claude-code-website-tester.git
cd claude-code-website-tester

# Install dependencies
npm install

# Install Claude Code command
npm run install:command

# Test the tool
npm start https://example.com
```

## 📊 Output Files

Test results are saved in the `output/` directory:

```
output/
├── test-report.json     # Detailed JSON report
└── screenshot.png       # Page screenshot
```

## 🔧 Configuration

Edit `src/config.js` to customize:

- Browser settings (headless mode, executable path)
- Page settings (viewport, timeout)
- Monitoring settings (duration, screenshot)
- Output settings (directory, file names)
- Analysis settings (severity thresholds, health score)

## 📦 Dependencies

- **puppeteer-core**: ^23.0.0 - Headless Chrome Node API

## 🎯 Usage

### In Claude Code

```
/test-website https://example.com
```

### From Command Line

```bash
# Using npm script
npm start https://example.com

# Using the CLI
./bin/claude-website-test.js https://example.com

# Using Node.js directly
node src/index.js https://example.com
```

## 🔮 Future Enhancements

- [ ] Add more analysis modules
- [ ] Support for multiple browsers
- [ ] CI/CD integration examples
- [ ] Web dashboard for results
- [ ] Historical comparison
- [ ] Email notifications
- [ ] Slack integration

## 📝 Development Notes

### Adding New Features

1. Create feature branch
2. Implement in `src/`
3. Update `src/config.js` if needed
4. Add tests in `tests/`
5. Update documentation

### Code Style

- Use ES6+ features
- Follow existing patterns
- Add JSDoc comments
- Keep functions focused

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
