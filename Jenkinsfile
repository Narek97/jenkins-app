pipeline {
    agent {
        docker {
            image 'node:20-alpine' // Using Node.js 20 with Alpine for a lightweight image
        }
    }
    environment {
        EC2_IP = '18.216.217.37' // EC2 IP address
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
        stage('Deploy to EC2') {
            steps {
                script {
                    echo "Deploying to EC2"
                    sshagent(['aws-key']) {
                        sh "scp -o StrictHostKeyChecking=no websetup.sh ubuntu@${EC2_IP}:/home/ubuntu"
                        // SSH into EC2, navigate to the 'app' directory, and list its contents
                        sh "ssh -o StrictHostKeyChecking=no ubuntu@${EC2_IP} 'cd /home/ubuntu/app && ls -l && chmod +x run.sh && ./run.sh test'"
                    }
                }
            }
        }
    }
}
