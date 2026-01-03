

# Deployment Instructions

This guide explains how to deploy your project to the `gh-pages` branch.

## Steps

### 1. Build the project

```bash
git checkout main
npm run build
```

### 2. Temporarily store the build output

```bash
cp -r dist ~/dist-temp
```

### 3. Switch to the `gh-pages` branch

```bash
git checkout gh-pages
```

### 4. Clean the branch and copy the build files

```bash
rm -rf *
cp -r ~/dist-temp/* .
```

### 5. Commit and push the changes

```bash
git add .
git commit -m "Deploy build"
git push origin gh-pages --force
```

### 6. Return to the main branch

```bash
git checkout main
```

## Final Code

```bash
git checkout main
npm run build
cp -r dist ~/dist-temp
git checkout gh-pages
rm -rf *
cp -r ~/dist-temp/* .
git add .
git commit -m "Deploy build"
git push origin gh-pages --force
git checkout main
```