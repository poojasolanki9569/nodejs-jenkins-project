pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18.x' // Replace with your Node.js installation name in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git branch: 'master', url: 'https://github.com/poojasolanki9569/nodejs-jenkins-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         // Run tests
        //         sh 'npm test'
        //     }
        // }

        stage('Build') {
            steps {
                // Build the Node.js application
                sh 'npm run build'
            }
        }
    }
}