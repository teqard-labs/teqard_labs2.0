#!/bin/bash

# Script to stage changes, commit with user input, pull, and push in a Git repository

# Change to the directory of your Git repository(current)

# Stage all changes
git add .

# Ask the user for a commit message
read -p "Enter a commit message: " commit_message

# Commit with the user-provided message
git commit -m "$commit_message"

# Pull changes from the remote 'main' branch
git pull origin main

# Push changes to the remote 'main' branch
git push origin main

# Print a success message
echo "Changes staged, committed, pulled, and pushed."

