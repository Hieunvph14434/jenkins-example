pipeline {
    agent any

    environment {
        BRANCH_NAME = 'master'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Check convention...'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Check done!!!'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after the build.'
        }
        success {
            echo 'Build and tests were successful.'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
