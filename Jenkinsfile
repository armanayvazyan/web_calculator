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
        stage('Run Coverage and Check Threshold') {
            steps {
                script {
                    sh '''
                        npm run coverage

                        COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
                        echo "Code Coverage: $COVERAGE%"

                        if [ "$COVERAGE" -lt 80 ]; then
                            echo "Code coverage is below the threshold: $COVERAGE%"
                            exit 1
                        fi
                    '''
                }
            }
        }
    }
}