/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a tool that helps developers track and manage the changes made to files over time. It provides a way to keep a historical record of modifications, allowing users to revert to previous versions, compare changes, and merge different branches of development."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub is a web-based hosting service and collaboration platform built on top of Git. It provides a centralized location where developers can store and manage their Git repositories.'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = `The command "git init" is a Git command used to initialize a new Git repository in a directory. When executed in a directory, it sets up all the necessary files and directories needed for version control using Git.

By running "git init," you essentially tell Git to start tracking changes to files within that directory and its subdirectories. It creates a hidden directory named ".git" at the root of the project, which contains the repository's metadata and configuration.`
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = `The "git clone" command is used in Git to create a local copy of a remote repository. It allows you to retrieve the entire contents of a remote repository, including all the files, commit history, and branches, and create a local copy that you can work with on your own machine.

When you run the "git clone" command, you specify the URL of the remote repository you want to clone. Git then fetches the repository's data and creates a new directory on your local machine with the same name as the remote repository. Inside this directory, Git sets up a complete copy of the remote repository, including all its files and commit history.`
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = `The "git status" command is used in Git to display the current state of your local repository. It provides information about which files have been modified, added, or deleted since the last commit, and also shows the status of branches and other relevant information.

When you run the "git status" command, Git examines the state of your repository and provides a summary of the changes and the status of files. This information is helpful for understanding the status of your work, determining which files are staged for the next commit, and identifying any untracked or ignored files.`
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition=`The "git add" command is used in Git to stage changes and add files to the staging area in preparation for a commit. It allows you to selectively choose which changes or files you want to include in the next commit.

When you make changes to files in your working directory, Git recognizes these modifications as "unstaged changes." The "git add" command enables you to select specific files or changes and move them to the staging area, also known as the "index."`
let gitAddCode=`git add .`
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition= `The "git commit" command is used in Git to create a new commit, which permanently records changes to the repository's history. It allows you to save the changes you have staged in the staging area and create a new snapshot of the project at that specific point in time.

When you run the "git commit" command, you provide a commit message that describes the changes made in the commit. This message serves as a concise summary of the modifications and helps in understanding the purpose or intent behind the commit.`
let gitCommitCode=`git commit -m "initial commit"`

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/
let gitPushDefinition = `The "git push" command is used in Git to upload local commits to a remote repository. It allows you to send your local changes, including new commits and branch updates, to a designated remote repository, enabling collaboration and synchronization with other developers.

When you run the "git push" command, Git compares the commits in your local branch with the corresponding branch in the remote repository. It transfers the necessary commits and updates the remote branch, ensuring that both repositories are in sync.`
//CODE HERE