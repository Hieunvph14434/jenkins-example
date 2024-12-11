pipeline {
    agent any
    tools {
        nodejs 'NodeJS18'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the branch from the pull request (PR)
                    checkout scm
                }
            }
        }
        stage('Echo PR Branch Name') {
            steps {
                script {
                    // Print the name of the branch from which the PR is created
                    echo "The branch from which the PR was created: ${env.GIT_BRANCH}"
                    echo "The branch of the PR: ${env.CHANGE_BRANCH}" // If you're using GitHub PR plugin
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Lint') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }
    }
    post {
        failure {
            echo "Linting failed. Please check the logs."
        }
    }
}
