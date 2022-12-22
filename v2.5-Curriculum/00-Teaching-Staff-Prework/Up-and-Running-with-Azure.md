## Up and Running with Azure

This document contains:

* An overview of Azure and why we use it in class.

* The Azure Training Sequence, containing links to several documents with information on setting up Azure, navigating and managing the administrative dashboard, and troubleshooting common student issues.

All instructors and TAs must review these documents thoroughly.


### Technical Labs via Azure Lab Services

Beginning with the Windows unit, students and instructors access lab environments via Microsoft Azure Lab Services. 

Students use a local virtual machine for units that require them to only access a single Ubuntu machine. But virtual networks are too resource-intensive to run locally.

* We use several cloud lab environments during this program, listed below. To begin, you will use the Windows lab environment.
  * Windows
  * Network Security
  * Web Vulnerabilities
  * Pentesting 1
  * Pentesting 2
  * Project 2
  * Forensics
  * Project 3

* **Note**: The Cloud and Project 1 units require you and students to use different, personal Azure accounts. We provide instructions in the repository on how to do this. **You can find a link to these instructions in the homework for Week 10: Cryptography.**

* Since we use Azure, we embed all of our environments within a Windows Hyper-V machines.

* While this setup isn't required, we found many benefits to nesting our machines within a Windows host machine:
  * RDP connections to a Linux machine are considerably slower than to a Windows machine. Since we will be using RDP to connect our machines for class and homework activities, choosing  a Windows host machine was primarily a performance decision.

  * Shared passwords are only available for Windows machines, not Linux. Shared passwords allow us to provide the same RDP password for everyone, helping avoid troubleshooting and setup issues.

  * We can distribute the most recent versions of the VMs, so we can ship the most up-to-date builds.

  * Automatic shutdown policies are only available for Windows hosts. This helps ensure that students don’t go over their quota hours for the lab environments and helps us minimize costs.

* Regarding Azure usage hours:
  * Lab environments will automatically start 15 minutes before and after class. This means they will be on from 6:15 p.m. to 10:15 p.m. on weekdays, and 9:45 a.m. to 2:15 p.m. on Saturdays.

  * Outside of these class hours, you and students can still access the lab environment by manually starting and stopping the machine.

  * However, we have strict quotas for students' use outside of class hours. While this will vary, as a general rule, if a lab environment is used during a unit, students will have 15 hours of outside classroom time during that week to access the lab environment.

**Important**: Please make sure students are shutting off their machines and environments at the end of class to avoid using up quota hours.

### Azure Training Sequence

Since a significant portion of the class will be delivered through these lab environments, it is crucial that you get comfortable using and managing Lab Services.

* This training is mandatory to meet our SLAs regarding response times to bug reports, as we will assume that you are familiar with everything included in a bug solution. For example, if you report an issue and the solution is resetting the VM, you will simply be instructed to reset the VM, but not how to perform the reset.

* Please go through the below documents in the following order:
  * [Accessing Azure](https://docs.google.com/document/d/1jGUIBXh2C7dVsCqVkFo9MqwYLKh97g1uX3cpASZoXWs/edit): This document walks you through how to access and get set up on Azure for the first time, start and stop your personal machines in your dashboard, access nested VMs in an environment, and spot check all lab environments.

  * [Azure Classroom Labs Admin Interface: Overview and Troubleshooting](https://docs.google.com/document/d/1Jg2agb7JLe5QXMqk-GMLdKBZS-0lNAjDNDeeNtRVK6k/edit): This document will help you navigate the Labs Admin Interface, which allows you to view student environments. It also provides valuable troubleshooting instructions that you will use with students.

  * [Troubleshooting at a Glance Guide](https://docs.google.com/document/d/11ihpGOpp8WX42g9y_sTliEjt95DRPwXdsyzZmqn9V_0/edit?ts=5e707598): This document contains common student issues and solutions. Refer to the Azure Classroom Lab Admin Interface document for step-by-step instructions on many of those solutions.


---
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
