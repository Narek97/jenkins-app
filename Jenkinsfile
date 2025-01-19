pipeline {
    agent {
        docker {
            image 'node:20-alpine' // Using Node.js 20 with Alpine for a lightweight image
        }
    }

    environment {
        EC2_IP = '18.216.217.37'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    yarn install --frozen-lockfile
                '''
            }
        }

        stage('Check Lint') {
            steps {
                sh '''
                    echo "Running lint checks..."
                    yarn lint
                '''
            }
        }

        stage('Build app') {
            steps {
                sh '''
                    echo "Building the project..."
                    yarn build
                '''
            }
        }

        stage('Test') { // Renamed stage for clarity
            steps {
                sh '''
                    echo "Running tests..."
                    yarn test
                '''
            }
        }

        stage('deploy to EC2') {
            steps {
                script {
                    echo "deploying to shell-script to ec2"
                    sshagent (['aws-key']) {
                        // Verify the file is present in the workspace
                        // SSH into EC2, navigate to the 'app' directory, and list its contents
                        sh "ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} 'cd /home/ubuntu/app && ls -l && chmod +x run.sh && ./run.sh test'"
                    }
                }
            }
        }
    }
}
