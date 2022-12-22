# Module 19 Challenge

## Module 19 Challenge <assignment>

### Let's Go Splunking!

You have just been hired as an SOC analyst by Vandalay Industries, an importing and exporting company.
 
- Vandalay Industries uses Splunk for their security monitoring and have been experiencing a variety of security issues against their online systems over the past few months. 
 
- You are tasked with developing searches, custom reports, and alerts to monitor Vandalay's security environment in order to protect them from future attacks.

### System Requirements 

You will use the Splunk app located in the Ubuntu VM.

### Your Objective 

Utilize your Splunk skills to design a powerful monitoring solution to protect Vandalay from security attacks.

As you complete the assignment, fill out the [M19 Challenge Submission File](https://docs.google.com/document/d/1xu3mOp-Aj3JO9bNSPMPaEFNLG0YrnGD-y8iH35cPkD8/edit?usp=sharing), which will be your Challenge deliverable. Remember to make a copy of this file before filling it out. Make sure to provide the following:
- Screen shots where indicated.
- Custom report results where indicated.

### Topics Covered in This Assignment

- Researching and adding new apps
- Installing new apps
- Uploading files
- Splunk searching
- Using fields
- Custom reports
- Custom alerts

Let's get started!

### Vandalay Industries Monitoring Activity Instructions


#### Step 1: The Need for Speed 

**Background**: As the worldwide leader of importing and exporting, Vandalay Industries has been the target of many adversaries attempting to disrupt their online business. Recently, Vandalay has been experiencing DDOS attacks against their web servers.

Not only were Vandalay web servers taken offline by a DDOS attack, but upload and download speed were also significantly impacted after the outage. Your networking team provided results of a network speed run around the time of the latest DDOS attack.

**Your Task**: Create a report to determine the impact of the DDOS attack on upload and download speed. Create an additional field to calculate the ratio of the upload speed to the download speed. To do so, complete the following steps:

1.  Upload the following file containing the system speeds around the time of the attack:
    - [Speed Test File](https://drive.google.com/file/d/1sAIEh_vxhjJJpj3NiPx8Wele_-cfEZTK/view?usp=sharing)

2. Using the `eval` command, create a field called `ratio` that shows the ratio between the upload and download speeds.
 
    > **Hint:** The format for creating a ratio is: `| eval new_field_name = 'fieldA'  / 'fieldB'`
      
3. Create a report using Splunk's `table` command to display the following fields in a statistics report:
    - `_time`
    - `IP_ADDRESS`
    - `DOWNLOAD_MEGABITS`
    - `UPLOAD_MEGABITS`
    - `ratio`
  
    > **Hint:** Use the following format for the `table` command: `| table fieldA  fieldB fieldC`

4. Answer the following questions in the M19 Submission File:
    - **(1)** Based on the report you created, what is the approximate date and time of the attack?
    - **(2)** How long did it take your systems to recover?

    Make sure to include a screenshot of your report along with the answers to these questions.
 
#### Step 2: Are We Vulnerable? 

**Background:** Due to the frequency of attacks, your manager needs to be sure that sensitive customer data on their servers is not vulnerable. Since Vandalay uses Nessus vulnerability scanners, you have pulled the last 24 hours of scans to see if there are any critical vulnerabilities.

  - For more information on Nessus, refer to the following link: [https://www.tenable.com/products/nessus](https://www.tenable.com/products/nessus).

**Your Task:** Create a report determining how many critical vulnerabilities exist on the customer data server. Then, build an alert to notify your team if a critical vulnerability reappears on this server. To do so, complete the following steps:

1. Upload the following file from the Nessus vulnerability scan:
   - [Nessus Scan Results](https://drive.google.com/file/d/1AonO8jAN4nKniZDw5qAYoMamBBXLpkdr/view?usp=sharing)

2. Create a report that shows the `count` of critical vulnerabilities from the customer database server.
   - The database server IP is `10.11.36.23`.
   - The field that identifies the level of vulnerabilities is `severity`.
      
3. Build an alert that monitors every day to see if this server has any critical vulnerabilities. If a vulnerability exists, have an alert emailed to `soc@vandalay.com`.

4. In your M19 Submission File, include a screenshot of your report and a screenshot showing that the alert has been created.


#### Step 3: Drawing the (Base)line

**Background**: A Vandaly server is also experiencing brute force attacks into their administrator account. Management would like you to set up monitoring to notify the SOC team if a brute force attack occurs again.

**Your Task**: Analyze administrator logs that document a brute force attack. Then, create a baseline of the ordinary amount of administrator bad logins and determine a threshold to indicate if a brute force attack is occurring. To do so, complete the following steps:

1. Upload the following administrator login logs:
    - [Admin Logins](https://drive.google.com/file/d/1q5OJzVpvW0ExKuc8BtQ2LQOqpneLpUUy/view?usp=sharing)

2. Answer the following in the M19 Submission File:

    - **(1)** When did the brute force attack occur?
   
       > **Hint:** Look for the `name` field to find failed logins.
       > 
       > Note that the attack lasted several hours.
      
    - **(2)** Determine a baseline of normal activity and a threshold that would alert if a brute force attack is occurring.

    - **(3)** Design an alert to check the threshold every hour and email the SOC team at SOC@vandalay.com if triggered. Provide a screenshot showing that the alert has been created.

### Submission Guidelines

* After you complete your Submission File, title it with the following format: < YOUR NAME >< M19 Challenge Submission File >
* Make sure to set the file permissions so that anyone can view and comment on your document.
* Submit the URL of your Submission File Google Doc through Canvas.
