# Contributing to Claude Code Website Tester

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

1. Check existing issues first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Feature description
   - Use cases
   - Possible implementation approach
   - Examples

### Submitting Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
7. Push to the branch (`git push origin feature/AmazingFeature`)
8. Open a Pull Request

## 📋 Development Setup

```bash
# Clone your fork
git clone git@github.com:AmberjackQQ/claude-code-website-tester.git
cd claude-code-website-tester

# Install dependencies
npm install

# Run tests
npm test

# Run the tool
npm start https://example.com
```

## 📝 Code Style

- Use ES6+ features
- Follow existing code style
- Add JSDoc comments for functions
- Use meaningful variable and function names
- Keep functions small and focused

## ✅ Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

## 📖 Documentation

- Update README for user-facing changes
- Add JSDoc for new functions
- Update comments for complex logic
- Add examples for new features

## 🎯 Pull Request Guidelines

- One feature per PR
- Clear description of changes
- Link to related issues
- Keep PRs focused and small
- Respond to review comments

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
