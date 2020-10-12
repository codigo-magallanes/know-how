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
