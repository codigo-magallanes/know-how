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

Other way to change branches is with:

``` sh
git switch <NEW BRANCH>
```

It a branch with that name does not exist it prompts a message to enable you to create it.