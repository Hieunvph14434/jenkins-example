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
                echo 'Checking code conventions...'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npx eslint .'
                }
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
