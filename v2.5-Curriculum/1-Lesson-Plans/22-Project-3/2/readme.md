## 22.2 Lesson Plan: Project 3: Monitoring and Analyzing Attacks 

### Overview

Today, students will determine whether the monitoring solutions that they designed in Day 1 protected VSI against attacks from their adversary JobeCorp. Additionally, students will create a short presentation showcasing the work that they completed on Day 1 and Day 2, which they'll present to the class on Day 3. 


### Instructor Notes

- Today's lesson plan does not include specific times for individual lectures and activities, but you should follow the day-by-day breakdown.

### Lab Environment

- Students will use Vagrant to complete all of this week's activities.

### Additional Resources

- [Splunkbase](https://splunkbase.splunk.com/)
- [Splunk Documentation](https://docs.splunk.com/Documentation)
- [Splunk Add-Ons Guide](https://docs.splunk.com/Documentation/AddOns/released/Overview/AboutSplunkAdd-ons)

### Slideshow

The slideshow for today's class is located on Google Drive here: [Project 3 Day 2 Slides](https://docs.google.com/presentation/d/1V5hZE5SuP5zXeN-irq_t0CewFPs5G1azkTPZeaHl1d4/edit#slide=id.g4789b2c72f_0_6).

---

### 01. Instructor Do: Welcome and Day 1 Recap

Welcome students to the second day of **Project 3**.

Remind the students that on Day 1 of our project, they played the role of SOC analysts at a fictional organization called **Virtual Space Industries (VSI)**.
 -  Since VSI had heard rumors that a competitor, **JobeCorp**, may launch cyberattacks to disrupt VSI's business, students were tasked with using Splunk to develop a monitoring environment that would protect against potential attacks on VSI's systems and applications.

  - In the previous class, students developed this monitoring environment by completing the following Project 3 deliverables:
    -  (1) - **Loading and analyzing Windows logs.**
    -  (2) - **Creating reports, alerts, and dashboards for the Windows logs.**
    -  (3) - **Loading and analyzing Apache logs.**
    -  (4) - **Creating reports, alerts, and dashboards for the Apache logs.**
    -  (5) - **Installing an add-on Splunk application for additional monitoring.**

Emphasize that students must have completed the above steps before proceeding with today's activities.  


#### Today's Class

Let students know that the rest of today's class will proceed as follows:

  - (1) We will begin by covering today's scenario.
  - (2) Then, we'll briefly overview their daily project tasks.
  - (3) Then, we'll preview Day 3's class presentations.
  - (4) Finally, students will be provided a guide and complete their tasks for the remaining class time.
     - Note that today's guide will include [review questions](https://docs.google.com/document/d/18JLq4dUf4zrL-6eqTNumXicpvpUDbHxPnZx2kOzwYoQ/edit?usp=sharing), which students will submit at the conclusion of the project.   

Take a moment to address any questions before proceeding.

### 02. Instructor Do: Day 2 Scenario

- Introduce Day 2's scenario:
   - You have just been notified by your manager that VSI recently experienced several cyberattacks, likely from their adversary **JobeCorp**.
     - Unfortunately, this attack took down several of VSI's systems.
   - Fortunately, you have just set up several monitoring solutions to help VSI quickly identify what was attacked. 
   - The attack that occurred targeted several systems&mdash;specifically, the Windows and Apache servers, which you are fortunately monitoring.
   - Management has provided you with more logs from those same servers. These new logs cover the time period during which the attack occurred.
   - You are now tasked with analyzing these "attack logs" with your monitoring solution to determine the efficacy of your solution. 
     - Additionally, your findings will help VSI create any further mitigation strategies that are necessary.
   - Lastly, you will create a presentation that showcases your monitoring solution and your findings to senior management.

   
⚠️ **Important** ⚠️
   
   - Students are **required** to remain in class (online or in person).
   - Each day builds on the previous day's work to complete the project, and each day's activities must be completed **in order**.


### 03. Instructor Do: Day 2 Project Overview

Now, we'll review what students will accomplish on Day 2 of the project. 
- Students will shortly be provided a guide with five steps:
    -  (1) - **Load Windows attack logs.**
    -  (2) - **Analyze Windows attack logs.**
    -  (3) - **Load Apache attack logs.**
    -  (4) - **Analyze Apache attack logs.**
    -  (5) - **Create project presentations.**

- Explain the following five steps:

**(1) - Load Windows Attack Logs**
    
- Explain that students will soon be provided a document with the steps required to complete the Day 2 activities.

- Students will first be provided a set of "attack logs" from the Windows servers that run VSI's back-end systems. These logs were captured during the time when the attack occurred.  The guide will provide steps for loading and configuring these new logs.
    
**(2) - Analyze Windows Attack Logs**

- Explain that for this step, students will analyze the Windows attack logs to determine how effective their monitoring solution was or wasn't. They will be required to complete review questions as part of their assessment.

**(3) - Load Apache Attack Logs**

- Then, students will be provided a set of "attack logs" from the Apache servers that run VSI's back-end systems. These logs were captured during the time when the attack occurred. The guide will provide steps for loading and configuring these new logs.

**(4) - Analyze Apache Attack Logs**

- For this step, students will analyze the Apache attack logs to determine how effective their monitoring solution was or wasn't. They will be required to complete review questions as part of their assessment.

**(5) - Create Project Presentations**

- Explain that for today's final step, students will begin preparing slides for a presentation of their work this week. They will present in groups on Day 3 of this project. A framework for the slides and instructions will be provided to assist in the creation of the presentation.


### 04. Instructor Do: Day 3 Project Presentation Preview

Explain to the class that after they complete today's activities, they can begin preparing their presentation for the third day.

Review the following about student presentations:
  - On the third day of class, the schedule will be as follows:
      - **First 30 minutes**: Students will work in groups to finalize their project presentations.
      - **The remaining 2 hours**: Groups will present their project presentations.
  - Each group will have a 15-minute time slot for their presentation.
     - Students should plan for a **max** of 12 minutes presenting, followed by 3 minutes of Q&A.
  - Groups can choose to have 1 presenter for the whole group, or have the group split up the presentation among group members.
     - **Instructor Note**: For larger class sizes (40+ students), we recommend 1&ndash;2 presenters per group.
  - Groups should work together to prepare the presentation, but each student will need to submit a complete presentation as their deliverable (even if it is the same as other group members').
  - The framework provided for the presentation should be used for general guidance, but students should feel free to enhance or adjust their presentation as the team sees fit.
     - Students can also elect to share their dashboard or reports during their presentation.


### 05. Student Do: 

For the remainder of today's class, students will work on completing the Day 2 tasks of their projects.

Send out the following student guide: 
- [Day 2 Guide](https://docs.google.com/document/d/1uQGhsDiBt58_KStq3DQVbWTHUg6TIhAog3cMoXvNQk4/edit?usp=sharing) 


---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
