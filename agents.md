# Personal Website

## Project Goals

This repository is my professional portfolio website.

The site should demonstrate both software engineering and cloud/platform engineering experience while remaining clean, modern, and responsive.

## General Guidelines

- Preserve the existing design language and component structure.
- Favor reusable React components.
- Keep the UI minimal and professional.
- Do not introduce unnecessary dependencies.
- Maintain accessibility (semantic HTML, keyboard navigation, ARIA where appropriate).
- Ensure responsive behavior across desktop, tablet, and mobile.

## Resume & Experience

- Never invent accomplishments, metrics, percentages, or business impact.
- Do not exaggerate responsibilities.
- Prioritize accuracy over marketing language.
- Emphasize Platform Engineering, Developer Experience, Cloud Infrastructure, AWS, Terraform, automation, and backend development.
- Keep resume bullets concise and recruiter-friendly.

## AWS & Infrastructure

Prefer AWS-native solutions.

When adding infrastructure:
- Use Terraform.
- Follow Infrastructure-as-Code best practices.
- Use least-privilege IAM policies.
- Prefer GitHub OIDC over long-lived AWS credentials.
- Never make S3 buckets public unless explicitly requested.
- Prefer CloudFront + private S3 for static hosting.

## Code Quality

Before completing work:

- Run formatting.
- Run linting.
- Run tests if available.
- Ensure production builds succeed.
- Explain any assumptions made.

## When Unsure

Inspect the existing codebase before making architectural decisions.

Match the existing coding style instead of introducing a different pattern.