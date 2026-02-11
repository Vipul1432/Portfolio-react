# Deployment Guide - React Portfolio

## 🚀 Deployment Options

I'll guide you through deploying to **Vercel** (recommended) with automatic CI/CD. Vercel is perfect for React apps and offers:
- ✅ Free hosting
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ HTTPS by default
- ✅ Fast global CDN

---

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. After signing in, click **"Add New Project"**
2. Click **"Import Git Repository"**
3. Find and select your repository: `Vipul1432/Portfolio-react`
4. Click **"Import"**

### Step 3: Configure Build Settings

Vercel will auto-detect your settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Add Environment Variables

1. Click **"Environment Variables"** section
2. Add your Gemini API key:
   - **Name**: `VITE_GEMINI_API_KEY`
   - **Value**: Your actual API key
   - **Environment**: Production, Preview, Development (select all)
3. Click **"Add"**

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. Once done, you'll get a live URL like: `https://portfolio-react-xxx.vercel.app`

### Step 6: Automatic Deployments (CI/CD)

**Already configured!** Vercel automatically:
- ✅ Deploys every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Rebuilds when you push changes

**To test:**
```bash
# Make a change to your code
git add .
git commit -m "test: Update portfolio"
git push origin main

# Vercel will automatically deploy in 1-2 minutes!
```

### Step 7: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `vipulkumar.dev`)
4. Follow DNS configuration instructions

---

## Option 2: Netlify (Alternative)

### Step 1: Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign Up"** → **"GitHub"**
3. Authorize Netlify

### Step 2: Import Project

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"GitHub"**
3. Select `Vipul1432/Portfolio-react`

### Step 3: Configure Build

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Step 4: Environment Variables

1. Go to **"Site settings"** → **"Environment variables"**
2. Add:
   - **Key**: `VITE_GEMINI_API_KEY`
   - **Value**: Your API key

### Step 5: Deploy

Click **"Deploy site"** and wait for completion.

**Automatic deployments are enabled by default!**

---

## Option 3: GitHub Pages with GitHub Actions

I'll create a GitHub Actions workflow for you that automatically deploys to GitHub Pages.

### Benefits:
- ✅ Completely free
- ✅ Hosted on GitHub
- ✅ Custom domain support
- ✅ Automatic CI/CD

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repo: `https://github.com/Vipul1432/Portfolio-react`
   - Click **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**

2. **The workflow file has been created** (see `.github/workflows/deploy.yml`)

3. **Push the workflow**:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "ci: Add GitHub Pages deployment workflow"
   git push origin main
   ```

4. **Wait for deployment**:
   - Go to **Actions** tab in your repo
   - Watch the deployment progress
   - Once complete, your site will be live at:
     `https://vipul1432.github.io/Portfolio-react/`

5. **Add Environment Secret** (for chatbot):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **"New repository secret"**
   - Name: `VITE_GEMINI_API_KEY`
   - Value: Your Gemini API key
   - Click **"Add secret"**

---

## 🎯 My Recommendation

**Use Vercel** - It's the easiest and most reliable option:

1. ✅ Zero configuration needed
2. ✅ Automatic HTTPS
3. ✅ Instant deployments (30-60 seconds)
4. ✅ Preview deployments for every PR
5. ✅ Built-in analytics
6. ✅ Better performance (global CDN)

---

## 📊 Comparison Table

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| Setup Time | 2 min | 3 min | 5 min |
| Auto Deploy | ✅ Yes | ✅ Yes | ✅ Yes (with Actions) |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto |
| Build Time | Fast | Fast | Medium |
| Environment Variables | ✅ Easy | ✅ Easy | ⚠️ Requires secrets |
| Preview Deployments | ✅ Yes | ✅ Yes | ❌ No |

---

## 🔄 CI/CD Workflow Explanation

Once deployed, your workflow will be:

1. **Make changes locally**
   ```bash
   # Edit your code
   git add .
   git commit -m "feat: Add new feature"
   git push origin main
   ```

2. **Automatic deployment happens**
   - Vercel/Netlify detects the push
   - Runs `npm install`
   - Runs `npm run build`
   - Deploys to production
   - Updates live site (1-2 minutes)

3. **Verify deployment**
   - Check your live URL
   - Changes are live!

---

## 🐛 Troubleshooting

### Build Fails

**Check build logs** in Vercel/Netlify dashboard

Common issues:
- Missing environment variables
- Node version mismatch
- Build command incorrect

**Solution**: Ensure `VITE_GEMINI_API_KEY` is set in environment variables

### Chatbot Not Working

**Cause**: Missing API key in production

**Solution**: Add `VITE_GEMINI_API_KEY` in hosting platform's environment variables

### 404 on Refresh

**Cause**: SPA routing issue

**Solution**: Already handled in `vite.config.js` with proper build settings

---

## ✅ Next Steps

1. Choose your hosting platform (I recommend **Vercel**)
2. Follow the steps above
3. Deploy your portfolio
4. Share your live URL!

Your portfolio will be live at:
- **Vercel**: `https://your-project.vercel.app`
- **Netlify**: `https://your-project.netlify.app`
- **GitHub Pages**: `https://vipul1432.github.io/Portfolio-react/`

---

## 📝 Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Chatbot works (API key configured)
- [ ] Theme toggle works
- [ ] Navigation works
- [ ] Responsive on mobile
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

---

**Need help?** Let me know which platform you choose and I'll guide you through any issues!
