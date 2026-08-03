terraform {

  cloud {
    organization = "Danielle-Infra"

    workspaces {
      project = "Personal Projects"
      name    = "personal-portfolio"
    }
  }

  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
