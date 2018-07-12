# project3
## The Problem

Do you feel exhausted after meal planning and grocery shopping? Is your chronic hangry-ness or questions like "what do you want to eat tonight" causing relationship discord? It could be decision fatigue.
 
"Decision fatigue is sapping us of happiness and making us regret the choices we make" - [https://www.fastcompany.com/3031364/why-having-too-many-choices-is-making-you-unhappy](https://www.fastcompany.com/3031364/why-having-too-many-choices-is-making-you-unhappy)

## Proposed Folder Structure
```
project3 "root"
.
├── README.md
├── README.md
├── client
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── components
│       ├── index.css
│       ├── index.js
│       ├── pages
│       └── utils
├── controllers
├── models
├── node_modules [968 entries]
├── package.json
├── routes
├── scripts
├── server.js
└── yarn.lock

```

## Proposed Branching/Git Procedure
We are building under the "shared repository model" (yes, I just learned that). It is best not "fork" to your personal repo until after the project is over (there is a fork and pull model, but this caused a lot of confusion during our last project). The shared repository model uses branching and pull Requests (found on our github.com repo page).

"With a shared repository, individuals and teams are explicitly designated as contributors with read, write, or administrator access. This simple permission structure, combined with features like protected branches and Marketplace, helps teams progress quickly when they adopt GitHub." - [git handbook](https://guides.github.com/introduction/git-handbook/)

Master is a protected branch. This means we need at least 1 approval before we merge into our master branch. (Purpose: having the master branch protected helps so we know for sure what is going into master, and no one can accidentally push code to it and break the app)

We will try working off of the "develop" branch. Develop will be merged into master twice a day or as needed.

1. Start on a clean branch

  1.1 Check which branch you're on by typing `git branch` in CLI.

  1.2 Start on develop branch, `git checkout develop`. 

  1.3 Do a `git pull` to get the latest copy of develop

  1.4 Create your new branch to code your story, `git checkout -b <branchname>` (Title your branch name the title of the story you're working on, replace story spaces with -)

  1.5 Now you're on your own branch. Type `git branch` to see you're on your new branch.

  1.6 Now write your code.
  
  1.7 IF YOU NEED TO UPDATE BRANCH WITH CHANGES MADE TO `develop` branch
  
	1.7.1 Check current branch typing `git branch`.
  	
  	1.7.2 Merge develop into branch by typing `git merge develop` . If changes have been made in the develop branch, but the changes do not conflict with the changes in current branch then the develop branch should merge automatically. If there are conflicts, resolve the conflict in VS Code and commit changes.

2. You're done writing code, time to add your files and commit message to your branch

  2.1 (Optional - we can discuss if we want to use this) *Once you're code is done for the story you're working on, run `npm run -s eslint .` to see if any linting errors/warnings. fix anything that is outstanding. next we will add your changes to your branch and commit them.*

  2.2 Type `git status` to see the status of the files you've worked on. (these should be red, because you havent added them yet)

  2.3 To add these files, do a `git add .` to add all files.

  2.4 Type `git status` again, you will now see the files are green, which indicates they have been added to your branch.

  2.5 Now make your commit message that says specifically what code you changed in this story. `git commit -m "your commit message here"`

3. You're ready to push your branch up to github.

  3.1 Next, push your code up to the repository, with a `git push origin <branchname>`

  3.2 Once your branch is pushed up, navigate to our repo, and you can see branch under "Your recently pushed branches:". Click on Compare & pull request.

  3.3 Choose the base branch `development` as that will be the branch you merge your branch into. (the development branch will be merged into master twice a day, at 11am and 11pm)

  3.4 On the right hand side, add reviewers to review your pull request. A reviewer must review each pull request before it will be merged into master. Then click "Create Pull Request"

  3.5 Once your pull request is approved and merged, it will be built out into production during the next build to production. (11am and 11pm is when builds to prod happen)