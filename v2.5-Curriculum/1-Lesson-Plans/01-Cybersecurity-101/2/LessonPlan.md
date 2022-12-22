## 1.2 Lesson Plan: Attacking and Defending

### Overview
Today, students assess attack and defense strategies of a vulnerable web login. Once students have completed these two activities, they will spend the rest of the day installing and setting up their virtual machine environments.

### Class Objectives

By the end of class students will be able to:

- List different types of user, web, server, and database cybersecurity attacks.

- Identify risk mitigation plan frameworks for user, web, server, and database cybersecurity attacks.

- Set up a virtual machine lab environment that they will use throughout the course.

### Instructor Notes

- During the virtual machine installation process, you or your students may encounter technical difficulties. It is important to stay calm and positive. Use any issue as a learning opportunity and emphasize to students that troubleshooting is an essential skill for cybersecurity and network professionals. 

- The installation process will follow this document: 

  - [Using Vagrant](https://docs.google.com/document/d/1Grxbagm-2jg22LiatDHzLDpJOsOl5JWJ9gl00TtiX6k/edit) 

  - Make sure every student has access to this document. You will walk through these steps together in class. It is recommended that you review the content before class. 


### Online Classroom Strategies 

Refer to the following guidelines and best practices for conducting this class online: 

- [Cybersecurity Online Classroom Strategies](../../../00-Teaching-Staff-Prework/OnlineStrategies.md)



### Slideshow 

The lesson slides are available on Google Drive here: [1.2 Slides](https://docs.google.com/presentation/d/1g5kwfPmLCb6qy36zqmXB-Rt3NUGJK3UXwF9YQZ3NEfs/edit)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to **File** > **Download as** and choosing **PDF document**. Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to **File** > **Make a copy**.

### Time Tracker

The time tracker is available on Google Drive here: [1.2 Time Tracker](https://docs.google.com/spreadsheets/d/1lRuc_70GJ5iT7A26_MRMgfwEYjRIO5mGpykjtycE6Pw/edit#gid=1145703143)

### Student Guide

Distribute the student-facing version of the lesson plan: [1.2 Student Guide](StudentGuide.md)

---

### 01. Instructor Do: Welcome and Overview  (0:15)

Welcome students to class. Begin with a review of the previous class:

- We introduced students to the structure of the course and the staff who will support them. We also covered the rise of cybersecurity, the boot camp's course overview, and the technical infrastructures we will use to complete labs. Finally, we introduced the fundamental cybersecurity concept of the CIA triad. 

Using the slideshow, briefly review threat assessment and risk mitigation, and the CIA triad. 

- Briefly discuss how cybersecurity focuses on two primary concepts:

  - **Threat assessment**: The structured process of identifying the threats posed to a group or system.

  - **Risk mitigation**: The systematic reduction of the impact and likely occurrence of a negative event.

:question: **Ask class**: Why do we use the word "mitigation" and not "eradication"? 

- **Answer**: Point out that we cannot eradicate all risks. Since cybersecurity is an ever-evolving landscape, new threats emerge every day. Also, business needs and budgetary constraints often limit the ability to implement cybersecurity best practices. So we must do our best to mitigate.

Using the slide as a prompt, take a moment to discuss the _Oh look, a phone!_ thought exercise. 

- Call on students to identify as many exploits as possible that could result from a stolen cell phone.

- Encourage them to be creative and think like a cybercriminal. 

#### Today's Topics

Explain that today's class will continue with assessing risk and mitigating threats by evaluating specific attacks and vulnerabilities of users, web applications, servers, and databases. In short, we will be thinking about ways to attack and defend pillars of organizations in order to access and protect valuable information. 

**In the first half of today's class**, students will have the opportunity to think like offensive and defensive cybersecurity professionals evaluating the attacks and defenses of levels of information within a company.  

- To assess threats and mitigate risks, we need to check each component of an organization, and understand how malicious actors can exploit weaknesses within the organization and damage the stakeholders' finances, reputations, and well-being. 

**In the second half of class**, students will set up VirtualBox and Vagrant—two programs needed to run VMs on local machines. Students should have a basic familiarity with the need for VMs from our technical overview in the first day of class. Today, we will dive into more detailed installation instructions. 

- As the first technical activity of the course, students may have trouble and may need assistance from instructional staff. They may also need to do some troubleshooting themselves. 

- Explain that troubleshooting is the process of problem solving. 

- As it relates to this course, troubleshooting will often involve ensuring that our virtual machines and lab services are running smoothly. 

While troubleshooting doesn’t sound quite as exciting as attacking and defending information systems, it is just as important a skill. 

- Whether you are a penetration tester, system administrator, SOC analyst, network admin, or IT help desk associate, you will most likely have to troubleshoot technology on a regular basis.

- Troubleshooting is a common theme throughout this course, and we'll practice it alongside various activities, such as tinkering with scripts, configuring Azure Lab setups, and navigating access controls. Just as troubleshooting is necessary in the professional environment, it will be necessary in this learning environment. 

Troubleshooting may include trial and error, googling, or asking a classmate for help. 

- Remember that every time we have to research something it is an opportunity to expand our knowledge. **Googling** is a common task for IT professionals. It allows us to quickly reference, confirm, and discover information about tasks or issues that we are unfamiliar with. 

- The more you work through the problems you encounter during your daily activities and setups, the more robust knowledge you will have for solving any issue you encounter in the professional world. Hiring managers consider this problem-solving mentality a valuable quality. 

|                                                                                                 :warning: A Note on Troubleshooting :warning:                                                                                                |
|:-:|
| As the instructional staff, it is important to not get frustrated when helping students troubleshoot the issues with their setup, or when encountering technical difficulties on your end. Use every one of these moments as a learning opportunity for students. |



Ask the class if they have any questions before starting the first activity of the day. 

### 02. Instructor Do: Introducing Security Task #1 - Attacking the Wall (0:07)

Explain that we will now work on two security tasks related to assessing threats and mitigating risks. 

In this first activity, we will examine various **attack** strategies that cybercriminals can use to penetrate insecure logins. 

- While students will be new to this type of thinking, this exercise should force them to think creatively about all the ways to penetrate a system, from user attacks to physical break-ins. 

- To successfully complete this exercise, students must think through creative options. Students will experience a real sense of accomplishment when they discover real-world attack types through discussion and brainstorming. 

Using the slides, explain the scenario to students: 

- You and your team have just been hired by a very successful startup, Bitcoin Dating Exchange. 

- While their founding team is brilliant, like many startups, they don’t know the first thing about security.

- They just handed you a lot of money to solve their most critical problem: their log-in process is totally insecure. Malicious attackers are routinely logging in as users (and administrators) and gaining access to company data and financial assets.

In groups, develop a list of 15 ways that a malicious actor could penetrate the system and log in as a user or administrator.

- With each method, be prepared to describe the following:
  - Who (or what) is the initial target?
  - How would the actor implement the attack?

### 03. Student Do: Security Task #1 - Attacking the Wall (0:20)

:globe_with_meridians: Assign students into groups of 3-4 and move them into breakout rooms. 

Send them the following activity file: 

- [Activity File: Security Task #1 - Attacking the Wall](Activities/03_Attacking_The_Wall/Unsolved/Readme.md)

As students are working on this experiment, you and your TAs should monitor each group's progress. Where appropriate, nudge them to think more critically. For instance:

- If students seem to have run out of ideas, encourage them to think about vulnerabilities to *other* aspects of the system. Have they considered the potential for theft? Have they considered the potential for a break-in? Have they considered that a person's password may be listed on another website?

- If students seem to have come up with a full list, ask them to share their ideas. Challenge them if the ideas seem too similar. Remind them that they need to *think* like a cybercriminal. Remind them that if one defense mechanism can block all their attacks at once, the cybercriminal will need to think of other pathways.

### 04.  Instructor Review: Security Task #1 - Attacking the Wall (0:20)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 

Ask a few student groups to share some of their ideas. Have a TA keep track of a running list of suggestions. 

- As groups name specific methods and strategies, you can ask the class, "Who else thought of that method?" and students can use Zoom's **Raise Hand** feature to indicate if they did.

- Once you've heard from a few groups, go to the set of slides that begin with the title card **Step #1: Assess the Target**, which break down our approach to solving the problem. Then review specific attacks starting at the title card **Step #2: Define Attack Strategies**. 
  
  - The slides provide a list of 15 different ways of attacking the system. While some are more technical than others, try not to get too deep into the details. These slides are meant to provide students with ideas. They are not meant to be a full lesson on attack strategy.

  - Where appropriate, ask students for examples.
  
  - If you have stories from your professional experience that are relevant to the slides, please share!

  - When covering the slide Attack Option 3, have students quickly visit haveibeenpwned.com to see whether any of their accounts have been compromised in a data breach.
  
  - When covering the slide Attack Option 4, refer back to the USB scenario from the previous day to reinforce the concept. 

Ask if students have any question so far. 

Explain that now that we have evaluated all the threats posed to this company, we will consider how to mitigate the risks.   

### 05. Group Do: Security Task #2 - Defending the Wall (0:20)

In the same groups, students will now use their list of potential attacks from the previous activity to develop a list of at least 10 strategies to mitigate the website's risk. 

- The goal of this exercise is for students to realize that they can use certain mitigation strategies to handle multiple threats at once.

- Students should arrive at 10 or more strategies total that address the concerns.

:globe_with_meridians: Students should stay in the same breakout room groups as the previous activity. 

Send students the following activity file: 

- [Activity File: Security Task #2 - Defending the Wall](Activities/05_Defending_the_Wall/Unsolved/Readme.md)


### 06.  Instructor Review: Security Task #2 - Defending the Wall (0:15)

:bar_chart: Using [Zoom's](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-meetings) or [Slack's](https://slack.com/help/articles/229002507-Create-a-poll-) poll feature, conduct a comprehension check and evaluate how well students completed the activity. 

- It may be interesting to poll the class and ask who preferred attacking and who preferred defending.

Ask a few groups to share some of their mitigation strategies. 

- As groups share their specific methods and strategies, you can ask the class, "Who else thought of that method?" and students can use Zoom's **Raise Hand** feature to indicate if they did.

Then, review the official solutions by using the slides, starting at title card **Step Three: Risk Mitigation Plan**. 

- A key takeaway to share with students is that effective risk mitigation strategies can address multiple threats at once. 

Ask if students have any questions before starting the break. 

---

### 08. Break (0:15)

---

### 09. Instructor Do:  Introduction to Virtual Machines Setup (0:10)

Explain to the class that for the rest of the day we will set up the virtual environment we will use for the majority of future class activities. 

- During the first two weeks, the in-class activities will be mostly big-picture security thinking and conceptual exercises.  

- Starting in Week 3, we will complete practical technical activities.

- To complete these activities, students will need access to virtual machines and virtual networks. They will use these tools to practice attacking and securing systems.

Emphasize the following:

* While we will not use the virtual machine until Module 3, we want to provide students ample time and resources to set up their environment so they are ready to work immediately when we start the module. 

* If students experience any issues during this set up process, they should schedule time to visit office hours so the instructional staff can assist. 

#### What is a Virtual Machine?

:question: **Ask class**: Can anyone explain what a virtual machine is? 

Using the slides, cover the following: 

- To most people, a computer means a desktop or laptop. These are the common **physical machines** we use in everyday life.

- Physical machines, also known as bare metal machines, are physical computers that have hardware components used to run a variety of tasks.

- Physical machines contain many computer parts, or hardware, that make them run. The monitor, graphics card, and the hard drive are all examples of hardware.

Explain that it's possible to write a software program that simulates a whole computer.

In other words, it's possible to simply run an application that acts like a completely different physical computer!

  - These software versions of physical computers are called **virtual machines (VMs)**.

  - We can use a single physical machine to run multiple virtual machines, effectively turning one computer into many.

Virtual machines have many advantages over physical machines:

  - They are easy and inexpensive (often free) to set up and run.

  - We can easily distribute them. In this class, we will distribute VMs so that each student is running the exact same setup.

  - As mentioned earlier, a single physical machine can run multiple VMs. Among other scenarios, a single device will run multiple machines to set up and attack target other machines and set up redundant back-up machines. 

The main advantage of physical machines over virtual machines is that they are typically more efficient because they access the hardware components directly.

Explain that for our first use of VMs in this class, we will run the command line on a specific virtual machine known as **Ubuntu VM**. 

### 10. Everyone Do: Local Virtual Machine Setup  (0:35)

Explain that we'll use a software called **Vagrant** to download a customized and maintained version of Ubuntu for this class.

**A Note on Troubleshooting**: Emphasize that the upcoming VM setup and maintenance of VMs may require troubleshooting. It is important for students to understand that for cybersecurity and network professionals, troubleshooting is an essential part of the job. 

- If you or students encounter technical difficulties during any setup process, it is important to stay calm and positive. Again, reinforce the idea that many cybersecurity positions require problem solving to deal with faulty technology. In other words—it's all part of the job!

Send the following document to students:

- [Using Vagrant](https://docs.google.com/document/d/1Grxbagm-2jg22LiatDHzLDpJOsOl5JWJ9gl00TtiX6k/edit)

- This document contains instructions on downloading the virtual machine as well as how to update the virtual machine in the future.

For the remainder of today’s class, we’ll focus on the three-step installation process illustrated in the Using Vagrant doc:

1. Accessing the command line and downloading VirtualBox and Vagrant. 
2. Downloading the virtual machine by using Vagrant files and scripts.
3. Accessing your virtual machine. 

See if students have any questions before proceeding. 

| :warning: **Vagrant Installation Documentation** :warning: |
|:-:|
| Please read [this document](https://docs.google.com/document/d/1MKcMYmsiDWMMDZ2rL3KcY41Rq2RulxrYxxV2MYgblC4/edit#heading=h.6saygus57a1j) for thorough step-by-step instructions on downloading and installing your virtual machine. This document also contains more detailed instructions on the Vagrant commands you’ll need to update your virtual machine, as well as common troubleshooting issues. |


### Step 1: Accessing the command line and downloading VirtualBox and Vagrant.

To run virtual machines, we first need to make sure that we have the following tools installed:

- **Git Bash** for Windows users and **Terminal** for Mac users.
  - Windows users will need to install Git Bash.
  - Mac users will already have Terminal installed by default. They can open it by clicking on the magnifying glass icon at the top-right corner of their computer, typing "Terminal", and pressing Enter.
  
- **VirtualBox**: A virtualization tool we will use to run various lab activities. VirtualBox allows us to run different operating systems on our local machines.

- **Vagrant**: A tool we'll use to build and set up these virtual environments. Vagrant will allow us to run scripts that install virtual machines, which will then be run by using VirtualBox. We will run these scripts by using Git Bash or Terminal. 

Explain that the prework provided resources for students to begin this installation process on their own. If they have not yet completed these installs, they should complete them now. 

:globe_with_meridians: Move students who still need to download and install these tools into breakout rooms and have TAs work with them. 

Once every student has these tools installed, move on to Step 2.

### Step 2: Downloading the virtual machine by using Vagrant files and scripts. 

Now that we have our tools installed, we need to download the following files:

- `vagrant-linux.sh`: A script file that ensures your virtual machine is installed properly on your computer.

- Vagrantfile: Configuration file that configures and defines your virtual machine setup. In our case, when executed via the `vagrant-linux.sh` script, the Vagrantfile will configure the custom Linux Ubuntu machine that you are using. (The file name of the Vagrantfile is `Vagrantfile`, with no extension.) 

Send students the following files: 

- [vagrant-linux.sh File](VM-Setup/vagrant-linux.sh)
- [Vagrantfile File](VM-Setup/Vagrantfile)

Once students have these files on their local machines, explain that we'll work through Part 2 of the [Using Vagrant](https://docs.google.com/document/d/1Grxbagm-2jg22LiatDHzLDpJOsOl5JWJ9gl00TtiX6k/edit) document.

- Use the document to work through Part 2 and tell students to follow along with you. 

- Since students have not yet studied the command line, make sure that you move slowly and periodically check on student progress.

- If students get stuck, send them the following video tutorial: 
  - [YouTube: Vagrant VM Installation](https://www.youtube.com/watch?v=9p__oadGyo4&feature=youtu.be)

It may take up to a half hour for the virtual machine to download, so use this time to troubleshoot with students. 

Once students have set up their virtual machines by using `vagrant-linux.sh` and the Vagrantfile, move on to the next section. 

### Step 3: Accessing the virtual machine.

Explain that in later modules, we will start our virtual machine by using Git Bash and Terminal. For now, we will access it via the graphical user interface, or GUI.

Using the same document, move through Part 3, and have students follow along: 

- [Using Vagrant](https://docs.google.com/document/d/1Grxbagm-2jg22LiatDHzLDpJOsOl5JWJ9gl00TtiX6k/edit)

Finish the installation and setup process by confirming that all students have completed the following: 

1. Accessed the command line and downloaded VirtualBox and Vagrant.  
2. Downloaded the virtual machine by using Vagrant files and scripts.
3. Accessed the virtual machine.


Explain that we will finish the day by walking through a few VM setup and maintenance commands. 

### 11. Optional Everyone Do: Virtual Machine Setup and Maintenance (0:15)

Explain that the Using Vagrant document also contains a long section on virtual machine maintenance. This requires downloading the latest version of the virtual machine, as they are constantly being improved and updated. 


If you have time, review the following commands. If you do not, explain that we will update our Vagrant machines at a later date.

- **Note**: Running the commands in class may cause long wait times as the VM downloads. 

Cover the commands in the following sequence to update your virtual machine with the most recent changes:

1. `vagrant box update` to get the most recently updated virtual machine. This might take several minutes or longer, depending on your internet connection. 

2. `vagrant destroy` within the directories where your Vagrantfiles are installed to stop the virtual machines and remove all associated files.

3. `vagrant up` to launch the new version of the virtual machine.

4. `vagrant box prune` (optional) afterward to delete all old, unused versions of the virtual machine.

:globe_with_meridians: If you have the time and resources, separate advanced students into breakout groups and have them run these update commands on their own. Have a TA available for support. 

Encourage students who are still struggling with installs to meet with the instructional staff during office hours. Make sure everyone is set up with Vagrant prior to the next class. 

Let students know that they will use these Vagrant virtual machines for the first time in Module 3, Day 1. 


---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.    
