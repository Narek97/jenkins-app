pipeline {
      agent {
           docker {
               image 'node:20-alpine'
           }
       }
    stages {
        stage ('Check Lint') {
            steps {
                script {
                    echo "Check Lint"
                }
                sh '''
                    echo "Running lint checks..."
                    # Replace the command below with your linting command
                    yarn lint
                '''
            }
        }
    }
}
