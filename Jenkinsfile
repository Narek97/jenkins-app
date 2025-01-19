pipeline {
    agent {
        docker {
            image 'node:20-alpine' // Using Node.js 20 with Alpine for a lightweight image
        }
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
        stage('Build') {
            steps {
                sh '''
                    echo "Building the project..."
                    yarn build
                '''
            }
        }
        stage('Test') { // Renamed this stage to 'Test' for clarity
            steps {
                sh '''
                    echo "Running tests..."
                    yarn test
                '''
            }
        }
    }
}
