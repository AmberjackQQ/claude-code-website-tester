# 🚀 Claude Code Website Tester

> Automated website testing tool for Claude Code - test any website, capture console errors, and get AI-powered fix suggestions.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/puppeteer-core.svg)](https://nodejs.org)
[![Claude Code](https://img.shields.io/badge/Claude-Code-integrated-blue.svg)](https://claude.ai/code)

## ✨ Features

- ⚡ **Fast Testing** - Test any website in ~40 seconds
- 🎯 **Automated Error Detection** - Captures all console logs and errors
- 📊 **Smart Analysis** - Classifies errors by severity (High/Medium/Low)
- 💡 **AI-Powered Suggestions** - Get code examples and fix recommendations
- 📈 **Performance Metrics** - Automatic performance data collection
- 🖼️ **Screenshots** - Automatic page screenshots
- 🎨 **Easy Integration** - Simple slash command for Claude Code

## 📦 Installation

```bash
# Clone the repository
git clone git@github.com:AmberjackQQ/claude-code-website-tester.git
cd claude-code-website-tester

# Install dependencies
npm install

# Install Claude Code command
npm run install:command
```

## 🚀 Usage

### In Claude Code

```
/test-website https://example.com
```

### From Command Line

```bash
npm start https://example.com
```

## 📊 Output

```
📊 Test Summary
- URL: https://example.com
- Health Score: 85/100
- Duration: 12.5s
- Errors: 2 (High: 1, Medium: 1, Low: 0)
```

## 📁 Project Structure

```
claude-code-website-tester/
├── src/                    # Source code
├── docs/                   # Documentation
├── scripts/                # Installation scripts
├── .claude/commands/       # Claude Code integration
└── output/                 # Test reports
```

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for details.

## 📖 Documentation

- [Installation Guide](docs/INSTALLATION.md)
- [Usage Examples](docs/EXAMPLES.md)
- [Contributing](CONTRIBUTING.md)

## 🆚 Comparison

| Feature | This Tool | Manual | Lighthouse |
|---------|-----------|--------|------------|
| Speed | ⚡⚡⚡ | 🐌 | ⚡⚡ |
| Error Analysis | ✅ | ❌ | ⚠️ |
| Fix Suggestions | ✅ | ❌ | ❌ |
| Claude Code | ✅ | ❌ | ❌ |

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## ⭐ Show Your Support

If you find this project useful, please consider giving it a star!

## 📱 Follow Us

欢迎关注我们的公众号，获取更多项目更新和技术分享：

<div align="center">
  <img src="./qrcode.png" alt="公众号二维码" width="200">
</div>

---

Made with ❤️ by [AmberjackQQ](https://github.com/AmberjackQQ)
