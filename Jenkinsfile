pipeline {
    agent any

    environment {
        BRANCH_NAME = 'master'
    }

    tools {
        nodejs 'NodeJS18'  // Sử dụng NodeJS đã cấu hình trong Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout mã nguồn từ pull request
                    checkout scm
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Cài đặt các phụ thuộc npm
                    sh 'npm install'
                }
            }
        }
        stage('Run Lint') {
            steps {
                script {
                    // Chạy lệnh lint để kiểm tra quy tắc mã hóa
                    sh 'npm run lint'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after the build.'
        }
        success {
            echo 'Linting passed successfully.'
        }
        failure {
            echo 'Linting failed. Please check the logs.'
        }
    }
}
