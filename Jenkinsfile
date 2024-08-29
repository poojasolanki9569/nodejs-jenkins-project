pipeline {
    agent any
    tools {
        nodejs 'NodeJS 18.x' // Replace with your Node.js installation name
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/username/repo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Add deployment steps here
                sh 'echo "Deploying application..."'
            }
        }
    }
    post {
        always {
            junit '**/test-results/*.xml' // Adjust path to test results if needed
        }
    }
}