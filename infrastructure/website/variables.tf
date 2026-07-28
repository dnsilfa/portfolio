variable "aws_region" {
  description = "AWS region in which to create the S3 origin bucket."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Short project identifier used in resource names and tags."
  type        = string

  validation {
    condition     = length(var.project_name) >= 2 && length(var.project_name) <= 32 && can(regex("^[a-z0-9][a-z0-9-]*[a-z0-9]$", var.project_name))
    error_message = "project_name must be 2-32 lowercase letters, numbers, or hyphens and cannot start or end with a hyphen."
  }
}

variable "environment" {
  description = "Deployment environment name used in resource names and tags."
  type        = string
  default     = "production"

  validation {
    condition     = length(var.environment) >= 2 && length(var.environment) <= 16 && can(regex("^[a-z0-9][a-z0-9-]*[a-z0-9]$", var.environment))
    error_message = "environment must be 2-16 lowercase letters, numbers, or hyphens and cannot start or end with a hyphen."
  }
}

variable "additional_tags" {
  description = "Additional tags to apply to supported AWS resources."
  type        = map(string)
  default     = {}
}
