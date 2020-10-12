## Fork a repository

This makes a copy of a public repository in your account.

You can then modify it and update it in a separate _branch_ of the original repository.

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

### Sync your _Fork_ whith the original repo

 - In the original repos page, copy the code for _clonning_ the repo
 - Back in the terminal, inside the repo's directory execute:

 

``` sh
git remote add upstream <CODE COPIED FROM ORIGINAL REPO>
 ```

 - Check new configuration again with `` `git remote -v` ``

Now I can also look for updates in the original repo to set them to _syncronize_ with the files in my PC clone:

``` sh
 git fetch upstream

 // output (approx.)
 .
 ..
 ...
 From github.com:<ORIGINAL REPO>
 * [new branch]     main    ->  upstream/main
 ```

 Then I merge the original repo to the project clone in my PC, acconrdingly to the info above, with: 

``` sh
 git merge upstream/main
 ```

 Now the files in my PC are updated with the new changes from the original repo.

 In VS Code there is a new notification of a _commit_ pendant to be uploaded to my repo.
 I click the button to __Synchronize Changes__, and now the original repo, the fork in my account and the clone in my PC are all _synchronized_.

### Upload my changes to the original repo

After making some changes in the PC files click in the '__Synchronize Changes__' icon in VS Code. This will upload the changes to the '_Fork_' in our repository.

From the updated repo I can make a __Pull Request__.

### Accepting the Pull Request

New _requests_ will show up in the _main repo_, for the owner to approve. They appear in the __Pull requests__ tab.
Once in the _Pull request_ page the owner can merge changes clicking in the button '__Merge pull request__'. Then he can change the 'commit' and update the repo.

### Resources

- [GitHub Docs: fork a repo](https://docs.github.com/es/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
- [GitHub Docs: synchronize fork](https://docs.github.com/es/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
