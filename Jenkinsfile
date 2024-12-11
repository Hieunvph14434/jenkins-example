pipeline {
    agent any

    environment {
        BRANCH_NAME = 'master'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout code from the pull request branch
                    // Jenkins sẽ tự động checkout branch pull request nếu có PR đang mở.
                    checkout scm
                    // In trường hợp bạn muốn đảm bảo rằng bạn đang checkout sang branch PR,
                    // có thể sử dụng dòng lệnh sau (nếu cần):
                    // sh "git fetch origin ${env.CHANGE_BRANCH}"
                    // sh "git checkout ${env.CHANGE_BRANCH}"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                // Cài đặt các phụ thuộc
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Lint') {
            steps {
                // Chạy lệnh lint để kiểm tra quy tắc mã hóa
                script {
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
