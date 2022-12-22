## Unit 18 Homework Solution Guide: Lets go Splunking!


### Step 1: The Need for Speed 

**Background**: As the worldwide leader of importing and exporting, Vandalay Industries has been the target of many adversaries attempting to disrupt their online business. Recently, Vandaly has been  experiencing DDOS attacks against their web servers.  Not only were web servers taken offline by a DDOS attack, but upload and download speed were also significantly impacted after the outage. Your networking team provided results of a network speed run around the time of the latest DDOS attack.

**Task:** Create a report to determine the impact that the DDOS attack had on download and upload speed. Additionally, create an additional field to calculate the ratio of the upload speed to the download speed.


1.  Upload the following file of the system speeds around the time of the attack.
    - [Speed Test File](../resources/server_speedtest.csv)

2. Using the `eval` command, create a field called `ratio` that shows the ratio between the upload and download speeds.
   - Hint: The format for creating a ratio is: `| eval new_field_name = 'fieldA'  / 'fieldB'`
      
3. Create a report using the Splunk's `table` command to display the following fields in a statistics report:
    - `_time`
    - `IP_ADDRESS`
    - `DOWNLOAD_MEGABITS`
    - `UPLOAD_MEGABITS`
    - `ratio`
  
   Hint: Use the following format when for the `table` command: `| table fieldA  fieldB fieldC`

4. Answer the following questions:

    - Based on the report created, what is the approximate date and time of the attack?
    - When did the system begin to recover?
    - When did the network traffic flow appear to be normal?


### Solutions

1.  After the file is loaded, search through the data with the following:
    - `source="server_speedtest.csv"` 
  
2. Use the following command to create the `ratio` field:
    -  `source="server_speedtest.csv" | eval ratio = ( UPLOAD_MEGABITS / DOWNLOAD_MEGABITS)`

3. List the results in a table using the following command:
    - `source="server_speedtest.csv" | eval ratio = ( UPLOAD_MEGABITS / DOWNLOAD_MEGABITS)| table _time, IP_ADDRESS, DOWNLOAD_MEGABITS, UPLOAD_MEGABITS, ratio`

4. Answer the following questions:

    - Based on the report created, what is the approximate date and time of the attack?

        - The attack occurred around 2/23/2020 2:30 PM when the upload and download speeds dropped.

    - When did the system begin to recover?

      - Recovery started around 2/23/2020 8:30pm. From the initial time of the attack, it took 6 hours to begin recovery.

    - When did the network traffic flow appear to be normal?

      - It appears that the network traffic recovered fully around 11:30PM.
 
### Step 2: Are We Vulnerable? 

**Background:**  Due to the frequency of attacks, your manager needs to be sure that sensitive customer data on their servers is not vulnerable. Since Vandalay uses Nessus vulnerability scanners, you have pulled the last 24 hours of scans to see if there are any critical vulnerabilities.

  - For more information on Nessus, read the following link: https://www.tenable.com/products/nessus

**Task:** Create a report determining how many critical vulnerabilities exist on the customer data server. Then, build an alert to notify your team if a critical vulnerability reappears on this server.

1. Upload the following file from the Nessus vulnerability scan.
   - [Nessus Scan Results](resources/nessus_logs.csv)

2. Create a report that shows the `count` of critical vulnerabilities from the customer database server.
   - The database server IP is `10.11.36.23`.
   - The field that identifies the level of vulnerabilities is `severity`.
      
3. Build an alert that monitors every day to see if this server has any critical vulnerabilities. If a vulnerability exists, have an alert emailed to `soc@vandalay.com`.

**Solution**

2. After the file is uploaded , create the report to show the count of critical vulnerability with the following command:
   - `source="nessus_logs.csv" dest_ip="10.11.36.23"  severity="critical" | top severity`
  
3. To create the alert, change the time period to last 24 hours. After the search was completed, select:
   - `Save As`, `Alert`.
   - Give the alert an appropriate title and then set it to monitor every day.
   - Set the alert to trigger when there is more than 0 results.
   - Under Trigger Actions:
     - Select "Add Actions".
     - Select "Send Email". 
   - Send the email to `soc@vandalay.com` with an appropriate subject and title.
 

### Step 3: Drawing the (base)line

**Background:**  A Vandaly server is also experiencing brute force attacks into their administrator account. Management would like you to set up monitoring to notify the SOC team if a brute force attack occurs again.


**Task:** Analyze administrator logs that document a brute force attack. Then, create a baseline of the ordinary amount of administrator bad logins and determine a threshold to indicate if a brute force attack is occurring.

1. Upload the administrator login logs.
   - [Admin Logins](resources/Administrator_logs.csv)

2. When did the brute force attack occur?
   - Hints:
     - Look for the `name` field to find failed logins.
     - Note the attack lasted several hours.

      
3. Determine a baseline of normal activity and a threshold that would alert if a brute force attack is occurring.

4. Design an alert to check the threshold every hour and email the SOC team at SOC@vandalay.com if triggered. 

Submit the answers to the questions about the brute force timing, baseline and threshold. Additionally, provide a screenshot as proof that the alert has been created.

### Solutions

- The following search will display bad logins:
   - `source="Administrator_logs.csv" name="An account failed to log on"`
  
- The results show that the attack occurred on February 21st between 9:00 am and 1:00 pm.
   - Note: Hours just outside this range are also acceptable, as activity ramped up and down during those hours.
  
- During the times there was not an attack, the average count of bad logins is around 15 per hour.

   - 30 to 50 bad logins per hour is an appropriate threshold to indicate a brute force attack.

- To create the alert, change the time period to hourly. After this search above been completed, select the following:
   - `Save As` >> `Alert`
   - Set to monitor every hour and trigger the alert when the value exceeds the threshold. 
   - Under Trigger Actions:
     - Select "Add Actions"
     - Select "Send Email"  
   - Email to `SOC@vandalay.com` with an appropriate subject and title.

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
