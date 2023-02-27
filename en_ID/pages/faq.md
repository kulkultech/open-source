# Frequently Asked Questions

## Virtual Internship
---
**Q: Do I need a letter of submission from the campus to join this internship?**  
A: No need. Follow the first steps, and we'll process your internship application.

**Q: Which college student from major can join this internship?**  
A: Generally, no requirement, anyone in the world who just started their software engineering career can join. We have interns ranging from college student to career switcher (have years of experience but move to software engineering).


**Q: How many numbers interns will be received each season?**  
A: We have no strict limit on the number of interns we hire every year as our business is also growing. Everyone can prove they capable to join our internship if he proves able to finish the first steps and pass our interview.

**Q: What are the eligibility requirements for participation?**  
A: Generally, there are no strict requirements. Anyone who early in their software engineering career can join this program as long as can commit a significant amount of time to this internship as we mention in the [Duration and time commitment](internship.md#Duration_and_time_commitment). This internship program is intensive, so a time commitment is very important as this program is running virtually.

**Q: Do my PR (Pull Requests) need to be merged first to be counted valid?**  
A: Pull requests need to be merge except one in the Step 3.

**Q: How to Make a PR (Pull Request) ?**  

The very first thing to do before making a PR is creating a new branch for your PR.

The important point for creating branch is CREATE BRANCH FROM YOUR MASTER BRANCH.

* Open the Terminal
* Go to your project directory
* Check current status.

```
git status
```
<img src=images/Branch-image.png alt class="img-responsive img-thumbnail"/>

* Be sure to be on the master Branch of your project.
* Then create a new branch from master branch.

```
git checkout -b [your branch dir/your branch name]
```
* This command will create a new branch and bring you to this branch.
* Then do your changes on project.
* Check status.

```
git status
``` 
* You should see your changes.
* Add this changes.

```
git add .
```
* Commit your changes on your local repo. Always write comment on your commits.

```
git commit -m "[your message]"
```

* Commit your changes to remote repo (at Github.com).

```
git push origin [your branch dir/your branch name]

``` 
* As you are using SSH (made on [Step 2](https://open-source.kulkul.tech/en_ID/#!pages/internship.md#Step_2_-_Learn_how_to_use_SSH), this step may ask you your pass (in case you defined))
* Then you can check github page and see your changes pushed on the server.
* Github automatically ask you if you want to create PR with your changes.
* If you cant see automatic PR from github;
* Click branch drop down list

<img src=images/Branch-list-image.png alt class="img-responsive img-thumbnail"/>

* Create PR from the branches that you made commit.

<img src=images/Branch-pr.png alt class="img-responsive img-thumbnail"/>

<br/>
<br>

## Github
---
You can understand all about Github by read and following below :

**Q: What is Github ?**  
A: [Hello World - Github Guides](https://guides.github.com/activities/hello-world/#what)

**Q: How to use Github?**  
A: [source 1](https://guides.github.com/activities/hello-world/)

**Q: What is PR (Pull Request)?**  
A: [About pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

**Q: How to create pull requests?**  
A: see this articles below:
- [Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request), 
- [How to create a pull request](https://opensource.com/article/19/7/create-pull-request-github)


**Q: What is merge pull request?**  
A: see this articles below:
- [Merging a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)
- [Merge your pull request](https://guides.github.com/activities/hello-world/#merge)

**Q: What is issue?**  
A: [Mastering issue](https://guides.github.com/features/issues/#:~:text=Issues%20are%20a%20great%20way,own%20section%20in%20every%20repository)

**Q: How to create an issue?**  
A: [Creating an issue](https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue)


**Q: What is branches?**  
A: [About branches](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches)

**Q: How to create a branch?**  
A: [How to Create a Branch](https://guides.github.com/activities/hello-world/#branch)

**Q: What is commit and how to make commit?**  
A: [Make and commit changes](https://guides.github.com/activities/hello-world/#commit)

**Q: How to commit changes to a PR branch created from a fork?**  
A: [See here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)

**Q: What is fork?**  
A: [About forks](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/about-forks)

**Q: How to fork a repository?**  
A: [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

**Q: How to attach file in github?**  
A: [About Github File Attachments](https://docs.github.com/en/github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests)

### **Explanations Video About Github**
    
If you still not completely understand about github and need more explanations, you can watch the video following video below :
    
- [Github Explanation Video in English](https://www.youtube.com/watch?v=RGOj5yH7evk)
    
- [Github Explanation Video in Bahasa Indonesia](https://www.youtube.com/watch?v=lTMZxWMjXQU&list=PLFIM0718LjIVknj6sgsSceMqlq242-jNf)
    

## Markdown
---
**Q: What is Markdown and why use Markdown ?**  
A: [Click here](https://www.markdownguide.org/getting-started/)

**Q: How to use Markdown ?**  
A: [Click here](https://www.markdowntutorial.com/)

**Q: The difference about Markdown vs HTML ?**  
A: [Markdown vs HTML](https://www.thebrain.com/blog/markdown-vs-html)

**Q: Markdown live preview ?**  
A: [markdownlivepreview](https://markdownlivepreview.com/)

**Q: Markdown basic syntax you must know**  
A: [basic syntax](https://www.markdownguide.org/basic-syntax/)

**Q:Need markdown lesson or tutorial ?**  
A: [markdown tutorial](https://commonmark.org/help/tutorial/)


### **Explanation Video About Markdown**
    
   If you still not completely understand about markdown and need more explanations, you can watch the following video below :
   
- [Markdown Explanation Video in English](https://www.youtube.com/watch?v=eJojC3lSkwg)
    
- [Markdown Explanation Video in Bahasa Indonesia](https://www.youtube.com/watch?v=5fgOUT4idvU)


## Add SSH for windows

To configure your GitHub account to use your new (or existing) SSH key, you'll also need to add it to your GitHub account.

### Generating a new SSH

* Open Git Bash.

```
$ ssh-keygen -t ed25519 -C "your_email@example.com"

Note: If you are using a legacy system that doesn't support the Ed25519 algoritma, use:

$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

* When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

```
> Enter a file in which to save the key (/c/Users/you/.ssh/id_ed25519):[Press enter]
```

* At the prompt, type a secure passphrase.

```
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

### Adding your SSH key to the ssh-agent

* Ensure the ssh-agent is running. Start it manually:

```
$ eval `ssh-agent -s`
> Agent pid 59566
```

* Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.

```
$ ssh-add ~/.ssh/id_ed25519
```

### Add the SSH key to your GitHub account

* Copy the SSH public key to your clipboard.

```
$ clip < ~/.ssh/id_ed25519.pub

Tip: If clip isn't working, you can locate the hidden .ssh folder, open the file in your favorite text editor, and copy it to your clipboard.
```

* In the upper-right corner of any page, click your profile photo, then click Settings.

* In the user settings sidebar, click SSH and GPG keys.

* Click New SSH key or Add SSH key.

* In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal Windows, you might call this key "Personal Windows".

* Paste your key into the "Key" field.

* Click Add SSH key.

* If prompted, confirm your GitHub password.

## Add new SSH key for Linux

To configure your GitHub account to use your new (or existing) SSH key, you'll also need to add it to your GitHub account.

### Generating a new SSH key

* Open Terminal.
* Paste the text below, substituting in your GitHub email address.

```
$ ssh-keygen -t ed25519 -C "your_email@example.com"

**Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:**

$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

This creates a new ssh key, using the provided email as a label.

```
> Generating public/private ed25519 key pair.
```

* When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

```
> Enter a file in which to save the key (/home/you/.ssh/id_ed25519): [Press enter]
```

* At the prompt, type a secure passphrase.

```
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

### Adding your SSH key to the ssh-agent
1. Start the ssh-agent in the background.
```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```
2. Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.
```
$ ssh-add ~/.ssh/id_ed25519
```

### Add the SSH key to your GitHub account.
1. Copy the SSH public key to your clipboard. If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

```
$ sudo apt-get update
$ sudo apt-get install xclip
# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)


$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
#Copies the contents of the id_ed25519.pub file to your clipboard
```

**Note: If xclip isn't working, you can locate the hidden .ssh folder, open the file in your favorite text editor, and copy it to your clipboard.**

2. In the upper-right corner of any page, click your profile photo, then click **Settings**.
3. In the user settings sidebar, click **SSH and GPG keys**.
4. Click **New SSH key** or **Add SSH key**.
5. In the "Title" field, add a descriptive label for the new key.
6. Paste your key into the "Key" field.
7. Click **Add SSH key**.
8. If prompted, confirm your GitHub password.

## Open-source Project

The FAQ is not available yet.


<br/>
<button onclick="goToTop()" id="goToTopBtn" style="border:none; background:none; padding:0; color:blue;">**↑ Back to Top**</button>
