# Contributing to Bookstream

Thank you for considering contributing to **Bookstream**! We value your time and effort and appreciate your interest in improving the project. Please take a few minutes to review these guidelines to ensure that your contributions are aligned with the project’s goals and maintain a high standard of quality.

## Getting Started

To get started with contributing, follow these steps to set up your local development environment:

1. **Fork the repository**: Click on the "Fork" button on the top of this repository to create your copy.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/your-username/bookstream.git
   ```
3. **Install dependencies**:
    ```bash
    cd bookstream
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm run dev
    ```
5. **Make your changes in the appropriate branch (see branching strategy below).**

Once you're set up, you're ready to contribute!

## Code Style Guidelines
We follow the JavaScript Standard Style for consistency across the codebase. Before submitting your code, please ensure:

- Indentation is done with 2 spaces.
- Code is linted and formatted before committing (npm run lint and npm run format).
- Use descriptive variable and function names.
- Avoid commented-out code.

## Commit Message Conventions
Please use descriptive and meaningful commit messages following this format:

- Feature commits: `feat: add book management feature`
- Bug fixes: fix: `correct search filtering bug`
- Documentation changes: `docs: update installation instructions`
- Style changes: style: `improve button hover state`
- Other refactor: refactor: `optimize database queries`

## Branching Strategy
We use a feature-branching workflow. Follow these steps for new features or bug fixes:

1. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
2. Commit your changes to this branch.
3. Push your branch to GitHub:
    ```bash
    git push origin feature/your-feature-name
    ```
4. Open a Pull Request from your feature branch to the `main` branch.

## Pull Request Guidelines
When you're ready to submit a Pull Request (PR), please follow these guidelines:

1. Write a clear description of your changes.
2. Link the related issue if applicable (e.g., Fixes #123).
3. Ensure all tests pass before submitting your PR.
3. Be prepared for review feedback from maintainers. Make any requested changes and push them to the same branch.

## Review and Approval Process
Once a pull request is submitted:

1. The PR will be reviewed by maintainers.
2. Feedback may be provided for improvements.
3. Upon approval, the PR will be merged.

## Licensing

By contributing to this repository, you agree that your contributions will be licensed under the [MIT License](LICENSE).

This means that:

1. **Your Contributions**: All contributions you submit to this project will be licensed under the same open-source MIT License as the rest of the codebase. This ensures that Bookstream remains free and open for anyone to use, modify, and distribute.
   
2. **Code Ownership**: While your contributions are greatly valued, any code you submit to the repository will become part of the project, and can be modified or redistributed under the terms of the MIT License.

3. **Respect for Licensing**: Please ensure that any third-party libraries or code you submit as part of your contributions adhere to compatible open-source licenses.

If you're unfamiliar with the MIT License, you can review it [here](LICENSE) for more information. By contributing, you confirm that you have the rights to submit the code and that your contributions are provided under this license.
