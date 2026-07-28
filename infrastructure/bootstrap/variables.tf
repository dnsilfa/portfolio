variable "project_name" {
  description = "Lowercase project identifier used to construct the state bucket name."
  type        = string

  validation {
    condition     = length(var.project_name) >= 2 && length(var.project_name) <= 40 && can(regex("^[a-z0-9][a-z0-9-]*[a-z0-9]$", var.project_name))
    error_message = "project_name must be 2-40 lowercase letters, numbers, or hyphens and cannot start or end with a hyphen."
  }
}

variable "aws_region" {
  description = "AWS region in which to create the Terraform state bucket."
  type        = string
  default     = "us-east-1"
}

variable "additional_tags" {
  description = "Additional tags to merge with the standard tags."
  type        = map(string)
  default     = {}
}
