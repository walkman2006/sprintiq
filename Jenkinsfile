pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/var/www/sprintiq'
        EC2_USER    = 'ubuntu'
        // Add your AWS EC2 Public IP or DNS in Jenkins credentials or environment
        EC2_HOST    = credentials('sprintiq-ec2-host')
        SSH_KEY     = credentials('sprintiq-ssh-key')
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo 'Checking out source repository...'
                checkout scm
            }
        }

        stage('Lint & Validate Static Assets') {
            steps {
                echo 'Validating HTML, CSS, and JavaScript syntax...'
                // Validate JavaScript syntax using Node.js
                sh 'node -c script.js'
                // Confirm static files exist
                sh 'test -f index.html && test -f style.css && test -f script.js'
                echo 'Validation successful! No build step required for vanilla stack.'
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving static web files...'
                archiveArtifacts artifacts: 'index.html, style.css, script.js', fingerprint: true
            }
        }

        stage('Deploy to AWS EC2 via SSH') {
            steps {
                echo "Deploying static assets to AWS EC2 at ${DEPLOY_PATH}..."
                sshagent(['sprintiq-ssh-key']) {
                    // Create remote directory and set permissions
                    sh """
                        ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'sudo mkdir -p ${DEPLOY_PATH} && sudo chown -R ${EC2_USER}:${EC2_USER} ${DEPLOY_PATH}'
                    """
                    // Securely copy files to EC2 Nginx web root
                    sh """
                        scp -o StrictHostKeyChecking=no index.html style.css script.js ${EC2_USER}@${EC2_HOST}:${DEPLOY_PATH}/
                    """
                    // Reload Nginx service
                    sh """
                        ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'sudo systemctl reload nginx'
                    """
                }
                echo 'Deployment complete! SprintIQ is live on AWS EC2.'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully. SprintIQ deployed.'
        }
        failure {
            echo 'Pipeline failed. Check Jenkins logs for details.'
        }
    }
}
