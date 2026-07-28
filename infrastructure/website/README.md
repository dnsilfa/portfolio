# AWS static-site infrastructure

This directory provisions phase one of the portfolio hosting platform:

- A private, encrypted, versioned S3 bucket for the contents of `dist/`
- S3 public-access blocking and bucket-owner-enforced ownership
- A CloudFront distribution that accesses S3 through Origin Access Control (OAC)
- A short cache policy for `index.html` and other root paths
- A one-year cache policy for Vite's content-hashed files under `assets/`

The configuration does not enable S3 website hosting or public bucket access. It also does not create Route 53, ACM, IAM deployment roles, GitHub OIDC, or CI/CD resources.

## Prerequisites

- Terraform 1.6 or newer
- AWS credentials for the target account, provided through the normal AWS credential chain
- Permission to create S3, CloudFront, and related resource policies

No AWS account ID is required as an input.

## Configure

Copy the example variables file and edit it:

```powershell
Copy-Item terraform.tfvars.example terraform.tfvars
```

Required input:

- `project_name`: a lowercase, hyphenated project identifier

Optional inputs:

- `aws_region`: region for the S3 bucket; defaults to `us-east-1`
- `environment`: environment label; defaults to `production`
- `additional_tags`: extra tags to merge with the standard project tags

The bucket name includes a Terraform-generated random suffix so it does not depend on a fixed, globally available name. Preserve Terraform state to preserve that name.

## Initialize and review

From this directory, run:

```powershell
terraform init
terraform fmt -check
terraform validate
terraform plan
```

Review the plan before applying it. This phase intentionally leaves Terraform state local; configure a protected remote backend before using this configuration collaboratively or in automation.

When you are ready to create the infrastructure manually:

```powershell
terraform apply
```

Do not upload the source repository to S3. From the repository root, build the application and upload only the generated files:

```powershell
npm ci
npm run build
aws s3 sync dist/ "s3://$(terraform -chdir=infrastructure/website output -raw s3_bucket_name)" --delete
```

The output `cloudfront_domain_name` is the initial HTTPS URL. A custom domain and certificate can be added in a later phase.

## Cache behavior

CloudFront redirects HTTP viewers to HTTPS and supports HTTP/2, HTTP/3, IPv6, and automatic compression. Requests matching `assets/*` use the long-lived cache policy because Vite filenames contain content hashes. The default behavior uses a short cache policy so changes to `index.html` are discovered quickly.

No SPA error fallback is configured because the application does not use path-based client-side routing.
