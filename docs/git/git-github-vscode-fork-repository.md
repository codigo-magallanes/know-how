## git + GitHub + VS Code: Fork a repository

This makes a copy of a public repository in your account.

You can then modify it and update it as a _separate branch_ of the original repository.

A short description of the steps to do so is:

 + Fork the repo (from the GitHub website)
 + Clone the repo to your computer
 + Make changes to the files in your computer
 + _Stage Changes_ and _Commit_
 + Connect local repo to remote repo
 + Push new code to your repo

After this, the owner of the original repo can check on the __Pull request__ and accept it or remove it.

### New Fork

This creates a _copy_ of the repository in your github account.

 + Being logged to your account, go to the original repository github's page.
 + Click on the __Fork__ option (top-right corner)

### Clone the new repo

Now we need to clone the new repo, so we can work with it in our PC.

After clicking the __Fork__ button we are redirected to the new repo in our account. This is the repo we want to '_clone_':

 - Click the '__Code__' button, select the _SSH_ tab and copy the code.
 - Open a terminal in the directory where you want to copy the repo.
 - Execute the command:

 

``` sh
 git clone <CODE COPIED FROM GITHUBS PAGE>
 ```

 You can check everything is OK with:

 

``` sh
 cd <REPOS DIRECTORY>
 git remote -v
 ```

 This command will output the origin address to your repo for _fetches_ and _pushes_
 

``` sh
 //output
 origin git@github.com:<USER>/<REPO>.git (fetch)
 origin git@github.com:<USER>/<REPO>.git (push)
```

### Decide the branch you will be working with

When I create a new project in my computer '_git_' still creates the __master__ branch as default. GitHub has decided to change the default branch to __main__ so, in case we want to change from _master_ to _main_ branches from the terminal we do:

``` sh
// to check the actual branch
git branch
// to change branch to master
git checkout master
// output if exists -> Already on 'master'. Your branch is up-to-date with ...
// output if it does not match to our branch -> error: pathspec 'master' did not match any file....
git checkout -b main
```


The parameter '-b' creates the branch if it did not exist.

### Connect your local repo to the remote repo

 1. In the original repos page, copy the code for _clonning_ the repo
 1. Back in the terminal, inside the repo's directory add the original as remote repo. You can use any name. _upstream_ is used by default:
 
    ``` sh
    git remote add upstream <CODE COPIED FROM ORIGINAL REPO>
    ```

 1. Check new configuration again with `` `git remote -v` ``

 1. Enable the fork to listen for changes in the main repo (use the name given before)

    ``` sh
    git fetch upstream

    // output (approx.)
    .
    ..
    ...
    From github.com:<ORIGINAL REPO>
    * [new branch]     main    ->  upstream/main
    ```

 1. Merge any changes from the original repo to the project clone in my PC, accordingly to the info above, with: 

    ``` sh
    git merge upstream/main
    ```

 Now the files in my PC are updated with the new changes from the original repo.

 In VS Code there is a new notification of a _commit_ pendant to be uploaded to my repo.
 I click the button to __Synchronize Changes__, and now the original repo, the fork in my account and the clone in my PC are all _synchronized_.

### Upload my changes to the original repo

After making some changes in the PC files click in the '__Synchronize Changes__' icon in VS Code. This will upload the changes to the '_Fork_' in our repository.

Since our repo is connected to the original repo,  the updated changes appear in the original repo as a __Pull Request__.

### Accepting the Pull Request

New _requests_ will show up in the _main repo_, for the owner to approve. They appear in the __Pull requests__ tab.
Once in the _Pull request_ page the owner can merge changes clicking in the button '__Merge pull request__'. Then he can change the 'commit' and update the repo.

### Resources

- [GitHub Docs: fork a repo](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
- [GitHub Docs: synchronize fork](https://docs.github.com/es/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
 - [Digital Ocean: fork, clone, make changes and push to GitHub](https://www.digitalocean.com/community/tutorials/fork-clone-make-changes-push-to-github)