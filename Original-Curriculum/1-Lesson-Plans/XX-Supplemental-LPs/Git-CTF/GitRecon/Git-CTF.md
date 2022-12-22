### Git CTF outline

In general each hint will lose points until the last hint is given. The last hint will contain the answer to finding the flag and players will not get any points for that question.

Students get 5 points for participating, and another 5 points for finishing all the questions.

### Section 1: 5 questions. Multiple Choice - 2 points each.

Use the following resources to find the first 5 flags: 

- https://en.wikipedia.org/wiki/Git

Questions:

- What kind of 'system' is git?
- Who created git?
- What year was git created?
- What license is git distributed under?
- What software was git originally intended to aid the development of?

### Section 2: 6 questions. 5 points each

Use https://guides.github.com/introduction/git-handbook/ to find the next 6 flags.

Specifically Read sections:
- Basic git commands
- ‘The GitHub Flow’ Example: Contribute to an existing repository

Questions:
- What command creates a repository?
- What command clones a repository?
- What is the full command that you would use to clone a repo at this location: https://github.com/coding-boot-camp/back-end.git ?
- Move into the provided /git-ctf/back-end repo. Create a new branch called ‘my-branch’ so you can make changes. What is the command you used?
- Move to your new branch. What command can you use to see what branch you are on?
- Make a change to the README file using nano and save the change. What command do you use to add this file to a 'staging' list?
- Add your changes to the staging area. What command can you use to save the changes to this file in a 'snapshot'?
- What command would you use to sync your changes to GitHub? Be aware that you do not have permissions to make changes to the repo, so you cannot actually run this command successfully.

### Section 3. 4 questions, 5 points each Going deeper

This section should focus on using the help pages to find flags.

- What command can you use to get more info about common Git commands?
- What command flag can you use to see ALL of the branches in this repo?
- What command can you use to view the logs of all commits in this repo?
- Use the log command with the ‘—oneline’ flag. How can we use our command line tools to count how many commits are in this repo? Enter the full command you used.

### Section 4. Finding security issues 6 points each

This section will focus on using the documentation for these three tools.

-  Review https://pypi.org/project/bandit/ - What is the command used to run bandit on a repo?
-  Run the tool bandit inside this repo. How many total issues are marked as ‘HIGH’?
-  Bandit issue B321 shows an FTP related code error. What is the line of code that is a potential problem?
-  Bandit issue B103 show a file permissions issue. What is the line of code that is a potential problem?
-  There are many Bandit issues labeled B605. They each show a command injection issue. For the last B605 issue listed in the output, What is the line of code that is a potential problem?
-  Review https://github.com/dxa4481/truffleHog/blob/dev/README.md - What is the command to install TruffleHog?
-  Run `truffleHog --regex --entropy=False . ` What is the full file path of the private key that was found?
-  Review https://github.com/awslabs/git-secrets - What is the first command listed for scanning a git repo?
-  What git secrets flag will allow you to scan all of the revisions of a git repo?
-  Which git secrets flag adds common AWS patterns to the git config and ensures that keys present in ~/.aws/credentials are not found in any commit?

### Section 5. Investigation

This is the advanced section. 10 points each. We can provide a few hints, with each hint losing points.

- On What date was the RS256 JWT key par committed to the repo?
- What is the git 'Hash' from the commit where the JWT key pair was committed?
- What is the username of the user that committed the JWT key pair to this repo?
- Review this [article](https://git-scm.com/book/en/v2/Git-Tools-Searching). Use grep to search for anything related to 'AWS'. What is the AWS Key found in your search results?
- On what date was the AWS key committed as a comment to the production.py file?
- What is the hash of the commit where the aws key was added as a comment to the repo?

Total: 200 points available.