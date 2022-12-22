## 6.3 Lesson Plan: Linux Scavenger Hunt

### Lesson Overview

Today's class will have a final lesson on bash scripting before the students dive into a capture the flag challenge. At the end of class today, students will sign up and register for Azure Lab Services, which they will use in the upcoming Windows unit. 

### Lesson Objectives

By the end of today's class, students will:

- Connect to a server using `ssh`. 

- Use the skills and tools learned during the past three units to complete a Capture the Flag Linux Scavenger Hunt. 


### Instructor Notes


| :warning: Azure Lab Services Registration For Upcoming Windows Unit :warning: |
|:-:|
| You will spend the final 25 minutes of today's class getting students set up on Azure Lab Services. You will distribute the class-specific registration link for the Windows lab environment as well as unique student credentials. |

- Once all students have logged in, you will give a brief overview of the Windows environment along with additional steps for students to take in order to better manage their environments. You will also demonstrate how to properly shut down lab environments.  

- Refer to the following spreadsheet to find your university specific spreadsheet: [University Access Link](https://docs.google.com/spreadsheets/d/1uHVzvVQftHL4CkUOB03lNelf-kLToZys6ugsIoVOpE0/edit#gid=0) 

    - Open up your university-specific spreadsheet and navigate to your specific cohort’s tab

    - Copy student credentials over to a **new** sheet and share that with your students. 

    - **Do not share this sheet with students**. This document contains sensitive information of other other cohorts. .  

- If you have not done so already, make sure to review the [Azure instructional training documents](https://github.com/coding-boot-camp/cybersecurity-v2/blob/master/00-Teaching-Staff-Prework/Up-and-Running-with-Azure.md)


- If you or your TAs do not have lab owner privileges for Azure, please submit a ticket in BCS using the following guide. You will need lab owner privileges in order to perform common tasks such as resetting VMs for your students. 

    -  [Instructor Azure Support Request Form](https://docs.google.com/document/d/1l146wPR-XzNdoTLQYvNpOK7i5wJ2QJNsvtZ2OgAypm4/edit). 



### Lab Environment

Today's class will use a new pre-configured, headless (GUI-less) `Linux-Scavenger` server.

- The lesson will begin with instructions for everyone to download the machine. 

- Students will download this machine on their personal computer, **not** within a virtual environment. 

- The process should take less than 10 minutes. 


### Lesson Slideshow

The slides for today can be viewed on Google Drive here: [6.3 Slides](https://docs.google.com/presentation/d/1yt-LmXRD1_YAYBMRs6vGUbjJdEg41PLhejbPGDb3hVg).

- To add slides to the student-facing repository, download the slides as a PDF by navigating to "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for these document. If you or your students wish to modify the slides, please create a copy by navigating to "Make a copy...".

### Time Tracker

The time tracker for todays lesson can be viewed on Google Drive here: [6.3 Time Tracker](https://docs.google.com/spreadsheets/d/1oJmVHrawxXCB1qOlj0OrlfxjDs30EKHEoOgsV1nAh10/edit#gid=1047115118).


---

### 01. Instructor Do: SSH Scavenger Hunt Primer (0:10)

Welcome students to class and explain that today's activity is an accumulation of the past three weeks of Linux System Administration.

Students will be completing a Capture the Flag (CTF) scavenger hunt using a pre-configured, headless (GUI-less) `Linux-Scavenger` server.

#### Installing `Linux-Scavenger` Server

| :warning: Important Note about Your VM :warning: |
|:-:|
| Complete the following instructions on your **personal computer**, not within the virtual machines you have been using for classes thus far. |

1. On their personal computers, instruct students to access their command line on Git Bash (Windows) or Terminal (Mac).

2. Have students run the following command:

   - `curl -s -L https://gist.githubusercontent.com/jmmeacham/4b071c770370396faddf591693673201/raw/753ed9532ba06136b7a8dee8704696e6512482f2/ilscav.sh | bash`

   - This command may take several minutes to run.

    **Note**: If users run the script and get an OpenSSL error and can’t download the VM, they should just run the script again — this occasionally happens but is just an intermittent network issue and goes away if you retry

3. The output should be similar to:

        ```bash
        % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                        Dload  Upload   Total   Spent    Left  Speed
        100   816    0   816    0     0   3487      0 --:--:-- --:--:-- --:--:--  3502
        100  1169  100  1169    0     0   3510      0 --:--:-- --:--:-- --:--:--  3510
        % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                        Dload  Upload   Total   Spent    Left  Speed
        100  1831  100  1831    0     0  15649      0 --:--:-- --:--:-- --:--:-- 15649
        Cloning into 'C:/Documents/LabEnvironments/linux-scavenger'...
        remote: Enumerating objects: 55, done.
        remote: Counting objects: 100% (55/55), done.
        remote: Compressing objects: 100% (27/27), done.
        remote: Total 55 (delta 32), reused 47 (delta 27), pack-reused 0
        Receiving objects: 100% (55/55), 6.50 KiB | 951.00 KiB/s, done.
        Resolving deltas: 100% (32/32), done.
        Submodule 'linux-scavenger-hunt-vm' (git@gitlab.com:cyberxsecurity/virtual-machines/linux-scavenger-hunt-vm.git) registered for path 'linux-scavenger-hunt-vm'
        Submodule 'reprovision' (git@gitlab.com:cyberxsecurity/flux/reprovision.git) registered for path 'reprovision'
        Cloning into 'C:/Documents/LabEnvironments/linux-scavenger/linux-scavenger-hunt-vm'...
        Cloning into 'C:/Documents/LabEnvironments/linux-scavenger/reprovision'...
        Submodule path 'linux-scavenger-hunt-vm': checked out 'cd0ff2c42fec17aeb2d7d65250d539ac9412da18'
        Submodule path 'reprovision': checked out '34c97a8d086f26612a61bfaaafd95bb975c968aa'
        Bringing machine 'linux' up with 'hyperv' provider...
        ==> linux: Verifying Hyper-V is enabled...
        ==> linux: Verifying Hyper-V is accessible...
        ==> linux: Box 'cybersecurity/linux-scavenger' could not be found. Attempting to find and install...
            linux: Box Provider: hyperv
            linux: Box Version: >= 0
        ==> linux: Loading metadata for box 'cybersecurity/linux-scavenger'
            linux: URL: https://vagrantcloud.com/cybersecurity/linux-scavenger
        ==> linux: Adding box 'cybersecurity/linux-scavenger' (v1.0.1582326967) for provider: hyperv
            linux: Downloading: https://vagrantcloud.com/cybersecurity/boxes/linux-scavenger/versions/1.0.1582326967/providers/hyperv.box
            linux: Download redirected to host: vagrantcloud-files-production.s3.amazonaws.com
            linux:
        ==> linux: Successfully added box 'cybersecurity/linux-scavenger' (v1.0.1582326967) for 'hyperv'!
        ==> linux: Importing a Hyper-V instance
            linux: Creating and registering the VM...
            linux: Successfully imported VM
            linux: Configuring the VM...
        ==> linux: Starting the machine...
        ==> linux: Waiting for the machine to report its IP address...
            linux: Timeout: 120 seconds
            linux: IP: 127.0.0.1
        ==> linux: Waiting for machine to boot. This may take a few minutes...
            linux: SSH address: 127.0.0.1:2222
            linux: SSH username: vagrant
            linux: SSH auth method: private key
        ==> linux: Machine booted and ready!

        Connect via SSH by running: ssh student@192.168.200.105
        ```

Point out that the end of the script's output are instructions for connecting to the VM via SSH, which we will be doing next.

#### Accessing `Linux-Scavenger` Server

Students will have a few options to connect to the headless Linux server:

1. They can use the GUI for the VM and login directly.

2. If they would like to work in their command line, they can connect using `SSH`.

Explain that `SSH` stands for secure shell. It is a way of creating an encrypted connection to a remote server.

- Point out that an `SSH` connection will behave like a standard command line, except that all the commands you run are running on the remote server.

Demonstrate connecting to the machine using `SSH`.

- Open your command line.

- Run: `ssh student@192.168.200.105`

Explain the following: 

- In order to connect to a server using SSH, one only needs the username they want to connect with, the password for that username, and the IP address of the server.

- If the students wanted to connect to a remote machine, they only have to change the IP number to the appropriate machine's IP address.

Students can login with the following credentials:

- `student`
- `Goodluck!`

After running the command, you are now connected to the VM directly in your command line. You are not connected thorough the VirtualBox interface.

- You should see the login screen:

    ```bash
    student@192.168.200.105's password:

                       ____             __
                      /\  _ \          /\ \
                      \ \ \/\_\  __  __\ \ \____     __   _ __
                       \ \ \/_/_/\ \/\ \ \  __ \  / __ \/\  __\
                        \ \ \L\ \ \ \_\ \ \ \L\ \/\  __/\ \ \/
                         \ \____/\/ ____ \ \_ __/\ \____\ \_\
                          \/___/   /___/> \/___/  \/____/ \/_/
                                    /\___/
                                    \/__/
        ____
       /\  _ \
       \ \ \L\_\    ___     __     __  __     __    ___      __      __   _ __
        \/_\__ \   / ___\ / __ \  /\ \/\ \  / __ \/  _  \  / _  \  / __ \/\  __\
          /\ \L\ \/\ \__//\ \L\.\_\ \ \_/ |/\  __//\ \/\ \/\ \L\ \/\  __/\ \ \/
           \  \____\ \____\ \__/.\_\ \___/ \ \____\ \_\ \_\ \____ \ \____\ \_\
           \/_____/\/____/\/__/\/_/ \/__/   \/____/\/_/\/_/\/___L\ \/____/ \/_/
                                                            /\____/
                                                            \_/__/
                            __  __                  __
                           /\ \/\ \                /\ \__
                           \ \ \_\ \  __  __    ___\ \  _\
                            \ \  _  \/\ \/\ \ /  _  \ \ \/
                             \ \ \ \ \ \ \_\ \/\ \/\ \ \ \_
                              \ \_\ \_\ \____/\ \_\ \_\ \__\
                               \/_/\/_/\/___/  \/_/\/_/\/__/

    student:~\ $

    ```

Point out that if `ssh` isn't working, you can also open the VM GUI from the VirtualBox Manager by double-clicking on it.

Explain that to stop this connection, you only need to run `exit` at the prompt. You wil then return your standard command prompt.

Pause and ask if there are any questions about using `SSH` to connect to the VM.

---

### 06. Student Do: Scavenger Hunt Instructions (2:25)

Explain the following:

- In this activity you will work alone or in teams to complete the challenge.

- If you are working on a team, every team member must participate and work at least one task. Think of this as a relay race with each teammate helping.

- To complete this challenge, you will launch a a headless virtual machine server and login.

- All previous class material and internet resources are fair game.

- Each team member can work on a different step, but most steps must be completed in order.

- Professors and TA’s will not be giving hints or assistance unless there are issues with getting the virtual machine to run correctly.

globe_with_meridians: This activity will use breakout rooms. Assign students into groups of 3-4 and move them into breakout rooms. 


**Hints:**

- Take notes of anything you find interesting.

- When you find a flag, you will see this format `flag_1:97df27aec8c251503f5e3749eb2ddea2`. Make a note of where you found each flag.

- You will need to find 8 flags in total. The first 7 flags from the system combine to make up the final flag.

- Write down any credentials that you find so you don't have to try to retrace any steps you've already completed.

Send students the following file:

- [Scavenger Hunt](./Activities/02_Scavenger_Hunt/Unsolved/Readme.md)

When all students are ready, begin the scavenger hunt. They will have two hours to complete.

#### Scavenger Hunt Instructions:

#### flag_1:

- Finding this flag is imperative to moving on quickly. Luckily, it doesn't have a great hiding spot.

#### flag_2:

- A famous hacker has created a user on the system. Find this user, crack his password and login to his account.


#### flag_3:

- Find a `log` file _and_ a `zip` file that are related to the hacker's name.  

- Use a compound command to figure out the unique count of IP Addresses in this `log` file. That number is a password.

#### flag_4:

- Find a directory with a list of hackers. Look for a file that has `read` permissions for the owner, `no` permissions for groups and `executable` only for everyone else.

#### flag_5:

- This user is writing a bash script, except it isn't quite working yet. Find it, debug it and run it.

#### flag_6:

- Inspect this user's custom aliases.

- Find an exploit to gain a root shell.

#### flag_7:

- Login as the root user.

#### flag_8:

- Gather each of the 7 flags into a file and format it as if each flag was a username and password.

- Crack these passwords for the final flag.

Good Luck!


### 07. Instructor Do: Scavenger Hunt Review (0:25)

:bar_chart: **Comprehension Check**: Run a class poll to evaluate the class's comprehension and ability to complete this activity. 

Remind the students that this exercise should have challenge them to use all of the skills they have learned over the last few weeks.

If they didn't quite finish, assure them that they will get a solution file they can refer to after class. Encourage then to complete these steps before starting the homework.

Open the VM and review  how to get each flag.

#### flag_1:

**`Finding this flag is imperative to moving on quickly. Luckily, it doesn't have a great hiding spot.`**

- Point out that listing _all_ the files in the student's home folder will reveal some interesting files.

    - Run `student:~ $ ls -Ra`.

- Your output should be:

    ```bash
    .:
    .   .00-motd        .bashrc Documents   .gnupg      Pictures    Public
    ..  .bash_logout    Desktop Downloads   .hushlogin  .profile    Videos

    ./Desktop
    .   ..  .flag_1 .pass_list.txt

    ...<truncated>
    ```

- Explain that the `R` flag for `ls` opens all files `recursively`.

- Point out that there are many ways to find these files, but this way is one of the fastest.

- Point out the files:

    - `~/Desktop/.flag_1`
    - `~/Desktop/.pass_list.txt`

- Run `cat Desktop/.flag_1`

- Your output should be:

    ```bash
    -------------------------------------------------------

    You found 'flag_1:$1$WYmnR327$5C1yY4flBxB1cLjkc92Tq.'

    ------------ Nice work. Find 7 more. ------------------
    ```


#### flag_2:

**`A famous hacker has created a user on the system. Find this user, crack his password and login to his account.`**

- Point out that the hacker's name is Kevin Mitnik.

    - Explain that students can learn about Mitnik with a quick "famous hackers" google search.
    - They can also see his user name at the bottom of the `shadow` file located in `~/my-files/shadow` and corelate that with all the user names in the `/home` directory.

- Point out that they _could_ try to crack the shadow file without using the `pass_list.txt` but that will likely take a very long time.

- Move to the `~/Desktop` and demonstrate cracking the passwords with the `pass_list.txt`.

    - Run: `john --wordlist=.pass_list.txt ../Documents/my-files/shadow`

- Your output should be:

    ```bash
    Created directory: /home/student/.john
    Loaded 2 password hashes with 2 different salts (crypt, generic crypt(3) [?/64])
    Press 'q' or Ctrl-C to abort, almost any other key for status
    letmein     (student)
    trustno1    (mitnik)
    2g 0:00:00:00 100% 3.030g/s 145.4p/s 290.9C/s 123456..webcam1
    Use the "--show" option to display all of the cracked passwords reliably
    Session completed
    student:Desktop\ $
    ```

- Demonstrate using the `--show` flag with `john` to show the results.

    - Run: `john --show ../Documents/my-files/shadow`

- Your output should be:

    ```bash
    student:letmein:18197:0:99999:7:::
    mitnik:trustno1:18197:0:99999:7:::

    2 password hashes cracked, 0 left
    student:Desktop\ $
    ```

- Point out that we can easily see the password for `mitnik` is `trustno1`

- Log into the `mitnik` account to see flag 2.

    - Run:

        ```bash
        student:Desktop\ $  su mitnik
        Password:

        You found flag_2:$1$PEDICYq8$6/U/a5Ykxw1OP0.eSrMZO0

        mitnik:Desktop\ $
        ```

Pause and ask if there are any questions here before moving onto the next flag.


#### flag_3  

**`Find a ‘log’ file _and_ a zip file related to the hacker's name.`**  

**`Use a compound command to figure out the unique count of IP Addresses in this log file. That number is a password.`**

- Remind students that `log` files are usually located in `/var/log` so that's where we'll look.

- Point out that for the `.zip` file we are stuck searching around randomly.

- Luckily, we can find the `.zip` file easily with the same `R` flag with `ls`.

- Point out also that you are currently inside the `Desktop` of the `student` user and the `mitnik` user does not have privileges to do anything inside the home folder for `student`, so we need to `cd` back to the `mitnik` home directory.

    - Run : `cd` to move to the home directory for `mitnik`

    - Run: `mitnik:~\ $ls -Ra`

- Your output should be:

    ```bash
    .:
    .   ..  .bash_logout    .bashrc Desktop Documents   Downloads   Pictures    .profile    Public  Videos

    ./Desktop
    .   ..

    ./Documents
    .   ..  .secret.zip

    ```

- Point out the `.secret.zip` archive and explain that it is password protected, so we cannot open it as it stands without a password.

- Move to the `log` file portion of this flag and explain that the unique number of IP addresses in the log file is the password for the hidden `zip` file.

    - Run: `ls /var/log`

- Your output should be:
```bash
alternatives.log  dpkg.log   lastlog     tallylog
apt               faillog    lxd         vboxadd-setup.log
auth.log          journal    mitnik.log  vboxadd-setup.log.1
btmp              kern.log   samba       vboxadd-setup.log.3
dist-upgrade      landscape  syslog      wtmp
```

- Point out the `mitnik.log` file.

- Open the file to inspect it with the students.

    - Run: `less /var/log/mitnik.log`

- Point out that inspecting the `file` shows that the IP addresses are only at the beginning of each line.

- Navigate through a few pages and close the file with `q`. Your screen should show output similar to:

    ```bash
    73.211.34.100 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    174.116.246.20 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    23.135.3.168 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    241.21.200.190 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    111.58.233.100 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    104.125.72.8 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    122.201.225.11 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    215.5.46.179 "GET /bannerad/ad.htm HTTP/1.0" 200 198 "http://www.referrer.com/bannerad/ba_intro.htm" "Mozilla/4.01 (Macintosh; I; PPC)"
    ```

- Explain that we could use `awk` to pull out only the IP address column.

    - Type: `awk '{print $1}'`

- Explain that this isn't totally necessary though. We can simply use `sort` and `uniq` to give us the unique count of lines.

- Note that `uniq` only removes duplicate lines if they are right next to each other. Therefore, we must use `sort` in the chain to put duplicate lines next to each other. Only then will `uniq` remove all the duplicates.

    - Run the following compound command: `$ cat /var/log/mitnik.log | sort | uniq | wc -l`

- Your output should be `102`

- Explain that the password for the `/home/Documents/.secret.zip` is `102`.

    - Run: `unzip ~/Documents/.secret.zip`

    - Enter the password.

    ```bash
    mitnik:~\ $ unzip ~/Documents/.secret.zip
    Archive:  /home/mitnik/Documents/.secret.zip
    [/home/mitnik/Documents/.secret.zip] babbage password:
    inflating: babbage                 
    mitnik:~\ $ ls
    babbage  Desktop  Documents  Downloads  Pictures  Public  Videos
    mitnik:~\ $ cat babbage
    -----------------
    babbage : freedom
    -----------------
    ```

- Explain that the password for the `babbage` user is `freedom`

- Login as `babbage` to find flag_3:

    ```bash
    mitnik:~\ $ su babbage
    Password:

    You found flag_3:$1$Y9tp8XTi$m6pAR1bQ36oAh.At4G5s3.

    babbage:mitnik\ $
    ```

Pause for any questions here.

#### Flag_4:


`Find a directory with a list of hackers. Look for a file that has read permissions for the owner, no permissions for groups and executable only for everyone else.`

- Remind the students that we need to switch to the home folder again.

- Switch to the babbage home folder and list all his files:

    - Run: `babbage:~\ $ ls -Ra`

- Output is:

    ```bash
    .:
    .bash_logout  Desktop    Downloads  .profile  Videos
    .bashrc       Documents  Pictures   Public

    ./Desktop:

    ./Documents:
    ancheta    berners-lee  gonzalez  kernighan  mitnik   rossum      torvalds
    anonymous  bevan        gosling   knuth      poulsen  stallman    wirth
    assange    calce        hopper    lamo       pryce    stroustrup  woz
    astra      gates        james     lovelace   ritchie  thompson
    ```

- Point out that all of the hacker files are in the documents folder.

- Switch to that directory and list all the permissions for those files.

    - Run: `ls -l`

- Your output should be:

    ```bash
    total 4
    --w--w-rwx 1 babbage babbage 0 Oct 30 21:05 ancheta
    -rw-r--r-- 1 babbage babbage 0 Oct 30 21:05 anonymous
    -rw-rw-rw- 1 babbage babbage 0 Oct 30 21:05 assange
    ---xrwxr-- 1 babbage babbage 0 Oct 30 21:05 astra
    ---x---r-- 1 babbage babbage 0 Oct 30 21:05 berners-lee
    ---xrwxr-- 1 babbage babbage 0 Oct 30 21:05 bevan
    --w--w-rwx 1 babbage babbage 0 Oct 30 21:05 calce
    -r-------x 1 babbage babbage 0 Oct 30 21:05 gates
    -rw-r--r-- 1 babbage babbage 0 Oct 30 21:05 gonzalez
    -r-------x 1 babbage babbage 0 Oct 30 21:05 gosling
    -rw-rw-rw- 1 babbage babbage 0 Oct 30 21:05 hopper
    ---xrwxr-- 1 babbage babbage 0 Oct 30 21:05 james
    ---x---r-- 1 babbage babbage 0 Oct 30 21:05 kernighan
    ---x---r-- 1 babbage babbage 0 Oct 30 21:05 knuth
    -rw-r--r-- 1 babbage babbage 0 Oct 30 21:05 lamo
    -rwx-w---- 1 babbage babbage 0 Oct 30 21:05 lovelace
    -rw-r--r-- 1 babbage babbage 0 Oct 30 21:05 mitnik
    --w--w-rwx 1 babbage babbage 0 Oct 30 21:05 poulsen
    --w--w-rwx 1 babbage babbage 0 Oct 30 21:05 pryce
    -rw-rw-rw- 1 babbage babbage 0 Oct 30 21:05 ritchie
    ---xrwxr-- 1 babbage babbage 0 Oct 30 21:05 rossum
    -r-------x 1 babbage babbage 5 Oct 30 20:10 stallman
    -rw-rw-rw- 1 babbage babbage 0 Oct 30 21:05 stroustrup
    ---x---r-- 1 babbage babbage 0 Oct 30 21:05 thompson
    -rwx-w---- 1 babbage babbage 0 Oct 30 21:05 torvalds
    -rwx-w---- 1 babbage babbage 0 Oct 30 21:05 wirth
    -r-------x 1 babbage babbage 0 Oct 30 21:05 woz
    ```

- Explain that the files with `read` permissions for the owner, `no` permissions for groups and `executable` only for everyone else translate to permissions: `-r-------x`.

- There are 4 files with these permissions, the files `gates`, `gosling`, `stallman` and `woz`.

- You can use a regex to show them all at once if you wish.

    - Run: `ls -l | grep "^\-r\-\-\-\-\-\-\-x"`

- Output is:

    ```bash
    -r-------x 1 babbage babbage 0 Oct 30 21:05 gates
    -r-------x 1 babbage babbage 0 Oct 30 21:05 gosling
    -r-------x 1 babbage babbage 9 Oct 30 20:10 stallman
    -r-------x 1 babbage babbage 0 Oct 30 21:05 woz
    ```

- Explain that the `stallman` file is the only file with a non-zero size.

- Alternatively, if you inspect all 4 of these files, only the `stallman` file has contents.

    ```bash
    babbage:Documents\ $ cat gates
    babbage:Documents\ $ cat gosling
    babbage:Documents\ $ cat woz
    babbage:Documents\ $ cat stallman
    computer
    ```

- Point out that out of all 4 of those names, `stallman` is also the only name that matches a user on the system.

- Explain that the password to the stallman user is `computer`.

- Login as `stallman` to reveal flag 4:

    ```bash
    babbage:Documents\ $ su stallman
    Password:

    You found flag_4:$1$lGQ7QprJ$m4eE.b8jhvsp8CNbuIF5U0

    stallman:Documents\ $
    ```

Pause for questions before moving onto flag_5:

#### Flag_5

`This user is writing a bash script, except it isn't quite working yet. Find it, debug it and run it.`

- Find and display the script file located in `/home/stallman/Documents/flag5.sh`.

    - Run: `ls -Ra` once more.

- Output is:

    ```bash
    .:
    .   .bash_logout  Desktop    Downloads  .profile  Videos
    ..  .bashrc       Documents  Pictures   Public

    ./Desktop:
    .  ..

    ./Documents:
    .  ..  flag5.sh
    ```

- Now, change to `stallman`'s home directory. Make the script executable and then run it.

    ```bash
    stallman:~\ $ cd Documents/
    stallman:Documents\ $ chmod +x flag5.sh
    stallman:Documents\ $ ls
    flag5.sh
    stallman:Documents\ $ ./flag5.sh
    ./flag5.sh: line 4: syntax error near unexpected token `do'
    ./flag5.sh: line 4: `    do'
    ```

- Explain that this syntax error says there's something wrong with line 4.

- Open the script and point out that we can see that the first `for` loop has an extra `do`.

    - Run: `nano flag5.sh`

- Your output should be:

    ```bash
    #!/bin/bash
    width=72
    for i in ${0}; do
        do
        lines="$(wc -l < $1 | sed 's/ //g')"
        chars="$(wc -c < $1 | sed 's/ //g')"
    ```

- Remove the `do` on the fourth line.

- The head of the script should now read:

    ```bash
    #!/bin/bash
    width=72
    for i in ${0}; do
        lines="$(wc -l < $1 | sed 's/ //g')"
        chars="$(wc -c < $1 | sed 's/ //g')"
    ```

- Save and quit.

- Run the script again:

    ```bash
    stallman:Documents\ $ ./flag5.sh
    ./flag5.sh: line 13: syntax error near unexpected token `else'
    ./flag5.sh: line 13: `        else'
    ```

- Point out that now there is an error on line 13.

- Using nano, open the script and move to the section that reads:

    ```bash
    file=$(cat /var/tmp/5galf)
        if [ ${#file} -gt $width ]
        echo "$file" | fmt | sed -e '$s/^/  /' -e '2,$s/^/+ /'
        else
        echo "  $file"
        fi
    ```

- Explain that this `if` statement is missing the `then` declaration.

- Add the `then`:

    ```bash
    file=$(cat /var/tmp/5galf)
        if [ ${#file} -gt $width ]
        then
        echo "$file" | fmt | sed -e '$s/^/  /' -e '2,$s/^/+ /'
        else
        echo "  $file"
        fi
    ```

- Exit and save.

- Run the script again:

    ```bash
    stallman:Documents\ $ ./flag5.sh
    ./flag5.sh: line 4: $1: ambiguous redirect
    ./flag5.sh: line 5: $1: ambiguous redirect
    -----------------------------------------------------------------
    file  ( lines,  characters, owned by stallman):
    -----------------------------------------------------------------

    ------------------------------------------
    +
    +  You found flag_5:$1$zuzYyKCN$secHwYBXIELGqOv8rWzG00
    +
    +    ---------- sysadmin : passw0rd ----------
    -----------------------------------------------------------------
    ```

- Point out that we have flag_5 and we know that the password for the `sysadmin` user is `passw0rd`.

- Explain that students may have found a short cut to this solution by reading the script a bit closer.

- Open the script again with `nano` and point out the line:

    ```bash
    file=$(cat /var/tmp/5galf)
    ```

- Explain that `5galf` is the location of flag_5

- Point out that students can open this file directly to get the flag without fixing the script.

    - Run: `cat /var/tmp/5galf`

    ```bash
    stallman:Documents\ $ cat /var/tmp/5galf
    ------------------------------------------

    flag_5:$1$zuzYyKCN$secHwYBXIELGqOv8rWzG00

    ---------- sysadmin : passw0rd ----------
    ```


#### Flag_6

`Inspect this user's custom aliases.`

- Explain that there are a few ways we can inspect this user's custom aliases.

- Point out that we can easily login as the sysadmin user and look for an aliases in the `.bashrc` file:

    - Run:

        ```bash
        stallman:Documents\ $ su sysadmin
        Password:
        sysadmin:Documents\ $ cd
        sysadmin:~\ $ nano .bashrc
        ```

- Find the `#Alias definitions` section and point out the flag line:

    ```
    # Alias definitions.
    alias flag="echo You found 'flag_6:$1$Qbq.XLLp$oj.BXuxR2q99bJwNEFhSH1'"
    ```

- Exit the file.

- Run the `flag` alias.

    ```bash
    sysadmin:~\ $ flag
    You found flag_6:$1$Qbq.XLLp$oj.BXuxR2q99bJwNEFhSH1
    sysadmin:~\ $
    ```

- Explain that a faster solution would be to use the `alias` command.

    - Run the `alias` command to list all this user's custom aliases and point out the `flag` alias.

- Output is:

    ```bash
    sysadmin:~\ $ alias
    alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
    alias egrep='egrep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias flag='echo You found \'flag_6:$1$Qbq.XLLp$oj.BXuxR2q99bJwNEFhSH1\''
    alias grep='grep --color=auto'
    alias l='ls -CF'
    alias la='ls -A'
    alias ll='ls -alF'
    alias ls='ls --color=auto'
    sysadmin:~\ $
    ```



#### Flag_7.

`Find an exploit to gain a root shell. Login as the root user.`

- Remind the students about the `less` vulnerability they learned at the end of our first Linux week.

- Display the `sudo` permissions for sysadmin:

    ```bash
    sysadmin:~\ $ sudo -l
    [sudo] password for sysadmin:
    Matching Defaults entries for sysadmin on scavenger-hunt:
        env_reset, exempt_group=sudo, mail_badpass,
        secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

    User sysadmin may run the following commands on
            scavenger-hunt:
        (ALL : ALL) /usr/bin/less
    ```

- Point out that you now have the ability to run `less` with `sudo`.

    - It is always a good idea to check what sudo privileges they may have on a system when doing this kind of work.

- Demonstrate this exploit and drop into a root shell.

    - Run: `touch file && sudo less file`

    - Once inside `less` type `:` then `!bash` and hit enter.

        ```bash
        sysadmin:~\ $ touch file && sudo less file
        root:~\ $
        ```

- Explain that because you now have a root shell, you can change the password for the root user and then login as root.

    - Run: `passwd`

    ```bash
    root:~\ $ passwd
    Enter new UNIX password:
    Retype new UNIX password:
    passwd: password updated successfully
    ```

- Exit back into your `less` shell:

    - Run `exit`.

    ```bash
    root:~\ $ exit
    exit
    ```

- Run `enter` to return to `less` and then `q` to quit.

    ```bash
    !done  (press RETURN)
    ```

- Switch to the root user.

    ```bash
    sysadmin:~\ $ su root
    Password:

    You found flag_7:$1$zmr05X2t$QfOdeJVDpph5pBPpVL6oy0

    root@scavenger-hunt:/home/sysadmin#
    ```

Gauge if students are following; if they had trouble with these flags; and if they  have any questions at this point.  Then, move onto the final flag.

#### Flag_8

`Gather each of the 7 flags into a file and format it as if each flag was a username and password.`

`Crack these passwords for the final flag.`

- Explain that because we now have root access, you can search for all the flags on the entire system and pull them into one file.

    - Remind the students that it is the `.bashrc` file that runs each time a user logs in. Therefore, any messages that are displayed upon logging in are likely coming from the `.bashrc` file.

    - Remind students that if the flags were stored in another location, we can search inside files using `grep`.

- Run: `grep -ir 'flag' /home/`

    ```bash
    root@scavenger-hunt:~# grep -ir 'flag' /home/
    /home/student/.bash_history:cat ~/Desktop/.flag_1
    /home/student/Desktop/.flag_1: You found 'flag_1:$1$WYmnR327$5C1yY4flBxB1cLjkc92Tq.'
    /home/babbage/.bashrc:echo You found 'flag_3:$1$Y9tp8XTi$m6pAR1bQ36oAh.At4G5s3.'
    /home/stallman/.bashrc:echo You found 'flag_4:$1$lGQ7QprJ$m4eE.b8jhvsp8CNbuIF5U0'
    /home/mitnik/.bashrc:echo You found 'flag_2:$1$PEDICYq8$6/U/a5Ykxw1OP0.eSrMZO0'
    /home/sysadmin/.bashrc:alias flag="echo You found 'flag_6:$1$Qbq.XLLp$oj.BXuxR2q99bJwNEFhSH1'"
    ```

    - Point out that the `i` flag ignores the case of letters and the `r` flag searches 'recursively' through all the directories and inside all the files.

- Run: `grep -ir 'flag' /home/ > flags` to add these results to a file.

    ```bash
    root@scavenger-hunt:~# grep -ir 'flag' /home/ > flags
    ```

- Remind students that two of the flags were in different locations.
    - flag_5 was in `/var/tmp/5galf`.
    - flag_7 was in the `.bashrc` file for `root` user.

- Remind students that the `root` home folder is not in `/home` but in `/root`.

- Demonstrate how to find and add these flags to your file.

    - Run: `cat /var/tmp/5galf >> flags`

    - Run: `grep -r 'flag' ~/.bashrc` to reveal flag_7.

    - Run: `grep -r 'flag' ~/.bashrc >> flags` to add it to your file.

    ```bash
    root@scavenger-hunt:~# cat /var/tmp/5galf >> flags
    root@scavenger-hunt:~# grep -r 'flag' ~/.bashrc
    echo You found 'flag_7:$1$zmr05X2t$QfOdeJVDpph5pBPpVL6oy0'
    root@scavenger-hunt:~# grep -r 'flag' ~/.bashrc >> flags
    ```

- Open `nano` and edit the flags to look like this:

    ```bash
    flag_1:$1$WYmnR327$5C1yY4flBxB1cLjkc92Tq.
    flag_2:$1$PEDICYq8$6/U/a5Ykxw1OP0.eSrMZO0
    flag_3:$1$Y9tp8XTi$m6pAR1bQ36oAh.At4G5s3.
    flag_4:$1$lGQ7QprJ$m4eE.b8jhvsp8CNbuIF5U0
    flag_5:$1$zuzYyKCN$secHwYBXIELGqOv8rWzG00
    flag_6:$1$Qbq.XLLp$oj.BXuxR2q99bJwNEFhSH1  
    flag_7:$1$zmr05X2t$QfOdeJVDpph5pBPpVL6oy0
    ```

- Demonstrate cracking this file with `john` and the `pass_list.txt` from `/home/student/Desktop/.pass_list.txt`.

    - Run: `john --wordlist=/home/student/Desktop/.pass_list.txt flags`

    ```bash
    root@scavenger-hunt:~# john --wordlist=/home/student/Desktop/.pass_list.txt flags
    Created directory: /root/.john
    Loaded 7 password hashes with 7 different salts (md5crypt [MD5 32/64 X2])
    Press 'q' or Ctrl-C to abort, almost any other key for status
    Congratulations  (flag_1)
    challenge.       (flag_7)
    this             (flag_5)
    You              (flag_2)
    cyber            (flag_6)
    completed        (flag_4)
    6g 0:00:00:00 100% 17.14g/s 2577p/s 15165c/s 15165C/s 0000..00
    Use the "--show" option to display all of the cracked passwords reliably
    Session completed
    root@scavenger-hunt:~#
    ```

- Point out once more that using a password list is always much faster for cracking things, as long as the passwords are contained inside the list.

- Show all the flags:

    - Run: `john --show flags`

    ```bash
    root@scavenger-hunt:~# john --show flags
    flag_1:Congratulations
    flag_2:You
    flag_4:completed
    flag_5:this
    flag_6:cyber
    flag_7:challenge.

    6 password hashes cracked, 1 left
    root@scavenger-hunt:~#
    ```

Ask if there are any further questions about the challenge.

### 08. Instructor Do: Homework

Let students know that the homework for this week will continue with the scavenger hunt, starting with access to the root user.

Explain that if the students didn't get all the way through this challenge during class, they should follow the solutions to get to the root user at home, and then start the homework.

This homework will touch on some pentesting topics that the students will explore much more thoroughly during the pentesting portion of the class.

### 09. Instructor Do: Windows Azure Set-up (0:25)


|                                         :warning: Important Note about Your VM :warning:                                         |
|:--------------------------------------------------------------------------------------------------------------------------------:|
| Please start your lab environments now. It will warm up as you cover the following information and distribute Azure credentials. |


Explain that up until now you have only needed to have access to a single virtual machine. Starting next week and in several other units in the program, we will be accessing lab environments that are composed of multiple VMs.

- Since multiple VMs are too resource intensive to host locally, we will be accessing them through the cloud, specifically through Azure Lab Services.

- First, we will use a Windows environment for Unit 7: Windows Administration and Hardening. We will then return to our virtual machine for Units 8, 9 and 10. Then we will switch back to Azure for Unit 11: Network Security .

Let students know that Azure is a “cloud”, which they will learn about in great detail in the Cloud Security unit. For now, let them know that it is essentially a service that allows us to host our lab environments in a place that is convenient for everyone in the world to access. It can also be easily updated to fix bugs and add improvements as time goes on.

Throughout the course, we will use the following Azure-hosted environments: 

- **Windows**
- **Network Security**
- **Web Vulnerabilities**
- **Penetration Testing**
- **Project 2**
- **Forensics**
- **Final Project**


Let students know that when they log in for the first time, they will only see the Windows environment. The instructor will send them a link for each new lab environment prior to when they will use it in class for the first time. Students will only need to click the link for the new environment. Then, it will appear on their Azure dashboard. 

:warning: **Heads Up** Cover the following best practices to ensure that students properly use and don't unintentionaly lose access to their lab environments.

- **Students will have access to labs both during and after class.** Machines will start up automatically prior to class and will automatically shut down when class is over. Outside of class hours, Each student will be provided **30 hours** of Azure lab access. If students exceed that quota, they will be provided an additional 10 hours. If they exceed those additional hours, they will be provided an additional 5 hours. Once students exceed that final quota, they will not be provided any additional hours. 



- **Students must properly shut off their machines or they will lose their quota hours**: It is important to properly shut off these lab environments. If students do not, they will accidentally use up their quota hours. Students can see how many quota hours they have remaining on the lab environment card in the Azure dashboard.

- **Students' work will not be deleted between classes**: The machines’ hard drives don’t delete anything unless students choose to. However if a student's lab environment needs to be reset, all work will be deleted. For example, VMs can be reset if a student accidentally misconfigures their environment or has issues with any of the individual machines in an environment. 

- **Students must remember their passwords!** When students access Azure for the first time, they will be prompted to create new passwords. Students should store these passwords using a password manager. It will take up to 36 hours to reset a password. 

Take a moment to address remaining questions before proceeding.

#### Student Credential Distribution

Complete the following steps:

1. Slack students the Azure Windows registration link.

2. Send students their unique Azure log-in credentials.

  - You can do this individually, but if you have a large class you can share a sheet containing all student credentials and ask students to find their specific username and password. (Please remember to copy the credentials on your university specific spreadsheet to a new sheet, and share that with students.)

3. Distribute the [Lab Access Guide](./LabAccessGuide.md).

4. Distribute the [Azure Support Guide](./AzureSupportOnBCS.pdf).

5. Instruct students to click the registration link and sign up using their credentials. 

    - They will be prompted to create a new password. 

    - After initial login, students will also be asked to provide their personal emails as recovery email in case they forget their password. They will not receive any unsolicited emails; this is solely for password reset purposes.

Spend time making sure all students are set up on Azure. They should have access to a dashboard where they should see a card with the title **Windows**.

Students should stop once they have gotten to this step. Do not click on the Windows title card.

If students are having issues with their credentials, or if their credentials are missing, they will need to submit a ticket in BCS following the [Azure Support Guide](./AzureSupportOnBCS.pdf)  

#### Azure RDP Demonstration 

Explain that we will connect to our lab environments using RDP. In this section, we will demonstrate how.

1. Log in using your provided Azure credentials.

2. After loading the dashboard, point out the card titled **Windows**.

    - Explain that each new lab environment will have a different registration link, which will be provided in class at later dates. Once students have clicked a registration link, a new card with the new lab environment title will show up in their dashboard. 

3. Explain that lab environments automatically turn on approximately 30 minutes before class starts and shut off approximately 15 minutes after class ends. This means that students will not have to manually start labs in clas.  However, they will need to start them manually should they wish to use them at home.

    - Point out that starting and stopping a lab is as simple as clicking the **Start/Stop** button in the bottom-left of the card. 
    
    - If your lab has not been started, then cick this button. 

4. Explain that once the lab is on, the user will need to connect to it using a tool called RDP, which stands for **Remote Desktop Protocol**. RDP allows the user to log into and interact with a remote machine just as they would their normal laptop or desktop. 

    - In order to use RDP, the user must install an RDP Client. Students can find links for RDP clients in their Lab Access Guide. They have also been linked below:

        - [macOS RDP Client](https://apps.apple.com/us/app/microsoft-remote-desktop-10/id1295203466?mt=12)
    
        - [Windows RDP Client](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab)

5. Next, we will need to download an RDP file containing the information that the RDP Client application needs in order to connect to the lab environment. 

    - Click the monitor icon in the bottom-right of the lab card and select **Connect with RDP**.

6. Students should create a new folder in their `~/Documents` directory, such as `ClassLabs`, and save all of their RDP files inside of it. For now, simply click on the RDP file and point out that it automatically opens the Client.  It will prompt you for a password.

7. Everyone will use the same credentials to open the RDP connection:

    - **Username**: `azadmin`  OR `~\azadmin`

    - **Password**: `p4ssw0rd*`

8. Click **OK** on the prompts raised by the RDP Client and demonstrate that logging in brings you to a completely different Windows desktop environment.

|                               :warning: Important :warning:                               |
|:-----------------------------------------------------------------------------------------:|
| Make sure every student followed the above steps and can access the Windows lab environment. |

#### Azure Windows Lab Environment Overview

Explain that all of the lab environments consist of one or more VMs running **inside** of a Windows host, using a technology called **Hyper-V**. 

- In other words, students will connect to a Windows computer which contains several VMs inside of it. 

- Therefore, even when class will use Linux operating systems or other VMs, we will still connect to a Windows machine first. 

Reassure students that using this model will become second-nature to them as they get more and more exposure to it. For now, explain that students will access the VMs on the virtual network by using the **Hyper-V Manager**, which is an application that provides easy access to all of the VMs running inside the host.

Complete the following steps to use the Hyper-V Manageer to access the VMs:

1. Click the **Search** bar in the bottom-left of the screen, and type: `Hyper-V Manager`.  Click the icon.

    - Alternatively, there should be a Hyper-V Manager shortcut on the desktop that you can double-click.

2. In the GUI that appears, you will see a list of VMs in the center pane, containing two virtual machine names:

    - **Windows 10**

    - **Windows Server**

Before proceeding, explain that Hyper-V VMs should be shut down after every session to avoid the Hyper-V Machine going into a hibernation known as a **Saved State**. If a machine goes into a saved state, you may see the error `The application encountered an error while attempting to change the state of the 'VM-Name'.` We can pre-empt this by deleting the saved state on the Hyper-V machine. 

#### Saved State Clearing

We can use PowerShell to delete the saved state. To do so, we want to run the following commands within the PowerShell console of the machine you RDP'd into. 

1. Open PowerShell by clicking on to the bottom left `Start` menu button and typing "PowerShell".

2. Run the following PowerShell line to clear the Hyper-V virtual machine _saved states_:

    - `Get-VMSnapshot | Remove-VMSavedState`

    **Note**: If, at any point, you come across  `The application encountered an eror while attempted to change the state of...` when starting up your virtual machines, you will need to run `Get-VMSnapshot | Remove-VMSavedState` again.

3. After deleting the saved state, you can turn on the **Windows 10** and **Windows Server** virtual machines by running:

    - `Get-VM | Start-VM`

#### VM Credentials

Below are the credentials for the **Windows RDP Host** machine. This is the only machine you'll need for Day 1 and Day 2 of Unit 7:

- Credentials for the Windows RDP Host machine:

  - Username: `azadmin`
  - Password: `p4ssw0rd*`

Below are the credentials for the **two nested Hyper-V virtual machines**. You will use these VMs on Day 3 of Unit7.

- Credentials for the **Windows 10** virtual machine
  - Username: `sysadmin`
  - Password: `cybersecurity`

- Credentials for the **Windows Server** virtual machine:
  - Username: `sysadmin`
  - Password: `p4ssw0rd*`

Pause to see if students have any questions.

#### Adjusting Screen Resolution

Because we are using a virtualized environment for the Windows 10 machine, the screen resolution may not fill the entire screen during demos. 

To adjust screen resolution:

1.  Log into the Windows 10 VM and right-click anywhere on the screen.

2.  In the new tab that opened scroll down to **Display Settings**. 

3. A new **Display** window will pop up. Navigate to **Display resolution** and adjust the resolution to match your screen from here. 

#### Lab Provisions 

Each student will be provided **30 hours** of Azure lab access. 

- If students exceed that quota, they will be provided an additional 10 hours. 

- If they exceed those additional hours, they will be provided an additional 5 hours. 

:warning: **Important**: Instructors should not update students' quota hours on their own. 

    - Students will need to request additional lab hours through BCS.

    - Students will need to include the following information in your request: 
        
        - The lab environment the student is using

        - The student's full name

        - The student's username 

Once students exceed that final quota, they will not be provided any additional hours. It is extremely important that students preserve their allotted hours by **shutting off their machines** at the end of each class.

Instructions on requesting additional lab hours can be found in the [Azure Support Guide](./AzureSupportOnBCS.pdf)

#### Shutting Off the Lab Environment 

Finally, explain that you'll go over a few points regarding how to properly close and stop the lab environment.

When you’re done with your lab, you will need to:

- Turn off the nested VMs inside of Hyper-V

- Close the RDP connection to turn off the host VM

To turn off the Hyper-V VMs:

- Open the Hyper-V Manager

- Click on the Windows 10 machine in the center panel and then click **Turn Off** in the bottom-right pane.

- Do the same for the Windows Server VM.

To close the RDP connection, simply click the red `x` in the top-left corner of the RDP window. 

- This will cause the host VM to automatically turn off after 10 minutes. However, in order to always ensure that the environment is turned off, click the **Stop** button in the bottom-left of the lab card in the Dashboard. 

| :warning: Shut Down Your Labs :warning: |
|:-:|
| It is **imperative** that students remember to do this in order to conserve as much of their quota time as possible. |

- Emphasize that shutting the lab environment properly is extremely important. If students only disconnect but do not turn off the lab environment, then they will lose quota hours that they would otherwise be able to use to study outside of class.

To underline the point, click the RDP file again; enter your credentials; and demonstrate that the connection fails after the machine has been shut down.

### 10. Student Do: Windows Azure Set-up 

Please make sure all students are able to access the Azure Windows lab environment, and also make sure that everyone properly shuts off their machines at the end of class. 

-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.    
