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
        stage('Install Node.js') {
            steps {
                script {
                    // Cài đặt Node.js và npm (nếu chưa có)
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                // Cài đặt các phụ thuộc
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Chạy ESLint
                sh 'npx eslint .'
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
