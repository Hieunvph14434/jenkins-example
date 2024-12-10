pipeline {
    agent any

    environment {
        // Các biến môi trường (nếu có)
        BRANCH_NAME = 'master'
    }

    stages {
        stage('Checkout') {
            steps {
                // Kiểm tra mã nguồn từ Git
                checkout scm
            }
        }
    }

    post {
        always {
            // Cleanup (nếu cần)
            echo 'Cleaning up after the build.'
        }
        success {
            // Hành động sau khi build thành công
            echo 'Build and tests were successful.'
        }
        failure {
            // Hành động khi build thất bại
            echo 'Build failed. Please check the logs.'
        }
    }
}
