# Playwright UI Automation Framework (JavaScript)

## Overview

This repository contains a Playwright automation framework developed using JavaScript to strengthen my automation testing skills through hands-on implementation.

The project combines a reusable Page Object Model (POM) framework for end-to-end testing of an e-commerce application with separate practice modules covering Playwright features such as API testing, network interception, request mocking, browser interactions, reporting, and Cucumber.

The primary focus of this project was to build a maintainable automation framework while gaining practical experience with modern Playwright testing techniques and industry best practices.
## About This Project

I developed this project while learning Playwright automation through a structured course and continued expanding it by practising additional Playwright features independently.

Rather than focusing only on a single end-to-end test, I used this repository to explore different areas of automation testing, including API testing, browser automation, network interception, request mocking, reporting, and framework design.

This project continues to serve as my personal automation practice framework as I learn and apply new Playwright concepts.
## Technologies Used

| Category | Technology |
|----------|------------|
| Programming Language | JavaScript (Node.js) |
| Automation Framework | Playwright |
| Design Pattern | Page Object Model (POM) |
| BDD Framework | Cucumber |
| Test Runner | Playwright Test |
| API Testing | Playwright APIRequestContext |
| Reporting | Allure Reports, Playwright HTML Report |
| CI/CD | GitHub Actions |
| Version Control | Git & GitHub |
| IDE | Visual Studio Code |
| Professional QA Tools | Jira, Zephyr, Confluence|

## What this Framework Covers

This project includes practical implementations of Playwright automation concepts through a reusable Page Object Model framework and dedicated learning modules.

### End-to-End Automation Framework
- Reusable Page Object Model (POM) design
- Page Object Manager for centralized page object creation
- End-to-end automation of user login, product selection, checkout and order validation
- JSON-based test data management
- Modular and maintainable test structure

### UI Automation
- Login, product search, cart, checkout, and order validation
- Modern Playwright locators (`getByRole`, `getByText`, `getByLabel`, etc.)
- Browser Context Handling
- Child Window Handling
- Calendar/date picker automation
- Mouse hover and hidden element validation
- File upload and download scenarios

### API & Network Testing
- API-based order creation using Playwright
- API response validation
- Network request and response interception
- Request mocking for controlled testing

### Framework & Execution
- Cross-browser execution
- Cucumber (BDD) integration
- Playwright HTML Reports
- Allure Reports
- GitHub Actions workflow for automated test    execution

## Project Structure

| Folder / File | Description |
|---------------|-------------|
| `.github/workflows` | GitHub Actions workflow for automatically running Playwright tests. |
| `docs` | Contains project documentation and screenshots used in the README. |
| `features` | Cucumber feature files written in Gherkin syntax for BDD scenarios. |
| `tests` | Playwright test scripts covering end-to-end scenarios and Playwright learning concepts. |
| `tests/pageobjects` | Page Object Model classes used to build a reusable and maintainable automation framework. |
| `utils` | Shared utility classes, API helper methods, and test data used across the framework. |
| `playwright.config.js` | Playwright configuration for browsers, reporters, and execution settings. |
| `cucumber.js` | Cucumber configuration used for BDD execution. |
| `package.json` | Project dependencies and npm scripts. |
| `README.md` | Project documentation and usage guide. |

## Running the Project

### Prerequisites

Ensure the following are installed before running the project:

- Node.js
- Visual Studio Code
- Git

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd playwright-ui-automation-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

### Execute Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/sampletestPO.spec.js
```

Run Cucumber tests:

```bash
npx cucumber-js
```
## AI-Assisted Learning

While developing this project, I used AI as a learning assistant to deepen my understanding of Playwright and automation framework design.

AI was used to:

- Explore different Playwright implementation approaches
- Improve Page Object Model design and code organisation
- Generate additional test scenarios for practice
- Understand modern locator strategies and Playwright features
- Troubleshoot automation issues during framework development
- Learn automation best practices and compare alternative solutions

All generated suggestions were reviewed, tested and adapted before being incorporated into the project. The primary objective was to strengthen my understanding rather than simply generate code.

## Author

**Alana Reddy Almawar**

Software Test Engineer | Manual QA | Learning Playwright Automation

LinkedIn: (link)

GitHub: (link)