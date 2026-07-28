output "s3_bucket_name" {
  description = "Name of the private bucket that receives the contents of dist/."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront-generated domain name for the static site."
  value       = aws_cloudfront_distribution.site.domain_name
}
