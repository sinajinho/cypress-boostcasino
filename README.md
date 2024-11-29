# BoostCasino Test Automation

This project contains automated tests for BoostCasino using Cypress. It includes both desktop and mobile test suites.

## Prerequisites

- Node.js installed on your machine
- npm installed on your machine

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd <project-directory>
```

3. Install dependencies:
```bash
npm install
```

## Project Structure

```
cypress/
├── e2e/
│   ├── client_desktop/    # Desktop test files
│   └── client_mobile/     # Mobile test files
├── fixtures/              # Test data files
│   └── categoryData.js
├── support/              # Support files and commands
│   └── client/
│       ├── game.js
│       ├── lobby.js
│       ├── pages.js
│       └── urls.js
```

## Available Scripts

Run tests in Cypress Test Runner:
```bash
npm run cy:open
```

### Desktop Tests
- Headed mode (visible browser):
```bash
npm run cy:desktop:headed
```
- Headless mode (background):
```bash
npm run cy:desktop:headless
```

### Mobile Tests
- Headed mode (visible browser):
```bash
npm run cy:mobile:headed
```
- Headless mode (background):
```bash
npm run cy:mobile:headless
```

### Run All Tests
- All tests in headed mode:
```bash
npm run test:all:headed
```
- All tests in headless mode:
```bash
npm run test:all:headless
```

## Additional Information

For more details about Cypress, visit:
- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
