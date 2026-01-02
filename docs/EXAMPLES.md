# Usage Examples

## Basic Usage

### Test a Website

In Claude Code:

```
/test-website https://example.com
```

### Test Local Development Server

```
/test-website http://localhost:3000
```

### Test Staging Environment

```
/test-website https://staging.example.com
```

## Advanced Usage

### Command Line

```bash
# Direct usage via npm
npm start https://example.com

# Using the CLI
./bin/claude-website-test.js https://example.com

# With Node.js
node src/index.js https://example.com
```

## Output Examples

### Healthy Website (No Errors)

```
📊 Test Summary
  URL: https://example.com
  Health Score: 100/100
  Total Logs: 45
  Errors: 0
  Warnings: 2
  Network Errors: 0

✅ Results saved to: ./output
```

### Website with Errors

```
📊 Test Summary
  URL: https://example.com
  Health Score: 65/100
  Total Logs: 123
  Errors: 3 (High: 1, Medium: 2, Low: 0)
  Warnings: 8
  Network Errors: 1

❌ Error Classification:
  High: 1
  Medium: 2
  Low: 0
```

## Common Scenarios

### 1. Testing Before Deployment

```bash
# Test staging before production
/test-website https://staging.example.com
```

### 2. Debugging Console Errors

```
# Test the problematic page
/test-website https://example.com/page-with-error

# Claude Code will analyze and provide fix suggestions
```

### 3. Regression Testing

```bash
# Test after making changes
/test-website http://localhost:3000

# Compare health score with baseline
```

### 4. Competitive Analysis

```
# Check competitor's site errors
/test-website https://competitor.com
```

## Integration Examples

### CI/CD Pipeline

```yaml
# .github/workflows/test-website.yml
name: Test Website
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Test website
        run: npm start https://staging.example.com
```

### Pre-commit Hook

```bash
# .git/hooks/pre-commit
#!/bin/bash
npm start http://localhost:3000
if [ $? -ne 0 ]; then
  echo "Website test failed. Commit aborted."
  exit 1
fi
```

### npm Script

```json
// package.json
{
  "scripts": {
    "test:production": "node src/index.js https://example.com",
    "test:staging": "node src/index.js https://staging.example.com",
    "test:local": "node src/index.js http://localhost:3000"
  }
}
```

## Tips and Best Practices

### 1. Test Regularly

```bash
# Add to cron job for daily testing
0 9 * * * cd /path/to/project && npm start https://example.com
```

### 2. Track Health Scores

```bash
# Log health scores over time
npm start https://example.com | jq '.summary.healthScore' >> health-history.log
```

### 3. Compare Environments

```bash
# Test all environments
for env in production staging dev; do
  echo "Testing $env..."
  npm start "https://$env.example.com"
done
```

### 4. Baseline Testing

```bash
# Establish baseline after clean deployment
npm start https://example.com
# Save report as baseline
cp output/test-report.json baselines/baseline-$(date +%Y%m%d).json
```

## Troubleshooting Examples

### Slow Loading Pages

If a page takes too long to load, increase the timeout:

```javascript
// src/config.js
module.exports = {
  page: {
    timeout: 60000  // 60 seconds
  }
};
```

### No Errors Found

If you expect errors but none are found:

1. Check if errors occur after initial load - increase monitoring duration
2. Verify you're testing the correct URL
3. Check browser console manually to confirm errors exist

### Navigation Timeout

If you get navigation timeout errors:

1. Increase page timeout
2. Check if the site is accessible
3. Verify network connectivity

## Real-World Examples

### E-commerce Site Testing

```bash
# Test product page
/test-website https://shop.example.com/product/123

# Test checkout flow
/test-website https://shop.example.com/checkout

# Test category pages
/test-website https://shop.example.com/category/electronics
```

### SaaS Application Testing

```bash
# Test login page
/test-website https://app.example.com/login

# Test dashboard
/test-website https://app.example.com/dashboard

# Test settings page
/test-website https://app.example.com/settings
```

### Blog/Content Site Testing

```bash
# Test homepage
/test-website https://blog.example.com

# Test article page
/test-website https://blog.example.com/article/how-to-code

# Test archive page
/test-website https://blog.example.com/archive/2024
```

## More Examples

For more examples, see:
- [GitHub Issues](https://github.com/AmberjackQQ/claude-code-website-tester/issues)
- [Discussions](https://github.com/AmberjackQQ/claude-code-website-tester/discussions)
- [FAQ](FAQ.md)
