## 4.2 Lesson Plan: Linux Access Controls

### Class Overview

In today's class, we will continue our introduction to Linux by covering one of the operating system's most important functions: access control. Students will complete a sequence of tasks that will expose them to many of the most fundamental aspects of Linux security: password strength, careful control of the `sudo` command, and file permissions.

The skills and tools covered today will be essential for various professional roles, from systems administration to penetration testing.

### Class Objectives

By the end of class today, students will be able to:

- Audit passwords using `john`.

- Elevate privileges with `sudo` and `su`.

- Create and manage users and groups.


### Instructor Notes

- If any students missed the first day of this unit's class, they should run the following two scripts to add the files and applications that we worked on last class. 

- Be prepared to conduct activities as `root` or run `sudo` prior to demonstrations and activities. There may be instances requiring `sudo` that aren't called out in the instructions.

- :warning: **Heads Up**: During the break, run the following commands to set up the Users and Groups section. 

  - `sudo adduser mike`
  - `sudo addgroup general`
  - `sudo usermod -aG general mike`


### Lab Environment

You will use your local Vagrant virtual machine for today's activities. Please note that instructors and students have different access credentials.

- Instructor access:
  - Username: `instructor`
  - Password: `instructor`
  
- Student access:
  - Username:`sysadmin`
  - Password: `cybersecurity`


### Slideshow

