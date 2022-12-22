### cmd CTF Instructions 

Welcome to the cmd Capture the Flag Challenge! The instructions for this CTF are a little different from CTFs you may have worked on previously. 


### Instructions. 

1. This game is organized by levels. Each level is found inside a compressed, password protected directory with the same name.

    - For example, the `level-01.zip` directory contains all the instructions for Level One.

    - Inside each level's directory, you will find an instructions file that will give you a new challenge along with any files needed to complete the challenge.

2. When you complete a level, you will find a password that is a string with underscores: `this_is_a_password`.

    - To unlock the next level, you must create an MD5 check sum of the password that you found.

    - Use the md5 check sum as the final password to unzip the directory for the next level.

    - Be aware that there are a some levels that ask you to find a number, an IP address or other values. For those levels, the password is an md5sum of the number or IP address.


**Important Note**: When you are working on these challenges, do not modify the original file. Instead, create new files containing the modified data.

* As long as you don't overwrite the original file, you can keep trying until you have the answer.

* However, if you overwrite the original file and damage the data, you may get stuck and have to restart the activity. 

* Always either create a copy of the original file to work with, OR, use output redirection '>' to create a new file with your changes.


#### Example 

- You begin on Level 1.
- You unzip the level-01.zip archive by providing the correct password.
- You move into the level-01 directory.
- You find an instructions file and the level-02.zip archive.
- You complete the challenge and get the password: `rarest_expired_revolutionizing`.
- You create an MD5 sum of `rarest_expired_revolutionizing`: `d49e884d34f448c74cca58004860c5b7`
- You use `d49e884d34f448c74cca58004860c5b7` as the password to unzip the 'level-02.zip' archive.
- You move into the 'level-02' directory.

### Getting Started

For your first challenge, you must use the command line to create an MD5 sum of the password for the Level 1 directory. 

- The password for level 1 is: `fumigators_water_pass`

#### Hints:
You may beed to use the echo and md5sum commands for this challenge. 
- Don't forget about using pipes! `|`
- You'll need to use the `-n` option with echo to ignore the newline character and get the correct hash.

Good Luck!


---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  