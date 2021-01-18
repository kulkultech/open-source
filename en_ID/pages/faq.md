# Frequently Asked Questions

## Virtual Internship

### Do Pull requests need to be merged first to be counted valid?
* Pull requests need to be merge except one in the Step 3.

### How many numbers interns will be received each season?
* We have no strict limit on the number of interns we hire every year as our business is also growing. Everyone can prove they capable to join our internship if he proves able to finish the first steps and pass our interview.

### What are the eligibility requirements for participation?
* Generally, there are no strict requirements. Anyone who early in their software engineering career can join this program as long as can commit a significant amount of time to this internship as we mention in the [Duration and time commitment](internship.md#Duration_and_time_commitment). This internship program is intensive, so a time commitment is very important as this program is running virtually.

### How to Make a PR (Pull Request) ?

The very first thing to do before making a PR is creating a new branch for your PR.

The important point for creating branch is CREATE BRANCH FROM YOUR MASTER BRANCH.

* Open the Terminal
* Go to your project directory
* Check current status.

```
git status
```

[![][branch-image]]

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
[![][branchlist-image]]
* Create PR from the branches that you made commit.
[![][branchpr-image]]

<br />

## Open-source Project

The FAQ is not available yet.

[branch-image]:images/Branch-image.png
[branchlist-image]:images/Branch-list-image.png
[branchpr-image]:images/Branch-pr.png
