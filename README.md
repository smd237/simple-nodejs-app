# Simple Node.js CI/CD Demo

A simple Node.js web application demonstrating GitHub Actions CI/CD pipelines.

## Features

- Express.js web server
- Health check endpoint
- Automated testing with Jest
- CI/CD pipelines with GitHub Actions
- Multiple Node.js version testing

## API Endpoints

- \`GET /\` - Welcome message
- \`GET /health\` - Health check
- \`GET /info\` - Service information

## CI/CD Pipelines

### CI Pipeline (\`.github/workflows/ci.yml\`)
- Runs on push to main/develop and pull requests
- Tests on Node.js versions 16, 18, and 20
- Security audit
- Build verification

### CD Pipeline (\`.github/workflows/cd.yml\`)
- Runs on push to main branch
- Automated deployment simulation
- Manual trigger support

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev

# Start production server
npm start
\`\`\`

## GitHub Actions Status

![CI Pipeline](https://github.com/smd237/simple-nodejs-app/actions/workflows/ci.yml/badge.svg)
![CD Pipeline](https://github.com/smd237/simple-nodejs-app/actions/workflows/cd.yml/badge.svg)

## 🚀 Live Deployment

This application is automatically deployed to **AWS Elastic Beanstalk** on every push to the main branch.

### 🌐 Live Application
**URL:** http://simple-nodejs-app-env.eba-f3ewffnb.us-east-1.elasticbeanstalk.com

### ✅ Test Endpoints
- **Main Page:** http://simple-nodejs-app-env.eba-f3ewffnb.us-east-1.elasticbeanstalk.com/
- **Health Check:** http://simple-nodejs-app-env.eba-f3ewffnb.us-east-1.elasticbeanstalk.com/health
- **App Info:** http://simple-nodejs-app-env.eba-f3ewffnb.us-east-1.elasticbeanstalk.com/info

### 🔄 Deployment Process
1. Code pushed to GitHub
2. CI Pipeline runs tests ✅
3. CD Pipeline deploys to AWS ✅
4. Application goes live automatically 🎉

### ☁️ AWS Services Used
- **Elastic Beanstalk**: Application hosting and auto-scaling
- **EC2**: Virtual servers running Node.js
- **S3**: Deployment package storage
- **CloudWatch**: Monitoring and logs
- **Load Balancer**: Traffic distribution
