
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout Source') {
            steps {
                echo 'Checking out SprintIQ from GitHub...'
                checkout scm
            }
        }

        stage('Validate Website Files') {
            steps {
                echo 'Checking required SprintIQ files...'

                bat '''
                    @echo off
                    if not exist index.html (
                        echo ERROR: index.html is missing
                        exit /b 1
                    )
                    if not exist style.css (
                        echo ERROR: style.css is missing
                        exit /b 1
                    )
                    if not exist script.js (
                        echo ERROR: script.js is missing
                        exit /b 1
                    )
                    echo All required SprintIQ files are present.
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving SprintIQ website files...'
                archiveArtifacts artifacts: 'index.html,style.css,script.js,nginx.conf',
                                 fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'SprintIQ CI pipeline completed successfully!'
            echo 'Website files validated and archived.'
            echo 'Deployment can be configured when a hosting server is ready.'
        }

        failure {
            echo 'SprintIQ pipeline failed. Check the stage logs.'
        }
    }
}
