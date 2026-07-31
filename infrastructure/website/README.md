# Portfolio website infrastructure

This directory is the Terraform root module for the portfolio website. Terraform runs locally on your laptop, while HCP Terraform stores the workspace state and state history. The configuration currently contains only Terraform, HCP Terraform, and AWS provider connection settings; it does not define or create any AWS resources.

## HCP Terraform setup

HCP Terraform stores the workspace's Terraform state and state history and records its run history. Replace these placeholders in `versions.tf` with the organization and workspace you create in HCP Terraform:

- `YOUR_HCP_TERRAFORM_ORGANIZATION`
- `YOUR_HCP_TERRAFORM_WORKSPACE`

Configure that HCP Terraform workspace to use **Local** execution mode. Terraform commands will execute on this laptop, and the `cloud` block will send state to the HCP workspace.

Authenticate the local Terraform CLI to HCP Terraform:

```powershell
terraform login
```

The login command stores an HCP Terraform API token in your local Terraform CLI credentials. It does not authenticate Terraform to AWS.

AWS authentication comes from the local AWS CLI profile named `personal`, which uses IAM Identity Center. Start or refresh its SSO session before running Terraform commands:

```powershell
aws sso login --profile personal
```

Copy the example inputs and adjust them for the project:

```powershell
Copy-Item terraform.tfvars.example terraform.tfvars
```

After replacing the HCP placeholders, initialize the working directory:

```powershell
terraform init
```

You can then run local checks and plans:

```powershell
terraform fmt -check
terraform validate
terraform plan
```

Do not commit `terraform.tfvars` if it contains environment-specific values. The repository keeps `.terraform.lock.hcl` in version control after `terraform init` creates it.

## Future remote execution

If the workspace is later changed from Local to Remote execution mode, HCP Terraform will execute outside this computer and will not have access to the local `personal` profile.

At that point, prefer HCP Terraform's dynamic AWS provider credentials through workload identity federation (OIDC). This allows HCP Terraform to assume a narrowly scoped AWS IAM role for each run without storing long-lived AWS access keys. The provider configuration will also need to stop requiring the local `personal` profile before remote execution is enabled.

Do not add AWS access keys or secret keys to Terraform files, tfvars files, or source control.

## Current scope

There is no S3 backend, state bucket, DynamoDB table, GitHub Actions workflow, OIDC configuration, or website infrastructure in this configuration. HCP Terraform manages the remote state through the `cloud` block. Do not run `terraform apply` until the website resources are deliberately configured and reviewed.
