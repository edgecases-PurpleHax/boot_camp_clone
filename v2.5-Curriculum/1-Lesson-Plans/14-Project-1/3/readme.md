## 14.3 Lesson Plan: Protecting your Web Application with Azure's Security Features

### Overview

Today, students will complete the final tasks for their project. They will **protect** their web application by utilizing Azure's cloud security features. This day will incorporate topics from the Networking and Web Development modules.


### Instructor Notes

- Today does not include specific times for individual lectures and activities, but you should follow the day-by-day breakdown.

- Be sure to keep an eye out for students who miss any days of the project. Notify those students that they will need to catch up on any missed work as each day's activities need to be completed in order.

- Based on the domain option the students previously selected, they will follow a daily guide that matches their selection.


### Lab Environment

Students will continue using their personal Azure accounts and building upon their existing Azure VMs. They will **not** use their Cyberxsecurity accounts.

### Additional Resources



### Slideshow


The slideshow for today is located on Google Drive here: [Project 1 Day 3 Slides](https://docs.google.com/presentation/d/16oMZPbxJiPygsFXrAqiOeCBN3QohfwsJHKT2n1vnD3I/edit)


---

## Day 3: Protecting your Web Application with Azure's Security Features


### 01. Instructor Do: Welcome and Project Day 3 Overview  

Welcome students to class and explain that today is the third and final day of **Project 1**.

  - Remind students that in the last class they completed the following deliverables for the second day of Project 1:
    - Created a key vault.
    - Created a self-signed certificate.
    - Imported and bound their self-signed certificates to their web app (***except students who chose the free domain***).
    - Created and bound an app service managed certificate (***except students who chose the free domain***).
    - Answered review questions.

Emphasize that students will need to complete the above steps before proceeding with today's activities.  

   
⚠️ **Important** ⚠️
   
   - Students can choose to work independently or in groups, but they are **required** to remain in class (online or in person).
   - Each day's lessons build on the previous day, so each day's activities are required to be completed **in order**.


#### Today's Class

Let students know that the rest of today's class will proceed as follows:

- Introduction to Azure Front Door
- Overview of tasks students will complete on Day 3
- Project work: working through the project steps to protect their web application

Take a moment to address questions before proceeding.

### 02. Instructor Do: Azure Front Door

Explain that while so far students have created and secured their web applications' traffic using SSL certificates, web applications are still subject to attack by malicious actors.
- Attacks can include:
  - Denial of service to make the web application unavailable.
  - Attacks against web vulnerabilities, such as cross-site scripting and SQL injection (which we'll cover in more detail during the web vulnerabilities module).
  - Attacks against misconfigurations, such as leaving insecure ports open on the web server.

Explain that fortunately, Azure has several technologies that can protect against these attack types, including: 
  - **Azure Web Application Gateway**
  - **Azure Front Door**

Explain the similarities between these two tools:
  - Both of these tools reside in *front* of your web application to protect it.
  - They both work on the Application Layer of the OSI Model (Layer 7).
  - Their primary solution is a load balancer.
  - They can incorporate a Web Application Firewall (WAF) to protect against web vulnerabilities attacks (this will be covered in today's project).
  - They have additional features, such as **URL path-based routing** and **SSL/TLS termination** (which will not be covered in today's project).

The differences between the two are:
  - The **Web Application Gateway** is more regional, to protect a web application in a single region in a cloud.
  - **Azure Front Door** is more global and is better suited when you have a variety of regions in a cloud environment.
   
Additionally, **Azure Front Door** is simpler to implement, so for today's project we will utilize its features to protect students' web applications.
 

 - Ask the class if they have any questions before proceeding to the Day 2 overview.
  

### 03. Instructor Do: Day 2 Project Overview

Now that students are familiar with Azure Front Door, we will cover what they will be do on Day 3 of their project. 
- You will shortly provide students with an activity guide that includes six steps:
  - (1) **Create a front door**. 
  - (2) **Analyze WAF rule sets**.
  - (3) **Configure custom WAF rules**.
  - (4) **Analyze and remediate security center recommendations**.
  - (5) **Answer review questions**.
  - (6) **Project conclusion instructions**.

Explain the following six steps:

####  (1) Create a Front Door

Explain that you will provide students a document with the information required to complete the final steps of the project.
 - Today's first step will be to create an **Azure Front Door** resource to add cloud security protections to their web application.


####  (2) Analyze WAF Rule Sets

Next, students will analyze a feature of Azure Front Door, the **Web Application Firewall or WAF**, and the web vulnerabilities it protects against.

  
####  (3) Configure Custom WAF Rules

In this section, students will be provided a scenario of an attack type, and they will learn how to set up a custom rule within the WAF to protect their web application from these attacks.

####  (4) Analyze and Remediate Security Center Recommendations

Explain that in this step, students will view security recommendations from Azure's Security Center tool and fix one of the recommendations from the Security Center Dashboard.
- Point out that Azure's Security Center has many features, such as custom alerting, which will not be covered in this project.

####  (5) Answer Review Questions

Like Days 1 and 2, today's activities will conclude with several questions about the project, reviewing many of the domains covered up to this point in the class.

- Students should feel free to use any resources available (i.e., class notes, slides, online resources) to answer these questions.


####  (6) Project Conclusion Instructions

Explain that at the end of today's activities, students will receive instructions on:
- Submitting project deliverables
- Disabling any paid features

Ask the class if they have any questions on these steps before proceeding to the final student activity.

### 04. Student Do: **Protecting** Your Web Application with Azure's Security Features

Explain that for the remainder of today's class, students will work on completing the Day 3 tasks of their projects.

Remind students of the following before they start:
  - While each student is responsible for completing their own project, they can use their classmates, TAs, or the instructor for assistance if they have any questions.
  

Send out the following student guide. Note that all students will be completing instructions from the same guide today. 
- [Day 3 Guide: Azure's Security Features](Activities/Day3_azure_security_features.md)




---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
