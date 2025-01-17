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
                sh 'sudo apt-get update && sudo apt-get install -y libgconf-2-4 libnss3 libx11-xcb1 libxcb-dri3-0 libxss1 libgobject-2.0-0'
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