
  # Band Page for Raagnova
`git checkout main`
`npm run build`
`cp -r dist ~/dist-temp`
`git checkout gh-pages`
`rm -rf *`
`cp -r ~/dist-temp/* .`
`git add .`
`git commit -m "Deploy build"`
`git push origin gh-pages --force`
`git checkout main`