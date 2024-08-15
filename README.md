# Marko Template Project

## Overview

This repository provides a starter template for developing Marko applications. The project includes essential tools and configurations to streamline development, ensure code quality, and maintain consistency across your codebase.

## Features

- **Jest**: Integrated for testing, ensuring your components and logic work as expected.
- **Prettier**: Configured to automatically format your JavaScript files, maintaining a clean and readable code style.
- **marko-prettyprint**: Applied for formatting Marko files, keeping your templates consistently structured.
- **Lint-Staged & Husky**: Set up to automatically format files before committing them to the repository, preventing messy code from being committed.
- **Babel**: Added to ensure that Jest runs tests in the appropriate JavaScript environment, supporting modern JavaScript features.
- **Webpack**: >

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/marko-template.git
   cd marko-template
   ```

2. Install dependencies:
   ```bash
    npm install
   ```

### Scripts

1. Start development server:

```bash
    npm run dev
```

2. Run tests:

```bash
  npm t
```

3. Format code:

```bash
  npm run format
```

### Pre-Commit Hook

This template uses `lint-staged` and `husky` to run code formatting checks before committing. This ensures that all committed code adheres to the project's style guidelines.
