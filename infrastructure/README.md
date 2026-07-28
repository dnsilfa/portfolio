# Infrastructure

This directory contains two independent Terraform root modules:

- `bootstrap/` creates the private S3 bucket used for Terraform remote state. It intentionally keeps its own state local.
- `website/` defines the portfolio hosting infrastructure. It will use the bootstrap bucket as its remote backend once that bucket has been created.

Run Terraform commands from the module you intend to operate on. Each module has separate initialization files, variables, state, and instructions in its README.

Creating the backend bucket does not create or modify the website infrastructure.
