# GitHub Actions Basics

This guide introduces the core concepts of GitHub Actions, helping you understand how to automate tasks in your GitHub repository. It’s designed for beginners and assumes familiarity with Git and GitHub.

---

## What is GitHub Actions?

GitHub Actions is a CI/CD and automation platform built into GitHub. It allows you to create workflows to automate tasks like building, testing, and deploying code, triggered by events such as code pushes or pull requests.

---

## Key Concepts

- **Workflow:**  
  A configuration file (YAML) in `.github/workflows/` that defines automated tasks.  
  _Example:_ `ci.yml` in this repo runs tests for the Node.js app in `src/`.

- **Event:**  
  An action that triggers a workflow, such as `push`, `pull_request`, or a schedule (e.g., daily runs).  
  _Example:_ See `scheduled.yml` for a scheduled workflow example.

- **Job:**  
  A set of tasks within a workflow, running on a runner (virtual machine). Jobs can run in parallel or depend on each other.  
  _Example:_ The `build` job in `ci.yml`.

- **Step:**  
  An individual task within a job, such as running a command or using an action.  
  _Example:_ `npm install` in `ci.yml` is a step.

- **Action:**  
  A reusable unit of code, often from the GitHub Marketplace (e.g., `actions/checkout@v4`). Actions simplify common tasks like checking out code or setting up Node.js.

- **Runner:**  
  The environment where jobs run, such as `ubuntu-latest`, `windows-latest`, or a self-hosted server.  
  _Example:_ This repo uses `ubuntu-latest`.

---

## Example Workflow

The `ci.yml` workflow in `.github/workflows/` demonstrates a basic CI pipeline:

- **Trigger:**  
  Runs on `push` or `pull_request` to the `main` branch.

- **Job:**  
  The `build` job runs on `ubuntu-latest`.

- **Steps:**  
  - Checks out the code using `actions/checkout@v4`.  
  - Sets up Node.js with `actions/setup-node@v4`.  
  - Installs dependencies and runs tests in the `src/` directory.

---

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/AbdulMoiz2493/github-actions-tutorial.git
    cd github-actions-tutorial
    ```

2. Explore `.github/workflows/ci.yml` to see a basic workflow.

3. Push a change to the `main` branch and check the “Actions” tab in GitHub to see the workflow run.

---

## Next Steps

✅ Try modifying `ci.yml` to add a new step, like linting (see `lint.yml`).  
✅ Read `advanced.md` for more complex workflows and features.  
✅ Check the [official GitHub Actions documentation](https://docs.github.com/en/actions) for detailed guides.

---
