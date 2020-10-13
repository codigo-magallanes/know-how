## Git

### Install git in your PC

To install git in _Debian_ or _Ubuntu_, from a terminal execute:

```sh
sudo apt-get install git
```

### Basic Config

Then we need to sign in to an account. This will attach a github account to the commits made in the PC.

```sh
 git config --global user.name <USER NAME>
 git config --global user.email <USER EMAIL>
```

To check the changes

```sh
git config --list
```

If we want to change one of the options:

```sh
git config --global --unset user.email
// or
git config --unset user.email
```

### New project

To create a new project, with the terminal, from the same _directory_ of the project execute:

```sh
git init
```

Now you can set specific configurations for this repo with:

```sh
 git config user.name <USER NAME>
 git config user.email <USER EMAIL>
```

And to check the project:

```sh
git status
```

### Select the default branch

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

 Also be aware that the _checkout_ command is also used to undo a _Stage Change_

### Update files from repo

To update the files from the repo:

``` sh
git pull
```
### Comprueba los cambios en el código

 Para comprobar que cambios se han hecho en el código se ejecuta:

 ``` sh
 git status
 ```

  If changes have been made the ouput will be something like:

  ``` sh
  $ git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   docs/git/README.md
	modified:   docs/git/git-github-vscode-fork-repository.md
	modified:   docs/git/git-manage-project.md
	deleted:    docs/git/git-vscode-manage-fork-repo.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	docs/git/git-github-vscode-manage-fork-repo.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Here we see modified files and one new file _(Untracked files: doc/git/git-github-vscode-manage-fork-repo.md)
### Stage Changes

 
### Upload files to repo

To upload new code to the repo:

```sh
git push
```

### Resources

- [Git commands from Linux Terminal](https://www.unixmen.com/use-git-commands-linux-terminal/)