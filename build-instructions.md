# GitHub Pages Deployment Instructions

## Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `haas-resume-website` or `personal-portfolio`
3. Make sure it's public (required for free GitHub Pages)

### Step 2: Upload Your Code
From your Replit project, run these commands in the Shell:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Personal resume website for Haas"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 4: Access Your Website
After deployment completes (usually 2-5 minutes), your website will be available at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Manual Build (Alternative Method)

If you prefer to build manually:

```bash
# Build the static site
npx vite build

# The built files will be in dist/public/
# Upload contents of dist/public/ to a gh-pages branch
```

## Troubleshooting

### Common Issues:
1. **Assets not loading**: Make sure your repository name matches the base URL
2. **404 errors**: Ensure GitHub Pages is enabled and source is set to "GitHub Actions"
3. **Build failures**: Check the Actions tab in your GitHub repository for error logs

### Build Configuration:
- The project builds to `dist/public/` directory
- All assets are properly configured with relative paths
- The GitHub Action automatically handles the deployment process

Your resume website will be live and accessible to anyone with the GitHub Pages URL!