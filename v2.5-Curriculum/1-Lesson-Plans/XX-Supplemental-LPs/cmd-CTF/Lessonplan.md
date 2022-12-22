## cmdCTF Lesson Plan: A command line challenge

### Overview

This lesson plan is an optional activity that the class can work on in case should some other part of the class have and issue or cloud resources become unavailable, etc. 

This lesson plan details a CTF activity that challenges students to use basic and advanced command line skills. This challenge takes students through 22 levels of command line tools, starting with basic navigation and ramping up.

### Lab Setup

This game has been designed to have minimal overhead setup. The entire game is located on the Ubuntu machine at `/cmdCTF`. 

There is a complete walk through of all the challenges in this directory.

### Slides

The lesson slides for this document are available on Google Drive here: [cmd CTF Slides](https://docs.google.com/presentation/d/1OaIkKpbiNhm9V2t7sT-4YOy-2A2Nq0nWRFwUytndra0/edit#slide=id.g4789b2c72f_0_6)


-------

### 01. Instructor Do: Welcome Back and Introduce the CTF (0:05)

Begin class by welcoming the students back and informing them that today they will play a command line CTF that is designed to test their command line skills. 

- The entire game contents can be found on their Ubuntu machine at `/cmdCTF`.

#### Instructions

Explain that the instructions for this capture the flag are different from previous CTFs that we have participated in. 

1. This game is organized by levels. Each level is found inside a compressed, password protected directory with the same name.

    - For example, the `level-01.zip` directory contains all the instructions for Level One.

    - Inside each level's directory, you will find an instructions file that will give you a new challenge along with any files needed to complete the challenge.

2. When you complete a level, you will find a password that is a string with underscores: `this_is_a_password`.

    - To unlock the next level, you must create an MD5 check sum of the password that you found.

    - Use the md5 check sum as the final password to unzip the directory for the next level.


**Important Note**: When you are working on these challenges, do not modify the original file. Instead, create new files containing the modified data.

* As long as you don't overwrite the original file, you can keep trying until you have the answer.

* However, if you overwrite the original file and damage the data, you may get stuck and have to restart the activity. 

* Always either create a copy of the original file to work with, OR, use output redirection '>' to create a new file with your changes.


### 02. Student Do: cmdCTF (2:00)

The string password for Level 1 is provided in the Instructions file. The first requires students to correctly create an `md5sum` of the given password, and use it to unlock level one.

- Instruct students to begin working and point them to the  `/cmdCTF/instructions` file. 

- Explain that if students get stuck, they can refer to the `cmdCTF-Solutions.md` file. However, emphasize that this resource should only be used as a last resort. Students can ask questions, use additional resources, and collaborate with other students. 

### 03. Instructor Do: cmdCTF Review 

You can use the following solutions file to review the activity, or you can simply distribute the file to students. 

---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  