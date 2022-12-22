## 22.1 Lesson Plan: Designing Your Defensive Solution

### Overview

This week, students will work in groups to use the skills they have learned in the defensive unit to design a custom monitoring environment to protect a fictional organization. On **Day 1**, students will use Splunk to research and design a monitoring solution for their fictional organization. On **Day 2**, students will determine if that monitoring solution will protect their organization from several simulated attacks. On **Day 3**, students will showcase their defensive projects with class presentations.


### Daily Objectives

- **Day 1**: Students will develop a defensive solution utilizing a variety of Splunk tools that they learned in class in order to protect their mock organization. Students will receive logs of “normal” business functions in order to understand the organization's environment. They will use these logs to create baselines and then design custom alerts, reports, and dashboards, which were covered in class. Students will additionally have the opportunity to download and use Splunk "add-on" apps of their choice to monitor against types of attacks.

- **Day 2**: Students will experience a simulated attack against their hypothetical organization. Students will analyze their reports/dashboards, which they created on Day 1, to determine whether their defensive choices protected their organization from these attacks. Students will be provided with review and analysis questions.   Additionally, they will start preparing slides to present their findings on the third day of class.

- **Day 3**: In their groups, students will present the defensive solution that they created, how well or poorly it alerted and protected against the simulated attacks, and any adjustments they would make to their solution.


### Instructor Notes

- ⚠️ **Important** - Due to time limitations on the third day, it is likely that not all students will be able to present. Have students work in groups of 4 to 7 people, and do not create more than 10 groups. 
   - Remind the class to remember their groups, as they will work with the same groups for the remainder of this project!

The **grading rubric** for this project is located in the following document:

