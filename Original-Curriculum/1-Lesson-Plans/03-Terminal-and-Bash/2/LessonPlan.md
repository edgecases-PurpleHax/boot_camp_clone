## 3.2 Lesson Plan: Commanding the Command Line

### Overview

In today's class, students will expand their command line skills by working in their terminal to complete tasks that require file searching and bulk operations. Throughout class, students will complete a series of activities involving the  `man`, `find`,  `grep`, and `wc` commands.

### Class Objectives

By the end of class, students will be able to:

- Identify and explain the structure of a terminal command.

- Explain how options modify the default behavior of a terminal command.

- Use the `man` command to list instructions and options for each command.

- Use the `find` command to locate files based on search parameters.

- Use the `grep` command to search within the contents of files.  

- Use the `wc` command to count words and lines.

- Combine multiple commands in sequence with pipes to accomplish intermediate IT tasks.  

### Instructor Notes

- Today's class builds on the previous one by introducing students to a new fleet of terminal commands. This class will be considerably more challenging for students. Seemingly simple situations involving the `find` and `grep` commands can hide their relative complexity.

- For those students still struggling with the commands taught in the last class, today's class will feel even more challenging. Be encouraging and continue to remind students that familiarity with using the command line comes with practice.


### Lab Environment   

You will use your local Vagrant virtual machine for today's activities. Please note that instructors and students have different access credentials.
  
  - Instructor access:
    - Username: `instructor`
    - Password: `instructor`

  - Student access:
    - Username: `sysadmin`
    - Password: `cybersecurity`

:warning: **Heads Up**: In the event of lab malfunctions, use a backup zip file containing this unit's student activity directories.

  - [Backup Student Activity Directories: Terminal Unit](Resources/terminal.zip)



### Slideshow

