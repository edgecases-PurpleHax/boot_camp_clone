## 18.3 Lesson Plan: Project 2, Day 3: Windows CTF

### Overview

On Day 3, students will continue to exploit Rekall's technical infrastructure, but will focus on Rekall's Windows servers and vulnerabilities related to Windows operating systems. Students will also continue finding flags during their exploitation.


### Credentials
  
- After uploading the daily CTFd flags, the administrator password on the CTFd (Capture the Flag) environment will be reset to:
  - Username: `admin`
  - Password: `ctfpassword`


### Instructor Setup instructions

- ⚠️ **Important** ⚠️ 
  - For today's project, you will need to create a **NEW** Capture the Flag environment where students will enter found flags.  
    - Be sure to set this up 30 minutes or more before class.
    - You will continue using your personal Azure account (the one you used in Day 1 and 2) to host Day 3's CTF environment, but you will overwrite Day 2's activity with Day 3's activity.

**Complete the following steps to configure the Windows CTF**:

1. Access the same CTF website that you configured for Day 1 and 2, and log back in with your admin account.
  
2. Select **Config** and then **Backup**, as the following image shows:
  
   ![A screenshot depicts the CTFd page with the "Config" and "Backup" options highlighted.](../1/Images/ctfd3.png)
  
3. Select the **Import** sub-tab.

4. Upload the following file: [Windows Scavenger Hunt](./Windows_Scavenger_Hunt.zip).

5. Select **Import**, as the following image shows: 
  
   ![A screenshot of the "Import" sub-tab highlights the "Import File" and "Import" buttons.](../1/Images/ctfd4.png)

    - **Note**: Sometimes, the import appears to get stuck and not progress, but it has actually completed. Simply click the **Challenges** link at the top of the screen to see if the challenges have uploaded.
  
