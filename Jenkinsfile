pipeline {
    agent any // Use any agent for the whole pipeline by default

    environment {
        EC2_IP = '18.216.217.37'
    }

    stages {
        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:20-alpine' // Use Docker agent for this stage
                }
            }
            steps {
                sh '''
                    echo "Installing dependencies..."
                    yarn install --frozen-lockfile
                '''
            }
        }

        stage('Check Lint') {
            agent {
                docker {
                    image 'node:20-alpine' // Use Docker agent for this stage
                }
            }
            steps {
                sh '''
                    echo "Running lint checks..."
                    yarn lint
                '''
            }
        }

        stage('Build app') {
            agent {
                docker {
                    image 'node:20-alpine' // Use Docker agent for this stage
                }
            }
            steps {
                sh '''
                    echo "Building the project..."
                    yarn build
                '''
            }
        }

        stage('Test') { // Renamed stage for clarity
            agent {
                docker {
                    image 'node:20-alpine' // Use Docker agent for this stage
                }
            }
            steps {
                sh '''
                    echo "Running tests..."
                    yarn test
                '''
            }
        }

        stage('deploy to EC2') {
            agent any // Use any available agent for this stage
            steps {
                script {
                    echo "deploying to shell-script to ec2"
                    sshagent (['aws-key']) {
                        // SSH into EC2, navigate to the 'app' directory, and list its contents
                        sh "ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} 'cd /home/ubuntu/app && ls -l && chmod +x run.sh && ./run.sh test'"
                    }
                }
            }
        }
    }
}
