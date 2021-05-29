## git + GitHub + VS Code

### Create a new project

- Open the folder containing the code you want to upload to a repo in [GitHub](https://github.com)
- Click on the button **Source Control** on the left.
- Click in the option to _create a new repo_.
- **Stage All Changes** and **commit** the changes writing a message
- Click the '_Check Icon_'
- If you are in the _master branch_ (look in the status bar) you can click on it to change it to '_main_'.
- Click the icon on the _status bar_ with a cloud and an arrow.

A message prompts up asking form permit for the '_GitHub extension_' to login to [GitHub](https://github.com). The config bar opens also with a name for the project?.

Once accepted a broser window opens asking for permission to connect to [GitHub](https://github.com)

In my case, the project was uploaded to the _master branch_ in _GitHub_.

#### Change master branch to main

**GitHub** has recently moved their default _project branch_ from **master** to **main** to avoid racist language, but at the momment the git package still uses **master** as the default branch on our projects.
Therefore we need to adjust this.

One easy way to do this with VS Code is selecting the options menu and clicking in '_Branch/Rename Branch_'. Now we change the name to **main**.

Once the project directory is opened with VS Code we can see on the left of the status bar the branch of the project we are registered to. If it is _master_ we click on it and a config pop up will appear.

Click on the _main branch_ from the configuration menu. If it is not available close the window and try again.

### Clone existing project

 - Open VS Code
 - Click on **Source Control** on the left
 - Click on **Clone**
 - Click **Clone from GitHub**
 - Select where you want to download de project.
 - Open the project with VS Code

### Open project from PC

_Right-click_ on the directory and check on _Open with another application_. Now select VS Code from the list.


### Update files from GitHub to your local repo

When VS Code detects files updated in the __GitHub repo__ it prompts an _icon_ next to each updated file (a blue arrow pointing down)

We can simply click in the _Synchronize Changes_ icon next to the branch name in the _status bar_.

### Upload the project

On the left of VS Code, there is a _menu bar_ with some Icons. Click on the '_Source Control_' button. Now you can see the files that need to be uploaded. Click on the **+** icon of any file you want to _commit_ and _Stage the changes_. These files are now ready to be _commited_.

On the input above the _staged files_ names write the message you want to add to the _commit_ and then click on the **check icon**.

### Synchronize changes from VS Code

- Stage Changes of Files
- Add Commit to those files and add them to the queue
- Repeat for every single or group of files that were modified
- Synchronize
