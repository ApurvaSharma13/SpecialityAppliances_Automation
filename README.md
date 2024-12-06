# Cypress Project integrated with Github Actions
This is a cypress project for Automating the scripts , it integrates with Github Actions that allows to automate your build, test, and deployment pipeline. 
Target audiences of this document are:

- users who are using Cypress for test automation in their organization and 
- have certain knowdlege of, and experience with, Cypress. In other words, you are Cypress users and are using this framework for test automation and
- want to integrate Cypress project with Github Actions and
- want to leverage Github Actions to schedule and kick off Cypress test execution, either entire tests in their Cypress project or just some selected tests only .

# Pre-requitesites
- [NodeJS](https://nodejs.org/en/) 18+ installed. To verify if nodejs is installed properly, open Command Prompt on Windows, or Terminal on Mac, then execute this command `node --version`

# Setup

1. Download Project source code from repo under SA_poc-main.zip package and extract them to your folder.
2. Open Terminal (for Mac or Linux), or Command Prompt if you are on Windows.
3. Navigate to source code folder and run `npm init` command to create package.json file.
4. Run this command to install Cypress: `npm install --save-dev cypress@10.11.0`

# Run Cypress test from command line
This step is to verify you can run Cypress test from command line.

1. Still on Terminal (or Command Prompt) window
2. Navigate to source code folder
3. Run this command to execute Cypress test dependent on your Operting System
    - Mac or Linux: `node_modules/.bin/cypress run --browser chrome`
    - Windows: `node_modules\.bin\cypress run --browser chrome`

# Integrate Cypress test with Github Actions
### End-to-End Testing

```yml
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v6
```
