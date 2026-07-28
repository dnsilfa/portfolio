# Terraform backend bootstrap

This configuration creates only the private S3 bucket used for Terraform remote state. It deliberately uses local state because it bootstraps the remote backend itself. The bucket has versioning, Amazon S3 managed encryption (SSE-S3), bucket-owner-enforced ownership, and all S3 public-access blocks enabled.

The AWS provider uses the local AWS CLI profile `personal`. Authenticate that profile before running Terraform, for example with `aws sso login --profile personal`.

## Prerequisites

- Terraform 1.10 or newer (native S3 lock files require Terraform 1.10+)
- AWS CLI profile `personal`, configured for the target AWS account
- Permission to create and configure an S3 bucket

## Configure and create the state bucket

From `infrastructure/bootstrap`, copy the example input file:

```powershell
Copy-Item terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` and set `project_name`. The `aws_region` defaults to `us-east-1`; `additional_tags` is optional.

Initialize Terraform and review the proposed change:

```powershell
terraform init
terraform plan
```

When the plan is correct, create the bucket:

```powershell
terraform apply
```

This repository setup does not run `terraform apply` for you. Keep the bootstrap `terraform.tfstate` safe: it manages the state bucket itself.

Retrieve the generated bucket name after apply:

```powershell
terraform output -raw state_bucket_name
```

## Configure the website backend later

After the bucket exists, add an S3 backend to the main website Terraform configuration. Backend blocks cannot use input variables, so substitute the bucket name returned above:

```hcl
terraform {
  backend "s3" {
    bucket       = "GENERATED_BUCKET_NAME"
    key          = "portfolio/terraform.tfstate"
    region       = "us-east-1"
    profile      = "personal"
    encrypt      = true
    use_lockfile = true
  }
}
```

Then run `terraform init -reconfigure` from `infrastructure/website`. If existing local website state must be migrated, use `terraform init -migrate-state` instead and carefully review Terraform's prompt. No DynamoDB table is required or configured.
