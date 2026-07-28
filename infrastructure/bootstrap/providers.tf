provider "aws" {
  region  = var.aws_region
  profile = "personal"

  default_tags {
    tags = merge(
      {
        Project     = var.project_name
        Environment = "bootstrap"
        ManagedBy   = "Terraform"
        Purpose     = "TerraformRemoteState"
      },
      var.additional_tags
    )
  }
}
