## 18.1 Lesson Plan: Introduction to SIEMs

### Overview

Today's unit marks the transition into defensive security topics with an introduction to SIEM technology. Students will be introduced to various concepts of security monitoring, such as prioritizing threats and log aggregation and correlation, and then learn how to apply these concepts to a SIEM software.  

### Class Objectives

By the end of class, students will be able to:

- Analyze logs and determine the types of data they contain, as well as the types of security events they can help identify.

- Isolate, identify, and correlate fields across raw log files.

- Design a correlation rule that triggers a notification when an event occurs.

- Make informed decisions about which SIEM vendor is best for an organization.

### Lab Environment - Vagrant Virtual Machine

You will use your local Vagrant virtual machine for today's activities. Please make sure you have the latest version downloaded prior to class.
- For a refresher on how to get the latest Vagrant, refer to the [Using Vagrant](https://docs.google.com/document/d/1h-zcoKt6c4AnZBENHLPWsXJ1djs1c96-9zkf7Jsb_GQ/edit) document.

This week's classes will use a Splunk Docker container to run Splunk from inside the local virtual machine. Inside the virtual machine in the `/splunk` directory is a `splunk.sh` script that can be run to start and stop the container as needed.

- `sudo docker ps` can be used to determine if the container is running.

- Once the container is running, Splunk can be accessed at `http://localhost:8000` on the virtual machine.

Use the following credentials:
- Username: `admin`
- Password: `cybersecurity`

Logs for all the activities and demonstrations can be found in `/splunk/logs`.

### Slideshow

The lesson slides are available on Google Drive here: [18.1 Slides](https://docs.google.com/presentation/d/1vER5UBuHL_STOOpZ-O8E1_owh6T2bvWHn3GkkBC2ua4/edit?ts=5eb95034#slide=id.g4789b2c72f_0_6)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with any other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker is available on Google Drive here: [18.1 Time Tracker](https://docs.google.com/spreadsheets/d/1s8kn55fCADkgBwufWI3vsHrHisZpglwA5fEHMBjaON0/edit#gid=0)

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Student Guide:

- [18.1 Student Guide](StudentGuide.md)



-------

### 01. Instructor Do: Introduction to SIEM Week (0:05)

Welcome students back to class. Inform them that over the next two weeks they will learn about a technology called SIEM (security information and event management).

Begin by reminding the class that the three primary cybersecurity goals of an organization are confidentiality, integrity, and availability.

- Explain that organizations must constantly determine whether these cybersecurity goals are being compromised.

  - For example, if an adversary were attempting to brute force their way into an an online auction company's administrative website to steal privileged information, the company would need to identify the activity before sensitive data and confidentiality were breached.

- Explain that over the next two weeks we will introduce students to SIEM (pronounced SIM) technology, which organizations use to solve the challenge of monitoring and identifying security incidents.

Let students know that in this week's exercises, they will be playing the role of a security operations center (SOC) manager at an online military products organization called Omni Military Products (OMP).

  - OMP recently experienced several security-related events that put their organization at risk.

  - As the new SOC manager, students will have to use SIEM tools and technologies to protect OMP from a variety of security events.

Explain that while most of the classes over the next two weeks will be very hands-on, our class today will focus on conceptual understanding and the business decisions that companies must make to maintain the cybersecurity triad.

Make sure to cover the daily objectives and answer any questions before proceeding to the first topic of the day.


### 02. Instructor Do: Introduction to Continuous Monitoring (0:10)

Begin by explaining that modern organizations have many networked devices and data assets, creating a large attack surface that can be targeted by many attackers.

  - Explain that there is a general acceptance in the information security industry that a prepared and resourced attacker will be able to bypass security controls. In other words, despite security controls, attacks still occur.

  - Therefore, organizations focus on detecting attacks in order to quickly respond and minimize their potential impact.

Explain that organizations detect attacks against their information security assets with a concept called **continuous monitoring**, or more specifically, **information security continuous monitoring (ISCM)**.
  - ISCM is the processes and technologies used to detect information security risks associated with an organization's operational environment in real time.

  - Clarify that "in real time" means that ISCM detects issues as soon as they occur.

  - ISCM provides real-time insight into:
    - The current state of an organization's networked assets.

    - Vulnerabilities and threats that attack an organization's networked assets.

    - How well security controls are protecting an organization's networked assets.

Organizations have many networked devices and data assets, and with these come a variety of attack methods. For example:

  - An employee can accidentally download malware onto their laptop, which can spread to an organization's network.

  - A script kiddie can launch a denial of service attack against a webserver.

  - A nation state can attempt a code injection attack against an application.

Explain that organizations cannot protect against every single potential attack, as they may be limited by:
  - Financial limitations: For example, most modern monitoring tools and technologies are very expensive to install, deploy, and run. Organizations often have strict budgets that they have to maintain.

  - Staffing limitations: While many monitoring tools have automated features, they often require humans to monitor and respond to detected issues.

Explain that due to these limitations, organizations need to make business decisions that prioritize the types of security risks they will monitor against.

#### Prioritizing Risks

Explain that organizations consider the following factors when determining security risk priorities:

- Compliance: Depending on the industry a business is in, they may be required to monitor and analyze certain applications and systems activity.

  - For example, to remain PCI-compliant, financial businesses that work with credit cards may be required to monitor their applications that manage financial data.

- Financial impact: How a system breach or shutdown would impact the financial performance of an organization.

  - For example, a business like eBay would likely prioritize monitoring their customer-facing application, since the cost of this being compromised and taken offline would significantly affect their revenue.

- Reputational impact: How an incident would affect the organization's reputation with their customers.

  - For example, an online banking provider would monitor the security controls of their customer financial data. If their customer data were breached, their reputation could be significantly affected.

- Likelihood of attack: While there are many types of security risks that *can* occur, some are more likely than others.
  - For example, politically-associated businesses that have public-facing websites are particularly at risk of denial of service attacks. Given this higher likelihood, these organizations should prioritize monitoring for DOS attacks.

Summarize that organizations must decide for themselves which factors to consider when prioritizing risks.     

- Explain that in the first activity of the day, students will play the role of a newly hired SOC manager at an organization experiencing a variety of information security events.  

- They will use the the above factors to help prioritize risks for monitoring.

Take a moment to address questions before proceeding.

### 03. Student Do: Monitoring Assets (0:15)

Explain the following to students:

-  Omni Military Products (OMP) is an online military products company that sells to the United States armed forces.

- OMP has recently experienced several security-related events, but has never before had an SOC to handle the issues.

- OMP has  hired you as an SOC manager to design a security operations center.

- While you would like to monitor all types of security events, OMP has some financial limitations and can only afford to monitor a limited number of event types.

- Your first task is to analyze the types of security events OMP has experienced and rank them based on their risk to the organization.

- This ranking will help you later determine which events to monitor.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following:

- [Activity File: Monitoring Assets](activities/03_Monitoring_Assets/Unsolved/README.md)


### 04. Instructor Review: Monitoring Assets Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

This activity illustrated that there are many security events available to monitor, but organizations are often limited by finances and staff. Therefore they must prioritize certain types of security events for monitoring.

Completing this activity required the following steps:
  - Analyzing a list of security events.

  - Ranking the security events by potential impact to an organization.

  - Providing an explanation about why the rankings were chosen.

Send students the following file:

- [Solution Guide: Monitoring Assets](activities/03_Monitoring_Assets/Solved/README.md)

Answer any questions that remain before proceeding to the next section.


### 05. Instructor Do: Log, Logs, and More Logs  (0:10)

Remind students that we just discussed how organizations have to prioritize what risks they will monitor against.

-  After these organizations determine what to monitor, they need to determine how they will do so.

-  Explain that **logs** are the most common organizational method for monitoring.

Introduce logs by covering the following:
- A log is a record of an event occurring within a device or a network.

- Logs contain **entries**, which represent specific events occurring on a device or network.

Explain that while log entries were originally designed to assist with troubleshooting system issues, they later proved useful to security professionals as a source of insight into:  
  - The state of a device or a network.
  - Who has access to a device or a network.
  - User activities on a device or a network.

Organizations have many devices and assets, which produce a lot of logs. Therefore, security professionals need to understand the types of devices and assets that create logs in order to successfully identify security events.

#### Log Types

Explain that there are four main log types used by information security professionals:

1.  **Operating system logs** are created on devices such as Linux and Windows systems.

    Security events that can be identified by these logs include:
     - Security access events: For example, an unauthorized user attempts to view privileged data, such as a company payroll file.

     - Security permissions events: For example, a user attempts to give themselves permissions to view and edit a privileged file.


2. **Application logs** are created by devices such as Apache and IIS (Internet Information Services) servers.

   Security events that can be identified by these logs include:

      - Application access events: For example, a brute force attempt to log into an administrative account on a web application.

      - Fraud events: For example, a user on a financial application attempts to transfer a large sum of funds to a suspicious external account.

3. **Networking device logs** are created on devices such as routers, switches, and DHCP/DNS servers.

    Security events that can be identified by these logs include:

    - Administrative events: For example, a network administrator accidentally opens a port allowing unauthorized traffic into a network.

    - Network security events: For example, a DHCP starvation attack occurs in which the DHCP server receives thousands of requests in a short period of time, consuming all available IP addresses.

4. **Security device logs** are created on devices such as IDS/IPS, firewalls, endpoint devices, and honeypots.

    Security events that can be identified by these logs include:
      - Endpoint events: For example, a user accidentally downloads malware onto their laptop from a phishing email.

      - IDS signature events: For example, a packet with an illegal TCP flag combination is identified by an IDS.

Explain that while this is not a complete list of all the possible logs that security professionals use, students should be familiar with these types of logs and the types of security events they can help identify.

- Explain that in the next activity, students will analyze a variety of log files to determine the types of logs they contain and the types of security events each log can identify.

Take a moment to address questions before proceeding.

### 06. Student Do: What is this Log? (0:15)

Explain the following to students:

- You are a recently hired SOC manager at OMP.

- One of your first tasks as SOC manager is to understand what logs are available to monitor.

- Your predecessor left you with a  directory labeled `logs` containing various log files.

- Unfortunately, there is no indication of what each log type is for. You must analyze and categorize each log.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following files:

- [Activity File: What is this Log?](activities/06_What_is_This_Log/Unsolved/README.md)
- [Log Files](resources/logfiles.zip)


### 07. Instructor Review: What is This Log? Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Remind students that the goal of this activity was to understand that there are many types of logs and formats that security professionals will encounter.

Students had to analyze logs and determine the types of data they contained, as well as the types of security events they can help identify.

Completing this activity required the following steps:
  - Analyzing several unidentified log files.

  - Determining the log types of each file.

  - Identifying the type of security events the logs can help identify.

Share the following file and use it to guide your review:
- [Solution Guide: What is This Log?](activities/06_What_is_This_Log/Solved/README.md)

Answer any questions that remain before proceeding to the next lesson.

### 08. Break (0:15)

### 09. Instructor Do:  Log Aggregation and Normalization  (0:15)

Begin by reminding the class that organizations can use many log sources to identify security events.

- While it is beneficial to have access to so many logs, it can be overwhelming to deal with the incoming information from various sources.  

  - For example, if a business wants to monitor suspicious logins on their Linux servers, they may have to monitor a variety of Linux servers and distributions.

  - Therefore, they will want to identify all the Linux server logs available and collect them in a single destination.

Explain that the first step security professionals would take to address this challenge is **log aggregation**.

- Define log aggregation as the identification and collection of logs from multiple computing sources.

Explain that ideally, each device would create logs in the exact same format.

- Unfortunately, that's not the case. Logs from different sources, even if they are logging similar data, are often created in different formats.

- For example, the following are two ways a system may log server access:

  - Log 1: `User TJones Successfully Authenticated to 10.182.12.35 from client 43.10.8.22`

  - Log 2: `43.182.12.35 New Client Connection 84.10.8.22  on account: PSmith: Success`

- While each system is identifying the same type of data, the structure and format of each log is significantly different.

Therefore, we need to parse and normalize our logs.

#### Parsing and Normalizing Logs

Introduce the processing of **parsing logs** by covering the following:
  - As seen in the previous example, logs often provide data in a single string:

    `User TJones Successfully Authenticated to 10.182.12.35 from client 43.10.8.22`

Log parsing is the process of converting the single string of data into fields of structured data.

Using the same example:

- Log 1:  `User |TJones| Successfully Authenticated | to |10.182.12.35 |from client |43.10.8.22|`


- Log 2: `43.182.12.35|  New Client Connection |84.10.8.22|  on account:| PSmith| : Success`

- If we separate the values, we can categorize each field and rearrange them to match a uniform structure, a process known as **log normalization**.

- Cybersecurity professionals need to have a general understanding of the data in the logs to accurately parse them and determine each field.    


Explain that next we perform log normalization in order to compare common attributes between the two logs.

- Define log normalization as the process of standardizing fields in data from different sources and formats so they can be analyzed together.

- Explain that in the example above, log normalization would identify the common attributes between the two logs and define them into fields so they can be analyzed together.

- For example, the following common fields can be identified between the two logs:
  - User
  - Source IP
  - Destination IP

- Next, the fields would be aligned with each log record:

  - **Log 1**    

      ![log1](images/log1.jpg)


  - **Log 2**   

      ![log2](images/log2.jpg)


- Explain that normalizing logs sometimes involves modifying the format that fields are displayed in.
  - For example, one log may log time in military time (23:12) and another may log it in standard 12-hour time (11:12 PM).

  - Normalizing would change all times to a single format.

Summarize this lesson by explaining that aggregating, parsing, and normalizing logs is a common process for security professionals when analyzing logs from various sources.    

In the next activity, students will be tasked with aggregating, parsing, and normalizing logs from several log files to assist with monitoring against potential DDOS attacks.

Take a moment to address questions before proceeding to the next activity.    


### 10. Student Do: Log Aggregation and Normalization (0:15)

Explain the following to students:

- You will continue to play the role of an SOC manager at OMP.

- Your CIO would like you to focus on monitoring web server logs, as OMP has recently experienced DOS attempts.

- Each web server logs data in different formats. You must aggregate and normalize the logs by identifying the various fields in the log files.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: Log Aggregation and Normalization](activities/10_Log_Aggregation/Unsolved/README.md)
- [Web Server Log Files](resources/webserver_logs.txt)


### 11. Instructor Review: Log Aggregation and Normalization Activity   (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Remind students that the goal of this exercise was to understand that security professionals are often tasked with identifying similar data points across different log types in order to identify security events.  

Students were tasked with manually isolating fields for different web server logs to correlate certain data points.

Completing this activity required the following steps:

  - Isolating and identifying fields from raw logs.
  - Correlating fields across various log files.

Send students the following file and use it to guide your review:
-  [Solution Guide: Log Aggregation and Normalization](activities/10_Log_Aggregation/Solved/README.md)

Answer any questions that remain before proceeding to the next section.


### 12. Instructor Do: Log Correlation  (0:10)

Note that we just discussed how there are many types of logs available for information security professionals. Within these logs are many fields that contain multiple data points.

Explain that with all of the data contained in an organization's logs, security professionals are often faced with a big data challenge:

  - We often have the data we need to learn about certain security events, but are unable to find and use it due to the vast amount of total data.

Therefore, we use **log correlation** to detect security events. Explain the following:

  - Individual log entries often do not indicate security events alone.

  - Analyzing multiple log entries *together* can help us detect security events and patterns of suspicious behavior.

  - Log correlation connects multiple log entries to make raw data into useful information.

  - Different log entries can come from the same source or different sources.

For example, while the following log entry may look like a single, unsuspicious bad login:

       [10/12/2019 04:32:03 PM]   41.34.54.233  user=testerA "Login Failed"

The following logs entries correlated together indicate a potentially suspicious security event:

       [10/12/2019 04:32:03 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:04 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:05 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:07 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:08 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:09 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:10 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:11 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:12 PM]   41.34.54.233  user=testerA "Login Failed"
       [10/12/2019 04:32:13 PM]   41.34.54.233  user=testerA "Login Failed"`

- Point out that the above log entries correlated together could identify a single potential attacker trying to brute force their way into an account.

Explain that log correlation identifies security events by using **correlation rules**.
  - Correlation rules are the logic used to identify security events.

  - Correlation rules look at a sequence of events that can identify a potential security issue.

  - Correlation rules are often dynamic, which means they can change depending on how effective they are.

Explain that it is easier to ideate correlation rules in non-technical language before they are converted into a code or script.

- For example, for the logs above, a correlation rule that could detect an attempted brute force attempt is:

  Detect:
    - More than three "Login Failed"
    - From the same user
    - From the same IP address
    - Within a five-minute period

- With the above correlation rule, the brute force attempt would have been detected.

#### Correlation Alerts

Explain that the next decision for a security professional is how a system will respond to a correlation rule after detecting a security event.

Explain that the most common response is an **alert**.

- A correlation alert is a notification that correlation rules have been met and an event was detected.

- Correlation alerts can have multiple delivery methods, including:

  - Displays on the screen at a SOC.

  - Notifications sent via phone calls, text messages, or emails.

- Alerts are often designed to notify multiple individuals for faster response.

- Alerts typically provide high-level details of the reason for the alert.

Explain that for the example above, the alert delivery method could be added to the correlation rule, as such:
- If the following is detected:
  - More than three "Login Failed"
  - From the same user
  - From the same IP address
  - Within a five-minute period

- Send a:
  - Phone call to the SOC manager
  - Email message to the SOC email distro list

Summarize that effective security operations centers use log correlation with correlation rules and alerts to quickly detect and respond to security events.

Explain that in the next activity, students will be tasked with developing a plainly-worded correlation rule to help determine if a security-related event takes place at OMP.

Take a moment to address questions before proceeding to the next activity.    

### 13. Student Do: Rule Correlation (0:10)

Explain the following to students:

- As the SOC manager at OMP, you have successfully normalized the various web server logs.

- Your manager would like you to make a plan for identifying an attack when it is occurring.

- Since you don't have a SIEM tool yet, your first task is to provide a plainly-worded outline of a correlation rule that will be used to identify an attack.

- Your correlation rule will later be translated to real code that will create alerts on your SIEM.

For example, a plainly-worded outline of a rule that will detect when malicious user "Bob Smith" attempts to login to Application A looks like the following: 
  
  - Create an alert when:

    - The username is "Bob Smith" and
    - The user activity is "Attempted Login" and
    - The application of the activity is "Application A"
          
:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.          


Send students the following instructions:

- [Activity File: Rule Correlation](activities/13_Rule_Correlation/Unsolved/README.md)


### 14. Instructor Review: Rule Correlation Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

The goal of this activity is to introduce students to the task of correlating events from logs. Students were tasked with developing a correlation rule to assist with determining if a security-related event has occurred.

Completing this activity required the following steps:

- Understanding the various fields available in logs.

- Determining what type of of logging will display when an event occurs.

- Designing a correlation rule to notify when the event occurs.

Share the following file and use it for your review:

- [Solution Guide: Rule Correlation](activities/13_Rule_Correlation/Solved/README.md)


Answer any questions that remain before proceeding to the next section.


### 15. Instructor Do:  SEM + SIM =  SIEM  (0:15)

Remind the class that we've discussed how organizations use monitoring to protect against security events with the following steps:

1.  Organizations decide what to monitor by prioritizing the risks to their business.

2.  Organizations decide how to monitor, which is typically accomplished by logs.

3.  Organizations aggregate, parse, and normalize logs so that they can be analyzed together.

4.  Organizations correlate these logs with rules to alert when a security event or suspicious activity is detected.

Explain that one challenge is how to manage these processes for monitoring multiple security events across an organization.

Explain that security professionals use a technology called **security information and event management (SIEM)** (pronounced "sim") to simplify and manage monitoring security events.

Introduce SIEM by covering the following:

  - SIEM is made up of two types of software:

    - Security information management (SIM), which is primarily focused on log management and involves collecting logs in a central location for later analysis.

    - Security event management (SEM), which is primarily focused on event monitoring and involves identifying, evaluating, and correlating logs to determine security events and create alerts.

 - SIEM combines the technologies of SIM and SEM to collect, organize, and analyze logs to detect security-related events across an organization's technology infrastructure.

 - SIEM can also be used to visualize data related to security events in order to simplify data interpretation.

    - For example, a SIEM can help an SOC employee develop a simple chart to present to senior management that illustrates how often their organization experienced DDOS attacks in the last month.

    ![DDOS](images/ddos.png)

 - Summarize that SIEM is basically a single technology solution that security departments use to manage their multifaceted security monitoring operations.

 #### SIEM Benefits

 Explain that SIEM can help organizations move through the steps discussed today in order to implement an effective monitoring solution.

1. Organizations need to decide **what to monitor** by prioritizing the risks to their business.

    How can SIEM help?

    - SIEM can look at historical data to determine how often a security event has occurred. This data can help an organization prioritize their monitoring decisions.

2.  Organizations must then decide **how to monitor**, which is typically accomplished by logs.

    How can SIEM help?

    - SIEM tools are smart devices that assist security departments with forwarding and collecting logs from various sources.

    - The process of collecting logs will be explained further in the next class.

3.  Organizations need to **aggregate, parse, and normalize** logs so they can be analyzed together.

    How can SIEM help?

      - One of the greatest strengths of SIEM tools is their ability to automate the aggregation, parsing, and normalization process.

      - When logs are loaded into SIEM software, they are automatically parsed and normalized, with all the field headers identified.

      - This significantly reduces the manual work of parsing and identifying all fields.

4. Organizations must **correlate** these logs with correlation rules to trigger an alert when a security event or suspicious activity is detected.

   How can SIEM help?

    - Most SIEM software has an easy-to-use rule correlation designer, which makes it simple for SOC employees to manage the creation, editing, and viewing of correlation rules.

    - SIEM software also has many options for how to respond when correlation rules are identified, such as alert generations, report creations, and custom visualizations.


#### Choosing a SIEM Vendor

Explain that we have just covered how SIEM technology is used by organizations to monitor their security environment.

Explain that, as with other security vendors, there are many SIEM vendors and products available, each offering different solutions.

  - Therefore, security departments must determine which SIEM vendor is right for their organization.

Explain that a security department will review the following criteria to select their SIEM vendor:

- Cost: While cost is always a consideration when selecting a SIEM vendor, how an organization is billed can also be a consideration.
  - For example, one SIEM vendor may charge based on the number of logs and another may charge based on the number of devices monitored.

- Ease of implementation and use: Organizations should research how challenging a SIEM vendor's solutions will be to set up and manage.

- Log compatibility: Organizations should confirm that the SIEM vendor is able to accommodate every type of log the business is required to monitor.

- SIEM features: While every SIEM vendor will claim to have the most advanced and user-friendly features, such as AI, machine learning, dashboards, and custom visualizations, organizations should review each vendor's features and assess which will best serve their business goals.

Explain that in the final activity of the day, students will be tasked with researching and selecting a SIEM vendor that will provide the best monitoring solution for OMP.

 - Take a moment to address questions before proceeding to the next activity.    


### 16. Student Do: Choosing a SIEM Vendor (0:15)

Explain the following to students:

- The CIO at OMP would like you, the SOC manager, to select a SIEM product.

- You are tasked with analyzing several SIEM vendors and selecting the best one for OMP.

- Once you have selected your SIEM vendor, you will answer several questions to support your decision to your senior management.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: Choosing a SIEM Vendor](activities/16_Choosing_A_Vendor/Unsolved/README.md)


### 17. Instructor Review: Choosing a SIEM Vendor Activity and Day 2 Lab Introduction  (0:07)

:bar_chart: Run a comprehension check poll before reviewing the activity.

This activity illustrated the diverse SIEM marketplace. Recognizing the various SIEM vendors' names and the services they provide is an important skill for a cybersecurity professional.

Students were tasked with researching a SIEM vendor and understanding the services they provide.

Completing this activity required the following steps:
  - Selecting a SIEM vendor from a provided list.

  - Researching the services the SIEM vendor provides.

  - Answering several questions about the SIEM vendor.

There is no formal solution to this activity.

- Ask several students to share their SIEM vendor selection and answers to the questions.

- Use the following website and chart to guide your review:
[Enterprise Management 360: SIEM Tools Top 10](https://www.em360tech.com/continuity/tech-features-featuredtech-news/siem-tools-top-10/)

  ![SIEM_chart](images/SIEM_chart.png)

Conclude by explaining that while we just learned that there are a variety of SIEM vendors available, the remaining classes in this unit will focus primarily on Splunk.

Answer any questions that remain.

#### Next Class Lab Introduction

Explain that in the next class, we will use a Splunk application that resides within the Ubuntu Vagrant distribution.

- Send out the following instructions so students can be prepared for the next class.

  - [Instructions](resources/splunk_lab_setup.md)
  
:warning: **Heads Up**: If students have any difficulty accessing the Splunk application, they should attend office hours for assistance.  
  
- Answer any questions that remain before concluding the class.  

-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
