# Build and Deploy - Github

## To upload your website to netlify, you need to have your code push it to the github repo

### You need to add "devDependencies" to the package

### You have to install github pages in the dev in order to use github pages

- npm install gh-pages -D
- gh stands for github
- -D stands for dev

### We also need to add Homepage just below version

- "homepage": "https://gitkassupto007.github.io/react_deploy_gh"

### You also need to write some script inside scripts key in package.json

- "predeploy": "npm run build",
- "deploy": "gh-pages -d build"
