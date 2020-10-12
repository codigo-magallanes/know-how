# git
## git + GitHub + VS Code
### log user

### GitHub website

#### Create a new project

In the [git-hub](https://github.com) website we create a _new project_. Once created we copy the _URL_ to the project.

### PC Terminal

#### Initialyze project in PC

First we need the _git_ package installed in our computer:

```
sudo apt-get install git
```

In the directory of the project we open a terminal and execute:

```
git init
```

This will create the necessary files to the project

#### Link projects

To link the _GitHub_ project with the project in our PC we have to execute. again from a terminal in the project directory, the command ```remote add``` with the _GitHub project URL_:

```
git remote add origin https://github.com/codigo-magallanes/_project_
```

#### Check everything is OK
```
git status
```

### VS Code

#### Open project

_Right-click_ on the directory and check on _Open with another application_. Now select VS Code from the list.

#### Change master branch to main

__GitHub__ has recently moved their default _project branch_ from __master__ to __main__ to avoid racist language, but at the momment the git package still uses __master__ as the default branch on our projects.
Therefore we need to adjust this.

Once the project directory is opened with VS Code we can see on the left of the status bar the branch of the project we are registered to. If it is _master_ we click on it and a config pop up will appear.

 Click on the _main branch_ from the configuration menu. If it is not available close the window and try again.

#### Get the files created in by the website

When created the project in _GitHub_ some files can be created:
 - .gitignore
 - README.md
 - LICENSE

We need to download them to our directory.

With VS Code we can simply click in the _Synchronize Icon_ next to the branch name.

#### Upload the project

On the left of VS Code, there is a _menu bar_ with some Icons. Click on the '_Source Control_' button. Now you can see the files that need to be uploaded. Click on the __+__ icon of any file you want to _commit_ and _Stage the changes_. These files are now ready to be _commited_.

On the input above the _staged files_ names write the message you want to add to the _commit_ and then click on the __check icon__. 

### Synchronize changes from VS Code
 - Stage Changes of Files
 - Add Commit to those files and add them to the queue
 - Repeat for every single or group of files that were modified
 - Synchronize
