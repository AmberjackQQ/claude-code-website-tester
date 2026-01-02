---
description: Test website for console errors and generate fix suggestions
arguments:
  - name: url
    description: The website URL to test
    required: true
---

# Website Testing Task

Use the browser monitoring tool to test the website: {{url}}

## Step 1: Run the Test

```bash
cd claude-code-website-tester
npm start {{url}}
```

## Step 2: Analyze Results

Read the test report and provide detailed analysis.

The test report will be saved to: `output/test-report.json`

## Output Format

Please provide the test results in the following format:

### 📊 Test Summary
- URL
- Health Score (0-100)
- Test Duration
- Error/Warning/Network Error counts

### 🐛 Issues Found

Classified by severity:

#### 🔴 High Severity Errors
[List all high severity errors]

#### 🟡 Medium Severity Errors
[List all medium severity errors]

#### 🟢 Low Severity Errors
[List all low severity errors]

#### 🔌 Network Errors
[List all network errors]

### 💡 Fix Recommendations

For each issue, provide:
1. Problem analysis
2. Recommended fix
3. Code examples (if applicable)
4. Prevention measures

### 📈 Improvement Suggestions

Based on the health score and issues found, provide overall improvement recommendations.