6. Validate that your webpage is set up by:
  - Accessing your webpage.
  - Logging in as the admin user with the same credentails as Day 1 & Day 2.
     - (`admin` : `ctfpassword`)
  - Logging in with a test student user account to view the flags display, which should resemble the following image:
  
   ![A screenshot depicts the flags display from a student user's perspective.](../1/Images/ctfd5b.png)

- The **grading rubric** for this project is located in the `Resources` folder:
  - [Project 2 Grading Rubric - coming soon] 

### Lab Environment

- Students will use their Azure Lab environment to complete all of this week's activities.
  - While the CTF framework is hosted externally in your Azure cloud account, the students will access it via a web browser within their Lab.

### Additional Resources

- [CTFd Guide](https://docs.ctfd.io/docs/overview)  
- [List of CVEs](https://cve.mitre.org/cve/)
- [MSFconsole Core Commands Tutorial](https://www.offensive-security.com/metasploit-unleashed/msfconsole-commands/)


### Slideshow

The slideshow for today is located on Google Drive here: [Project 2 Day 3 Slides](https://docs.google.com/presentation/d/1rFVkU5OVQcSqC961hN1-c02rAvc5HAJG6CXommFgi28/edit?usp=sharing).

---


### 01. Instructor Do: Welcome to Day 3

Welcome students to the third and last day of Project 2!

**Project Scenario**

Remind the class that for this week's project, they'll continue to play the role of penetration testers hired to conduct a penetration testing engagement by **Rekall Corporation**.

Review the week so far:
  -  On **Day 1**, students found vulnerabilities within Rekall Corporation's web application.
  -  On **Day 2**, they found vulnerabilities within Rekall Corporation's Linux Servers.

Explain that in today's class, they will continue to find vulnerabilities within Rekall's environment, but today they'll focus on Rekall's Windows servers.


### 02. Instructor Do: Objectives and Deliverables

Introduce the high-level objectives for today:

- Students will continue to exploit Rekall's technical infrastructure, focusing on the organization's Windows servers and vulnerabilities related to Windows operating systems.  
- Like they did on Days 1 and 2, students will also find "flags" during their exploitation.

Remind the students that as they work through the project, they should continue completing their required deliverable, the **penetration testing summary report**.

#### Today's Class

Let students know that the rest of today's class will proceed as follows:

- Overview of setup and rules for the Day 3 CTF.
- Students will use the remaining class time to compete in the CTF!

Take a moment to address questions before proceeding.
  
### 03. Instructor Do: Day 3 Project Overview

We will now review what students will do on Day 3 of the project. Point out that that these same instructions will be sent out in today's student activity file.

### Project Resources and Setup  
  
Review the following resources, which students will use to complete today's project:
  
**1. - Rekall's environment**
- You will access today's activity within your Project 2 Lab.
- We recommend that you use the Kali Linux server as your attacking server.
- Rekall's Windows servers will be accessible from the Kali Linux machine.
  
**2. - CTF flag submission page**
- Within your Kali Linux browser, open a second tab and access your CTF page.
   - Your instructor will provide the custom website for your CTF when you are ready to begin.
- Once you have accessed this page, select "Register" on the top right to register your account, as the following image shows:
  
   ![ctfd1C](../1/Images/ctfd1C.png)

   - Don't forget your password in case you need to log back in!
  
### CTF Instructions and Rules
   
**Instructions**  

  Go over the following instructions for today's activity:
 - As penetration testers, you are tasked with finding all vulnerabilities within Rekall's Windows servers.
 - As in Day 1 and 2's activities, you are also tasked with finding "flags" by exploiting these vulnerabilities.
 - The flags are hidden across various Windows hosts within Rekall's environment.
    - Many flags are hidden within the Windows hosts and titled Flag 1, Flag 2, etc.
    - Some flags are the answer to a specific challenge, such as: What is the IP of your machine?
    - Flags labeled Flag 1, Flag 2, etc. consist of a mix of letters and numbers&mdash;e.g., "Flag 1: d8sksydasksdy". 
 - Once you have found your flag or answered your question, enter the flag on the CTF flag submission page.
 - Don't forget to take screenshots of the exploits you discover, as you will submit them in your summary!
  
**CTF Flag Submission Page**
  
 Introduce the CTF flag submission page by covering the following: 
  - This webpage contains the 10 available flags.
  - Today's flag categories represent the phases of a penetration test engagement. For example:
      - **Reconnaissance**: This category contains challenges that use open source intelligence tools.
      - **Scanning**: This category contains challenges that use scanning tools, such as Nmap and Nessus.
      - **Exploitation**: This category contains challenges that use exploitation tools, such as Metasploit.
      - **Post Exploitation**: This category contains challenges that use post-exploitation tools, such as Meterpreter.
  - The points awarded for each flag are indicated in its respective flag box.
    - The more challenging the flag, the more points will be awarded.
  - Be sure to read the details in each flag box for important guidance on how to acquire that specific flag.
  - Once you find a flag, select the box with the corresponding flag number, and enter the flag.               
  - You can view your point total by selecting the "Scoreboard" option at the top of the page. 
  
  **CTF Hints**
 
  - Remind students that this CTF provides you an option to "pay" for hints with points.
  - Clicking on a flag will also display any available hints for that flag and the points it costs to unlock those hints, as the following image shows:
  
   ![ctfd10](../1/Images/ctfd10.png)
 
  - **Note**: You must have already been awarded the points before you can use them to "pay" for hints.

**Additional Hints for Success**

- Rekall's CISO, Jessica Smith, has several concerns about Rekall's Windows security. Specifically, she mentioned concerns about the following:
  - Developers hosting private company data on Rekall's official GitHub account.
  - The security of file sharing services.
  - Old versions of software.
  - Poor password policies.
  - Unnecessary scheduled tasks.

- Use the internet to help you figure out methods for exploiting these vulnerabilities.
- Refer to your class notes and slides to help find several of the flags.
- Certain exploits can be used to find information that will help you find other flags.
- Most of the exploits that you'll use were covered in class, but there are some new exploits which will require additional research.
- Trying and failing is often part of a penetration tester's work, so don't be afraid to attempt multiple exploits until one is successful.

- The 10 available flags are discoverable at different locations:
   - One flag is outside of the network and requires OSINT.
   - Six flags are on the Windows 10 machine.
   - Three flags are located on the Server 2019 machine.
      - One of these, the final flag, is the `Administrator` user's password hash on Server2019. This hash does not need to be cracked.
  
**CTF Rules**  

  Explain the following rules for today's activity:
  - Each group will start at the same time, once the URL for the CTF has been provided.
  - The team with the most points at the end of the allotted time will win.
  - You can use all available resources to assist you: class notes, slides, internet resources, tools, etc.
  - Your instructor or TA can assist with technical or lab access issues, but will not be able to provide guidance for finding the flags.
  
Ask the class if they have any questions before proceeding to the activity.  
  
### 04. Student Do: Exploiting Windows Servers (2:20)
  
We are ready to begin the Windows servers CTF!
  
 - Send the following files to students: 
    - [Activity File: Capture the Flag](https://docs.google.com/document/d/1jP26cNPWwgZJtTz3yOt_y1KLJ4ryOx5KCO7CU36rWbI/edit?usp=sharing)
    - [Penetration testing summary report](https://docs.google.com/document/d/1Kz1sOwmb82uNXJyZlox9cP7tPvDpNNcvkxREuCFBVLM/edit?usp=sharing)

- Remind the class that if they have any technical issues (e.g., the CTF or Rekall environment is inaccessible, flags don't display when they should, etc.) they should reach out to you or a TA.
- Additionally, let the class know that today's student guide includes:
   - Project submission instructions
   - Resume and interview guidance related to this week's project

**Instructor Notes**:

- Reference [the solution file](./Activities/solved/readme.md) if any issues come up during the activity.
- Be sure to wrap up the CTF 15 minutes before class ends to leave time for a class review.
   

### 05. Instructor Review:  Attacking Windows Servers Review (0:15)

Begin by congratulating the winner and the second and third place finishers.
  - Offer the winning team the opportunity to show the class how they captured their flags.


Send the [solution file](./Activities/solved/readme.md) out to students and review the answers if time allows, focusing on the flags that students found the most challenging.

---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.    
