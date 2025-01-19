pipeline {
    agent any

    environment {
        EC2_IP = '18.216.217.37'
    }

    stages {
        stage ('fetch code') {
            steps {
                script {
                    echo "Pull source code from Git"
                    // Assuming Git repo contains websetup.sh
                }
            }
        }

        stage ('deploy to EC2') {
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
