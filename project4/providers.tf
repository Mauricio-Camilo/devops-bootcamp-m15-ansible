terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.20.1"
    }

    null = {
      source  = "hashicorp/null"
      version = "~> 3.0"
    }
  }
}