# GitHub Repository Setup Guide

This guide will help you replace an existing GitHub repository with your local code and set up GitHub Actions for Firebase deployment.

## Step 1: Prepare Your Local Repository

1. Initialize Git in your local repository (if not already done):
   ```bash
   git init
   ```

2. Add all your files to Git:
   ```bash
   git add .
   ```

3. Commit your changes:
   ```bash
   git commit -m "feat: initial commit"
   ```

## Step 2: Connect to Your Existing GitHub Repository

1. Remove the existing remote origin (if it exists):
   ```bash
   git remote remove origin
   ```

2. Add your GitHub repository as the new remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

3. Push your local code to GitHub, forcing it to overwrite the remote repository:
   ```bash
   git push -f origin master
   ```

   Note: This will completely replace the existing repository content with your local code.

## Step 3: Set Up GitHub Secrets for Firebase Deployment

1. Generate a Firebase CI token:
   ```bash
   npm run firebase:login
   firebase login:ci
   ```
   
   This will open a browser window for authentication and then provide you with a token.

2. In your GitHub repository, go to Settings > Secrets and variables > Actions

3. Add the following secrets:
   - `FIREBASE_SERVICE_ACCOUNT`: The Firebase CI token you generated
   - `FIREBASE_PROJECT_ID`: Your Firebase project ID (found in Firebase console)

## Step 4: Verify GitHub Actions Workflow

1. The GitHub Actions workflow file is already created at `.github/workflows/firebase-deploy.yml`

2. This workflow will automatically deploy your application to Firebase whenever you push to the master branch.

3. You can also manually trigger the workflow from the Actions tab in your GitHub repository.

## Step 5: Update Firebase Configuration (if needed)

1. Make sure your Firebase project is correctly set up with Hosting, Firestore, and Functions.

2. Verify that the Firebase configuration in your code matches your Firebase project.

## Additional Notes

- The GitHub Actions workflow will build and deploy your application to Firebase Hosting.
- Make sure your Firebase project has the necessary permissions for GitHub Actions to deploy.
- If you encounter any issues with deployment, check the GitHub Actions logs for details.
