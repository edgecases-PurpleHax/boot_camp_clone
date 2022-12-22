##  19.3 Lesson Plan: Masters of the SOC

### Overview

Today, students will work in groups to become Masters of the SOC.  Students will use the skills they acquired over the last two weeks to identify an organization's security issues.

### Instructor Resources

- Students will be using the Splunk environment within their VM.

- Students will be provided logs of normal business activity and attack activity.

#### Next Week's Lab Environment

In the next project week, we will be using a new Red vs Blue lab environment located in Windows Azure. You and students will need a class-specific registration link. 

- If you are unsure about where to find this unique registration link, please do the following:

  * Refer to this [spreadsheet](https://docs.google.com/spreadsheets/d/1uHVzvVQftHL4CkUOB03lNelf-kLToZys6ugsIoVOpE0/edit#gid=0) to find your university specific spreadsheet.
  * Open up your university-specific spreadsheet and navigate to your specific cohort’s tab.
  * Find the registration link for the appropriate lab environment 
  * Note that these links will be added 1-2 classes prior to when students will be using the lab environment for the first time. If you would like access to a lab environment earlier for preparation, please reach out to the curriculum team.

- At the end of today's class:

  - Tell students to turn off their virtual machines and return to their local computers.
  - Send the Red vs Blue Azure registration link. When students click on this link, it will add the Red vs Blue environment card to their Azure dashboards.
  - Explain that the machines are found in this environment and then share the log-in credentials for each one.
  - Remind students to turn off their machines and environment before ending class.



### Lab Setup

Today's class will use the Splunk Docker container from within the Ubuntu VM. The `splunk.sh` script inside the VM's `/splunk` directory can be run to start and stop the container as needed.

- `sudo docker ps` can be used to determine if the container is running.

Once the container is running, Splunk can be accessed at http://localhost:8000 on the Ubuntu VM.

Credentials are:
- Username: `admin`
- Password: `cybersecurity`

### Assigning Group Work Online

Today's lesson revolves around a group activity. Students will complete the group work in [Zoom breakout rooms](https://support.zoom.us/hc/en-us/articles/206476313-Managing-breakout-rooms). 

- Only the host will be able to create breakout rooms. If you want help creating them, feel free to assign the host role to another instructional staff member and take the role of co-host. 

- If you or your instructional team are having difficulty navigating between rooms during these activities, check that all staff have host or co-host roles. 

- Co-hosts should also be assigned to a staff-specific breakout room, which they will go to once rooms are assigned. After this, they should be able to navigate between rooms. 

- Zoom can randomly assign students to rooms based on the number of participants you want in each room. 

- If you'd like to make the groups yourself, choose the Manual option when assigning students to rooms and assign each student to a specific room. One of the rooms can be for instructional staff.

**Important:** If class is being recorded to the cloud, only the main room will be recorded. However, if class is being recorded locally, it will record whichever room the host is in. Keep this in mind when having private conversations with your instructional team. 



### Slideshow

The lesson slides are available on Google Drive here: [19.3 Slides](https://docs.google.com/presentation/d/1I06WTH0zjIyb25u2ZtDadljqRuoYLVgIx2AUKPkVki0)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...". 

### Time Tracker

- The lesson slides are available on Google Drive here: [19.3 Time Tracker](https://docs.google.com/spreadsheets/d/1K112UYTZdbR03-TF4ZkoHtMkRN74fyaBF-4zdboa2iA/edit#gid=1047115118)

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...". 

### Student Guide

- [19.3 Student Guide](StudentGuide.md)


---

### 01. Instructor Do: Welcome and Introduction to Master of the SOC (0:05)

Welcome the students to the final day of the second week of SIEM. 

Explain that today we will review many of the concepts we've learned about SIEM and Splunk with an engaging and fun activity called the Master of the SOC.

Explain the following about the Master of the SOC activity:
  - Students will be broken up in groups of three or four.

  - They will be playing the role of SOC analysts at a fictional organization.
  
  
The class has two parts:

- **Part 1: Create Your SOC**
  - Students are provided logs of normal business activity for their fictional organization.

  - They are tasked with analyzing these logs and using them to create reports, alerts, and dashboards.

  - Specific instructions will be provided.
    
- **Part 2: Defend Your SOC**   
  - Students are provided multiple sets of logs that contain suspicious activity.

  - They must use the monitoring tools created in Part 1 to analyze and protect their organization from potential attacks.


### 02. Instructor Do: Master of the SOC Scenario and Guidelines (0:05)

Explain the activity scenario and guidelines before having students join their groups and begin Part 1.

#### Scenario

  - Each group will act as a SOC analyst at a small company called Virtual Space Industries (VSI).

  - VSI is a company specializing in the design of virtual reality programs for businesses.

  - VSI has heard rumors that a competitor, JobeCorp, may be launching cyberattacks to disrupt VSI's business.

  - As SOC analysts, you are tasked with using Splunk to monitor against potential attacks on your systems and applications.

  - Your Networking team has provided you with past logs to help you develop baselines and create reports, alerts, and dashboards.

  - After you have designed your monitoring solutions, you will be provided logs of attacks from JobeCorp and will determine if your monitoring solution successfully identified the attacks.
  
#### Guidelines    

- Groups will be provided two VSI logs files of normal, unsuspicious activity:
    - One for a Windows server
    - One for an Apache web server

- Use the Splunk Search & Reporting application. Do not not the Enterprise Security Application for this part.

- In each group, **each individual student** should be working in their own Splunk environment to conduct the activities.
    - Groups can split up activities between the different group members.

- One student in each group should have the "Master" Splunk SOC environment that contains all of the deliverables.

- The group must complete all required deliverables. Each group must decide how the SOC is designed and how the deliverables are achieved.

- Groups can use any resource while completing the activity: class notes, slides, Splunk online resources, etc.  
  
- If time permits, several groups can present their SOC at the end of class.   


Ask the class if they have any questions before beginning Part 1 of Master of the SOC. 


:globe_with_meridians: This activity will use **breakout rooms**. Assign students to groups. If needed, consult the notes in the preface section **Assigning Group Work Online**.



### 03. Student Do: Part 1 - Create Your SOC (1:15)
  
  
Send the following files to students: 

  - [Activity File: Part 1 - Create Your SOC](activities/Part-1/Unsolved/README.md)
  - [Windows Server Logs](resources/windows_server_logs.csv)
  - [Apache Web Server Logs for Customer-Facing Web Application](resources/apache_logs.txt)

    
Remind students that they have 1 hour and 15 minutes to complete the activity.  

**Instructor Note:** There will be no formal review of Part 1. If a group is having difficulty with any of the deliverables, refer them to the following guide for assistance:  

- [Solution Guide: Part 1 - Create Your SOC](activities/Part-1/Solved/README.md)
      
### 04. Break (0:30)

### 05. Student Do: Part 2 - Scenario and Guidelines (0:05)

Welcome the students back from break. Recap that in the first half of class, they designed several monitoring solutions to protect VSI.

Provide the following update about VSI:

- Unfortunately, VSI experienced several cyberattacks, likely from their adversary JobeCorp.

- Fortunately,  your SOC team recently set up several monitoring solutions to help VSI quickly identify what was attacked.

- These monitoring solutions will also help VSI create mitigation strategies to protect the organization.
  
Before beginning Part 2, discuss the guidelines again: 

- Groups will be provided two VSI logs files of normal, unsuspicious activity:
    - One for a Windows server
    - One for an Apache web server

- Use the Splunk Search & Reporting application. Do not not the Enterprise Security Application for this part.

- In each group, **each individual student** should be working in their own Splunk environment to conduct the activities.
    - Groups can split up activities between the different group members.

- One student in each group should have the "Master" Splunk SOC environment that contains all of the deliverables.

- The group must complete all required deliverables. Each group must decide how the SOC is designed and how the deliverables are achieved.

- Groups can use any resource while completing the activity: class notes, slides, Splunk online resources, etc.  
  
- If time permits, several groups can present their SOC at the end of class.   

**Important**: Since students are analyzing a new set of data, after the new data file is loaded, *the source must be changed* on the reports, alerts, and dashboards.
  
  - Detailed instructions will be provided to complete these steps.  
  
Ask the class if they have any questions before they rejoin their groups and begin Part 2 of Master of the SOC.  
  
### 06. Student Do: Part 2 - Defend Your SOC (1:15)
  
Send the following files to students: 
  - [Activity File: Defend Your SOC - Part 2](activities/Part-2/Unsolved/README.md)
   - [Window Server Attack Logs ](resources/windows_server_attack_logs.csv)
   - [Apache WebServer Attack Logs](resources/apache_attack_logs.txt)
    
:globe_with_meridians: This activity will continue to use **breakout rooms**. Assign students back to their same groups.

 Explain that we will review Part 2 at the end of class.
  
### 07. Instructor Review:  Part 2 - Defend Your SOC (0:15)

Congratulate the class on completing today's activity.

- Ask if any groups want to present their dashboards and describe how they detected attacks from JobeCorp.
  - If several groups are interested in presenting, limit each group's presentation time to 5 minutes.

If time permits, begin to walk through the solution guide. If time is limited, send out the following file:

- [Solution Guide: Part 2 - Defend Your SOC](activities/Part-2/Solved/README.md)
 
Before dismissing class, explain that their homework will be a continuation of today's activities, focusing on how to mitigate against the attacks they identified.


### 08. Instructor Do: Next Week's Azure Lab Environment

Let students know that in the next unit, we will be returning to Azure Lab Services for our second project. We will be using a new lab environment: `Red vs Blue`

Tell students to switch to their local computer environment. Send students the registration link for the Red vs Blue environment. Once they click on it, the Red vs Blue environment card will be added to their Azure dashboard.

- RDP into the **Windows RDP host machine** using the following credentials:

  - Username: `azadmin`
  - Password: `p4ssw0rd*`

Make sure all students are set up and can access this environment. Address any troubleshooting issues prior to the next class.

Remind students to turn off any nested VMs running and their Red vs Blue lab environment before ending class.
   
-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
