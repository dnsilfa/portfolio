provider "aws" {
  region  = var.aws_region
  profile = "personal"

  default_tags {
    tags = merge(
      {
        Project     = var.project_name
        Environment = var.environment
        ManagedBy   = "Terraform"
        Application = "StaticPortfolio"
      },
      var.additional_tags
    )
  }
}
