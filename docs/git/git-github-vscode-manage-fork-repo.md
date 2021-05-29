## Git + GitHub + VS Code: Manage a Forked Repo

Once we fork a repo we have to be aware of what our actions are causing.

### Pendant updates from the main repo

This has been updated in [github](https://github.com):

<!--  We need to be aware if there have been changes in the _original repo_ that could compromise our new code.

  + Check in the _fork_ for __Pull requests__
  + Click on the __Pull request__ link
  + __switch the base__ to compare updated files from _original repo_
  + Check that it is __able to merge__
  + __Create pull request__
  + Add a comment
  + __Merge pull request__
  + __Confirm merge__

  Last we need to _Syncronize Changes__ in the local repo in the PC. -->

  #### Check for updates

  Under the line containing the _branches_, look for a line like:

  ```
  This branch is 5 commits behind <main project name:branch>
  ```

  If you see the line click in **Fetch upstream**.

  Now you can check the changes clicling **Compare**.

  Or you can agree to the changes with **Fetch and merge**.

### Making changes in your PC and updating our repo

 Before making any changes in our local repo we have to decide if we need to update our project from the _original repo_.

  + Make the changes in our PC files
  + _Stage Changes_ and _Commit_
  + _Synchronize Changes_

  Our _fork_ is now updated with the changes from our PC.

 ## Create Pull request to the main repo

 Now we can offer the owner of the project to update his repo with our code.

  + In our repo, _the fork_ we click in __Pull request__
  + Check if _GitHub_ confirms it is __able to merge__ the _request_
  + Click on __Create pull request__
  + Make comments you need to explain the new code and click on __Create pull request__
  
 ## Accept changes (Owner of the main Repo)

 In the _original repo_ the owner can see now our __Pull request__

  + Open the __Pull request__ clicking on its link
  + Check there are no conflicts with the base branch
  + __Merge pull request__
  + __Confirm merge__

 ## Update original repo files (Repo owners PC)

  + Open project folder with VS Code
  + Click on __Synchronize Changes__

 ## Changes from original repo (Owner PC)

  + Make changes to your code
  + __Stage Changes__ and __Commit__
  + __Synchronize Changes__