The slides for today are available on Google Drive here: [4.2 Slides](https://docs.google.com/presentation/d/1em6mxWkllhl0wPNAuG-v16Hz2ch2jf6qh8SdRbeJdA0)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker for today's lesson is available on Google Drive here: [4.2 Time Tracker](https://docs.google.com/spreadsheets/d/1OjjRuTsG-JJC02HyInFAPeXNpr0MrJeAK0IrkYf_6OI/edit#gid=1145703143)

### Student Guide

Distribute the student-facing version of the lesson plan: [4.2 Student Guide](StudentGuide.md)

---

### 01. Instructor Do: Welcome and Review (0:05)

Welcome students to class and recap the topics of the previous class:

- History and distributions of Linux.

- Navigating the Linux file structure using the command line.

- Managing processes with commands like `top`, `ps`, and `kill`.

- Installing packages using `apt`.


Let students know that today's class is focused on Linux's access control functions: passwords, file permissions, groups, and `sudo` access.

Explain that **access control** refers to regulating what actions users and programs are and are not allowed to take on a system.

Mention that today will focus on users and the last day of the unit will focus on programs.

Inform students that today's class will expound on Day 1 topics by covering:

- Passwords and password cracking.
- Switching between users with `su`.
- Elevating privileges with `sudo`.
- File permissions and access controls.
- Managing users and groups.

 Take a moment to address remaining questions before proceeding.

 ### 02. Instructor Do: Users and Passwords (0:20)

Remind students that their activities throughout the week involve auditing a malfunctioning server. Note the following:

- In the previous class, we reviewed some important files, stopped a malicious process, and installed tools to facilitate the audit.

- Today, we will address user access, starting with user passwords.

- In the previous class, we examined the `/etc/shadow` file. This file contains hashes of every user's password on the system.

- The passwords are obfuscated with a hashing function, which means they are not stored in plain text.

#### A Brief Introduction to Hashes and Password Cracking

Mention that we have a whole unit later in the program dedicated to cryptography where will cover hashing in depth, so for now we will only cover a few basics. Explain the following about hashes:

- A hash is a cryptographic function that takes data as input and translates it to a string of different data that seems random.

- A hash will always output the same string for the same input data. So when a password is entered into the system, the system hashes it in the same way each time.

    - The same password will always produce the exact same hash.

- This hash is stored in the shadow file. When a user logs back in with the same password, the hash of the password they entered is compared with the hash stored for that user in the `/etc/shadow` file. If it matches, the user is logged in. If the hash doesn't match, the user is not logged in.

Cover the following about password cracking tools:

- Password cracking tools do not reverse a password hash, but instead take a list of words and characters, and create a hash for each one.

- Each hash is then compared to the hash it is trying to crack and if the two hashes match, the password has been found.

- This form of password cracking is an example of a **brute force attack**.

- This is why the best passwords are long, with lots of random characters. The more random the password and the more characters it has, the longer it will take a cracking program to find a hash that matches it.

:question: **Ask class**: What makes a stronger password, its complexity or its length?

- **Answer**: Length and complexity work together to make a password strong.

  - However, when it comes to brute force attacks, password length has more impact on the time it takes to crack it.

:question:  **Ask class**: What is the current industry-standard length for a password?


After calling on a few students, explain the following:

  - Currently, the industry standard for password length is eight characters.

  - We will soon find out that eight is only a minimum. It can still be cracked, though it takes some patience.

Navigate to [howsecureismypassword.net](https://howsecureismypassword.net/).

To demonstrate the importance of length, repeat the same character in one long string.

- Enter `jjjjjjjj` (eight j's). Mention that eight characters crack instantly.

- Enter `jjjjjjjjjjjj` (twelve j's). Twelve characters will take four weeks to crack.

- Enter `jjjjjjjjjjjjjjjj` (sixteen j's). This password takes 35 thousand years to crack.

- Enter `b4Ei@2!` (seven random characters). This password only takes seven minutes to crack.

- Enter `Jng0i$7w` (eight random characters). This password takes nine hours to crack.

- Enter `534Yc8@CmF` (ten random characters). This password takes 6 years to crack.

- Enter `*%uDiH2^T2n4` (twelve random characters). This password takes 34 thousand years to crack.

Explain the takeaway of this section:

- If a system requires sixteen characters and nothing else, the password will remain relatively strong, even if words are embedded.

- Add in a few extra characters and it will get exponentially more secure.
- In contrast, if you use all random characters, you _still_ have to make the password at least 10 characters long for it to be very effective.

#### Cracking Passwords

- Explain that we just saw how and why passwords are hashed and stored.

- Modern password cracking software works using the following steps:
  - Takes a list of hashes as input.
  - Starts by hashing passwords from a given password list and comparing each hash to the list of hashes it was given. 
  - If it matches a hash, it gives outputs of what password was used to create the hash.

  This password cracking is a type of brute force attack because it will ultimately try _all_ possible passwords, and eventually manage to reverse the hash.

- Introduce **John the Ripper** as a popular modern software because it can crack a wide variety of hashes. 

#### Using John the Ripper

- Explain that two steps needed to run John the Ripper are:

  - **Step 1:** Create a hashlist, which is a file that contains the hashes you are trying to crack.

  - **Step 2:** Run John the Ripper to crack the hashes.

Step 1: Creating the Hashlist

- Explain that John The Ripper can take an input file that contains usernames and password hashes. 

  - Explain that John the Ripper requires input files to adhere to a specific format. 

  - Each line must resemble `username:hash`. A list of usernames and password hashes is often called a **hashlist**. In practice, it resembles the following:

  ```bash
  admin:e08e4506d2e3f370a5e8ab79647df309
  guest:a132mj06d2e3f370a5e8ab79647df309
  ```
  
- Mention that you can also simply grab one whole record from the `/etc/shadow` file to add to the hashlist

  - For example:
  
    ``sally:$6$c0QGG1OFuiDGNKZT$wzbxLSWFOSyeSiyNZc2wNjaKr1B/w.D1xp7QBU0wG6xbBUbdZKEb1HwmW2Zn92/9jbVd.slXMByeLJeh1btOD.:18387:0:99999:7:::``

  - Explain that John the Ripper knows how to grab the hash from a `shadow` file record.

    

Step 2: Running John the Ripper

- Explain that you run John the Ripper with the following simple format:
 
    - `john <hashlist>`.
      - For example:  `john hashlist.txt`
      
- Explain you can also have John the Ripper run against a pre-defined wordlist to speed up the cracking process with the following format:

    - `john <hashlist> –wordlist="wordlist.txt" `
    
      - Note that while a smaller wordlist may speed up the cracking process, if the wordlist doesn't contain the password, it will not be cracked.
    
    - Explain that there are many available large wordlists on the internet, but our distribution comes with a popular wordlist called `rockyou.txt`.
      - Note that this wordlist is located in the `/usr/share/wordlists/` directory.
      - An example command to run with this wordlist would resemble the following:
          - `john hashlist.txt –wordlist=/usr/share/wordlists/rockyou.txt`
    
  - Explain that this process can take a very long time on real files (hours, days, or even weeks or months), but the passwords in today's exercise should break quickly.

- Explain that you can see the passwords `john` has already cracked by running :
  
     - `john --show <hashlist>`.

- Let students know that they'll get practice running John The Ripper in the next exercise.

- Take a moment to address remaining questions before proceeding.


### 03: Student Do: Talk to John (0:20)

Explain the following to students:

- In this activity, you will continue your role as a junior administrator auditing the system.  Now, the focus will be on passwords.

- In the previous section, we discussed how password cracking tools can help check if passwords are weak.

- You will use `john`, which we installed in the previous class, to crack the password hashes for several of the users on our system.

Send students the following file:
- [Activity File: Let's Talk to John](Activities/03_Talk_to_John/Unsolved/README.md)



### 04: Instructor Review: Let's Talk to John (0:10)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the goal of this activity was to illustrate that using weak passwords can make it much simpler for a malicious actor to crack user's passwords if the malicious actor can get access to password hashes.
 
- Emphasize that this is a reason that businesses encourage or require complex passwords. 

Explain that the main tasks we needed to complete were:

- Make a copy of the shadow file.
- Edit the copied shadow file to only include several specific users.
- Use `john` to crack the passwords in this file.

Send students the solution file: 

- [Solution Guide: Let's Talk to John](Activities/03_Talk_to_John/Solved/README.md)

#### Walkthrough

1. Make a copy of the `/etc/shadow` file in your `/home/sysadmin` directory.  Name the copy `shadow_copy`.
      - Note: Don't forget to use `sudo`!
      
    - **Solution**:  
      - `cd /home/sysadmin`
      - `sudo cp /etc/shadow shadow_copy`
  
2. Use Nano to edit your `shadow_copy` file to only leave the rows for the following users you will crack:
      - jack, adam, billy, sally, max
      
    - **Solution**:
      - Run `nano shadow_copy` and delete all extra lines that are not the users in the preceding list.
      
      - Your edited file should resemble the following:

```bash
max:$6$WhPNYTYJx2jx25x$QWy.....     
billy:$6$Q.zRCddM9cwb5YUJh......
jack:$6$ilIqVoXkja6GG8PK$t....
```
      
3. Run `sudo john shadow_copy`
     - Note: This command is all you need to crack passwords.

4. This will take some time, but let John the Ripper run, and take note of any passwords you find.

   - **Solution**:
   
   - You should be able to crack the following passwords fairly quickly:


    - `jack` : lakers
    - `adam` : welcome
    - `billy`: football
    - `sally` : 123456
    - `max` : welcome


Ask students if there are any questions before proceeding.



### 05: Instructor Do: Privileges, root, sudo and su demo (0:20)

Mention that we've been using `sudo` for several commands over the last two days of class.

- :question: **Ask class**: Can anyone can explain why `sudo` is needed for some commands and not others?

After getting a few student responses, explain the following about permissions: 

- Every file and program on a Linux system has permissions associated with it. These permissions tell the system what user can access that file or run that program.

- Additionally, administrators can place users in a group, and set file and program permissions to allow a specific group or groups to have access.

- For instance, a company can create a group for employees who work in Marketing and another group for employees who work in Accounting. The administrator can give these groups access to specific programs needed by their department. 

- The permissions for a given file or program apply to all the users on the system, except for the root user.

- The root user is the super user, or the highest administrator on the system. The root user has complete access to the system and can perform any action, access any file, and run any program.

Point out that during the last activity, we learned just how sensitive the `/etc/shadow` file is. Typically, **only** the root user has access to this file. This is an example of how permissions can protect parts of the system.

Explain that when an attacker is trying to gain access to a system, they are usually trying to gain root access, or access to the root user, so they can do whatever they want to the system. Hackers can achieve this access by switching users.


#### Switching Users and Elevating Privileges

Explain how the Linux system can access different users with `su`:

- `su` stands for "switch user." If you have another user's password, you can log in as that user with `su <username>`.

- Switching users can be helpful for troubleshooting. You can see firsthand what the user has access to, and test their permissions. You can also see what they've been doing with the system from their perspective, with full access to their files.

- From a security perspective, switching users allows you to use the system with their permissions. This lets you run commands as that user, review files that only that user has access to, and otherwise imitate the user.

Explain how Linux systems secure root access with `sudo` by covering the following:

- Properly secured Linux systems do not allow anyone to log in as the root user on the system. Instead, following the principle of least privilege, if a user needs access to something only the root user can do, they can use the `sudo` command to invoke the root user just for that one command.

- `sudo` stands for "superuser do," and if an average user is allowed to use `sudo`, they can run a root-privileged command. When the command is complete, the user is reverted to their usual access.

- `sudo` can also control which commands the user can run as root user. This way, the system has granular control over who can run root commands, and which ones. It also keeps a log of exactly which user runs which commands, which can be reviewed as needed.

Explain how to configure `sudo` access:

- `sudo` access is configured using a configuration file, the `sudoers` file.

- Inside that file, a `sudo` group is specified along with which commands `sudo` can be used with.

- The `sudo` group is typically given full system access to use `sudo`.

- Any user on the system that needs `sudo` access is then added as a member of the group. Any member of the group receives the same access and ability to use `sudo` for any command.

- Alternatively, a user can be kept out of the `sudo` group and added to the configuration file individually, along with a specification of which commands that user can use `sudo` for.

- Adding a user individually to the `sudo` configuration file is common when the sysadmin has a user that only needs `sudo` access for a few commands.

#### su vs. sudo Demonstration

Explain that in the next demo, we will attempt to update all of our existing software packages.
- If our privileges do not allow us to do so, we will first use `su` to switch directly to the root user.
- We'll then demonstrate the dangers of working directly as the root user.
- We'll then do the same updates by using `sudo` instead and demonstrate why this is the more secure option.

We will use the following commands to do these tasks:
  - `whoami` to display your current user.
  - `su` to switch to another user, in this case, the root user.
  - `sudo` to invoke the root user for one command only.

Pull up a terminal in the instructor Ubuntu VM:
  - Username: `instructor`
  - Password: `instructor`

Run `whoami` to demonstrate that you are the `instructor` user.

- Run `apt update` and mention that this doesn't work.

  ```bash
  # apt update
  Reading package lists... Done
  E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)
  E: Unable to lock directory /var/lib/apt/lists/
  ```

- Only `root` has the ability to use the `apt` program. Because we are not `root`, we received a `Permissions denied` error.

- The `Permission denied` message indicates that you do not have permission to open a file (`/var/lib/apt/lists/lock`), and that you need to run `apt` with elevated privileges.

Explain that we will now log in as the root user with `su`, which again, stands for "switch user."

- Run `sudo su` (password: `instructor`)

- Run `whoami` to show that we are now `root`.

- The prompt now also uses a `#`, indicating that you are the root user. A standard user's prompt will generally display a `$`.

Explain that, now that we’re the root user, we can install packages.

- Run `apt update` as `root` and we should observe the following:

  ```bash
  Hit:1 http://us.archive.ubuntu.com/ubuntu bionic InRelease
  Get:2 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]                     
  Get:3 https://download.docker.com/linux/ubuntu bionic InRelease [64.4 kB]                       
  Get:4 http://us.archive.ubuntu.com/ubuntu bionic-updates InRelease [88.7 kB] 
  ```

- This command updates the package repositories so we can download the latest software.

Mention that once you, or a process, is logged in as `root`, though, you can make any changes you want to the system, including changes or malicious actions that may harm the system.

Explain that you will perform a quick example:

- Make sure you're (still) `root` with `sudo su` (password `instructor`) and do the following:

  - Run `ls /home` to display the current home folders.

  - Run `rm -r /home/john` to remove the home folder for `john`.

  - Run `ls home` again to confirm that it is removed.

  - Run `mkdir /home/john` to create a new empty `home` directory for `john`.

  - Lastly, run `chown -R john: /home/john` to give the user, `john`, ownership of their newly created home directory.

Mention that at no time during this process were you asked for a password.
- That is because you are the root user and you can perform any action you wish, without the system stopping you.

- Not only is this a problem if you want to make system and software changes, but it's also a problem if you were to make a mistake and remove the wrong files.

Explain that once you are logged in as another user, you can log out by typing `exit`.

- Run `exit` and mention that this will log you out from the `root` user.

Emphasize that a better alternative to making the same changes is to use `sudo`.

- `sudo` usually and preferably prompts the user for a password, and it will only allow you to complete the actions you have access to.

- `sudo` adds a layer of security because it forces the administrator to consciously run a command with privileges.

- `sudo` also saves a log for each time the command is used. Therefore, an administrator can audit the log to find out which user did what.

Run `sudo apt update` and mention that we have to first enter our password to use `sudo`.

Explain that now you will try to delete a directory like you did previously:

- Run `ls /home` to display the current home folders.

- Run `rm -r /home/john`

Your output should be similar to the following:

```bash
$ rm -r /home/john
rm: cannot rm directory ‘/home/john’: Permission denied
```

Remind students that restricting `sudo` use among users and only allowing access for specific commands reduces the risk of harm to the system.

Ask students if they have any questions before continuing.


#### Assigning `sudo` Access Demo

Explain that in the previous demo, we didn't have to log in as `root` because we could just use the `sudo` command to use the `apt` command.

Explain that _if_ we want to know exactly what `sudo` access we have, we can run `sudo -l`.

- Run `sudo -l`. Your output should contain the following line:

```bash
  User instructor may run the following commands on localhost:
      (ALL) ALL: ALL
```

- We, the instructor user, have `ALL` access.

Explain that we can check the privileges of a user with the `-lU` options. We can check the privileges of a user, `sally`, with the following command.

- Run `sudo -lU sally`. The output should be the following:

```bash
User sally is not allowed to run sudo on ubuntu-vm.
```

Mention that we can give `sally` full `sudo` access by adding her to the `sudo` group.

- Run `sudo usermod -aG sudo sally` to add Sally to the `sudo` group.

If the students have more questions about the `usermod` command, let them know that we will cover that command, along with users and groups, later today.

- Run `sudo -lU sally`. Your output should now read as follows:

```bash
  User sally may run the following commands on localhost:
      (ALL) ALL: ALL
```
- `sally` now has full access.

Explain that we can also give a user `sudo` access for just a single update. For example, we want to give our user `john`  `sudo` access for `apt` so he can run software updates.

:question: **Ask class**: Why can't we just add `john` to the `sudo` group?
  - **Answer**: This will give `john` full access to run any command, which we don't want.


Remind students that the `sudo` settings are configured in the `/etc/sudoers` file.

Explain that in order to update the `/etc/sudoers` file, you must use the command `visudo`, which opens the `etc/sudoers` file using Nano.

  - Using `visudo` to edit this file is necessary because `visudo` does a syntax check on the `sudoers` file before it is saved, to prevent corruption of the file.

  - Breaking this file can lock you out of the system entirely, so you want to be sure to always use `visudo` to edit the file.

  - :warning: **Heads Up**:  If students break this file and get locked out of using `sudo`, they should review the following thread: [Ask Ubuntu: How to Modify an Invalid etc Sudoers File](https://askubuntu.com/questions/73864/how-to-modify-an-invalid-etc-sudoers-file).

Run `sudo visudo`.

Scroll down to find the following lines at the end of the file:

  ```bash
  # User privilege specification
  root  ALL=(ALL:ALL) ALL

  # Members of the admin group may gain root privileges
  %admin  ALL=(ALL) ALL

  # Allow members of group sudo to execute any command
  %sudo  ALL=(ALL:ALL) ALL
  ```

Identify and explain these lines:

- `root  ALL=(ALL:ALL) ALL`: Allow `root` to run any command under any user or group on any system.

- `%admin  ALL=(ALL) ALL`: Allow all members of the `admin` group to run any command with `sudo` under any user on any system.

- `%sudo  ALL=(ALL) ALL`: Allow all members of the `sudo` group to run any command with `sudo` under any user on any system.

Explain that the general syntax of these lines are as follows:

- [`USER` or %`GROUP`]  `HOST`=(`USER`:`GROUP`) `COMMAND`

  - The `HOST` is usually set to `ALL` but can be changed if the administrator wants to limit which machines can use this file.
- For a group entry, the `GROUP` inside the parenthesis can be left out: %`GROUP` `HOST`=(`USER`) `COMMAND`
- To remove the password requirement, `NOPASSWD` is added: `USER` `HOST`=(`USER`) `NOPASSWD`: `COMMAND`

Explain that this means any user in the secondary group `sudo` _or_ `admin` can use `sudo` to run privileged commands with their password.

Add the line `john  ALL=(ALL:ALL) /usr/bin/apt` and break down the syntax:

- This allows the user `john` to run the `apt` command with `sudo` as the `root` user,  on any `host` after entering his password.

- `john` now has access to run the `apt` command and update software packages.

Save and exit.

Verify your new settings.

- Run `sudo -lU john`

- Output should resemble the following:

    ```bash
     User john may run the following commands on localhost:
      ALL=(ALL:ALL) /usr/bin/apt
    ```

:bar_chart: Take a moment to run a comprehension check poll and address any questions before moving on. 


#### Attackers Gaining Root Access Demo

Emphasize that even when `sudo` use is restricted to specific commands, depending on the command, a user can still gain access to `root`.

Explain that in this last demo, we will pretend we are an attacker and attempt to gain `root` access from an account that has `sudo` access to one of these commands.

Mention that there are several different commands for which this can be a problem, but today we will explore the `less` command.

Return to our example of `john`. In addition to allowing `john` the ability to install software, we may also want to allow him to read any of the sensitive files on the system using `less`.

- `less`, however, has a feature that allows you to run commands without exiting the `less` command, and those commands are run with the same privileges that `less` has.

  - In other words, if a user has `sudo` access for `less`, they can open `less` and then start running commands from inside `less` with `sudo` privileges.

To demonstrate this, explain we will use `sudo less` with the admin user and then go from `less` directly into a root shell with `!bash`.

- Run `sudo visudo` and edit the entry for `john` to give them `sudo` access to `less`.

- Output should resemble the following:
```
    john ALL=(ALL:ALL) /usr/bin/apt, /usr/bin/less
```
Save and exit.

Now, explain that we will run `sudo less` on any file that belongs to John:

- Run `su john` (password: `lakers`) to switch to John's user.

- Run `touch /home/john/my_file`

- Run `sudo less /home/john/my_file`

Emphasize that because we ran `less` with the `sudo` command, when we are inside `less`, we are no longer `john`. Instead, we are now `root`.

Explain that to run a command from inside `less`, we use `!` followed by the command.

You can run any command with `less`, but it makes the most sense to run `bash`. This command will launch another shell from inside `less` with your current `root` privileges.

- Type `!bash` and press Enter to drop into a root shell.

We now have a `#` at the prompt again, indicating we have `root` privileges.

- Run `whoami` to confirm that you are `root`.


Emphasize that attackers often check for this kind of loophole to escalate their privileges on a system.

- This kind of exploit is called an **escape** exploit because you are escaping the program `less` and getting full system access.

- It's important to restrict which commands users can use with `sudo` in `/etc/sudoers` and to always make sure there are no known vulnerabilities with the commands you _do_ allow.

#### Summary

Review the commands used in the demo:

- `whoami` to determine your current user.

- `su` to switch to another user, in this case the root user.

- `sudo` to invoke the root user for one command only.

- `sudo -l` to list the `sudo` privileges for a user.

- `visudo` to edit the `sudoers` file.

Pause and ask if there are any questions about using these commands.    

### 06: Student Do: sudo Wrestling (0:25)

Explain the following to students:

- You will continue with your audit of the malfunctioning server.

- The senior administrator has asked that you audit the system for `sudo` and root access, making sure that no users other than the admin user have access to any `sudo` use.

- In this activity, students will use the commands they just learned, along with the passwords for each user, to log in as each user, check their `sudo` privileges, edit the `sudoers` file and check for anything else suspicious.

Send students the activity file:

- [Activity File: sudo Wrestling](Activities/06_Sudo_Wrestling/Unsolved/README.md)


### 07. Instructor Review: sudo Wrestling (0:10)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind the students that this activity was mostly focused on checking what `sudo` access each user has, verifying an exploit from one user, and editing the `sudoers` file to remove access.

Explain the high level steps needed to complete this activity:
- Review the `sudo` privileges for each user on the system.
- Find a user that has `sudo` access for the `less` command.
- Log in as that user.
- Verify that the user has the ability to drop from `less` into a root shell.
- Audit and edit the `sudoers` file to remove any access that shouldn't be there.

Remind the students that these steps demonstrate just one vulnerability that `sudo` access may create.

Explain that getting familiar with these types of vulnerabilities conveys the importance of securing root access and how fundamental this skill is for a system admin.

Send students the solution file: 

- [Solution Guide: sudo Wrestling](Activities/06_Sudo_Wrestling/Solved/README.md) 

#### Walkthrough

Print the name of your current user to the terminal.
- Run `whoami`


Display what `sudo` privileges the sysadmin user has.
- Run `sudo -l`


```bash
User sysadmin may run the following commands on localhost:
  ALL (ALL:ALL) ALL
```

Now we will record what `sudo` access each of the users on the system has. It will be recorded in a text document inside your research folder.
- Run `sudo -lU <username>  >> ~/research/sudo_access.txt` for each username on the system.

After, your text document should be similar to to the following:

```bash

User sysadmin may run the following commands on localhost:
  ALL (ALL:ALL) ALL
User jack may run the following commands on localhost:
  ALL (ALL:ALL) ALL
User adam is not allowed to run sudo on localhost.
User billy is not allowed to run sudo on localhost.
User sally is not allowed to run sudo on localhost.
User john may run the following commands on localhost:
  ALL (ALL:ALL) /usr/bin/less
User http is not allowed to run sudo on localhost.

```


Now, check the `sudo_access.txt` file to determine which user has `sudo` access for `less`.

- Run `cat ~/research/sudo_access.txt`.

- Note: This is a great use case for `grep`.  Our file in this case is small, so we can manually review it.  But if it contained hundreds or thousands of lines, we would use `grep less ~/research/sudo_access.txt`

Mention that the user `max` has sudo access for `less` with:

```bash
User max may run the following commands on localhost:
  ALL (ALL:ALL) /usr/bin/less
```

- Exit the file.

Verify the output:

- Run `sudo -lU max`

```bash
User max may run the following commands on localhost:
  ALL (ALL:ALL) /usr/bin/less
```

Explain that from our first activity, we know `max`'s password is "welcome." Switch to that user:

- Run `sudo su max`

Explain that now that `max` has `sudo` access to `less`, we will run `!bash` to verify the `less` vulnerability:

- Run `sudo less shopping_list.txt` 

- Run `!bash` from inside `less` and drop into a bash shell.

- Run `Exit` to exit back into `less` and then `q` to quit `less`.

- Run `Exit` to exit the user `max`.

**Bonus**

Explain that now, we will switch to the root user and read the `sudoers` file to check if there are any unauthorized users listed there with `sudo` privileges.

- Run `sudo su`

- Run `less /etc/sudoers`

Mention that the user `max` is listed with access to `less`.

- Exit `less` with `q`.

- Run `visudo` to edit the `sudoers` file.

Explain that to remove the user `max` from `sudo` access, you should remove the following line:

```bash
max  ALL=(ALL) /usr/bin/less
```

- Exit and save changes.

Verify your changes to the `sudoers` file:

- Run `sudo -lU max`

  - Your output should read:

  ```bash
  User max is not allowed to run sudo on localhost.
  ```

- Run `exit` to leave the root shell.  

- Note: It is always better to use `sudo` instead of `su` for root access.  We used `su` here only as a demonstration.


#### Activity Recap

Ask if there are any questions before proceeding.

Recap the activity by covering the following:

- Students first check their own user privileges before checking the rest of the users.

- `sudo -l` is a great command to remember and is often useful in figuring out what you can do on a system.

- As with `less`, there are exploits for `vim`, `more`, `python`, `ruby` and `perl`, should a user have permission to run one of those with `sudo`.

- This exercise clarifies just one reason why securing `sudo` and `root` access is important. Being able to determine which users or processes have root access is a core skill of a system administrator.

- Admins will often ensure that users are not set up with any additional access to `sudo` or `root` than is necessary, following the principle of least privilege.

### 08. Break (0:15)

### 09. Instructor Do: Users and Groups (0:20)

| :warning: User and Group Setup :warning: |
|:-:|
| Before beginning this section, swap back to the  `instructor` user and run the following commands: |
| `sudo adduser mike` |
| `sudo addgroup general` |
| `sudo usermod -aG general mike` |

Welcome students back from break and let them know that we will now discuss users and groups in more depth.

Remind students of the following:

- Linux is a multi-user OS and related users can be added to groups.

- We briefly discussed this when we spoke about the `sudo` and `admin` groups.

- In the case of `sudo`, all users added to the `sudo` or `admin` groups have full access to `sudo`.

Explain that Linux has the ability to create groups of users for other functions like file or services sharing:

- If a company has different departments like Sales, Accounting, and Marketing, a Linux administrator can create a group for each department. Only the users in the group can access files owned by the group.

- Therefore, a system admin must know how to to add and remove users from a system, add and remove groups, and add and remove users from those groups.

Explain that Linux has a few easy commands that are used specifically for user and group management, which we will focus on in this section.

Explain that before diving into these commands, we’ll cover how Linux identifies users and groups in the system using the `id` command. 

Cover the following about the `id` command:

- Linux associates a specific number to each user for identification purposes. This number is called a **user ID** or **UID**.

- When Linux needs to identify a user, it uses the UID number, not the username.

- System users, or automated users designed to complete system tasks, have UIDs assigned at numbers less than 1000.

- Standard users, or users that are assigned to a real person, have UIDs assigned at numbers greater than 1000.

- The root user always has the UID of 0.

- Likewise, the **GID** is the **group ID** that is associated with a group.

Demonstrate running `id`. Explain the following:

- :warning: **Heads Up**:  `id` will also show the GID and groups. No need to go into these now. If students ask, assure them that we’ll cover them soon.

- Our UID is above 1000, which indicates that we are a standard user.

Explain that we can also see the UID for each user in the `/etc/passwd file`.

- Run  `head /etc/passwd`

  - Mention that the system UIDs start with root at 0 and conntinue up from there.

Reiterate that UIDs and GIDs are only a system number that Linux uses for identification.

Explain that if we want to check which groups a user belongs to, we can use the command `groups`.

- Run `groups`

  - Mention that it prints your user's groups to the screen.

- Run `id`.

  - Mention that this also shows us the groups along with the GIDs assigned to them.

#### Users and Groups Demo

Explain that, in the upcoming demo, we’ll dive into more actions around user and group management by using the following scenario:

- The company you work for recently had a change to its developer team. Mike, a lead developer, has left the company. Joseph has joined as a new junior developer.

- The company's Linux system has never been set up properly with a developers group. Instead, Mike was part of the `general` group.

- As the sysadmin for this system, you need to remove Mike from the `general` group, remove the `general` group, and delete Mike's user from the system. Then, you need to add Joseph to the system, create a `developers` group, and add Joseph to this group.

Explain that in order to accomplish these tasks, you will:

1. Get group info for Mike's user using the command `groups`.

2. Lock Mike's account to prevent him from logging in using the command `usermod`.

3. Remove the `mike` user from the `general` group with the command `usermod`.

4. Delete the `mike` user by using the command `deluser --remove-home`.

5. Delete the `general` group using the command `delgroup`.

6. Create a `joseph` user with the command `adduser`.

7. Create a `developer` group using the command `addgroup`.

8. Add the `joseph` user to the `developer` group using the command `usermod`.


Explain that first, we'll check what groups Mike belongs to.

- Run `groups mike` to print Mike's groups to the screen.

- Your output should be the following:

  ```bash
  $ groups mike
  mike general
  ```
Mention that each user is also a member of a group that shares the name of the user.

- When a user is created, Linux by default creates a group of which that user becomes a member.


Mention that the `usermod` command has many different options and lets us do many things to user accounts, but we are going to examine the `-L` and `-G` options. The `-L` option will lock the account and the `-G` option will specify the groups a user should belong to.

- Run `sudo usermod -L mike` to lock the account.

- Break down the syntax:

  - `sudo`: Only `root` can modify users and groups, so we will have to use `sudo` for all of our commands.
  - `usermod`: Allows us to make many modifications to users. In this case, we are using it to add and remove groups.
  - `-L`: `usermod` flag that locks an account so it cannot be logged into.
  - `mike`: The `usermod` command always ends with the user we are modifying.


- Run `sudo usermod -G mike mike` to remove `mike` from the `general` group.

- Break down the syntax:

  - `sudo`: Only `root` can modify users and groups, so we will have to use `sudo` for all of our commands.
  - `usermod`: Allows us to make many modifications to users. In this case, we are using it to add and remove groups.
  - `-G`: This `usermod` flag specifies which groups the user should belong to. The groups that we specify following this command will be the _only_ groups that user belongs to after we run the command.
  - `mike`: Following the `-G` flag are the groups we wish the user to belong to. In this case, we want the user `mike` to be a member of the `mike` group only, effectively removing the `general` group.
  - `mike`: The `usermod` command always ends with the user we are modifying.

- Run `groups mike` to confirm the result.

  - Your output should be the following:

    ```bash
    $ groups mike
    mike
    ```

  - Mike has successfully been removed from the `general` group.

Explain that we can now remove the Mike user from the system using the `deluser` command.

- Run `sudo deluser --remove-home mike` and break down the syntax:

  - `sudo`: Only `root` can modify users and groups, so we will have to use `sudo` for all of our commands.
  - `deluser`: Allows us to delete users from the system.
  - `--remove-home`: `deluser` flag that removes the user's home folder along with the user.
  - `mike`: The `deluser` command always ends with the user we wish to delete.

Mention that if we use the `deluser` command without any flags, it will leave all of Mike's files intact including his home folder. In this case, we will remove the user _and_ remove all his home folder files.

- Run `ls /home` to confirm your results.

  - Mike's home folder has been deleted.

:question: **Ask class**: Do you remember how to verify users or groups on the system? 

- After taking some answers from the class, cover the following:

  - You can check for users in the `/etc/passwd` file with `grep <user name> /etc/passwd`.

  - You can check for groups in the `/etc/group` file with `grep <group name> /etc/group`.

    - Run `grep mike /etc/passwd` to verify that mike is deleted.

    - Run `grep general /etc/group`.

    - The `general` group still exists. The line for the `general` group should resemble the following:

      ```bash
      general:x:32:
      ```

    - If this group had any members, they would be listed after the last `:`. In this case, there are no members left in this group.

Explain that you can now remove the `general` group with the `delgroup`.

- Run `sudo delgroup general`

  - Run `grep general /etc/group` to verify it is gone.

Take a moment to address any questions that students may have.

Explain that now, we will create our new user, `joseph`.

- Run `sudo adduser joseph` and complete the prompts to give `joseph` a password and other info.

- Run `groups joseph` to display the `joseph` group.

   Your output should resemble the following:

  ```bash
  $ groups joseph
  joseph
  ```

Remind students that when a user is added to the system, by default, a group by the same name is added. Also, when a user is deleted, their group is also deleted, as long as no other users are members of that group.

Explain that next, we will create a new developer group using the `addgroup` command. Then, we can add the user `joseph` to the group.

- Run `sudo addgroup developers`

Mention that we received a `Done` message, but we can also verify this group was added in the `/etc/group` file.

- Run `tail /etc/group`

- Note: Since our new groups will be the last line in the group file, `tail` is easier and quicker than `grep` in this case.

  - We can now observe both the new `joseph` group that was created when we added the user `joseph`, as well as the new `developers` group that we just created.

Explain that we are now ready to add `joseph` to the `developers` group using the `usermod` command.


- Run `sudo usermod -aG developers joseph` and break down the syntax once more.

  - `sudo`: Only `root` can modify users and groups, so we will have to use `sudo` for all of our commands.

  - `usermod`: Allows us to make many modifications to users. In this case, we are using it to add and remove groups.

  - `-aG`: This `usermod` flag combination (add group) specifies what groups the user should be added to.

  - `developers`: Following the `-aG` flag are the groups we wish to add the user to. In this case, we want the user `joseph` to the `developers` group.

  - `joseph`: The `usermod` command always ends with the user we are modifying.


- Run `groups joseph`

  - Joseph is now part of the `developer` group as a secondary group.

- Your output should be the following:

  ```bash
  $ groups joseph
  joseph : joseph developers
  ```
- We have now created the `joseph` user, created the `developers` group and added `joseph` to it.

Mention that a user always has a `primary` group that is typically the same name as the user. The primary group can be changed to another group, but there isn't usually a reason to do so.

Explain that groups that a user is added to beyond the primary group are known as `secondary` groups. A user can be a member of unlimited secondary groups.

Summarize the steps we took in this demo:

1. Received group info for the `mike` user with the command `groups`.

2. Used `usermod` to lock `mike`'s account to prevent him from logging into our system.

3. Removed the `mike` user from the `general` group using the command `usermod`.

4. Deleted the `mike` user by using the command `deluser --remove-home`.

5. Deleted the `general` group using the command `delgroup`.

6. Created a `joseph` user by using the command `adduser`.

7. Created a `developer` group using the command `addgroup`.

8. Added the `joseph` user to the `developer` group using the command `usermod`.

Pause for any questions.

### 10. Student Do: Users and Groups Activity (0:20)

Explain the following to students:

- In this next activity, the administrator has asked that you audit all the users and groups on the system.

- You will create a new group for the standard users and remove users from the `sudo` group.

- In the previous activities, you found some malicious users. Now you will remove them from the system entirely.

- Being able to manage users and groups is an essential skill of a system administrator. Here, we will follow the principle of least privilege to make sure that the users on the system only have the access we want them to have and are only members of the correct groups.

Send students the following file:

- [Activity File: Users and Groups](Activities/10_Users_and_Groups/Unsolved/README.md)



### 11. Instructor Review: Users and Groups (0:10)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the principle of least privilege is an important concept in security. Sysadmins want to make sure that the users on the system only have the access they need, no more and no less.

Explain that this exercise requires the following high level steps:
- Check every user's UID and group ID.
- Make sure that only the sysadmin account belongs to the `sudoers` group.
- Remove any users from the system that should not be there.
- Verify that all non-admin users are part of the group `developers`.
- Remove the suspicious `hax0rs` group.

Send students the solution file: 

- [Solution Guide: Users and Groups](Activities/10_STU_Users_and_Groups/Solved/README.md)



#### Walkthrough

The first step is to audit each user to check what groups they are a part of, and save that to a list. This gives us a solid list to work from where we can observe everything that needs to be changed in one place.

Mention that this will already display suspicious users and groups that we will need to remove, but we will cover all of this later on in the review.

- Run `id` to display your UID, GID, and other permissions info.

Next explain that we need to run `id <username>` for each user to display the UID, GID and permissions info for each user on the system.

- To record this output into a new file in our research folder, we run `id <username> >> ~/research/user_ids.txt`

  - Run `id billy >> ~/research/user_ids.txt` as an example.

Explain that to print the groups you and the other users belong to, we run the command `groups` for ourselves and then `groups <username>` for each user.

 To record this output into a new file in your research folder, we run `groups <username> >> ~/research/user_groups.txt`

  - Run `groups billy >> ~/research/user_groups.txt` as an example.

Explain that in checking through the groups that our users belong to, we’ll find that `jack` belongs to the `sudo` group.

- Run `groups jack` and point this out. Point out that we’ll remove `jack` from our sudo group.

  - Run `sudo usermod -G jack jack`

Explain that `jack` and the user `http` should not be in our system at all, so we’ll need to remove them and their home folders.

  - Run `sudo deluser --remove-home jack`

  - Run `sudo deluser --remove-home http`

Mention that when we went through the user groups, we didn’t note a `developers` group. We will create one.

  - Run `sudo addgroup developers`

Explain that all non-admin users should be part of the group. This means that `adam`, `billy`, `sally`, and `john` should be members of the `developers` group and their own group.

- We need to run `usermod -aG developers <username>` on each of the above users to add them to the `developers` group.

  - Run `sudo usermod -aG developers adam` as an example.

Ask students if they noticed any suspicious groups when they ran the `groups` command for each user.

- They should have noticed a suspicious group named `hax0rs`. We should remove it from our system.

  - Run `sudo delgroup hax0rs`

Reiterate that this activity shows how to enforce the principle of least privilege.


Take a moment to address remaining questions before ending class.

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
