pipeline {
    agent any

    environment {
        BRANCH_NAME = 'master'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
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
