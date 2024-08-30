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

        // stage('Lint Code') {
        //     steps {
        //         script {
        //             // Run ESLint and output results to a JSON file
        //             sh 'npx eslint index.js --format json -o eslint-report.json'
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                // Build the Node.js application
                sh 'npm run build'
            }
        }

        // stage('Record Issues') {
        //     steps {
        //         script {
        //             // Record ESLint issues found during linting
        //             if (fileExists('eslint-report.json')) {
        //                 recordIssues(
        //                     tools: [eslint(pattern: 'eslint-report.json')]
        //                 )
        //             }
        //         }
        //     }
        // }
        
    }
    post {
        // always {
        //     // Archive ESLint and Jest reports
        //     archiveArtifacts artifacts: './eslint-report.json', allowEmptyArchive: true

            
        //     // Record issues using Warnings Next Generation Plugin
        //     recordIssues(
        //         enabledForFailure: true, aggregatingResults: true,
        //         tools: [eslint(pattern: './eslint-report.json')]
        //     )
        // }
    }
}

