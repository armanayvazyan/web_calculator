pipeline {
    agent any
    tools {nodejs "20.2"}
    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test:unit'
            }
            steps {
                            sh 'npm run test:integration'
                        }
                        steps {
                                        sh 'npm run test:e2e'
                                    }
        }
    }
}