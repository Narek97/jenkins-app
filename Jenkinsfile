pipeline {
    agent {
        docker {
            image 'node:20-alpine'
        }
    }
    stages {
        stage ('Install Dependencies') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    yarn install
                '''
            }
        }
        stage ('Check Lint') {
            steps {
                sh '''
                    echo "Running lint checks..."
                    yarn run lint
                '''
            }
        }
    }
}
