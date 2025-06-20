terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.3.0"
}
provider "kubernetes" { 
  config_path = "C:/Users/gosh8/.kube/config" 
}