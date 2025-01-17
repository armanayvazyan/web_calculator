pipeline {
    agent any
    tools {nodejs "20"}
    environment {
        DISPLAY = ":99"
    }
    stages {
        stage('Start Xvfb') {
            steps {
                script {
                    sh '''
                    # Start Xvfb
                    Xvfb :99 -ac &
                    # Wait to ensure Xvfb starts properly
                    sleep 5
                    '''
                }
            }
        }
        stage('Install Packages') {
            steps {
                sh 'npm install'
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
    post {
        always {
            sh 'pkill Xvfb || true'
        }
    }
}