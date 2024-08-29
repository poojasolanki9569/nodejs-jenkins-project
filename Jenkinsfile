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

        // stage('Build') {
        //     steps {
        //         // Build the Node.js application
        //         sh 'npm run build'
        //     }
        // }
        // stage('Run Linter') {
        //     steps {
        //         sh 'npm run lint' // Example linter command
        //     }
        // }

        // stage('Record Issues') {
        //     steps {
        //         recordIssues tools: [eslint()] // Example for ESLint
        //     }
        // }
        // stage('Lint') {
        //     steps {
        //         sh 'npm install eslint --save-dev'
        //         sh './node_modules/.bin/eslint index.js --format json -o eslint-report.json'
        //     }
        // }

        // stage('Record Issues') {
        //     steps {
        //         recordIssues tools: [eslint(pattern: 'eslint-report.json')]
        //     }
        // }

         stage('Lint Code') {
            steps {
                script {
                    // Run ESLint on all JavaScript files in the src directory
                    sh 'npx eslint index.js --format json -o eslint-report.json'
                }
            }
        }
        stage('Record Issues') {
            steps {
                // Record ESLint issues found during the linting stage
                recordIssues tools: [eslint(pattern: 'eslint-report.json')]
            }
        }
        
    }
}