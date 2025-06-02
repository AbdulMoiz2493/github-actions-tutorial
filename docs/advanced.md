# Advanced GitHub Actions

This guide explores advanced GitHub Actions features to enhance your workflows. It assumes you understand the basics from `basics.md` and are familiar with the workflows in `.github/workflows/`.

---

## Matrix Builds

Matrix builds allow a job to run across multiple configurations (e.g., different Node.js versions or operating systems).

**Example:**

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: cd src && npm install
      - run: cd src && npm test
```

This runs tests on Ubuntu and Windows with Node.js versions 16, 18, and 20.

---

## Using Secrets

Secrets store sensitive data (e.g., API keys) securely.

**Example (`deploy.yml`):**

```yaml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

**Setup:**
Add secrets in your repo’s **Settings > Secrets and variables > Actions**.

**Usage:**
Reference secrets with `${{ secrets.SECRET_NAME }}`.

---

## Custom Actions

You can create custom actions in your repo.

**Example structure:**

```
action/
├── action.yml
└── script.js
```

`action.yml` defines inputs and runs a script.

**Example:**
See GitHub’s guide on [creating actions](https://docs.github.com/en/actions/creating-actions).

---

## Caching Dependencies

Speed up workflows by caching dependencies.

**Example:**

```yaml
- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: src/node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('src/package-lock.json') }}
```

This caches `src/node_modules/` based on `package-lock.json`.

---

## Debugging Workflows

* **Logs:** Check the “Actions” tab for detailed logs.
* **Debug Action:** Use tmate for interactive debugging:

```yaml
- name: Setup tmate session
  uses: mxschmitt/action-tmate@v3
```

* **Environment Variables:** Use `${{ env.VARIABLE }}` to access or set variables.

---

## Example Workflows in This Repo

* **deploy.yml:** Deploys the app to GitHub Pages, showing secrets and build steps.
* **lint.yml:** Runs ESLint for code quality, demonstrating linting integration.
* **scheduled.yml:** Runs a task daily, showing scheduled workflows.

---

## Next Steps

- Try adding a matrix build to `ci.yml`.
- Create a custom action in your repo.
- Explore the [GitHub Actions Marketplace](https://github.com/marketplace?type=actions) for more actions.
- Refer to the [official documentation](https://docs.github.com/en/actions) for advanced topics.

---
