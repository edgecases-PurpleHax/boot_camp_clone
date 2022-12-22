## 6.2 Lesson Plan: Ifs and Lists (Bash Scripting Continued)

### Lesson Overview

Today's class will expand on our bash scripting skills to collect logs, audit and reconfigure a Linux machine, and take steps to harden the system.

### Lesson Objectives

By the end of class, students will be able to:

- Read bash and interpret scripts.

- Use variables in their bash scripts.

- Use `if` statements in their bash scripts.

- Use lists in their bash scripts.

- Iterate through lists with a `for` loop to do useful things like install a list of packages.

### Instructor Notes

- This lesson will be the second and final class about bash scripting. The lessons have been configured in a way that should allow non-technical students to get a basic grasp of scripts and reading them, such that they don't get intimidated by the syntax of if statements and `for` loops.

- For the more technically inclined students, they should be able to increase their skills considerably and have two complete, useful scripts by the end of today's class.


### Lab Environment

- You will use your local Vagrant virtual machine for today's activities. Please note that instructors and students have different access credentials.

  - Instructor access:
    - Username: `instructor`
    - Password: `instructor`

  - Student access:
    - Username:`sysadmin`
    - Password: `cybersecurity`


### Lesson Slideshow

The slides for today can be viewed on Google Drive here: [6.2 Slides](https://docs.google.com/presentation/d/1U0yM-B74WfS2YwWF3NO5ju32_lQSK0SvwDBaklqfZ2A).

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for these document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker for todays lesson can be viewed on Google Drive here: [Linux 3 Day 2 Time Tracker](https://docs.google.com/spreadsheets/d/1oJmVHrawxXCB1qOlj0OrlfxjDs30EKHEoOgsV1nAh10/edit#gid=1145703143).


### Student Guide

Distribute the student-facing version of the lesson plan: [6.2 Student Guide](studentguide.md)


---

### 01. Instructor Do: If Statements and Exit (0:25)

Welcome students to class and overview of today's topic. We are on the second day of bash scripting and today we will work on making our scripts a bit more sophisticated. By the end of today, students will have two bash scripts that they will be able to use on their own machines in the future.

Remind class that scripting plays an important role in many cybersecurity roles:

- Sysadmins use them to setup and configure machines.
- Forensic Investigators use them for investigations.
- Pen testers use them to probe networks and find vulnerabilities.

These and other tasks require advanced bash skills. Today, we'll continue to develop our scripting skills in order to incorporate the following into our script:

- `if` statements and the flow control based on criteria.

- `for` loops to complete repetitive tasks.

- Automating the set up of a machine.

Explain that these programming concepts apply to most other languages, and can help cyber professionals with a general understanding of what a script is doing.

#### Criteria and Decision Making

First, we will need our scripts to make decisions based on specific criteria.

  - For example, our scripts can check for the existence of users, directories, files, or permissions. Based on these results, the script can then take specific action(s) or even stop execution.

In order to accomplish this feature, we will need to learn a few useful scripting techniques:

- Using `if` statements.
- Using `if/else` statements.
- Comparing multiple conditions using `if/else` statements.

Explain that `if` is used in our scripts as part of a **conditional** statement. Based on a specific condition (or criteria), the script will take a certain action.

- _If this command runs, then exit the script_.

- _If this file exists, then run that command_.

Explain that we will give a quick overview of each of technique and then provide a few specific demonstrations.

- In this demo, we will also encounter **comments** and the `exit` command, which we will cover.

#### `if` Demonstration

Start with comments and show the following slide:

```bash
# this is a comment
```

- Explain that a **comment** is a non-executable line of text within the script.

- These comments can help the developers remember what their script is supposed to do when they read it later.

- Commenting is best practice and should be regularly used to explain what the script is doing.

Explain that to create a comment, we place a `#` in front of any line we want to be a comment. Once `#` is place inform of the line, bash will ignore this line.

- When lines are ignored by bash because of comment symbols, we say those lines are **commented out**.

Now, move onto `if` statement syntax.

Show the following slide:

  ```bash
if [ <condition> ]
then
  <run_this_command>
fi
  ```

Break down the syntax:

- `if`: initiates our if statement.
- `[]`: encapsulates the condition.
- `then`: runs following commands _if_ the condition is met.
- `fi`: ends the if statement.


Show the following slide:

```
 if [ 5 -gt 8 ]
 then
    echo "That doesn't make sense!"
 fi
```

Break down the syntax:
- `if [ 5 -gt 8 ]`: This will check to see if 5 is greater than 8.
- `then`: runs following commands _if_ the condition is met.
- `echo "That doesn't make sense"` Will have the script print to the screen "That doesn't make sense".
- `fi`: ends the if statement.

Point out that the script is looking for a response that is over 8. Because our response is under 8, the script will return a message saying "That doesn't make sense".

#### `if` / `else`

Explain that sometimes if the condition is not met, we want the script to do something else.

- For these scripts, we can use `else`.

Show the following slide:

```bash
if [ <test> ]
then
  <run_this_command>
else
  <run_this_command>
fi
```

Break down the syntax:
- `if [ <test> ]`: if this test is true...
- `then`: run the following command(s).
- `else`: if `[ <test> ]` is false, the run the following command(s).
- `fi`: ends the if statement.

Show the following slide:

```
if [ 5 -gt 4 ]
then
    echo "That is correct!"
else
    echo "That doesn't make sense!"
 fi
```

Break down the syntax:
- `if [ 5 -gt 4 ]`: This will check to see if 5 is greater than 4.
- `then`: runs following commands _if_ the condition is true.
- `echo "That makes sense"`: Will have the script print to the screen "That makes sense".
- `else`: runs following commands _if_ the condition is **false**.
- `echo "That doesn't make sense!"`: If five were less then four, then the script would print "That doesn't make sense!".
- `fi`: ends the if statement.

#### Combining Conditions with `&&` and `||`

Explain that we can check for multiple conditions using the `&&` (and) and `||` (or) operators.

 **Pause for a knowledge Check**

- :question: Pose the following question to the class: 

  - "Does anyone remember how a string of commands seperated by the `;` or the `&&` is affected?" 

    > Answer: Recall that the `;` will run each command back to back, no matter the outcome of the commands. Therefore, using a `;` to chain commands together may not always give you the correct outcome.

- In other words, _if_ the first command completes, then system sees that as a 'true' and _then_ it moves onto the second command.

For this next example, both `[conditions]` have to be true in order for the following commands to run.

Show this slide:

```bash
if [ <test1> ] && [ <test2> ]
then
   <run_this_command>
fi
```

Show the following slide:

```
 if [ 5 -gt 4 ] && [ 4 -gt 3 ]
 then
    echo "That makes sense."
 else
    echo "That doesn't make sense."
 fi
```

Break down the syntax.
- `if [ 5 -gt 4 ]`: This will check to see if the first condition is true.
- `&&` tells the script, if the first condition is true **and** the second condition is true, run the next line of the script.
- `then`: runs following command(s) _if_ both conditions are true.
- `echo "That makes sense."`: Will have the script print to the screen "That makes sense".
- `else`: runs following commands _if_ the condition is **false**.
- `echo "That doesn't make sense."`:  Will have the script print to the screen "That doesn't make sense".
- `fi`: ends the if statement.


Explain that if only one of the two (or more) conditions need to be met, then we can use the OR condition, indicated by the `||` symbol.

For this example, only [test1] or [test2] needs to be true.

Show the following slide:

```bash
if [ <test1> ] || [ <test2> ]
then
  <run_this_command>
else  
  <run_this_command>
fi
```

Break down the syntax:

- `if [ <test1> ]`: If this condition is true...
- `|| [ <test2> ]`: ...or this condition is true...
- `then`: then run the following command(s).
- `else`: otherwise (if both conditions are false), run the following command.
- `fi`: ends the if statement.


Show the following slide:

```
 if [ 5 -gt 4 ] || [ 4 -gt 3 ]
 then
    echo "That kinda makes sense."
 else
    echo "None of this makes sense."
 fi
```

Break down the syntax:

- `if [ 5 -gt 4 ]`: If this condition is true...
- `|| [ 4 -gt 3 ]`: ...or this condition is true...
- `then`: then run the following commands.
- `else`: otherwise (if both conditions are false), run the following command.
- `fi`: ends the if statement.


Move on to the next examples.

#### Creating Conditions

Explain that we will now cover how to design the conditions that are ruled `true` or `false`.  If the condition is true, the commands run. If the condition is false, the commands do not run.

Explain that we will compare these values using the following bash conditional expressions:

Show the following slide:

- `=` : Checks if two items are `equal`.

- `!=` : Checks if two items are `not equal`.

- `-d /path_to/directory` : Checks for existence of a directory.

- `-f /path_to/file` : Checks for existence of a file.

#### Equals To and Not Equals to

First we will cover `=`, `equals to`.

Show the following slide:

```bash
# If $x is equal to $y, run the echo command.
if [ $x = $y ]
then
  echo "X is equal to Y!"
fi
```

Break down the syntax:

- `if [ $x = $y ]`: If 5 is equal to 100...
- `then`: then, run the following command.
- `echo "X is equal to Y!"` The echo command that will run if the initial condition is met.
- `fi` ends the `if` statement.

Point out that this conditional _can_ actually be run as `[ 5 = 100 ]`, we are using variables here for the example.

Explain that if we wanted this test to return true, we can change `=` to `!=`, which stands for 'not equal to'.

Show the following slide:

Type:

```bash
# If x is not equal to y, exit the script
if [ $x != $y ]
then
  echo "$x does not equal $y"
fi
```
Break down the syntax:

- `if [ $x != $y ]`: If 5 is not equal to 100...
- `then`: then run the following commands.
- `echo 5 does not equal 100`: The command that is run.
- `fi`: end the `if` statement.

Explain that we also can use `=` and `!=` to compare strings.

- In this example, we will use the **`exit` command** to stop the script if the test is true.

- `exit` will stop the script at the point at which it is placed in the script.

- `exit` is commonly used to halt execution based on a condition.

Show the following slide:

```bash
# If "str1" is not equal to "str2", run the echo command and exit the script.
if [ "$str1" != "$str2" ]
then
  echo "These strings do not match."
  echo "Exiting this script."
fi
```

Break down the syntax:


- `if [ $str1 != $str2 ]`: If `$str1` is not equal to `$str2`...
- `then`: Then run the following command(s).
- `echo "These strings do not match.`
- `echo "Exiting this script."` 
- `exit`: Stop running this script, if the condition is true (which it is).
- `fi`: closes out `if` statement

#### Greater Than and Less Than

Next we will cover the `-gt` (greater than) and `-lt` (less than) conditions.

In this example, if `x` is greater than `y`, then we will run an echo script.

Show the following slide:

```bash
# If x is greater than y, run the echo command
if [ $x -gt $y ]
then
  echo "$x is greater than $y".
fi
```

Break down the syntax:

- `if [ $x -gt $y ]`: If `x` is greater than `y`
- `then`: Then, run the echo command.
-  `echo "$x is greater than $y":` 

Show the following slide:

```bash
#check if x is less than y
if [ $x -lt $y ]
then
  echo "$x is less than $y!"
else
  echo "$x is not less than $y!"
fi
```

Break down the syntax:

- `if [ $x -lt $y ]`: if `$x` is less than `$y`...
- `then`: Then run the following command.
- `echo "$x is less than $y!"`: run this echo command is the condition is true.
- `else`: Otherwise, run the following command.
- `echo "$x is not less than $y!"` run this echo command if the condition is false.

Point out that in this example, if `x` is less than `y`, an echo command will run. If the condition is false, the `else` code block runs a different echo command.

 **Pause for a knowledge Check**

- :question: Pose the following question to the class: 

  - "What's the difference between an `if` and an `else` statement?" 

    > Answer: The difference is that if the first `if` is true, then the `else` won't be executed, even if the `else` is true also. The `else` will only execute if the `if` that proceeded it was false.

Pause and ask if the students have any questions.

#### Checking Files and Directories as part of Conditional Statements

Explain that we will now cover how to check for files and directories using the following options:

- `-f` to check for files.

- `-d` to check for directories.

In the following examples, we will check if the following directories and files exist. If they do, they we will run echo commands.

Show the following slide:

```bash
# check for the /etc directory
if [ -d /etc ]
then
  echo The /etc directory exists!
fi
# check for my_cool_folder
if [ ! -d /my_cool_folder ]
then
  echo my_cool_folder is not there!
fi
# check for my_file.txt
if [ -f /my_file.txt ]
then
  echo my_file.txt is there
fi
```

Break down the syntax for each of these:

- `if [ -d /etc ]`:

  - If the `/etc` directory exists, run the following echo command.

- `if [ ! -d /my_cool_folder ]`:

  - If `/my_cool_folder` does not exist, run the following echo command.

- `if [ -f /my_file.txt ]`:

  - If the file `/my_file.txt` exists, then run the following echo command.

Explain that these arguments can be very useful for checking if files and folders exist before you create or remove them.

#### Built-In Variables and Command Expansions

Lastly, explain that we can use built-in variables and command expansions inside our tests.

In the following three examples, we will use these variables and command expansions to verify:

- The current user's username

- The current user's UID

- The username of the user running the current script

Show the following slide:

```bash
# if the user running this script is not the sysadmin user, and then run an echo command
if [ $USER != 'sysadmin' ]
then
  echo you are not the sysadmin!
  exit
fi
```

Breakdown the syntax:

- `if [ $USER != 'sysadmin' ]`: If the user running this script is **not** the sysadmin user, then run the following echo command, and halt execution.

Show the following slide:

```bash
# if the uid of the user that ran this script does not equal 1000, run the echo command
# we use '-ne' for integer comparison
if [ $UID -ne 1000 ]
then
  echo "Your UID is wrong."
  exit
fi
```

Breakdown the syntax:

- `if [ $UID -ne 1000 ]`: If the `uid` of the user that ran this script does not equal `1000`, then run the following echo command and halt execution.

Show the following slide:

```bash
# if the sysadmin user is running this script, run the echo command
if [ $(whoami) = 'sysadmin' ]
then
  echo 'you are the sysadmin!'
fi
```

Breakdown the syntax:

- `if [ $(whoami) = 'sysadmin' ]`: If the sysadmin user is running the current script, then run the following echo command.

Before proceeding to the next task, ask class if there are any questions.

### 02. Student Do: Variables and If Statements (0:20)

Explain the following to the students:

- In the previous class, you created your first bash script, edited $PATH variables to create custom commands and added aliases to your `~/.bashrc` file.

- Now, we will add variables and conditional `if` statements to our scripts.

`If` statements will improve our scripts by allowing us to:

- Check if a file or directory exists before we create it.
- Check what user has run the script.
- And more...

To complete this activity, you will create variables and if statements that satisfy given requirements and use them in your script.

Send students the following files:

- [Variables and If Statements.md](Activities/03_STU_Var_and_if/Unsolved/Readme.md)

### 03. Instructor Do: Variables and If Statements Review (0:10)

:bar_chart: **Comprehension Check**: Run a class poll to evaluate the class's comprehension and ability to complete this activity. 

This activity had students work with `if` statements and variables, implementing them into their script if possible.

Explain that using these tools will improve scripts, making them more functional and logical.

 Variable and If Statements Solution Guide

Using the following guide, review the solution to the previous activity:

- [Solution Guide](Activities/03_STU_Var_and_if/Solved/Readme.md)

Log into the lab environment with the username `instructor` and password `instructor`.

- Move into `~/Cybersecurity-Lesson-Plans/Linux3-Demos`

- Open the `sys_info.sh` script from the previous class using `nano`.

- Run `nano sys_info.sh`

#### Walkthrough

#### Using Variables

`1.` Create a variable to hold the path of your output file.

  - Replace the output file path for each command with your variable.

Type:

- `output=$HOME/research/sys_info.txt`

- We can now refer to this variable throughout the script. Instead of using `> /research/sys_info.txt`, we'll use `> $output`.

Break down the syntax:

  - `output=` This is the variable assignment. Remind students that there can be no spaces on either side of the `=` in bash.
  - `$HOME` This is a built-in variable that is equal to `~` or the home folder path of the current user.
  - `/research/sys_info.txt` This is the path to our output file.

Now, we'll replace the output file path for each command with `> $output`:

  ```bash
  echo "A Quick System Audit Script" >> $output
  date >> $output
  echo "" >> $output
  echo "Machine Type Info:" >> $output
  echo -e "$MACHTYPE \n" >> $output
  echo -e "Uname info: $(uname -a) \n" >> $output
  echo -e "IP Info:" >> $output
  ...
  ```

#### Using If Statements

`1.` Create an if statement that checks for the existence of the `~/research` directory. If the directory exists, do nothing. If the directory does not exist, create it.

  - Remove the line in your script that creates this directory.



First, remove:

  `mkdir ~/research 2> /dev/null`


Then, replace it with an if statement that checks for the existence of the `~/research` directory.

  ```bash
  if [ ! -d $HOME/research ]
  then
  mkdir $HOME/research
  fi
  ```

Break down the syntax:

- `if` initiates the `if` statement.
- `[]` square brackets surround our conditional statement.
- `!` reverses the conditional statement that follows. (If this directory does _not_ exist...)
- `-d` checks for the existence of the following directory.
- `$HOME/research` is our $HOME variable with the `research` directory appended.

It comes together as `if [ ! -d $HOME/research]`: "IF, NOT, Directory, ~/research" or "If the directory ~/research does not exist".

- `then`: if the condition is met, run the following command.
- `mkdir $HOME/research` is the command run if `[ ! -d $HOME/research]` is `true`.
- `fi` to close out our if statement

Point out that by design, _if_ the directory exists, the `if` statement doesn't trigger, so nothing happens. It is only if the directory _does not_ exist, that something happens. We don't need to specify that nothing happens if the directory _does_ exist.


Ask if there are any questions at this point.

`2.` Create an `if` statement that checks for the existence of the file `~/research/sys_info.txt`.

- If the file does not exist, do nothing.

- If the file does exist, remove it. (This will ensure that the script always creates a new file.)

**Solution**:

```bash
if [ -f $output ]
then
  rm $output
fi
```

Break down the syntax:

- `if [ -f $output ]`: "If the file $output exists..."
- `then rm $output`: "...then remove the output file"
- `fi` ends the `if` statement.


Pause again and ask if there are questions before moving onto the bonus.

#### Bonus Variables

Create a variable to hold the output of the command: <code>`ip addr | grep inet | tail -2 | head -1`.</code>

  - Replace this command in your script with your new variable.

Run:

  - `ip=$(ip addr | head -9 | tail -1)`.

  - Now, when the script runs, we have the IP info stored into a variable `ip`. We can call this variable with `$ip` and print it's contents with `echo $ip`.

Breakdown the syntax:

- `ip=` is our variable assignment
- `$()` is our expansion syntax that tells bash to "run this command first"
- `ip addr | head -9 | tail -1` is our compound command from the last class that gives us the IP address.

Now, we'll find the line in the script where this command runs and replace it with `echo $ip`:

  ```bash
  echo -e "IP Info:" >> $output
  echo -e "$ip \n" >> $output
  ```

Compare the above to what the code was previously. Note how much more streamlined the new code is.

```bash
echo "IP Info: $(ip addr | head -9 | tail -1) \n" >> ~/research/sys_info.txt
```

Create a variable to hold the command: <code> find /home -type f -perm 777 </code>

  - Replace this command in your script with your new variable.

Run:

- `execs=$(find /home -type f -perm 777)`

- This gives us the list of `exec` files in a variable `execs`.

- We can call it using `$execs` and print it's contents using `echo $execs`.

Now, we'll replace the `find` command in the script with the new syntax:

```bash
echo -e "\nexec Files:" >> $output
echo $execs >> $output
```

Point out that we only need to use the `-e` flag for echo if we want to use `\n` to create a new line.
The `-e` flag by interpretes backslash escapes.


Pause and ask the students if they have any questions about creating or using variables before moving on to `if` statements.

#### Bonus If Statement

- Protect the script from root! Create an `if` statement that checks if the script was run using `sudo`.
  - If it was running with `sudo`, exit the script with a message that tells the user not to run the script using `sudo`


First, we'll create an `if` statement that checks to see if the script was run using `sudo`.

```bash
if [ $UID -ne 0 ]
then
  echo "Please do not run this script with sudo."
  exit
fi
```

Break down the syntax:


- `if [ $UID -ne 0 ]` "If $UID does not equal zero..."
  - `$UID` variable will print the UID of the user. The root user if always 0, making this an easy conditional to check.
- `then echo "Please do not run this script with sudo."` ...then print a message to the user.
- `exit`: Stops the script.
- `fi`: End the if statement.

Point out that we do not need to specify that nothing will happen if the user is not `root`.

There are a number of ways to write this statement. Provide a few other examples:

- `if [ $USER = 'root' ]` will check the contents of the `$USER` variable against 'root'.

- `if [ $(whoami) = 'root' ]` will check the output of the `whoami` command against 'root'.

At this point, your script should look similar to this:

```bash
#!/bin/bash

#Check if script was run as root. Exit if false.
if [ $UID -ne 0 ]
then
  echo "Please run this script with sudo."
  exit
fi

# Define Variables
output=$HOME/research/sys_info.txt
ip=$(ip addr | grep inet | tail -2 | head -1)
execs=$(find /home -type f -perm 777 2> /dev/null)


# Check for research directory. Create it if needed.
if [ ! -d $HOME/research ]
then
 mkdir $HOME/research
fi

# Check for output file. Clear it if needed.
if [ -f $output ]
then
  rm $output
fi

echo "A Quick System Audit Script" >> $output
date >> $output
echo "" >> $output
echo "Machine Type Info:" >> $output
echo -e "$MACHTYPE \n" >> $output
echo -e "Uname info: $(uname -a) \n" >> $output
echo -e "IP Info:" >> $output
echo -e "$ip \n" >> $output
echo -e "Hostname: $(hostname -s) \n" >> $output
echo "DNS Servers: " >> $output
cat /etc/resolv.conf >> $output
echo -e "\nMemory Info:" >> $output
free >> $output
echo -e "\nCPU Info:" >> $output
lscpu | grep CPU >> $output
echo -e "\nDisk Usage:" >> $output
df -H | head -2 >> $output
echo -e "\nWho is logged in: \n $(who -a) \n" >> $output
echo -e "\nexec Files:" >> $output
echo $execs >> $output
echo -e "\nTop 10 Processes" >> $output
ps aux --sort -%mem | awk {'print $1, $2, $3, $4, $11'} | head >> $output
fi
```

Remind students that the point of this exercise is to get practice using variables and if statements and then incorporate them into the script they've been working on.

For students who found this activity challenging, encourage them to review this exercise at home.

Ask if there are any questions before moving on to lists and loops.

### 04. Instructor Do: Lists and Loops (0:20)

Remind students that throughout the past two days, we have been optimizing our scripts with combined commands and conditional statements.

- Each of these tools simplifies and expedites the day to day workload of system administrators.
- In the next section, we will continue to streamline daily practices by  incorporating iterative structures known as `for` loops into our script.

Explain that system administrators will often complete the same common tasks repeatedly.

- For example: A system administrator might need to run through all the users on a system and check the last time they reset their passwords.

Rather than repeat this task for each user, we can streamline our script with a `for` loop, to run the same command (checking the last password reset) for each user.

Explain how `for` loops work by covering the following:

- A **`for` loop** allows us to run a block of code multiple times in a row, without having to repeatedly type out that code.

- The code is run against a **list** that holds the items in the code block.

- The `for` loop will run once for each item in the list.


In the example of a system administrator checking the passwords of each user:

- The code to check the last time the passwords were reset would be the block of code.

- The users would be the items in the list.

- If there were 100 users, the `for` loop would run the code 100 times, checking the last password reset for each user.

Explain that this process of repeating code with a new item each time it is run is called **iteration**.



#### Lists and for Loops Demonstration

Explain that in the next walkthrough, we will create a list and use a `for` loop.

- Log into the lab environment with the username `instructor` and password `instructor`.

- Open the terminal.

Explain that before we create a loop, we first need to create a list to use.

Point out that bash has several ways that we can create lists. We are going to cover:

- Manually
- Command Expansion
- Brace Expansion

#### Manually Creating Lists

Explain that we will create a list by simply typing the items inside of a `( )`.

- Type: `(a b c d e)`

- Note: If students are used to writing in other languages, emphasize that in bash, there are no `,` in between list items.

Next, we will need to save this list to a variable.

- Run: `my_list=(a b c d e f)`

Now, we will use echo to access the items in our list using the following syntax:

- `echo ${my_list[0]}`

Explain the syntax:

- `{}`: In bash, we need surround the list with {}.

- `[0]`: Each item in the list is assigned a number, known as an **index**. The number assignment always starts at 0.

- In order access the item, we use `[]` with the index inside of it.

Explain that we will also place the `@` inside the brackets in order to access _all_ the items.

Provide some examples:

- Run: `echo ${my_list[0]}`

- Run: `echo ${my_list[4]}`

- Run `echo ${my_list[@]}`

Your output should be:

```bash
$ echo ${my_list[0]}
a
$ echo ${my_list[4]}
e
$ echo ${my_list[@]}
a b c d e f
```

Provide another example:

- Run: `my_list=('mon' 'tues' 'wed' 'thurs' 'fri')`

- Run: `echo ${my_list[0]}`

- Run: `echo ${my_list[4]}`

- Run `echo ${my_list[@]}`

Your output should be:

```bash
$ echo ${my_list[0]}
mon
$ echo ${my_list[4]}
fri
$ echo ${my_list[@]}
mon tues wed thurs fri
```

Break down the syntax:

- `$`: Used to access the variable
- `{}`: Tells bash that the variable is a list.
- `my_list`: The variable for our list.
- `[0]`: Indicated which item in the list we want to access. The items within the bracket beginning at zero moving from left to right in the list.
- `@`: Used to access all the items.

#### Command Expansion

Explain that we can also specify expansions in place of a list.

Point out that we are already familiar with command expansions like `$(ls)` which will return a list of files.

- Run: `echo $(ls)`

- Your output should be a list of files.

Point out that when we use command expansion, we can't access the items individually using the `[]` syntax, but we will see that we can access them with a loop in a few moments.

Explain that another way to get a list is with `brace` expansion. Brace expansion will give you a list numbers if you need them.

Run: `echo {0..5}`

Your output should be:

```bash
$ echo {0..5}
0 1 2 3 4 5
```

#### Loops Syntax

In this demonstration, we will incorporate a list into a `for` loop.


First, we'll cover the syntax of a `for` loop.

- Open the script named `ins_for_loops.sh`

- Run `nano ins_for_loops.sh`

Output should be:

```bash
# for <item> in <list>;
# do
#   <run_this_command>
#   <run_this_command>
# done
```
Break down the syntax:

- `for` initiates the `for` loop.

- `<item>` is a variable that holds each item in the list, one by one as the loop repeats. "item" can be named anything you want. `item` is common. `index` is common. or even just `i`.

- `in <list>` represents each item in the list.

- `;` the initial statement always closes with a `;`

- `do` run the commands that follow.

- `done` end our `for` loop.

#### for Loops examples:

Now we we will take a look at a few examples.

First let's make a list:

```bash
# list variables
months=(
    'january'
    'february'
    'march'
    'april'
    'may'
    'june'
    'july'
    'august'
    'september'
    'october'
    'november'
    'december'
)
days=('mon' 'tues' 'wed' 'thur' 'fri' 'sat' 'sun')
```

Explain that if you have a really long list, you can use this syntax where each list item is on its own line.

In the first example, we have a `for` loop that will print out all the months in a year.


```bash
#print out months
for month in ${months[@]};
do
    echo $month
done
```

Break down the syntax:

- `for` starts off our loop.
- `month` is our variable that will hold each string in the list of $months.
- `in ${months[@]}` represents every string in the list of months.
- `;` close the opening statement
- `do` run the commands that follow
- `echo $month` run this echo command. Point out that each time the loop runs, the `$month` variable holds the value of the next list item.
`done` close out our `for` loop.

 **Pause for a knowledge Check**

- :question: Pose the following question to the class: 

  - "Can anyone name three ways we can create lists in Bash?" 

    > Answer: We can create lists in Bash **manually** or by using **Command Expansion**, or by using **Brace Expansion**.

Ask if there are any questions here.

Ask the class if anyone knows what output of the following script will be.

```bash
#print out the days of the week
for day in ${days[@]}
do
    if [ $day = 'sun' ] || [ $day = 'sat' ]
    then
        echo "It is $day. Take it easy."
    else
        echo "It is $day. Get to work!"
    fi
done
```

Make sure to cover the syntax:

- `for day in ${days[@]}` for every item in the list of days.
- `do` run the commands that follow.
- `if [ $day = 'sun' ] || [ $day = 'sat' ]` _if_ the $day equals "sat" or the $day equals "sun".
- `then` run the command that follows.
- `echo "It is $day. Take it easy."` run this echo command.
- `else` _Otherwise_ run a different command.
- `echo "It is $day. Get to work!"` run this command.
- `fi` close our if statement.
- `done` close our `for` loop.

Move to the next examples and point out that we can use command expansion or brace expansion directly in place of the list.

```bash
# run a command on each file
for file in $(ls);
do
    ls -lah $file
done
```

Break down the syntax:

- `for file in $(ls);` first, run the command `ls` to get a list of files. Then, for each item(file) in that list.
- `do` the command that follows.
- `ls -lah $file` run this command. Remind the students that every time the loop comes around, `$file` will represent a different item from the list returned by the `ls` command.
- `done` closes out our `for` loop.

Discuss this syntax as needed until there are no further questions.

Ask the class if anyone knows what output of the following script will be.

```bash
# run an operation on each number
for num in {0..5};
do
    if [ $num = 1 ] || [ $num = 4 ]
    then
      echo $num
    fi
done

```

Be sure to cover each part of the syntax:

- `for num in` kicks off our `for` loop with a `num` variable.
- `{0..5}` _expands_ into a list: (0 1 2 3 4 5).
- `do` run these commands for each item in the list.
- `if [ $num = 1 ] || [ $num = 4 ]` _if_ the number is 1 or the number is 4.
- `then` run the command(s) that follow.
- `echo $num` run this command.
- `fi` close the if statement.
- `done` close the `for` loop.

Explain that in the next exercise, students will have the opportunity to create some `for` loops for practice.


### 05. Student Do: Lists and Loops (0:20)

Explain the following to students:

- In the previous activity, we added variables to our script and used `if` statements to check various conditions.

- Next, we use loops to automate repetitive tasks.


- To complete this activity, you will create several `for` loops that satisfy given requirements. If you get to the bonus task, you can incorporate a `for` loop into your script.

Send students the following activity file:

- [Lists and Loops Activity](Activities/06_STU_Lists_and_Loops/Unsolved/Readme.md)


### 06. Instructor Do: Lists and Loops Review (0:15)

:bar_chart: **Comprehension Check**: Run a class poll to evaluate the class's comprehension and ability to complete this activity. 

To complete this activity, students needed to create several `for` loops that satisfy given requirements.

There was also a bonus activity to incorporate a `for` loop into the sys_info.sh script.

Use the following solution to guide your review:
- [Solution Guide](Activities/06_STU_Lists_and_Loops/Solved/Readme.md)

Log into the lab environment with the username `sysadmin` and password `cybersecurity`.

#### Creating the Script File

Create a new file named `for_loops.sh` and open it with `nano`.

-  Run `nano for_loops.sh`.

Add the required `boiler plate` line at the top so your computer knows it's a bash script.

- Type `#!/bin/bash`.

Pause and ask the class if anyone has any questions about setting up the basic script file.

#### Create a Variable

Create a variable that holds a list of 5 U.S. states.

- Type `states=('Nebraska' 'California' 'Texas' 'Hawaii' 'Washington')`.

#### Creating a `for` loop

Create a `for` loop that checks for `Hawaii` in the list of states.

- **Solution**:

  ```bash
  for state in ${states[@]};
  do
    if [ $state == 'Hawaii' ]
    then
      echo "Hawaii is the best!"
    else
      echo "I'm not a fan of Hawaii."
    fi
  done
  ```

- Point out that unlike our previous if statements, if we want the script to _also_ take action if `Hawaii` is not there, we must use with `else`.

Break down the syntax:

- `for state in ${states[@]};`: Creates a temporary `state` variable that will be used to reference each item in the list of states.
- `${states[@]}`: surround the list with `${}`.
- `[@]`: referring to every item in the list.
- `do`: what will happen for each of the items in the `$states` list.
- `if [ $state == 'Hawaii' ]`: if the temporary variable `$state` equals `Hawaii`...
- `then echo "Hawaii is the best!"`: ...then run this message.
- `else echo "I'm not a fan of Hawaii."`: if the `if` statement is not true, then run this statement.
- `fi`: ends the `if` statement
- `done`: ends the `for` loop.

Ask if there are any questions about this syntax.

At this point, your `for_loops.sh` file should look similar to this:

```bash
#!/bin/bash

# Create Variables
states=('Nebraska' 'California' 'Texas' 'Hawaii' 'Washington')

# Create a loop that looks for 'Hawaii'
for state in ${states[@]};
do
  if [ $state == 'Hawaii' ];
  then
    echo "Hawaii is the best!"
  else
    echo "I'm not a fan of Hawaii."
  fi
done
```
</details>

#### Bonuses
Ask the class if anyone completed the bonuses. If so, ask some students to provide their solutions.

Make sure to cover the following:

Create a variable that holds a list of numbers from `0-9`

- Type `nums=$(echo {0..9})`.
- This equal to writing: `nums=(0 1 2 3 4 5 6 7 8 9)`.

Break down the syntax:

- `nums=` creates our `nums` variable
- `$()` runs the command inside _first_
- `echo` will output what follows
- `{0..9}` is a _brace expansion_  that will output the numbers from `0` to `9`.

Next, create a `for` loop that adds `2` to each number from the variable `nums`. The loop should also print out each number.

- **Solution:**

```bash
for num in ${nums[@]};
do
  new_num=$(($num + 2))
  echo $new_num
done
```

Break down the syntax:
- `for:` iniates our `for` loop
- `num:` a variable we are creating to temporarily hold each number in our list.
- Point out that this can be whatever we want: number, nm, n, or even just x could be used.
- `i` is commonly used to represent the word index.
- `in`: part of the `for` loop syntax: for index in list.
- `${nums[@]}` the list we created earlier. To get each item of a list, it must be surrounded with: ${}
- `[@]`: referring to every item in the list.
- `;`: closes the first part of our `for` loop.
- `do`: What will happen happen for each of the items in the $nums list.
- `new_num=$(($num + 2))` We are defining a new variable called new_num that takes each number from our list and adds two to it.
- `echo $new_num`:... then prints out the new number from above.
- `fi`: ends the if statement
- `done`: ends the `for` loop.


Next, create another variable that holds the output of the command `ls`

-  Type `ls_out=$(ls)`.
- This command assigns the output of the `ls` command to our new variable `ls_out`.

Now, create a `for` loop that prints out each item in your variable that holds the output of the `ls` command.

**Solution**:

  ```bash
  for x in ${ls_out[@]};
  do
    echo $x
  done
  ```

Break down the syntax:

- `for x in ${ls_out[@]};`: Creating a temporary variable `x` to hold each index of the list `$ls_out`. The list must be surrounded with `${}` and `[@]` refers to every item in the list.
- `do echo $x`: print the contents of `$x` each time it loops.
- `done` ends the `for` loop.

Point out that the `ls` command prints out each item by default, but we are using a loop redundantly here just to get the hang of using a `for` loop.

#### Super Bonus


Ask the class if anyone completed the super bonus. If so, ask some students to provide their solutions.


Make sure to cover the following:

- Instead of using `echo` to print out the variable that holds the output of the `find` command, we'll use a `for` loop to print out each file on its own line.


Open the `sys_info.sh` script and point out that we have our variable `$execs` defined as:

- `execs=$(find /home -type f -perm 777 2> /dev/null)`


Move to the part of the script that prints the output of this variable.

- Remove these lines:

  ```bash
  echo -e "\nexec Files:" >> $output
  echo $execs >> $output
  ```

- Replace them with:

  ```bash
  for exec in ${execs[@]};
  do
    echo $exec
  done
  ```

Point out that this is exactly the same syntax as the loop for the `$ls_out` exercise.

Break down the syntax:

- `for exec in ${execs[@]};` For every item in the $`execs` list...
- `do echo $exec`:...print out the item.

At this point, the `sys_info.sh` script should look similar to this:

```bash
#!/bin/bash

#Check if script was run as root. Exit if false.
if [ $UID -ne 0 ]
then
  echo "Please run this script with sudo."
  exit
fi

# Define Variables
output=$HOME/research/sys_info.txt
ip=$(ip addr | grep inet | tail -2 | head -1)
execs=$(sudo find /home -type f -perm 777 2> /dev/null)



# Check for research directory. Create it if needed.
if [ ! -d $HOME/research ]
then
 mkdir $HOME/research
fi

# Check for output file. Clear it if needed.
if [ -f $output ]
then
  rm $output
fi

echo "A Quick System Audit Script" >> $output
date >> $output
echo "" >> $output
echo "Machine Type Info:" >> $output
echo -e "$MACHTYPE \n" >> $output
echo -e "Uname info: $(uname -a) \n" >> $output
echo -e "IP Info:" >> $output
echo -e "$ip \n" >> $output
echo -e "Hostname: $(hostname -s) \n" >> $output
echo "DNS Servers: " >> $output
cat /etc/resolv.conf >> $output
echo -e "\nMemory Info:" >> $output
free >> $output
echo -e "\nCPU Info:" >> $output
lscpu | grep CPU >> $output
echo -e "\nDisk Usage:" >> $output
df -H | head -2 >> $output
echo -e "\nWho is logged in: \n $(who -a) \n" >> $output


echo -e "\nexec Files:" >> $output
for exec in $execs;
do
  echo $exec
done

echo -e "\nTop 10 Processes" >> $output
ps aux --sort -%mem | awk {'print $1, $2, $3, $4, $11'} | head >> $output
```

Ask the class if there are any questions about these solutions before heading to break.

### 07. Break (0:15)

### 08. Instructor Do: `For` Loops for a System Administrator (0:20)

Explain to the class that we will learn ways to use `for` loops to audit a machine.

Sometimes, writing a script might be overkill for the scale of the task at hand, so we will use these `for` loops directly on the command line, instead of a in an executable script file.

Show some uses of loops that are extremely valuable to cybersecuirty professionals:

- Loop through a list of packages to check if they are installed.

- Loop through the results of a find command and take action on each item found.

- Loop through a list of files, check their permissions and change if needed.

- Loop through a list of files and create a cryptographic hash of each file.

- Loop through all the users on the system and take an action for each one.


Get started by completing the following set up:

- Log into the lab environment with the username `instructor` and password `instructor`.

- Open a terminal.

- Open the `~/Cybersecurity-Lesson-Plans/Linux3_Demos/useful_loops.sh` file

- Run `nano useful_loops.sh`


Inform class that we will start by checking if certain packages are installed.


#### Looping Packages

In this example, we use a `for` loop to iterate through a list of packages and check if each one is installed.


```bash
# Define packages list
packages=(
    'nano'
    'wget'
    'net-tools'
)

# loop though the list of packages and check to see if they are installed
for package in ${packages[@]};
do
    if [ $(which $package) ]
    then
        echo "$package is installed at $(which $package)."
    else
        echo "$package is not installed."
    fi
done
```

Ask for a volunteer to explain what this `for` loop does.

Make sure to cover these syntax items:

-  `for package in ${packages[@]};`: For each package in the list `packages`...

    - In our list the first item: `nano`.
- `if [ $(which $package) ]`: If the command `which package` returns a value...

  - **Note:** When we run a command, it always returns a value, either `0` or `1`. `0` means the command was successful (`TRUE`) and  `1` means it fails (`FALSE`).

- `echo "$package is installed at $(which $package)."`: Run this echo command that states that the package is installed.
- `else`: "Otherwise...:
- `echo "$package is not installed."`: Run this echo command that states that the package is not installed.

Gauge students comprehension and see if they have any questions.

#### Looping through Users

In this example, we will search each user's home directory for scripts and print a confirmation statement.

```bash
# Search each user's home directory for scripts and provide a formatted output.
for user in $(ls /home);
do   
    for item in $(find /home/$user -iname '*.sh');
    do
        echo -e "Found a script in $user's home folder! \n$item"
    done
done
```

 **Pause for a knowledge Check**

- :question: Pose the following question to the class: 

  - "Does anyone know what a **nested loop** is?" 

    > Answer: A nested loop is a loop within a loop.

Explain that, in this demo, we a **nested loop**, a loop within a loop.

- We are looping through two separate lists:

- First, we create a list using `ls /home` to gather the names of each user on the system.

- Then for each user, we search their home directory for files ending in `.sh`.

- For each file that is found, we print a string that tells us which user's home folder it was found and the full path of the file.

Cover the following syntax:

- `for user in $(ls /home);` "For the user in the list that is returned by running `ls /home`..."
- `for item in $(find /home/$user -iname '*.sh');` "For each item found in the user's home folder that ends in `.sh`..."
- `echo -e "Found a script in $user's home folder! \n$item"` "Run this echo command stating that we found a script."

Point out the use of the `-e` flag and the `\n` line break in the echo command, to format the output.

#### Looping Permissions

Move on to the next example:

```bash
# loop through scripts in my scripts folder and change the permissions to execute
for script in $(ls ~/scripts);
do
    if [ ! -x ~/scripts/$script ]
    then
        chmod +x ~/scripts/$script
    fi
done
```

Break down the syntax:

- `for script in $(ls ~/scripts);` for each file returned by the command `ls ~/scripts`
- `if [ ! -x ~/scripts/$script ]` "_if not_ executable the file" Or, if the file is not executable.
- `chmod +x ~/scripts/$script` run this chmod command to make the file executable.

Ask if there are any questions about this block or about using `-x`, `-w` or `-r`.

#### Looping Hashes

In the final example, we will create a `for` loop that iterates over a list of files and creates a hash of each file.

```bash
# loop through a list of files and create a hash of each file.
for file in $(ls ~/Documents/files_for_hashing/);
do
    sha256sum $file
done
```

Cover this syntax:

- `for file in $(ls ~/Documents/files_for_hashing/);` For each file returned by running this `ls` command..
- `sha256sum $file`: Run this command (Create a sha256sum hash)

Explain that a hash is a cryptographic representation of the file that helps ensure file integrity. If the file changes, the hash changes.

- We will cover `check sums` or `hashes` in depth during the cryptography week.
- Let students know that we're using hashes as a real world example of looping through a list of files and applying a command to them.

Ask if there are any questions about any of these `for` loops.

### 09. Partner Do: Loops for System Administrators (0:25)

**Note**: Students work in pairs for this activity.

Explain the following to students:

- In the previous activity, we created `for` loops. Now, we use those loops to complete tasks which are useful to a System Administrator.

In this activity, you will work in pairs to take a look at a few useful loops you can add to your `sys_info.sh` script, as well as loops you can use directly in the command line.

Send students the following files to students:
- [SysAdmin Loops](Activities/09_STU_Useful_Loops/Unsolved/Readme.md)

### 10. Instructor Review: Useful loops Review (0:10)

:bar_chart: **Comprehension Check**: Run a class poll to evaluate the class's comprehension and ability to complete this activity. 

Remind the class that the point of this exercise was to work in pairs to complete several loop additions and final touches to the `sys_info.sh` script.

There were also a few bonus items that included running a `for` loop directly on the command line _outside_ of a script.

Use the following solution file to review the activity:
- [Solution Guide](Activities/09_STU_Useful_Loops/Solved/Readme.md)

#### Walkthrough

Login to the environment using `instructor:instructor`

Navigate to `~/Cybersecurity-Lesson-Plans/Linux3_Demos`

Explain to students if they have not finished their script, they can access the `sys_info_2.sh` by navigating to `~/Cybersecurity-Lesson-Plans/Linux3_Demo/sys_info_2.sh`.

Rather than typing out the script, open and review each the following lines with students using the `sys_info_2.sh` contents.

`1.` Put the paths of the `shadow` and `passwd` files (from the `/etc` directory) in a list.

- Point out the following:

  ```bash
  files=(
  '/etc/passwd'
  '/etc/shadow'
  )
  ```

Explain that this can also be written in one line like so:

```bash
files=('/etc/passwd' '/etc/shadow')
```

`2.` Create a `for` loop to print the permissions of each file in your file list.

- Point out the following:

  ```bash
  for file in ${files[@]};
  do
    ls -l $file >> $output
  done
  ```

Break down the syntax:

- `for file in ${files[@]}`: For each file in the list of $files...
- `do`: Complete the following command:.
- `ls -l $file`: run `ls -l` on each item in $files.
- `>> $output`: write each output of `ls -l` to our output file.
- `done`: closes the `for` loop.

Explain that it might be nice for this to have a title:

- Point out the following:

  ```bash
  echo -e "\nThe permissions for sensitive /etc files: \n" >> $output
  for file in ${files[@]};
  do
    ls -l $file >> $output
  done
  ```

`3.` Add comments into our script:

- It is best practice to add comments to explain the functionality of a script, both for the creator of the script, and for other developers who might read your code.

Give an example of adding some comments.

- Point out the following:

```bash
#Display CPU usage
echo -e "\nCPU Info:" >> $output
lscpu | grep CPU >> $output

# Display Disk usage
echo -e "\nDisk Usage:" >> $output
df -H | head -2 >> $output

#Display who is logged in
echo -e "\nWho is logged in: \n $(who -a) \n" >> $output
echo -e "\nexec Files:" >> $output


# ETC...
```

#### Bonus 1

Create a `for` loop that checks the `sudo` permissions of each user that has a home folder on the system.

- Ask the class if they remember the command to check `sudo` access?

- Take a few answers.

Reveal that `sudo -lU <username>` can be run on any user to see what `sudo` access they have.

- **Solution**:

  ```bash
  for user in $(ls /home);
  do
    sudo -lU $user
  done
  ```

Break down the syntax:

- `for user in $(ls /home)`: We use the `$()` command substitution directly in place of a list, because we know that `ls` will give us an output of a list.

- `sudo -lU $user`: `sudo` check for users in `/home`.

- `done` closes the `for` loop.

Run this command directly in the command line:

- **Solution**: `for user in $(ls /home); do sudo -lU $user; done`

Point out that the only difference between bash script files and bash commands in terminal are the semicolons that are used to separate each part of the loop.

Save and quit `nano`.

#### Bonus 2

Return to your script with `nano sys_info.sh`

Create a list that contains the commands `date`,  `uname -a`, and `hostname -s`.

**Solution**:

```bash
commands=(
  'date'
  'uname -a'
  'hostname -s'
)
```

Remove the lines that use these commands and replace them with a `for` loop that prints out "The results of the _______ command are:" along with the results of running the command.

**Solution:**

```bash
for x in {0..2};
do
  results=$(${commands[$x]})
  echo "Results of \"${commands[$x]}\" command:"
  echo $results
  echo ""
done
```

Break down the syntax:

- `for x in {0..2};` Begin our `for` loop by looping through a list of numbers that will serve as indices in our list of commands.

  - We have `3` commands we want to use so we are creating a list of `3` items: (0, 1, 2) that we will use for indices in the `$commands` list.

- `do`: Continues our `for` list.

- `results=$()`: Assigns the output of each command to a temporary `results` variable.

- `"${commands[$x]}\"`: Resolves to the command name in the list at index `$x` which resolves to `0`, `1` or `2` depending on the iteration of the `for` loop.

- `echo 'Results of "${commands[$x]}" command:' >> $output`: For each iteration of the loop, we are printing 'Results of "${commands[$x]}" command:'.

  - "${commands[$x]}" again resolves to the name of the command at `$x` index. The output is then appended to our `$output` file.

- `echo $results >> $output`: Prints the contents of the temporary `$results` variable to our `$output` file.

- `echo " "`: Prints a new blank line.

- `done`: Closes out our `for` loop.

Explain that their `sys_info2.sh` script should look similar to:

```bash
#!/bin/bash

#Check if script was run as root. Exit if false.
if [ $UID -ne 0 ]
then
  echo "Please run this script as root."
  exit
fi

# Define Variables
output=$HOME/research/sys_info.txt
ip=$(ip addr | grep inet | tail -2 | head -1)
execs=$(sudo find /home -type f -perm 777 2> /dev/null)
cpu=$(lscpu | grep CPU)
disk=$(df -H | head -2)

# Define Lists to use later
commands=(
  'date'
  'uname -a'
  'hostname -s'
)

files=(
  '/etc/passwd'
  '/etc/shadow'
)

#Check for research directory. Create it if needed.
if [ ! -d $HOME/research ]
then
 mkdir $HOME/research
fi

# Truncate the output file if it exists.
if [ -f $output ]
then
  rm $output
fi

##################################################
#Start Script

echo "A Quick System Audit Script" >> $output
echo "" >> $output

for x in {0..2} ;
do
  results=$(${commands[$x]})
  echo -e "Results of \"${commands[$x]}\" command:" >> $output
  echo $results >> $output
  echo "" >> $output
done

# Display Machine type
echo "Machine Type Info:" >> $output
echo -e "$MACHTYPE \n" >> $output

# Display IP Address info
echo -e "IP Info:" >> $output
echo -e "$ip \n" >> $output

# Display Memory usage
echo -e "\nMemory Info:" >> $output
free >> $output

#Display CPU usage
echo -e "\nCPU Info:" >> $output
lscpu | grep CPU >> $output

# Display Disk usage
echo -e "\nDisk Usage:" >> $output
df -H | head -2 >> $output

#Display how is logged in
echo -e "\nWho is logged in: \n $(who -a) \n" >> $output
echo -e "\nexec Files:" >> $output


# Display DNS Info
echo "DNS Servers: " >> $output
cat /etc/resolv.conf >> $output

# List exec files
echo -e "\nexec Files:" >> $output
for exec in $execs;

do
  echo $exec >> $output
done

# List top 10 processes
echo -e "\nTop 10 Processes" >> $output
ps aux --sort -%mem | awk {'print $1, $2, $3, $4, $11'} | head >> $output

# Check the permissions on files
echo -e "\nThe permissions for sensitive /etc files: \n" >> $output
for file in ${files[@]};
do
  ls -l $file >> $output
done
```
</details>

If you run the script, the results of `sys_info2.txt` should look similar to:

```bash
A Quick System Audit Script

Results of date command:
Mon Aug 26 17:12:59 EDT 2019

Results of uname -a command:
Linux work 4.14.119-2.pvops.qubes.x86_64 #1 SMP Wed May 15 06:43:11 UTC 2019 x86_64 GNU/Linux

Results of hostname -s command:
work

Machine Type Info:
x86_64-pc-linux-gnu

IP Info:
    inet 10.137.0.15/32 brd 10.255.255.255 scope global eth0


Memory Info:
              total        used        free      shared  buff/cache   available
Mem:        7956892     4368628     1226796      280532     2361468     3103552
Swap:       1048572       15360     1033212

CPU Info:
CPU op-mode(s):        32-bit, 64-bit
CPU(s):                4
On-line CPU(s) list:   0-3
CPU family:            6
Model name:            Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz
CPU MHz:               2112.068
NUMA node0 CPU(s):     0-3

Disk Usage:
Filesystem      Size  Used Avail Use% Mounted on
/dev/xvda3       11G  9.1G  691M  93% /

Who is logged in:
            system boot  2019-08-23 13:02
           run-level 3  2019-08-23 13:02
LOGIN      hvc0         2019-08-23 13:02               681 id=hvc0
LOGIN      tty1         2019-08-23 13:02               683 id=tty1


exec Files:
DNS Servers:
nameserver 10.139.1.1
nameserver 10.139.1.2

exec Files:
/home/sysadmin/Documents/setup_scripts/sysadmin/day3_stu_setup.sh
/home/instructor/Documents/setup_scripts/sysadmin/day3_stu_setup.sh
/home/instructor/Documents/setup_scripts/instructor/day3_setup.sh


Top 10 Processes
USER PID %CPU %MEM COMMAND
user 4997 0.3 4.6 /usr/lib/slack/slack
user 21470 0.5 4.5 /usr/lib/slack/slack
user 2618 0.8 3.8 /usr/share/atom/atom
user 8706 0.5 3.0 /opt/brave.com/brave/brave
user 1019 0.6 2.7 /opt/brave.com/brave/brave
user 2575 0.9 2.5 /usr/share/atom/atom
user 2909 0.7 2.5 /opt/zoom/zoom
user 8718 0.1 2.4 /opt/brave.com/brave/brave
user 3212 0.4 1.9 /usr/lib/slack/slack

The permissions for sensitive /etc files:

-rw-r--r-- 1 root root 1887 May 13 23:48 /etc/passwd
-rw-r----- 1 root shadow 986 May 13 23:48 /etc/shadow
-rw-r--r-- 1 root root 129 Aug 23 13:02 /etc/hosts
```
</details>

</details>

Remind students that the point of this activity was to work in groups to put the final touches on their bash script and implement a few more `for` loops into the script.

For students that didn't quite finish the script, encourage them to complete the activity at home.

Ask if there are any questions about these `for` loops and finishing this script.

### END CLASS

---

### 11. Instructor Do: Follow Along (Optional if time permits)
If you have extra time in this class, you can continue with the following script along:

Remind the students where we are in today's curriculum:

- We started by using _if_ statments to control the execution flow of a script.
- Then we combined `for` loops and `if` statements to carry out potentially valuable tasks of a System Administrator.

Explain that for the rest of class, you will walk through a pre-built 'setup' script with the class.

Explain that students can follow along by running `sudo nano ~/Cybersecurity-Lesson-Plans/Linux3_Demo/Final_Script.sh`. 

Point out that at the end of class, students will have two scripts that they can use as a reference in the future.

#### Script Along

Log into the lab environment with the username `instructor` and password `instructor`.

- Open a terminal.

Navigate to `~/Cybersecurity-Lesson-Plans/Linux3_Demo/Final_Script.sh`.

- Run `nano Final_Script.sh`

- Explain we have: `!/bin/bash` at the top of the script as this is a bash script.

Explain that we have a comment of what the script does:

- Highlight: `# Quick setup script for new server.`

Explain that this script will run several commands that will need `sudo` access, so we want to ensure that users run the script using `sudo`.

- Highlight:

  ```bash
  # Make sure the script is run as root.
  if [ ! $UID -ne 0 ]
  then
  echo "Please run this script with sudo."
    exit
  fi
  ```

Point out that this is the same statement we used in the previous exercises.


Explain that we want this script to log its progress.  To this end, we will create a log file and a variable that references that log file.
- Type:


  ```bash
  # Create a log file that our script will write to as it completes items
  log_file=/var/log/setup_script.log
  ```

Point out that the `log_file`, in this case is our variable. 

Explain that the following code gives our log file to have a header and a nice format:

- Highlight:
  ```bash
  # Log file header
  echo "Log file for general server setup script." >> $log_file
  echo "############################" >> $log_file
  echo "Log generated on: $(date)" >> $log_file
  echo "############################" >> $log_file
  echo "" >> $log_file
  ```

Pause and ask if there are any questions about this log file creation or using the $log_file variable.

Explain that next we will want our setup script to check the system for certain packages. If those packages aren't there, we will want to install them.

- Highlight:

  ```bash
  # List of packages needed on the System
  packages=(
    'nano'
    'wget'
    'net-tools'
    'python'
    'tripwire'
    'tree'
    'curl'
  )
  ```

Explain that we created a `for` loop that checks for each package and installs it if it isn't there.

- Highlight:

  ```bash
  # Iterate through our package list and ensure that they are all installed.
  for package in ${packages[@]};
  do
    if [ ! $(which $package) ];
    then
      apt install -y $package
    fi
  done
  ```

Break down the syntax:

- `for package in ${packages[@]};` for each package in our list of packages
- `if [ ! $(which $package) ];` if the command `which $package` fails
- `apt install -y $package` run the command to install the package

Point out the `-y` option for the `apt install` and remind the students that this will answer yes to any questions the installer has for any of these packages.

We don't need to use `sudo` here, because the script will only run if it is run with `sudo` in the first place. So, every command we write will run with `root` privileges.

Explain that after these installations are complete, we want to log them. It would also be nice to print out a message to the screen that tells us what happened.

- The command `tee` does exactly this: it will print the output to the screen, and send the output to the file of our choice.

Point out that we want to be sure to use the `-a` option so that `tee` _appends_ to our log file, otherwise it overwrites it:

- Highlight:

```bash
# Print it out and Log it
echo "$(date) Installed needed packages: ${packages[@]}" | tee -a $logfile
```

Explain that, we can also use the script to setup a new user called `ryan` on the system and give them the correct `sudo` permissions:
```bash
# Create a ryan user with no password (password to be created upon login)
useradd ryan
chage -d 0 ryan
```

Remind students that we can use the `usermod` command to add a user to the `sudo` group:

```bash
# Add ryan user to the `sudo` group
usermod -aG sudo ryan
```

Emphasize that we want to log these actions:

```bash
# Print it out and Log it
echo "$(date) Created ryan user. Password to be created upon login" | tee -a $log_file
```

Explain that now we can take some steps to harden the system.

Ask the students if they remember ways to harden the system, such as changing the permissions on sensitive files, or disabling the root user.

Take some answers from the class and make sure to cover the following code:

```bash
# Remove roots login shell and lock the root account.
usermod -s /sbin/nologin root
usermod -L root

# Print it out and Log it
echo "$(date) Disabled root shell. Root user cannot login." | tee -a $log_file

# Change permissions on sensitive files
chmod 600 /etc/shadow
chmod 600 /etc/gshadow
chmod 644 /etc/group
chmod 644 /etc/passwd

# Print it out and Log it
echo "$(date) Changed permissions on sensitive /etc files." | tee -a $log_file
```

Point out that it might be nice to setup our `scripts` folder and add it to our path, so we can start making custom commands as needed on the system.

Take some suggestions from the class on how to do this and be sure to cover the following code:

```bash
# Setup scripts folder
if [ ! -d /home/ryan/scripts ]
then
  mkdir /home/ryan/scripts
  chown ryan:ryan /home/ryan/scripts
fi

# Add scripts folder to .bashrc for ryan
echo "" >> /home/ryan/.bashrc
echo "PATH=$PATH:/home/ryan/scripts" >> /home/ryan/.bashrc
echo "" >> /home/ryan/.bashrc

# Print it out and Log it
echo "$(date) Added ~/scripts directory to ryan's PATH." | tee -a $log_file
```

Point out that adding a few custom aliases might be nice too:

```bash
# Add custom aliases to /home/ryan/.bashrc
echo "#Custom Aliases" >> /home/ryan/.bashrc
echo "alias reload='source ~/.bashrc && echo Bash config reloaded'" >> /home/ryan/.bashrc
echo "alias lsa='ls -a'" >> /home/ryan/.bashrc
echo "alias docs='cd ~/Documents'" >> /home/ryan/.bashrc
echo "alias dwn='cd ~/Downloads'" >> /home/ryan/.bashrc
echo "alias etc='cd /etc'" >> /home/ryan/.bashrc
echo "alias rc='nano ~/.bashrc'" >> /home/ryan/.bashrc

# Print it out and Log it
echo "$(date) Added custom alias collection to ryan's bashrc." | tee -a $log_file
```

Explain that we should end our script with a message to let the user know it's finished:

  ```bash
  #Print out and log Exit
  echo "$(date) Script Finished. Exiting."
  echo "$(date) Script Finished. Exiting." >> $log_file

  exit
  ```

Save and quit the script.

- Run `chmod +x Final_Script.sh`

Explain that this script should be ready to run on any new system.

Answer any questions from the students before dismissing class.

-------

### Copyright

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
