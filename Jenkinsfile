pipeline {
    agent any
    tools {nodejs "20.2"}
    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Code Analysis') {
            agent {
                docker {
                     args '''
                          -v "${WORKSPACE}":/data/project
                          --entrypoint=""
                          '''
                     image 'jetbrains/qodana-js'
                }
            }
            steps {
                sh '''
                   qodana \
                   --fail-threshold 5
                   '''
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'npm run test:integration'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npm run test:e2e'
            }
        }
    }
}