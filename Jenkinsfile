pipeline {
  agent any

  environment {
    ECR_REPO   = "724772070195.dkr.ecr.us-east-1.amazonaws.com/nodejs-app-repo"
    IMAGE_TAG  = "latest"
    AWS_REGION = "us-east-1"
  }

  stages {
    stage('Install & Test') {
      steps {
        sh 'npm install'
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $ECR_REPO:$IMAGE_TAG .'
      }
    }

    stage('Login to ECR') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'aws-creds', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
          sh '''
            aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
            aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
            aws configure set default.region $AWS_REGION
            aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REPO
          '''
        }
      }
    }

    stage('Push Image to ECR') {
      steps {
        sh 'docker push $ECR_REPO:$IMAGE_TAG'
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh '''
          aws eks update-kubeconfig --region $AWS_REGION --name jenkins-nodejs-eks
          kubectl apply -f k8s.yaml
        '''
      }
    }
  }
}
