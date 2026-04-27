# GitHub Pages Deployment Guide

This guide will help you deploy your Kincaid Internet website to GitHub Pages with automatic deployments.

## ✅ Files Created

The following files have been created for GitHub Pages deployment:

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`public/CNAME`** - Custom domain configuration file
3. **`vite.config.ts`** - Updated with base path configuration

## 📋 Deployment Steps

### Step 1: Push Your Code to GitHub

```bash
# Navigate to your project directory
cd "d:\Campaign website\new wwebsites\web 2"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Kincaid Internet website"

# Add the GitHub remote
git remote add origin https://github.com/teletechcommunication/kincaidinternet.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages Settings

1. Go to your GitHub repository: https://github.com/teletechcommunication/kincaidinternet
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions" (already configured ✓)
5. Click **Save**

### Step 3: Configure Custom Domain DNS Settings

To make **kincaidinternet.com** point to GitHub Pages, configure these DNS records with your domain registrar:

#### For Apex Domain (kincaidinternet.com):

Add these **A Records**:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### For WWW Subdomain (www.kincaidinternet.com):

Add a **CNAME Record**:
```
Type: CNAME
Name: www
Value: teletechcommunication.github.io
```

### Step 4: Enable HTTPS (Recommended)

1. In GitHub Pages settings, wait for DNS check to pass (may take 24-48 hours)
2. Once DNS is verified, check the box: **"Enforce HTTPS"**

## 🚀 Automatic Deployment

Once configured, the website will automatically deploy when you:

1. Push changes to the `main` branch
2. Manually trigger the workflow from the Actions tab

### Making Updates:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Your update message"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build your Vite/React application
- Deploy to GitHub Pages
- Update your live website at kincaidinternet.com

## 🔍 Monitoring Deployments

1. Go to the **Actions** tab in your GitHub repository
2. You'll see all deployment runs
3. Click on any run to see detailed logs
4. Each successful deployment will show a green checkmark ✓

## ⚙️ How It Works

The deployment workflow (`.github/workflows/deploy.yml`):
1. Triggers on push to `main` branch
2. Sets up Node.js environment
3. Installs dependencies (`npm ci`)
4. Builds the production bundle (`npm run build`)
5. Uploads the `dist` folder to GitHub Pages
6. Deploys to your custom domain

## 🌐 URLs

- **Production**: https://kincaidinternet.com
- **GitHub Pages URL**: https://teletechcommunication.github.io/kincaidinternet/

## 📝 Notes

- The `CNAME` file in the `public` folder ensures your custom domain is preserved after each deployment
- DNS propagation can take 24-48 hours
- The workflow requires "GitHub Actions" to be selected in Pages settings
- Your repository must have Pages enabled with proper permissions

## ❓ Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Test locally with `npm run build`

### Domain Not Working
- Verify DNS records are correctly configured
- Wait 24-48 hours for DNS propagation
- Check GitHub Pages settings for custom domain status

### Website Shows 404
- Ensure the workflow completed successfully
- Check that `base: '/'` is set in `vite.config.ts`
- Verify CNAME file contains `kincaidinternet.com`

## 🎉 Success!

Your website will be live at **https://kincaidinternet.com** once:
1. GitHub Actions workflow completes
2. DNS records propagate
3. HTTPS is enabled

Happy deploying! 🚀
