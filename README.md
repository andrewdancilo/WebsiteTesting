# Login Form Test Automation

## Task Overview
This project automates login form testing on the Sauce Demo website.

### Scenarios Covered:
1. Login with empty credentials.
2. Login with a missing password.
3. Login with valid credentials.

## Tools & Technologies
- **Test Automation Tool**: WebDriverIO
- **Browsers**: Firefox, Edge
- **Assertions**: Mocha
- **Patterns**: Page Object
- **Logging**: Built-in WebDriverIO

## How to Run
1. Install dependencies: `npm install`
2. Run tests: `npx wdio run wdio.conf.js`

## Parallel Execution
Tests are configured to run in parallel across multiple browsers.