- [Project 3 Grading Rubric](https://docs.google.com/document/d/1MYWjjU0HuioTER0dhbYGpLymcu_AWcsY_HE9qkONoUk/edit)

### Lab Environment

- Students will use Vagrant to complete all of this week's activities.
- Students can refer back to the following [guide](https://github.com/coding-boot-camp/cybersecurity-v2/blob/main/v2.5-Curriculum/1-Lesson-Plans/19-SIEMs/1/resources/splunk_lab_setup.md) to configure Splunk on their VM.

### Additional Resources

- [Splunkbase](https://splunkbase.splunk.com/)
- [Splunk Documentation](https://docs.splunk.com/Documentation)
- [Splunk Add-Ons Guide](https://docs.splunk.com/Documentation/AddOns/released/Overview/AboutSplunkAdd-ons)


### Slideshow

The slideshow for today is located on Google Drive here: [Project 3 Day 1 Slides](https://docs.google.com/presentation/d/16mzffkiXlarZolOymcsPNRL4k1ZH-LtJwgZQtR5l2zE/edit#slide=id.g4789b2c72f_0_6).

---

### 01. Instructor Do: Welcome and Project Scenario

Welcome students to class, and explain that today is the first day of Project 3.

- Begin by reminding students that during the Defensive Security unit, we covered the following topics:
  - Information security continuous monitoring (ISCM)
  - Log types and how they are used for monitoring
  - Log aggregation and correlation
  - Baselining
  - SIEMS
  - **Splunk**:
     - Splunk Processing Language (SPL)
     - Reporting
     - Alerting
     - Dashboards
     - Add-on applications

- Congratulate them on covering these topics, and explain that they will get to apply all of these skills in our third project!


**Project Scenario**

Explain that for this week's project, students will play the role of SOC analysts at a fictional organization called **Virtual Space Industries (VSI)**.

Further explain this week's scenario by covering the following:
  - VSI is a company that specializes in the design of virtual-reality programs for businesses.
  - VSI has heard rumors that a competitor, **JobeCorp**, may launch cyberattacks to disrupt VSI's business.
  - As SOC analysts, you are tasked with using Splunk to monitor against potential attacks on your systems and applications.
  - The VSI products that you have been tasked with monitoring include:
     - An administrative webpage: https://vsi-corporation.azurewebsites.net/
        - Note that this web page is only accessible within the virtual environment. 
     - An Apache web server, which hosts this webpage
     - A Windows operating system, which runs many of VSI's back-end operations
  - Your networking team has also provided you with past logs to help you develop baselines and create reports, alerts, and dashboards to protect VSI from any attacks by JobeCorp.

Tell students that there's a high likelihood of a cyberattack, and VSI is counting on their great work this week to protect the company!


### 02. Instructor Do: Daily Schedules, Objectives, and Deliverables


#### Daily Structure

Next, remind the class that, like previous project weeks, class will run a little differently this week.
- Explain that each day will proceed as follows:
  - (1) A brief lecture and overview of their daily project tasks.
  - (2) Students will be provided a project guide and work on completing their tasks for the remaining class time.
    - On Day 2, the guide will conclude with review questions, which students will submit at the conclusion of the project.
   
⚠️ **Important** ⚠️
   
   - Students will complete this project in groups, but every student is **required** to remain in class (online or in person).
   - Groups are permitted to split up the work on these projects, but each student must submit all project deliverables.
   - Each day builds on the previous day's work to complete this project, and each day's activities must be completed **in order**.

#### Daily Objectives and Milestones

Introduce the high-level objectives for each day of Project 3:

- **Day 1**: Students will develop a defensive solution utilizing a variety of Splunk tools that they learned in class in order to protect their mock organization. Students will receive logs of “normal” business functions in order to understand the organization's environment. They will use these logs to create baselines and then design custom alerts, reports, and dashboards, which were covered in class. Students will additionally have the opportunity to download and use a Splunk "add-on" app of their choice to monitor against other types of attacks.
- **Day 2**: Students will experience a simulated attack against their hypothetical organization. Students will analyze their reports and dashboards, which they created on Day 1, to determine whether their defensive choices protected their organization from these attacks. Students will be provided with review and analysis questions. Additionally, they will start preparing slides to present their findings on the third day of class.
- **Day 3**: In their groups, students will present the defensive solution that they created, how well or poorly it alerted and protected against the simulated attacks, and any adjustments they would make to their solution.

Let students know that while they will work in groups this week, they should aim to have a certain amount of work completed each day. Specifically, the suggested milestones are:
  - **Day 1** (Today): Design reports, alerts, and dashboards to protect VSI from attacks.
  - **Day 2**: Analyze the attacks that occurred against VSI and determine whether the mitigations created in Day 1 were successful.
  - **Day 3**: Complete the review questions and presentation.

Remind students that while they must submit their projects individually, they should work through problems together in their groups, and they can ask instructional staff for help if they get stuck.

#### Project Deliverables

Let students know that as they work through the project, they will develop the following deliverables that they can take with them and discuss at job interviews (note that these will also be submitted as their completed project):
- **Technical brief/review questions**: Answers to a series of questions illustrating the monitoring solution that they created and its efficacy for defending against attacks.
     - Screenshots of the monitoring solution will also be submitted with this document.
- **Presentation slides**: The slides the team uses for Day 3's presentation will also be submitted.
 
#### Today's Class

Let students know that the rest of today's class will proceed as follows:

- Introduction to the project scenario
- Overview of tasks students will complete on Day 1
- Project Work: working through the project steps to develop their monitoring solution

Take a moment to address questions before proceeding.

  
### 03. Instructor Do: Day 1 Project Overview

We will now review what students will do on Day 1 of the project. 

- Students will shortly be provided a guide with five steps:
  -  1. **Load and analyze Windows logs.**
  -  2. **Create reports, alerts, and dashboards for the Windows logs.**
  -  3. **Load and analyze Apache logs.**
  -  4. **Create reports, alerts, and dashboards for the Apache logs.**
  -  5. **Install an add-on Splunk application for additional monitoring.**

Explain the following 5 steps:

#### 1. Load and Analyze Windows Logs

Students will soon be provided a document that will guide them through all of the steps required to complete the Day 1 activities.

- Explain that students will first be provided a set of logs from the Windows servers that run VSI's back-end systems. The logs are representative of normal business operations. Students will load these logs and analyze the data that they contain in order to determine baselines of normal activity.

#### 2. Create Reports, Alerts, and Dashboards for the Windows Logs

- Students will then create reports, alerts, and dashboards based on the their research in the previous step. They will use these reports, alerts, and dashboards to determine if a future attack occurs.
- **Important** - Point out that students must grab screenshots where indicated in their daily guide, as they will add those to their presentation on Day 3.

#### 3. Load and Analyze Apache Logs

- Next, students will be provided a set of logs from the Apache web servers that host VSI's web application. The logs are representative of normal business operations. Students will load these logs and analyze the data that they contain in order to determine baselines of normal activity.

#### 4. Create Reports, Alerts, and Dashboards for the Apache Logs

- Students will again create reports, alerts, and dashboards based on the their research in the previous step. They will use these reports, alerts, and dashboards to determine if a future attack occurs against their web server.

#### 5. Install an Add-On Splunk Application for Additional Monitoring

- Students will choose one of several Splunk add-on apps to assist with monitoring. Students will install the app and configure it to protect VSI's systems.


### 04. Student Do: Project Work 

Explain that for the remainder of today's class, students will work on completing the Day 1 tasks for their projects.

Remind students of the following before they start:
  - Groups are permitted to split up the work on these projects, but each student is required to submit all project deliverables.
  - Students should remember their groups, as they will work with these same groups for the remainder of this project!
  - Students will be required to submit screenshots for their project presentations, so they should grab a screenshot every time the project guide suggests it during the day's activities.
  - The milestone to complete by the end of today's class is to design reports, alerts, and dashboards, and select and install a Splunk add-on app to protect VSI from attacks.
 
Send out the following student guide:

- [Day 1 Guide](https://docs.google.com/document/d/1WBQ9jpDE-TOsHpXd97iBAkfCDStKAAjtIAr6Y7oyp_4/edit?usp=sharing)

---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
