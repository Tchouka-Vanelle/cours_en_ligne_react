#!/bin/bash

# Install dependencies
npm install

# Build the site
npm run build

# Move the built files to a new directory
mkdir deploy
cp -r public/* deploy

# Create a new branch named "gh-pages"
git checkout -B gh-pages

# Remove all existing files
git rm -rf .

# Move the built files from the "deploy" directory to the root of the repository
mv deploy/* .

# Commit the changes
git add .
git commit -a -m "Deploy to GitHub Pages"

# Push the changes to the "gh-pages" branch
git push --set-upstream origin gh-pages --force

# Switch back to the "master" branch
git checkout master

# Remove the "deploy" directory
rm -rf deploy
