pipeline {
    agent any
    tools {
        nodejs 'NodeJS 18.x'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/poojasolanki9569/nodejs-jenkins-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('Lint Code') {
        //     steps {
        //         script {
        //             sh 'npx eslint index.js --format json -o eslint-report.json'
        //         }
        //     }
        // }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: './eslint-report.json', allowEmptyArchive: true // Archive ESLint and Jest reports
            recordIssues( // Record issues using Warnings Next Generation Plugin
                enabledForFailure: true, aggregatingResults: true,
                tools: [eslint(pattern: './eslint-report.json')]
            )
        }
    }
}