- The lesson slides are available on Google Drive here: [3.2 Slides](https://docs.google.com/presentation/d/1VOTC2YCClLcO1cJv6rbmcDHEdi7ub7xadupy7aKF3PE).

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker is available on Google Drive here: [3.2 Time Tracker](https://docs.google.com/spreadsheets/d/18jHileJ4feOD3YuQQV6bxTey37utF-sUBQSo1xWj_qc/edit#gid=1145703143).

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Student Guide
- Send the class a student-facing version of the lesson plan: [3.2 Student Guide](StudentGuide.md)  

-------

### 01. Instructor Do: Welcome Back to Terminal (0:07)

Begin class by welcoming students back and informing them that today they will be expanding their command line skill set.

Before we introduce new command line concepts, review the commands taught in the last class.

Commands for navigating a file directory:

   - `pwd`: Displays the current working directory.
   - `ls`: Lists the directories and files in the current directory.
   - `cd`: Navigates into a directory.
   - `cd ../`: Navigates out of a directory.
   - `clear`: Clears out the terminal history on the page.

Commands for making and removing files and directories:

   - `mkdir`: Creates a new directory.
   - `rmdir`: Removes a directory.
   - `touch`: Creates an empty file.
   - `rm`: Removes a file.

Commands for moving and copying files:

   - `cp`: Copies files.
   - `mv`: Moves files.

Commands for previewing files:

   - `more`: Displays a file one page at a time. Space bar is used to move from page to page.
   - `less`: Similar to `more`, but allows scrolling up and down pages.
   - `head`: Previews the top 10 lines of a file.
   - `tail`: Previews the bottom 10 lines of a file.

Commands for concatenating and redirecting:

   - `cat`: Concatenates and combines multiple files together.
   - `>`: Writes to a file, and overwrites file if the file name already exists.
   - `>>`: Writes to a file, and appends to the file if the file name already exists.

Remind the class that the best way to learn these commands is to repeatedly use them. We will start today's class with a warm-up activity to practice these commands.

 - Ask class if they have any questions before starting the activity.


### 02. Student Do: Warm-Up (0:15)

Explain the following to students:

- You are a security analyst at Wonka Corp.

- Wonka Corp's management apprehended Ruth and Henry and they're grateful for all your work so far.

- The local authorities have video evidence that Slugworth delivered a cash payment to Wonka Corp's back door on October 13, 2019.

- You are tasked with gathering physical access logs to prove Henry or Ruth opened the back door for the delivery. This will assist the authorities with solidifying their case.


Send students the following:

- [Activity File: Warm-Up](Activities/02_warmup/unsolved/readme.md)
- [Directories/Files: Warm-Up](Resources/warmup.zip)

Additionally, provide the solution file so the students can self-review:

- [Solution Guide: Warm-Up](Activities/02_warmup/solved/readme.md)


### 03. Instructor Do: Command-Line Structure (0:13)

Begin by reminding the class that so far we have covered many basic command line commands to complete common IT tasks.

Emphasize that these commands have to follow a specific structure to run successfully.
  - The structure we are already familiar with is:

     `<command>   <argument>`


  - **Arguments** appear immediately after the command if they are inputs for the command. For example: `touch myfile`.

       - The command is `touch`.

       - The argument is `myfile`.

Explain that IT professionals often need to run commands with more specific parameters than can be included in the command itself.

  - For example: IT analysts need to clean up server space. They want to list out the files by size, so they can delete the largest files first. However, the default behavior of the `ls` command does not list out the files by size.

    Explain that, fortunately, commands have **options** that can modify their behavior.

We'll cover three methods for using options:

#### Method 1: Adding an option to modify the command's default behavior.

Example: `ls -S`

  - The added option modifies the behavior of the command. Adding `-S` after the `ls` command changes the behavior of the `ls` command from simply listing the files, to listing them by size, with the largest first.


- The syntax for the above command:
    - `ls` is the command.

    - `-S` is the option.     

- Options always start with a hyphen.   

- The option, just like the command, is case sensitive, meaning it matters whether you use capital or lowercase letters.

  - The lowercase `-s` will provide a very different result than an uppercase  `-S`.

  - The lowercase `-s` option prints the size of each file.

- Emphasize that each command has its own set of options. An option used in one command may behave completely differently for another.

     For example:

   - `ls -s` will print the size of each file in a directory.
   - `cat -s` will suppress repeated empty output lines.

Ask students if they have any questions so far.      

#### Method 2: Adding an option and an argument to modify the default behavior on files or directories.

Example: `cat -n logfile1.txt`

  - We can use this command to display line numbers on a file called `logfile1.txt`.

  - The default behavior of the `cat` command is to concatenate multiple files or simply display the contents of a single file.

  - To modify the behavior of the `cat` command for a file, we can run:
       `cat -n logfile1.txt`.

    - Adding the option `-n` modifies the behavior of the `cat` command to display the line numbers preceding each line.

  - The syntax for the above command:

     - `cat` is the command.

     - `-n` is the option.

     - `logfile1.txt` is the argument for the `cat` command.


#### Method 3: Adding options that require their own arguments, called parameters.

Example: `head -n 4 logfile1.txt`

  - **Parameters** provide additional details on how to modify a command's default behavior.   

  - We can use the above command to preview the first four lines of `logfile1.txt`.

  - The default behavior of `head` will display the top 10 lines of a file.

  - `head`'s `-n` option modifies the default behavior by changing the number of lines displayed.

    - The `-n` option requires a parameter to specify the number of lines to display.

  - The syntax for the above command:

      - `head` is the command.

      - `-n` is the option. This specific option requires a parameter.  

      - `4` is the parameter for the `-n` option.

      - `logfile1.txt` is the argument for the `head` command.
      
:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check. 

#### Options Demonstration Setup

Now we will practice using command line options by covering the following scenario:

  - You are a security analyst at ACME Corp. Your manager has tasked you with cleaning up some of the evidence files, as server space is running low.

  - They asked you to delete the three largest evidence files, as long as they don't contain the user Sheila. They will need those files for a future investigation.

  - You have been told that the log files do not contain more than 40 lines.


#### Options Demonstration

1. Access the  `/03-instructor/day2/options/` directory:

      - `cd /03-instructor/day2/options/`

2. Explain that we will first take a look at the files in this directory by running `ls`.

    Note that this displays the following six files:

      - `fileA`
      - `fileB`
      - `fileC`
      - `fileD`
      - `fileE`
      - `fileF`

3. Now, we need to know which are the three largest files.

   - Run the following command:
      - `ls -S`


   - Note that this lists the files in order of largest to smallest:

     - `fileE  fileB  fileC  fileA  fileF  fileD`

3. Explain that we now know the three largest files are `fileE  fileB  fileC`. Before we delete them we need to confirm that the user Sheila is not named in these files.

    - Explain that we can do this by previewing the top 40 lines of the files, since none of them are longer than this.

    - Explain that to do this, we will run the following command on the first file:
        `head -n 40 fileE`.

    - Note the syntax:
        - `head` is the command.
        - `-n` is the option, but requires a parameter.  
        - `40` is an argument for the `-n` option.
        - `fileE` is the argument for the `head` command.

    - Note that the user Sheila does not exist in this file.

4. Run the other `head` commands to preview the other two largest files:

    - `head -n 40 fileB`
    - `head -n 40 fileC`

      - Note that `fileC` contains the user Sheila, so this will not be deleted.

5. Run the following command to delete the two files, as requested by your manager.

    -  `rm fileE fileB`

#### Demonstration Summary

Review the following concepts:

  - Terminal commands can use **options** to modify their default behavior.

  - Commands can also use **options**  with **arguments** to modify their default behavior with files or directories.

  - Some **options** require **arguments** called **parameters**, which provide additional details on how to modify the default behavior.


Ask the class if they have any questions before continuing to the next lesson.


### 04. Instructor Do: Welcome to Man Pages (0:10)

Explain that we just covered how commands have default behaviors, and options can modify this default behavior to perform additional tasks.

Point out that, additionally, each command:
  - Has its own unique list of options.
  - Has certain options that require parameters.

So, how can IT and security professionals know and manage all of these options for all of these commands?

- Explain that the command line has a valuable resource known as **manual** or **man pages**.

Explain man pages by covering the following:

- Man pages are a form of documentation available on the terminal.

- Each command has an associated man page.

- Each man page contains the following:

  - Name of the command

  - Synopsis, which includes the syntax of the command

  - Description

  - Options and option parameters

Explain that the command to display the man page is very simple:   `man   <command>`.

- For example: `man ls` will display the man page of the `ls` command.


#### Man Pages Demonstration Setup  

Man pages can assist IT and security professionals with learning new commands.

Explain the following scenario to show how man pages can assist with learning a new command. We will also use this scenario for the following demonstration.

  - You are a security analyst at ACME Corp, and your manager has asked you to count the number of server logins on October 13, 2019, as they believe it is higher than usual.

  - They told you to use the command `wc` to count the amount of logins on the server login file.

  - You have not used the `wc` command before and will need to use the man page to learn how.

#### Man Pages Demonstration

1. Access the  `/03-instructor/day2/manpages/` directory:

     - `cd /03-instructor/day2/manpages/`

2. Since we have not used the `wc` command before, we need to learn what it does and how it works. We will run the command to view the man page for `wc`:

      - `man wc`

3. Scroll through the man page for the `wc` command and point out the following:

    - The **Name** defines and provides a brief summary of the command:

      - `NAME: wc - print newline, word, and byte counts for each file`

    - The **Synopsis** displays the format:

      - `SYNOPSIS: wc [OPTION]... [FILE]...`

      - Explain that this means the basic syntax is the `wc` command, followed by the option, followed by the file to run the command against.

    - The **Description** displays a more detailed definition of the `wc` command.

    - Below the Description are the options and parameters available for `wc`.

    - To exit the man page, enter `q`.

4. Next, we are tasked with counting the number of logins (lines) within a log file called `10_13_logs.txt`.

    - Explain that, in the man pages file, several options are listed. The best one for our task is `-l`, the line count option.

5. Lastly, we will run the command with the option:
 `wc -l 10_13_logs.txt`.

   - The results show the line count, 53, and the name of the file: 
    
     - `53 10_13_logs.txt`.

#### Man Pages Demonstration Summary  

Summarize this demonstration by recapping the following:

- Man pages: Documentation that exists in the terminal and provides details and options about command line commands.

- `man <command>`: The syntax to display the man page for a particular command.

- Man pages can be used to learn about new commands and the options of those commands.

Check for questions before proceeding.

Explain that in the next command line activity, students will learn new commands with man pages to conduct another investigation at Wonka Corp.   


### 05. Student Do: Learning New Commands  (0:18)

Explain the following scenario to students:

- You continue to be a security analyst at Wonka Corp.

- Wonka Corp has recently experienced a network attack on their websites and management needs your help determining which website was the main target of the attack.

- Your manager has provided you log files for each of their websites.

- Each log file contains the IP addresses that were connecting to that website on the day of the attack.

- You must count the IP addresses in each file in order to determine which Wonka website was the main target of the attack.


Send students the following:

- [Activity File: Learning New Commands](Activities/06_learning_new_commands/unsolved/readme.md)
- [Directories/Files: Learning New Commands](Resources/learning_new_commands.zip)


### 06. Instructor Review: Learning New Commands Activity (0:05)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 


The goal of this exercise is to practice using man pages to learn how to run new commands and options.

Explain that this activity required the following steps:

  - Viewing man pages.

  - Analyzing a man page to determine appropriate options.

  - Running commands with options.

  - Using wildcards to run commands on multiple files.

Send students the following:
- [Solution Guide: Learning New Commands](Activities/06_learning_new_commands/solved/readme.md)

#### Walkthrough


First, navigate into the `/03-student/day2/learning_new_commands` folder on your VM.

- To complete this, run the following commands:

  - `cd /03-student/day2/`

  - `cd learning_new_commands`

Note that we can view the log files in this directory by running `ls`.

- Point out that there are five files in this directory, each for one of Wonka Corp's websites:

   - `Chocolateyfun.com`  
   - `GummyGummy.com`
   - `PeanutButtery.net`
   - `Stickytoffee.com`
   - `SugaryGoodness.com`

We will preview the contents of each file to see the structure of the log:

- Run the following:

    `head Chocolateyfun.com`

- Point out that in the log file we can see that each line represents an hour.

- Each line has the IP addresses that connected to that website during that hour.

Explain that we don't want to use the `wc -l` command to count the lines.  We need a command that will count the total IP addresses in the file.

Therefore, we will consult the man page for `wc` in order to find out how to count each IP address.


- Run the following command:

    `man wc`

- Explain that each IP address is considered a word, as it is surrounded by spaces.

- Point out that the man page shows that the option `-w` counts words. This option will be the best method for completing our task.

- Enter `q` to exit the man page.

Now that we know how to find the word count, we will run the command and option on all five files:

   - `wc -w Chocolateyfun.com`  
   - `wc -w GummyGummy.com`  
   - `wc -w PeanutButtery.net`  
   - `wc -w Stickytoffee.com`  
   - `wc -w SugaryGoodness.com`

Point out that the results will show that `PeanutButtery.net` has the highest number. This site is likely the target of the attack.
 
  - `155 Chocolateyfun.com`
  - `109 GummyGummy.com`
  - `533 PeanutButtery.net`
  - `129 Stickytoffee.com`
  - `113 SugaryGoodness.com`

Point out, that if you run `nano GummyGummy.com` you'll notice that there are extra spaces on the fourth and fourteenth lines. The `wc` command counts spaces as words so the exact number of IP addresses is only as accurate as the file itself.

#### Bonus     

Explain that to run the word count command against all the files at once, you can use a wildcard: `*`.

- The command would be :   `wc -w *`

  - This runs the word count for all files in the current directory with a single command.

- Wildcards will be covered in more detail in the next lesson.    


If we want to redirect these results into the file `Connections_by_website`, the command is:  `wc -w * > Connections_by_website`.

Lastly, preview the `Connections_by_website` file to confirm the results are now in this file:
-  `head Connections_by_website`

Remind students that there are many additional commands available for the command line. The best way to learn them is to research them using the man pages and practice with their various options.

Check for questions before proceeding to the next lesson.


### 07. Instructor Do: The find Command (0:12)

Explain that in order to find files or directories, we have been navigating in and out of multiple directories. But this process is very time consuming and some file systems have hundreds of directories to search through.

  - For example: You might be asked to find access logs within a server you aren't familiar with. Security professionals are often not provided the exact location of the file, so you may have to navigate through hundreds of directories to find these access logs.

Explain that there is a terminal command called `find` designed to simplify this task by searching for specified files and directories with a single command.

Explain how `find` works by covering the following:

  - By default, `find` will search through the current directory and the subdirectories within that current directory.

  - However, `find` does not look at the contents of a file, but only the file name or directory name.

We will now discuss the syntax for the various methods of finding a file.

  - Point out that we will be using the same base command throughout the examples. For each example, we will slightly modify the command to achieve different results.

#### Syntax for Finding a File

1. `find -type f`

    - We'll start with the command used to find **all files**. In this specific example, we are finding all files in our current directory and its subdirectories.

    - In order to do this, we will use the option `-type` and the required parameter `f` to indicate that we are searching for files.

2. `find -type f -name log.txt`

    - Now we will find a **specific file**. In this example, we are finding the files called `log.txt` in our current directory and its subdirectories.

    - In order to do this, we are using an option, `-name`, to search for an exact match of the specified parameter `log.txt`.


3. `find -type f -iname log.txt`

    - To remove case sensitivity and find all relevant files regardless of whether the file name matches the parameter's case, we will change the `-name` option to `-iname`. This option requires a parameter identifying what you are looking for.

    - We can use the above example to find the files called `log.txt` (lowercase) and `LOG.TXT` (uppercase) in your current directory and its subdirectories.


4. `find -type f -iname '*.txt'`

    - In this example, we are using a symbol known as a **wildcard** in order to search for all files that end with `.txt`.

    - The `*` wildcard symbol indicates that any file ending with `.txt` will be included in the results, regardless of what comes before `.txt`. Using wildcards with `find` is known as a wildcard search.

    - We can run the above example to find all files ending with lowercase `.txt`  or uppercase `.TXT` in our current directory and its subdirectories.

    - It is important to mention that running the above command without single quotes `'` may appear to work correctly, but it could potentially provide unintended results.  
      - This can be an issue whenever running any command using wildcards because of how the Bash Shell handles file globbing.
      
      - Recommend that it is good practice to get into the habit of using single quotes `'` whenever using a wildcard (i.e.: `?` or `*`)

    If students need a more general explanation of wildcards, discuss the following:   

    - At times, you may need to search for part of a file name.

      - For example, you may want to look for all file names that begin with a certain date, regardless of what the file name ends with.

      - This can be done with a wildcard, signified by an asterisk `*`.

    - Wildcards can come before text, such as `*.txt`, or after text such as `0517*`

      - As with the above example, if we use the `find` command to search for `*.txt`, the command might return the following:

          - `log1.txt`

          - `apachefile.txt`

          - `FILEAB.txt`

      - If we use the `find` command to search for `0517*`, the command might return:  

          - `0517apache.log`

          - `0517textdata.txt`


5. `sudo find /root/desktop -type f -iname log.txt`   

    - In the final example, we will use `find` to search for a file located in another directory. Specifically, we will find the case insensitive `log.txt` in the `/root/desktop` directory.

   - To do this, we place the desired directory after the `find` command and before the the `-type` option.


Now we will discuss the syntax for the various methods of finding a directory.

#### Syntax for Finding a Directory

1. `find -type d`

    - Explain that the syntax for finding a directory is exactly the same as for finding a file, except that the option `-type` requires a parameter, `d`.

    - The above command will find all directories in your current directory and its subdirectories.

2. `find -type d -name logs`

    - To find a specific directory name, we add the option `-name`, which requires the parameter of the name of the directory.

    - With the `-name` option, `find` is searching for an exact, case-sensitive match of the parameter you specify.

    - In this example, we are searching for a directory called `logs` in our current directory and its subdirectories.

3. `find -type d -iname logs`

    - To find a specific directory with **case insensitivity**, you will change the `-name` option to `-iname`, which also requires the parameter of the directory we are searching for.

    - In this example, we are looking for a directory called `logs` or `LOGS`.


4. `find -type d -iname '*1013'`  

    - Ask the class if they can interpret this command.

    - Explain or confirm that the `*` symbol indicates this is a wildcard search.

    - In this example, we are finding all directories that end with the date `1013`.

      - The command would output directories ending in `1013`, despite what comes before. For example:
        - `apache1013.log`

        - `textdata1013.txt`

5. `sudo find /root/desktop -type d -iname logs`

    - Lastly, we can search for a directory within a directory that we're not currently located in.

    - Specifically, this command finds directories called `logs` in the `/root/desktop` directory.


#### find Demonstration Setup

Explain that we will now demonstrate how to use the `find` command with the following scenario:

  - Your manager at ACME Corp has tasked you with finding logs for a certain type of webserver called Apache, for the date of October 13th.

  - They told you the directory should be named `apache` and the log files should have the date noted as `1013` in their file names.

  - Since there are many directories, you will use the `find` command to complete these tasks.

#### find Demonstration

1. The first step is to navigate into the instructor directory called `find_demonstration`.

    - `cd /03-instructor/day2/`

    - `cd find_demonstration`

2. Next, you can find the directory called `apache` with the following command:

    - `find -type d -iname apache`

    Break down the syntax:

    - `find`: The command used to search for the specified file or directory.  
    - `-type`: The option used to distinguish if we are looking for a file or directory.
    - `d`: The parameter for the  `-type` option, indicating that we are searching for a directory.
    - `-iname`: The option indicating that we are searching for a specific case-insensitive value.
    - `apache`: The parameter indicating the value (file name) we are searching for.

 3. Run the command and note that the results show the directory containing the name `apache`:

     - `./apache`


4.  Next, we will find the log files that have the date `1013` in their name. Run the following command:

     - `find -type f -iname '*1013*'`

    Break down the syntax:

    - `find`: The command used to search for the specified file or directory.

    - `-type`: The option used to distinguish if we are looking for a file or directory.

    - `f`: The parameter for the  `-type` option, indicating that we are searching for file.

    - `-iname`: The option indicating that we are searching for a specific case-insensitive value.

    - `*1013*`: The parameter indicating the value that we are searching for.  
      - The wildcards on either end indicate that the value `1013` can be located anywhere in the file name.

5. Run the command and note that the results show the path to the  two files that contain `1013` in their file name:

     - `./apache/1013_backuplogs`

    - `./apache/apache_1013`


#### Demonstration Summary

Summarize this demonstrations by reviewing the following concepts:

   - `find`: Command line command used to locate a file or a directory.

   - `type f`: Option used to find files.

   - `type d` : Option used to find directories.

   - `name`: Additional option used for finding specific file or directory names.

   - `iname`: Additional option used for finding case insensitive  names.

:bar_chart: Take a moment to run a comprehension check poll and address any questions before moving on. 

Explain that in the next activity, students will get to use the `find` command to locate a secret Wonka recipe buried within a file system.


### 08. Student Do: Finding Your Way (0:18)

Explain the following scenario to students:

- You will continue to play the role of a security analyst at Wonka Corp.

- Your manager has identified why PeanutButtery.net was targeted: Henry had hidden a secret recipe for a revolutionary Wonka candy within the file system, and Slugworth was trying to find it.

- Your manager at Wonka needs you to search through the files and file directories of the PeanutButtery.net server to find the hidden recipes in its file system.

- You must scan the directories of the site PeanutButtery.net to uncover the secret recipes hidden by Henry.

Send students the following:

- [Activity File: Finding Your Way](Activities/09_finding_your_way/unsolved/readme.md)
- [Directories/Files: Finding Your Way](Resources/finding_your_way.zip)


### 09. Instructor Review: Finding Your Way Activity (0:07)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 


The goal of this activity was to practice using the syntax of the `find` command to search for files and directories.


Explain that this activity required the following steps:

  - Finding directories with a specific directory name.

  - Finding files that with case insensitivity.

  - Finding files that with wildcards.

  - Using the find command with conditional statements.


Send students the following:

- [Solution Guide: Finding Your Way](Activities/09_finding_your_way/solved/readme.md)

#### Walkthrough

Explain that the first step is to navigate into the `/03-student/day2/finding_your_way//PeanutButtery.net` folder on your VM.

- To complete this, run the following commands:

    - `cd /03-student/day2/`

    - `cd finding_your_way/`

    - `cd PeanutButtery.net`

Explain that the next step is to find all directories that have the word "secret" in their directory name.

- The command to do this is:

     `find -type d -iname '*secret*'`

- Break down the syntax:
    - `find -type d` is the command, option and parameter respectively that indicates that we are searching for a directory.  

    - `-iname` is the option that indicates that we are searching for a specific case insensitive value.

    - `*secret*` is the parameter that indicates the value that is being searched for.  The wildcards on either end indicates that the value of "secret" can be located anywhere in the file name


Run the command and point out the results should return the following directory path containing the word "secret":     

  - `./other/disregard/wonkasecretrecipes`

  - This path indicates that the directory `wonkasecretrecipes` is within the `disregard` directory, within the `other` directory.

Next, we need to find the files that contain the word "`recipe`":

- Explain that the command to do this is:

     `find -type f -iname '*recipe*'`

- Break down the syntax:
    - `find -type f` is the command, option and parameter respectively that indicates that we are searching for a file.  
    - `-iname` is the option that indicates that we are searching for a specific case insensitive value.
    - `*recipe*` is the parameter that indicates the value that is being searched for. The wildcards on either end indicate that the value of "recipe" can be located anywhere in the file name.

- Run the command and point out that the results should return the following four files that have the word recipe in the name:  

     - `./other/disregard/wonkasecretrecipes/recipe_crunchybars`
     - `./other/disregard/wonkasecretrecipes/recipe_peanutballs`
     - `./other/disregard/wonkasecretrecipes/recipe_peanutsquares`
     - `./other/disregard/wonkasecretrecipes/recipe_yumbars`

Point out the four files are: `recipe_yumbars`,  `recipe_peanutsquares`, `recipe_peanutballs`, `recipe_crunchybars`  


#### Bonus     

For the bonus, we were tasked with finding files that contain the words "recipe" and "peanut" in the name.

- In order to do this, we will need to modify our search with the conditional  `-a`.

- The command to do this is:

  - `find -type f -iname '*recipe*' -a  -iname '*peanut*' `

- Discuss the syntax:    

    - `find -type f` is the command, option and parameter respectively, that indicate that we are searching for a file.

    - `-iname` is the option that indicates that we are searching for a specific case-insensitive value.

    - `*recipe*` is the parameter that indicates the value that is being searched for. The wildcards on either end indicate that the value of "recipe" can be located anywhere in the file name.   

    - `-a` this is the conditional statement that represents **AND**,  which states that the next value must also be matched in the result.

      - Point out that `-o` can be used as an **OR** conditional, meaning if either one of the matches is found in a file name, it will be included in the results.

      - We will cover these conditionals more in future lessons.

    -  `-iname '*peanut*' `notes the second value that needs to be matched, along with `-iname '*recipe'`.

- Run the command and note the results only show the two files that have the word "recipe" AND "peanut" in their names:

     - `./other/disregard/wonkasecretrecipes/recipe_peanutballs`
     - `./other/disregard/wonkasecretrecipes/recipe_peanutsquares`


 Answer any questions that remain before proceeding to the next lesson.


------

### 10. Break (0:15)

------

### 11. Instructor Do: grep Command (0:10)

Welcome students back from break and remind them that the `find` command only searches for the names of files, not the contents within.

However, IT and security professionals are often tasked with searching for specific data inside of a file.

  - For example: You might be tasked with finding out if a specific user logged in on a specific day. You would first find the access log file for that day and then need to verify if the specific user was inside that log file.

Explain that we have previously used preview commands, such as `head`, `more`, `tail`, and `less`, in order to view a file's contents. The challenges of using preview commands to search for data inside a file include:

  - Files that are large in size take a long time to scan for data.

  - If you have more than one file to scan, it can take a long time to preview multiple files.

  - Manually previewing and scanning files invites human error. Even the best security professionals can overlook a data point if it blends with the other data in the file.

Explain that there is a command called `grep` that allows us to search within a file or multiple files to find a specific data point.

Explain how `grep` works by covering the following:

  - `grep`, which stands for 
  "global regular expression print," is a command to search for data inside of files.

  - `grep` by default returns the entire line that the desired data point is found in.

  - `grep` by default will only search for data in the current directory and not in sub-directories.

We will now walk through the syntax for the various `grep` methods of finding a data point.

#### Syntax for grep

Begin by showing the basic syntax for `grep`:  

1. `<grep   data_point    File_to_search_inside>`

    - In this syntax, `grep` is used to find a specific data point within a **single** file.

    - Next, we'll run through a few examples of the `grep` command, highlighting the various features and options we can use.

2. `grep bob log1.txt`

    - In this example, we are using `grep` to find the lines in which the user `bob` is mentioned in the file `log1.txt`.

    - Explain the syntax is:
        - `grep`: The command being run.
        - `bob`: The specific data point being searched for.
        - `log1.txt`: The file being searched for the data point.

    - Explain that after this command is run, all the lines where the data point `bob` was found inside of the file `log1.txt` will be displayed.

    - Further explain that if no matches of `bob` are found in the file, nothing will be returned.


3. `grep bob *.txt`

    - In this next example, we are using  `grep` to find a specific data point within **multiple** files.

    - Specifically, we are using `grep` to find where `bob` exists within in all `.txt` files.

    - Explain the syntax:

        - `bob` is the specific data point being searched for.

        - `*.txt` is the wildcard. `*` indicates that the command will search through all files that end with `.txt`.

    - Explain that after this command is run, it will display the files where the value of `bob`  was found, followed by the lines where it was found inside of all the `.txt` files.


4. `grep -i bob *.txt`

    - Ask class if they can figure out what this command does.

    - Explain or confirm that this `grep` command can be used to find a **case-insensitive** specific data point within multiple files.

    - Specifically, this command finds the lines where the user `bob` or `BOB` exist in all TXT files.

    - Explain the syntax:

      - `grep`: The command being run.

      - `-i`: The option for `grep` that indicates case insensitivity.
      - `bob`: The specific data case-insensitive point being searched for.
      - `*.txt` is the wildcard of `*` that indicates it will search through all files that end with `.txt`.

5. `grep -il bob *.txt`

    - In the final example, we are showing that `grep` can be used to find the **file name** that contains a specific data point.

    - Specifically, this command only outputs the **file name** where the user of `bob` or `BOB` exist within all TXT files. When this command is run, it will only display the names of the file that contain `bob`.

    - Explain the syntax:
      - `grep`: The command being run.

      - `-il`: Two options placed together.
        - `i`: An option for grep that indicates case insensitivity.
        - `l`: An additional option that indicates to only return the file name.

        - Note that `i` and `l` are two separate options. However, we can place them under a single hyphen.  

      - `bob`: The specific data point.
      - `*.txt`: The wildcard.

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check. 


#### grep Demonstration Setup

Explain that we will now demonstrate how to use the `grep` command with the following scenario:

  - You manager has now asked for your help with a security investigation into an illegal money transfer that took place on May 17.

  - They told you that the suspect, Sally Stealer, stated that she has never logged in to the company's banking website and also said she definitely did not transfer any money on May 17.

  - You must use the `grep` command to search the application logs to see if Sally Stealer logged in on that day and, if so, whether she transferred any funds.

#### grep Demonstration

1. Navigate into the instructor directory called `grep_demonstration`. Run:

   - `cd /03-instructor/day2/`
   - `cd grep_demonstration`

2. The next step is to see all the log files that exist in this directory. Run `ls`.

    - Point out this will show three log files, two for `0517`, and one for `0519`.

3. Explain that we will first use `grep` to see in which files the user Sally Stealer appears. This will show if Sally has ever logged in.

    - Type the following command:

       - `grep -il Sallystealer *`

    - Explain the syntax or call on students to explain it:

      - `grep`: The command being run.

      - `-il`: `i` is an option for `grep` that indicates case insensitivity. `l` indicates to only return the file names.

           - Note that `i` and `l` are two separate options. However, we can place them under a single hyphen.  

      - `Sallystealer`: The specific data point being searched for.

      - `*`: The wildcard, indicating a search for all files in the current directory

4. Run the command and point out the results show two files that clearly prove that Sally Stealer does have activity.

      - `banklogs0517`
      - `banklogs0519`

5. Next, we need to prove if and when Sally Stealer transferred any funds on the day of May 17th.

    - Explain that for this example, we will search for the word "transfer."

    - Type the following command:

       - `grep -i transfer banklogs0517`

    - Explain the syntax:
      - `grep`: The command being run.

      - `-i`: The option indicating case insensitivity.

      - `transfer`: The specific data point being searched for.

      - `banklogs0517`: The file we will search through, since the transfer happened on `0517` and this was the only file from this date in which Sally Stealer appeared.

6. Run the command and point out the results show the following line:

    - `81.220.24.207 - - [17/May/2015:10:05:52 +0000] "SALLYSTEALER : Transfer funds : $1,000,754 from Company DDA 012  to Personal SAV 876:`

    - Note that this clearly proves that Sally Stealer did transfer funds from a company account to a personal account.   

    - Also point out that this happened at `10:05:52` on  May 17th.  

#### Demonstration Summary   

 Summarize this demonstration by noting that we covered the following:

   -  `grep`: Command-line command to find a data point inside of a file.
      - The basic syntax:

         `<grep   data_point    File_to_search_inside>`
       - `grep` by default will return the **whole line** containing a data point.
   - `i`: Option indicating to search for the data point with case insensitivity.
   - `l`: Option indicating to return only the file names of the files containing the data point.

Take a moment to address questions before proceeding.

Explain that in the next command line activity, students will get to use the `grep` command to search for specific ingredients inside several recipes found in the last activity.

### 12. Student Do: grep Activity (0:15)

Explain the following scenario to students:

- You continue to be security analyst at Wonka Corp.

- Your manager found out that Slugworth Corp recently made a large purchase of guavaberries. They currently do not have any candy that includes guavaberries, but Wonka does.

- Your manager suspects that Slugworth is trying to reproduce some of Wonka's secret recipes that use guavaberries.

- Your task is to determine which of the secret recipes contain guavaberries in their list of ingredients.

Send students the following:

- [Activity File: grep](Activities/13_grep_activity/unsolved/readme.md)
- [Directories/Files: grep](Resources/finding_your_way.zip)


### 13. Instructor Review: grep Activity (0:07)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 


The goal of this activity was to practice using the various syntax of the `grep` command to search for data points inside of files.

Explain that this activity required the following steps:

  - Finding a data point inside of multiple files.
  - Finding a data point inside of multiple files with case insensitivity.
  - Finding a combination of data points inside of multiple files.


Send students the following:
- [Solution Guide: grep](Activities/13_grep_activity/solved/readme.md)

#### Walkthrough

Explain that the first step is to navigate into the folder on your VM where the recipes are located.

- To complete this, run the following commands:

  - `cd /03-student/day2/`

  - `cd finding_your_way`

  - `cd PeanutButtery.net/other/disregard/wonkasecretrecipes`

Now we need to write a command to search within the recipes for the ingredient "guavaberries."

- Explain the command to search for them in this directory is:

     `grep -i guavaberries *`

  - Explain the syntax is:
     - `grep` is the command being run.
     - `-i`is an option for `grep` that indicates case insensitivity.
     - `guavaberries` is the specific data  point being searched for.
     - `*` is a wildcard to search through all files in the current directory.

Run the command and point out the results show all four files containing the ingredient guavaberries:

  - `recipe_crunchybars:5 guavaberries`

  - `recipe_peanutballs:4 guavaberries`

  - `recipe_peanutsquares:8 guavaberries`

  - `recipe_yumbars:2 guavaberries`


Explain that these results indicate the file name of the recipe that includes guavaberry, followed by a colon and the whole line in which the word "guavaberries" appears.    


#### Bonus     

Explain that for the bonus, we will adjust the `grep` command to search for the word "optional" if it appears in the same file, to indicate if guavaberries is an optional ingredient.

  - Explain that the command to search for multiple data points in a file is:

       `grep -i 'guavaberries\|optional' *`

   - Cover the syntax:

     - `grep`: the command being run.
     - `-i`: An option for `grep` that indicates case insensitivity.
     - `guavaberries`: The first specific data point being searched for.

     - `\|`: Indicates the "OR". In this case, we are searching for "guavaberries" `OR` "optional."

        - Explain multiple values can be searched for by including this symbol between each value.

     -   `optional`: The second data point being searched for.

     - `*`: The wildcard.

-  Run the command and point out the results show all four files, but five lines contain "guavaberries" OR "optional":

    - `recipe_crunchybars:5 guavaberries`
    - `recipe_peanutballs:4 guavaberries`
    - `recipe_peanutsquares:8 guavaberries`
    - `recipe_peanutsquares:  Note: optional - another berry that can be substituted is blueberries`
    - `recipe_yumbars:2 guavaberries`

- Point out that this shows the `recipe_peanutsquares` has an "optional" note that blueberries can substitute guavaberries.

- Summarize that these results and indicate that Peanut Squares is a recipe that Wonka should be the concerned about in the near future, as Slugworth can make this without having guavaberries.



Answer any questions that remain before proceeding to the next lesson.


### 14. Instructor Do: Combining Commands with Piping (0:07)

Explain to the class that today we covered many powerful command line commands that IT and security professionals use, such as:

 - `find`: Searches for file names or directories.
 - `grep`: Searches for data points inside of files.
 - `wc`: Counts lines or words inside of a file.

Explain that security professionals are often tasked with combining these commands to complete certain tasks.

  - For example: You may be asked to determine if a user exists in a log file, and how many times that user appears in the log file.

    - We can use the `grep` command to see _if_ a user appears in the log file by redirecting the results into an output file.
    - We can use the `wc -l` command to determine _how many times_ the user appears in the file by counting the results of this output.


Rather than running these multiple commands separately, we can combine them using **pipes**. Explain how pipes work by covering the following:

  - A pipe takes the output of one command and redirects it to another command, in order to complete additional tasks on the output.

  - A pipe is designated with the following symbol : `|`

  - Multiple pipes can be used in a single command.

  - Pipes are unidirectional, meaning the processing of the data only flows from left to right through the pipeline.


#### Pipes Demonstration Setup

Explain that we will now demonstrate how to use pipes with the following scenario:

  - Your manager at ACME Corp has tasked you with continuing the previous investigation against Sally Stealer. They believe she may have transferred other large amounts of money.

  - Your manager created a single file called `largetransfers.txt`  that contains all transfers over one million dollars.

  - Your manager asked you to count how many of those transfers belong to Sally Stealer.

 #### Pipes Demonstration

1. The first step is to navigate into the instructor directory called `pipes_demonstration`.

   - `cd /03-instructor/day2/`
   - `cd pipes_demonstration`

2. Next, we will use the following `grep` command to identify the transfers that belong to `SallyStealer`.

    - `grep -i SallyStealer largetransfers.txt`

    - Run the command and show that it returns many of Sally's large transfers.

4. Next, we will use pipes to add an additional command to count the transfers from the previous query.

   - Type the following:

      - `grep -i SallyStealer largetransfers.txt | wc -l `

   - Explain the syntax:

     - `grep -i "SallyStealer largetransfers.txt`: Lists the lines that contain the case-insensitive pattern "SallyStealer."


     - `|`: Pipes (redirects) the results into the next command.

     - `wc -l`: Counts the number of lines resulting from the previous output.

5. Run the command and point out that the result is now the count of `9`.

#### Pipes Demonstration Summary

 Summarize this demonstration by explaining that we covered the following concepts:

  - A pipe takes the output of one command and redirects it to another command in order to complete an additional task on the output.

  - A pipe is designated with the following symbol : `|`

  - Multiple pipes can be used in a single command.

  - Pipes are unidirectional, meaning the processing of the data flows from left to right through the pipeline.


Check for questions before proceeding.

Explain that in the final command line activity, students will get to use all of the commands learned today to assist Wonka Corp with creating an evidence file for the authorities to charge Slugworth with a cyber crime.



### 15. Student Do: Gathering Evidence (0:15)


Explain the following to students:

- You continue to be a security analyst at Wonka Corp.

- Wonka Corp believes they have enough evidence to send to the authorities to charge Slugworth with a cyber crime.

- Your task is to gather several points of evidence from your file systems that can be provided to the authorities to prove Slugworth is stealing data.

Send students the following instructions:

- [Activity File: Gathering Evidence](Activities/16_Gathering_Evidence/unsolved/readme.md)
- [Directories/Files: Gathering Evidence](Resources/Gathering_Evidence.zip)


### 16. Instructor Review: Gathering Evidence Activity (0:07)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 


The goal of this activity was to practice all of the terminal commands learned so far to complete a security related task.

Explain that this activity required the following steps:

  - Making a directory.
  - Searching for data points inside of files.
  - Counting data points inside of files.
  - Combining tasks together with pipes.
  - Using redirection to place results in a file.
  - Moving files.
  - Concatenating files.

Share the solution file with the class:
- [Solution Guide: Gathering Evidence](Activities/16_Gathering_Evidence/solved/readme.md)


#### Walkthrough

Explain that the first step is to navigate into the `/03-student/day2/Gathering_Evidence/` folder on your VM.

- To complete this, run the following commands:

  `cd /03-student/day2/`

  `cd Gathering_Evidence`

In the `Gathering Evidence Folder`, make a directory called `Slugworth_evidence`.       

  - `mkdir Slugworth_evidence`

Next, move into the email directory and list the emails referencing "slugworth."

  - Place the results in a file called `slugworth_web_evidence`.

    - `cd email`

    - `grep -il slugworth * > slugworth_email_evidence`


Next, in the same file, add the count of emails that contain "slugworth."


  - `grep -il slugworth * | wc -l >> slugworth_email_evidence`


Explain that the next step is to place the following data into a new file called `slugworth_web_evidence`:
- Which web log file contains Slugworth's IP.
- Number of times Slugworth's IP is found in the files.


 Access the web_logs directory by going back a directory, `cd ..` , then `cd web_logs`

- To find the log files that have the IP of `13.16.23.234` and place them in a new file, `slugworth_web_evidence`, run:

  - `grep -il 13.16.23.234 * > slugworth_web_evidence`


- Next, to append to this file the count of records that have the IP:


  - `grep -i 13.16.23.234 * | wc -l >> slugworth_web_evidence`


- Explain that next, we will move both of the evidence files over to the `Slugworth_evidence` directory that we created.

    - `cd ../../`
    - `mv ./Gathering_Evidence/email/slugworth_email_evidence ./Gathering_Evidence/Slugworth_evidence/`
    - `mv ./Gathering_Evidence/web_logs/slugworth_web_evidence ./Gathering_Evidence/Slugworth_evidence/`


- Explain the next step is to navigate to the `Slugworth_evidence` directory and concatenate the files into a single file called `Slugworth_evidence_for_authorities`.

  - `cd Gathering_Evidence/Slugworth_evidence/`

  - `cat slugworth_email_evidence slugworth_web_evidence > Slugworth_evidence_for_authorities`

-  Next, explain the last step is to confirm the data placed in the final file for the authorities:

    - `cat Slugworth_evidence_for_authorities`

    Output should resemble:

     `email5`  
     `email7`     
     `email8`  
     `3`  
     `0518weblog`  
     `22`

- Finally, explain that while this file contains all the data needed for the authorities, this is not obvious.  

- Explain that in tomorrow's lesson, we'll learn how to edit the contents within a file to add descriptions of this evidence.         



Answer any questions that remain before moving on the the final class wrap up.


### 18. Optional - Instructor Do: Review Key Commands (0:00)

- If time permits, for the last 10 minutes of class return to the slides to guide students through a brief review of the commands we covered today:

     - `man`
     - `find`
     - `grep`
     - `wc`
     - `pipes`

- Remind the class that the commands learned today are critical to conducting many tasks that IT and security professionals do on a daily basis, and the best way to get comfortable with them is to practice

- Explain to the class that practice outside of class is required to build proficiency!

-  Conclude the class by explaining that in the last day of the terminal unit, we will cover an introduction to scripting, which will teach additional terminal commands to automate many of the tasks learned so far.

Answer any questions that remain before concluding the class.

-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
