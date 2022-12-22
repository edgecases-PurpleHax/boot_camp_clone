## 19.2 Lesson Plan: Splunk Searches

### Overview

In today's class, we will explore Splunk's interface. Students will learn how to design complex search queries using Splunk's search processing language.

### Class Objectives

By the end of class, students will be able to:

- Explore and select Splunk add-ons and apps based on project needs.

- Upload logs into a Splunk repository.

- Write complex SPL queries to analyze specific security situations.

### Instructor Notes

- While we will be accessing Splunk's website in this class, you and students should not sign up for a free Splunk trial account until next week. This is to ensure the trial doesn't end before we are done with the Splunk curriculum.

- All of the log files required for the activities and demonstrations are availble within the Ubuntu VM. In case the VM is not accessible, the activities will link  the same log files as a backup.

### Lab Setup

You will use your local Vagrant virtual machine for today's activities. Please note that instructors and students have different access credentials.

This week's classes will use a Splunk Docker container to run Splunk from inside the local virtual machine. Inside the virtual machine in the `/splunk` directory is a `splunk.sh` script that can be run to start and stop the container as needed.

- `sudo docker ps` can be used to determine if the container is running.

- Once the container is running, Splunk can be accessed at `http://localhost:8000` on the virtual machine.

Use the following credentials:
- Username: `admin`
- Password: `cybersecurity`

Logs for all the activities and demonstrations can be found in `/splunk/logs`.


### Slideshow

The lesson slides are available on Google Drive here: [19.2 Slides](https://docs.google.com/presentation/d/1ItOSgRt-2RYBPuIhjz3gbVmZokEKhcG8jnnppiABPQc/)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with any other necessary files.

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker is available on Google Drive here: [19.2 Time Tracker](https://docs.google.com/spreadsheets/d/1s8kn55fCADkgBwufWI3vsHrHisZpglwA5fEHMBjaON0/edit#gid=1145703143)

- **Note:** Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".


### Student Guide

- [19.2 Student Guide](studentguide.md)

---

### 01. Instructor Do: Welcome to Splunk (0:05)

Begin class by welcoming students back and informing them that today they will be introduced to a powerful SIEM tool offered by the software company Splunk.

Before we introduce Splunk and its capabilities, let's review the concepts taught in the last class:

- Organizations use **continuous monitoring** to monitor risks to the confidentiality, integrity, and availability of their technical assets.

- Organizations use **logs** that contain **log entries** to monitor against these risks.

- Organizations **aggregate**, **parse**, and **normalize** multiple logs so they can be analyzed together.
- Organizations correlate these logs with **correlation rules** to alert when a security event or suspicious activity is detected.
- **SIEM** software is a security tool that can assist with all the above processes.

Remind the students that we also discussed how there are many SIEM vendors available, each with different features, strengths, and weaknesses.

Explain that for the next two modules, we will focus on one of the most popular SIEM vendors, Splunk.

Explain that we will not only be learning about Splunk and its features, but also doing hands-on activities within Splunk that security professionals do every day.

Ask the class if they have any questions before continuing to the next lesson.


### 02. Instructor Do: Splunk Capabilities  (0:10)

Explain that a common misconception is that Splunk is a SIEM tool.

- Explain that Splunk is the vendor name of a big data software solution, and the SIEM tool is just one of the thousands of features Splunk provides.

  - Note that Splunk's specific SIEM product is called **Splunk Enterprise Security**, which will be covered in Day 5 of this SIEM module.

Introduce Splunk and its capabilities by covering the following:

- Splunk is a software tool that searches, analyzes, and monitors big data with an easy-to-use interface.

- Splunk can capture large amounts of incoming data, which can be used to create visualizations, reports, and alerts.

- Splunk has a base product that is designed to conduct basic tasks such as searching and reporting.

While our focus this week is on Splunk's benefits to the infosec industry, Splunk is useful for a variety of industries, such as:

- Finance
  - For example, financial organizations can use Splunk to analyze mortgage rates to determine future rate changes.

- Utilities
  - For example, gas companies can use Splunk to monitor customer use levels.

- Healthcare
  - For example, medical researchers can use Splunk to create reports and metrics for analyzing successes of medical trials.

Explain that Splunk can be used for these additional capabilities by adding the following to the base product:

  - **Splunk apps**: Applications that users can add to their Splunk base product that have custom searches and features, with their own interface.

  - **Splunk add-ons**: Smaller components that provide additional functionality without their own interface.

  - **Splunk suites**: Collections of apps with a single focus, such as an industry or technology.
    - Point out we will not be reviewing Splunk suites in this class.

Explain that Splunk has so many of these apps and add-ons that they are broken up by technology, vendor, or industry type:
  - As a technology example, there are apps and add-ons specific to cloud servers.

  - As a vendor example, there are apps and add-ons specific to the security vendor Rapid7.

  - As an industry example, there are apps and add-ons specific to manufacturing organizations.

Explain that next we will illustrate the various apps and add-ons with the following scenario:

  - Your manager has notified you that the organization has purchased a web application filter by the vendor F5.

  - Your manager would like you to find the appropriate Splunk app to assist with monitoring this product.


#### Splunk Apps and Add-On Walkthrough

Begin by navigating to the following URL: splunkbase.splunk.com.

  -  Recommend that students follow along with the walkthrough on their computers.

	 **Instructor Note:** Tell the students _not_ to sign up for a Splunk account at this time. There is a 7-day trial window that we will start next week so we will have access to Splunk for as long as the curriculum requires it.

     _Do not sign up for a Splunk account until next week, when the curriculum states to do so._ At this time, only the provided Splunk container is needed.

Explain that this page, called **Splunkbase**, is a central repository for the various Splunk apps and add-ons.

Scroll down to the section titled **Browse by Category**.

  - Point out that this section shows the various categories of Splunk apps and the number of apps available:

    - DevOps: 169 Apps
    - Security, Fraud & Compliance: 1085 Apps
    - IT Operations: 1061 Apps
    - Utilities: 784 Apps
    - Business Analytics: 168 Apps
    - IoT & Industrial Data: 142 Apps

Explain that since we need to find a security product, we will select the **Security, Fraud & Compliance** icon.

   ![splunkbase1](images/splunkbase1.png)  

- This page is focused on apps and add-ons for the information security industry.

  - Point out that the top of the page shows the popular, featured security apps.

We want to see a more comprehensive list of the security products available, so click the  **See all Security, Fraud & Compliance apps** button.

  - This page is an easy-to-use search tool to find the best apps and add-ons.

    ![splunkbase2](images/splunkbase2.png)  

- Since we are looking for an app for F5 WAF, we will enter "F5 WAF" in the search field.
  - The F5 WAF Security app should display.

    ![splunkbase3](images/splunkbase3.png)  


- Click on the app and view the details.  

   ![splunkbase4](images/splunkbase4.png)  

- Scroll down and point out the summary of the app and the features:
  ```
    The app "F5 WAF Security for Splunk by Nexinto" analyzes attacks on your web infrastructure prohibited by F5 ASM.

    Features:

      - Displays attacks based on GeoIP
      - Displays attacks based on Type
      - Displays attacks based on Violation, Signature
      - Displays attacks based on Country
      - Displays attacks based on IPs
      - Heatmap for Attack Type Distribution by Type, Country, Violation
      - Security Stats table for displaying chronological attack requests and locations
  ```  
- Select the **Details** tab and point out that the page provides guidance on installation and setup.

  ![splunkbase5](images/splunkbase5.png)  

Point out that since this looks like the most appropriate app for our product, we will add this app to our Splunk account.

  - The button to download is on the right-side of the page. You will only be able to download after creating a free account and logging in.

 Summarize this section with the following:

  - Splunk is a software product designed to search and analyze big data.

  - Splunk has features that can be used for a variety of industries, technologies, and vendors.

  - Splunk has an assortment of add-ons and apps to provide these features.

  - Splunkbase is a website where you can easily search for the best apps and add-ons.

Explain that in the next activity, students will have to find the appropriate apps for several security products that OMP is currently using.

Ask the class if they have any questions before continuing to the next lesson.

### 03. Student Do: Splunk Features (0:15)

Explain the following to students:

- You will continue to play the role of a recently-hired SOC manager at Omni Medical Products (OMP).

- Your CIO has decided that you will use the Splunk product for your security monitoring.

- You have been tasked with analyzing Splunk's add-ons and apps to determine if any of them will work with your security products.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: Splunk Features](activities/03-Splunk-Features/Unsolved/README.md)


### 04. Instructor Review: Splunk Features Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Remind students that the goal of this exercise is to illustrate that Splunk is primarily a big data analysis tool. But security professionals can use its many add-ons and apps to assist in their security tasks.  

Students were tasked with researching add-ons and apps to assist with several security products.

Completing this activity required the following steps:

  - Searching for add-ons and apps within the Splunk application database.
  - Determining which would be the appropriate add-on or app for a specific security product.
  - Documenting which features and services each add-on or app provides.

Share the solution file and use it to guide your review:
- [Solution Guide: Splunk Features](activities/03-Splunk-Features/Solved/README.md)

Answer any questions that remain before proceeding to the next section.


### 05. Instructor Do:  Tour of Splunk and Splunk Setup (0:10)

Explain that the best way to learn how to use the Splunk product is to dive right in and start using the application.

- In the following walkthrough, we'll explore the Splunk setup, interface, and features.

#### Logging In

Explain that the first step to using Splunk is to log into the application.

- Run `sudo /splunk/splunk.sh` and choose the option to start Splunk for the first time.

- Run `sudo docker ps` to determine if the container is running.

Once the container is running, Splunk can be accessed at http://localhost:8000 on the Ubuntu VM through a web browser.

  - Credentials are:
    - Username: `admin`
    - Password: `cybersecurity`

   ![login](images/login1)

  - If any pop-up windows appear, exit out of them. There is no need for any additional updates if prompted.

Explain that this first welcome screen is called Explore Splunk Enterprise, from which we can navigate to:

  - **Product Tours**: Tours of the various features within Splunk for beginners.
      - Recommend to students that if they are interested, they can learn more about Splunk by going through these tours after class.
  - **Add Data**: The option for adding the data into the Splunk repository.
    - This will be covered in the next lesson.
  - **Explore Data**: Feature designed to work with a big data program called Hadoop.
    - Explain that this feature will not be covered in this class.
  - **Splunk Apps**: The app search feature that we covered in the previous section.
    - Here the feature is available directly within the Splunk interface.

    ![welcome](images/welcomepage.png)    


Point out that we will not be selecting any of those options at this time. Select the **Search & Reporting** option on the left-side of the screen.

![login2](images/login2)    

   - Explain that this will take us to the base Splunk search application.

   - Note that if a pop-up comes up about a tour, this can be skipped.

#### Search and Reporting Page Administrative Options

Point out that this is the main Search & Reporting page where most of the data analysis within the Splunk application takes place.

   ![search](images/searchpage.png)    


Explain that there are many options, sub-options, and features on this page.

  - Assure students they shouldn't feel overwhelmed by the number of options on this page. Over the course of this week, we will discuss most of them.

We will start by just showing the basic administrative options.

Remind the class that they are at the Search & Reporting page, which itself is a Splunk app designed to conduct searches.

  - Click on the **App: Search & Reporting** link on the top-left of the page.

  - Explain that if you had different applications running within Splunk, this is where you could switch between them.

   ![login3](images/login3)

Next, select **Administrator** from the top toolbar and point out the three options:

- **Account Settings**: Where you can change your full name, email, or update your password.

- **Preferences**: Where your Splunk application choices are set, such as the default time zone, or default application that you see upon login.

- **Log out**: Should be selected when you are ready to log out of the application.

  ![settings](images/settings.png)

This page also contains documentation pages and tutorials if you need help learning about the features on the Search & Reporting page.    
   - Encourage students to search through these documents after class to practice and learn how to use Splunk.

   - **Instructor Note:** Feel free to show some of the various documents now.

   ![documentation](images/documentation.png)

Explain that in the next section, we will cover the first process: adding data into Splunk.

Ask the class if they have any questions before continuing to the next section.


### 06. Instructor Do: Adding Data into Splunk (0:10)

Explain that in order to use the various search capabilities of Splunk, we need to first add the data to search against.

#### Splunk Architecture Basics        

Before we add data, it is important to have a general understanding of Splunk's architecture and how it handles incoming data:

  - Splunk architecture contains two primary components:
    - The indexer
    - The search head

Explain that when Splunk receives incoming data, it transforms the incoming data into **events**.
  - Splunk adds these events into repositories called **indexes**.
  - **Indexers** are used to add events into indexes and search through the indexed data.

Explain that the **search head** is Splunk's GUI component that we interact with to conduct searches.

  - The search head manages search requests to the indexer and provides the search results from the indexer back to the user.

Now that we have a high-level understanding of how data is organized and searched within Splunk, we will look at the various methods for adding data to Splunk.

#### Splunk Data Addition Methods

In order to add data to Splunk on the Add Data page, we use either of the following paths:

1. From the Welcome page, go to **Explore Splunk Enterprise** and select **Add Data**.

2. From the Search & Reporting app, select **Settings** and then **Add Data**.

  ![adddata2](images/adddata2.png)  

Explain that the Add Data page prompts you to either add data by data source, or add data by a specific method.

1. Adding data by data source allows us to upload various types of data.
    - For example, a Splunk user may want to add Palo Alto Firewall logs into Splunk.

    - The Palo Alto option under Networking is an example of a data type.

    - Based on the option selected, an add-on may be provided or settings configured.


2.  Adding data by method allows you to add data by one of the following methods:

    -  **Monitor**: Splunk monitors logs from a system, device, or application that it has direct access to.       
       - This method is commonly used by businesses to monitor their production environment.

    - **Forward**: Install a program called a forwarder on the system from which logs are collected.
      - Forwarders forward logs from a device into the Splunk system.  

    - **Upload**: Manually upload logs directly into your Splunk repository.
       - While monitoring and forwarding are important to understand conceptually, we will primarily be using the upload process for the remainder of this class.

In this walkthrough, we will use the following scenario to upload data into Splunk:

  - Your manager has reported some suspicious login activity on your Linux servers.

  - They have provided you with the login activity from your Linux servers.

  - You must upload them into Splunk so they can be analyzed.

**Data Upload Walkthrough**

1. The first step is to select the **Add Data** option within Splunk.

   - Within the Search and Reporting App, select **Settings**  >  **Add Data**.

2. Since we will be uploading the provided log file, we will select the **Upload** option.

   - Click on **Select File**.

    ![upload1](images/upload1.png)  

   - Select the `Linux_login.csv` file located in the `/splunk/logs/Week-1-Day-2-Logs` directory.

   - Click the green **Next** button on the top-right.

   ![upload2](images/upload2.png)  

3. We will be brought to a page called **Set Source Type**.

    - Here we see how the data is indexed and separated.

    - Splunk recognizes the fields and headers and then automates the parsing and normalizing of the logs.

    - No configurations need to be changed on this page.

    - Select **Next** again.

   ![upload3](images/upload3.png)  

4. We'll be brought to a page called **Input Settings**.
   - This page contains optional settings for how the data is input.

   - In the field called **Host field value**, Splunk uses the Splunk server name (which is the same number as the docker container id) to name the machine or device that generated the logs.

  - Update the value to "Linux_Server" and then select **Review**.

    ![upload4](images/upload4.png)  

5. At the **Review** page, we will verify that we chose the correct settings.  

   - Select **Submit** to proceed with uploading your data into Splunk.

   ![upload5](images/upload5.png)  

6. Once the file has successfully uploaded, you will see a screen saying **File has been uploaded successfully.**

   ![upload6](images/upload6.png)  

Explain that this completes the steps to upload data into the Splunk repository. In the next several sections, we will continue with the same scenario to analyze the data that has just been uploaded.

Summarize this section by covering the following:

  - Splunk has two primary components that assist in loading and searching data: indexers and search heads.

    - An indexer loads and searches for events in repositories called indexes.

    - A search head is a Splunk component that makes the search requests and receives the search responses from the indexer.

  - Splunk users can add data by source type or by method.

  - The primary three methods to add data are monitoring, forwarders, or uploads.

In the next activity, students will upload several log files into their Splunk repository.

Ask the class if they have any questions before continuing to the next activity.


### 07. Student Do: Uploading Data Into Splunk Activity (0:15)

Explain the following to students:

- As the recently hired SOC manager at OMP, your first task after setting up Splunk is to upload data into your Splunk repository.

- You have been provided several log files to upload, which will later be used to detect security events.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following:

- [Activity File: Uploading Data Into Splunk](activities/06-Uploading-Data-Into-Splunk/Unsolved/README.md)
- [Log Files: `logs.zip`](resources/logs.zip)
  
- :warning: **Heads Up**: Students can access these logs activity directly in the Ubuntu VM.  This backup copy should only be distributed if the VM is inaccessible. 


### 08. Instructor Review: Uploading Data Into Splunk Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Uploading log files into Splunk is a common security task. In this activity, students were provided several different types of log files and tasked with uploading them into their Splunk repository for later analysis.

Completing this activity required the following steps:

  - Extracting the log files from a provided zip file.

  - Using the Splunk upload feature to add the log data into the Splunk repository.

  - Following the correct process to title, parse, and normalize the logs.

Send students the following solution file and use it to guide your review:
- [Solution Guide: Uploading Data Into Splunk](activities/06-Uploading-Data-Into-Splunk/Solved/README.md)

### 09. Break (0:15)

### 10. Instructor Do: Splunk Searching  (0:15)

Welcome the students back from break and explain that so far we have introduced several basic Splunk administrative processes as well as how to upload data files into the Splunk repository.

  - Explain that we will now focus on Splunk's most popular feature: searching.

Introduce Splunk searching by covering the following:

  - Searching in Splunk allows users to query uploaded and monitored data.

  - Splunk queries can be customized to look only for specific data or to manipulate how the data is displayed.

Security professionals can use Splunk queries to determine specific helpful data during a security event.

For example:
  - Determine the primary IP that is being attacked during a DDOS attack.
  - Determine the user ID being used in a brute force attack.

Explain that it's important to understand that Splunk searching is almost always a **time-based search**.
  - All events have associated time stamps. To search for events, we must designate a time range or real-time period.

On the right-side of the search, a user can select the following:
  - **Real-time search**: Returns a window of real-time data as it is happening and continues to update as the events occur.
  - **Relative search**: Returns data by date, date range, time, or time range. Results will not change even if more events occur.
  - **All time**: Returns all available data based on the search.

    ![splunktime](images/splunktime.png)  

Explain that once the time period has been selected, a Splunk query can be designed to conduct a search.

- Splunk queries are designed using a coding language called
**Splunk processing language (SPL)**.
- SPL queries are submitted on the Search page, in the search field indicated below:

  ![search](images/searchpage.png)   

Similar to other coding languages, SPL has a specific syntax.

#### SPL Key-Value Pairs

Explain that **key-value pairs** are the most common method used to search for data.

- Key-value pairs match keywords with specific information (values).

  - For example, if you want to find a user named `jonathan` in your search results, you would design the following search:

   -  `user=jonathan`

      ![usersearch](images/usersearch.png)

        - `user` is the **key** and `jonathan` is the **value**.
        - `user=jonathan` is a key-value pair that would find the user named jonathan.
        - In Splunk, keys are considered **field names**.  

  - Emphasize that if the search value has a space, comma, or pipe, it needs double quotes around the value.
    - For example, if you are searching for one person named Mary Ann, you would use the following search: `user="mary ann"`

#### Wildcards      

Similar to other programming languages, SPL uses wildcards:

- When used with a wildcard symbol (`*`), the search results return the search term followed by any character or string in place of the wildcard symbol.
  - For example, `user=mary*` would return:
      - mary ann
      - mary beth
      - mary belle

- Wildcards can also be used to find a value surrounded by any character.

  - For example, `user=*beth*` would return:
      - mary beth
      - bethanny
      - elizabeth

**Boolean Expressions**        

SPL uses the boolean expressions of `AND`, `OR` and `NOT` to assist in searching for specific data.

- `AND` can be used to combine two key-value searches.
  - For example, to find a user named `jonathan` that has the activity of `login`:
    -  `user=jonathan AND activity=login`

    - Both of these key-value pairs would have to be in the same event to appear in the search results.

  - An additional point of clarification is that the `AND` expression doesn't always need to be added. If no expression is used, the `AND` expression is assumed:
    - For example `user=jonathan  activity=login` is equivalent to `user=jonathan  AND activity=login`.

- `OR` can be used to look for multiple separate instances of a key-value pair.
  - For example, to find a user named `jonathan` or a user named `beth` in your search results:
    -  `user=jonathan OR user=beth`

- `NOT` can be used to exclude certain values from search results.
  - For example, to find a user named `jonathan` and not include `logout` activity in the search results:
    -  `user=jonathan  NOT activity=logout`

Ask the class if they have any questions about the syntax before you continue to the demonstration.

In the next demonstration, we will use the following scenario:

  - Your manager has reported some suspicious login activity on your Linux servers.

  - She would like you to write a query to look at these login activities, specifically for logins coming from the source IP  `10.11.36.17`, as she believes this IP is from a machine infected with malware.
    - **Note:** `src_ip` is the field name for the source IP.

#### Searching Demonstration

1. Continuing where we left off in the previous demonstration, click on the **Start Searching** button.

   ![upload6](images/upload6.png)  

  - We are led to the search page containing a pre-filled search query of our uploaded data.

   ![SPL1](images/SPL1.png)  

  - Point out the three key-value pairs that are automatically populated:
    - `source="Linux_login.csv"`: The file that was uploaded, called `Linux_login.csv`.

    - `host="Linux_Server"`: The name of the host we specified in the last walkthrough, called `Linux_Server`.

    - `sourcetype="csv"`: The type of source we uploaded, in this case a CSV file.

  - Point out that when a search runs, the count of events is returned in the search results.

    ![SPL2](images/SPL2.png)  

  - The raw log results are displayed on the bottom-right of the search page.

    - The fields on the left will be covered in the next section.

    ![SPL2b](images/SPL2b.png)  

3. We'll create a search to find events from the source IP `10.11.36.17`.

    - Add `src_ip="10.11.36.17"` to the query.

    -  The whole search should read: `source="Linux_login.csv" host="Linux_Server_" sourcetype="csv" src_ip="10.11.36.17"`

4. Run the query.

    - Point out that the results will return five events. We can summarize that there were five attempted logins into the Linux server with the source IP of `10.11.36.17`.

  ![SPL3](images/SPL3.png)

In the next activity, students will search through several logs.

Ask the class if they have any questions before continuing to the next activity.

### 11. Student Do: SPL Search (0:15)

Explain the following to students:

- As the SOC manager at OMP, you are asked to analyze the company's vulnerability scanning logs in order to determine the vulnerabilities of OMP's technical assets.

- To accomplish this, you will need to design SPL searches that will be run against the vulnerability scanning log file, `nessus.txt`.

- These searches can be used to quickly look up existing vulnerabilities on your operating systems or devices.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: SPL Search](activities/10-SPL/Unsolved/README.md)
- [Log File:  nessus.txt](resources/nessus.txt)


### 12. Instructor Review: SPL Search Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

One of the most important Splunk skills is knowing how to use SPL to analyze the imported data. Students were tasked with writing several SPL queries to analyze certain security situations.

Completing this activity required the following steps:

  - Designing SPL queries to return the requested data.

  - Running the SPL query to determine if the requested data has been returned.

Send students the following file and use it to review the activity:

  - [Solution Guide: SPL Search Activity](activities/10-SPL/Solved/README.md)

Answer any questions that remain before proceeding to the next lesson

### 13. Instructor Do: Searching Fields with Splunk (0:10)

In the previous activity, we learned and practiced how to write and run several basic SPL commands to conduct searches.

So far, we have had to manually type out the keys and values for our SPL queries.

  - The more complex the queries become, the more time consuming this task will be.

Additionally, sometimes we don't know the values or the format of the values that exist in the search results.

- Each server and application creates their own key and value names.

  - For example, if we need to find users that logged into a machine, the key can vary depending on the server or application. It might be any of the following:
      - `Activity`
      - `Event_type`
      - `User_activity`

  - The value can also vary:
      - `Login`
      - `Logon`
      - `Logged In`

Explain that, fortunately, Splunk can address these challenges.

#### Splunk Fields

Remind class that when files are uploaded and parsed, the data is separated out into fields, as shown on the left side of the search page:

![fields1](images/fields1.png)

Fields are divided into **default fields** and **interesting fields**.

- Default fields are the fields that appear in every log event.

- Interesting fields are fields that appear in at least 20% of the log events.

On the right of each field is a number indicating the count of different values for that field.
  - For example, there are 44 different values for the  `src_ip` field.

  ![fields2](images/fields2.png)   

Once we see how many values for each field is returned, we can dig deeper to see what these values actually are:

  - Click on field `src_ip`.

  - This window displays:  
    - The top 10 values.
    - The number of events that the value appears in.
    - The percent that each value appears.
    - Options for custom reports, which will be covered later.   

 ![fields3](images/fields3.png)

This data can be used for security issues.

  - For example, if you need to determine the source IP that most frequently appears in events, we can see that this is `10.11.36.17`.

 #### Creating Queries by Selecting Fields

 Explain that we can use these same fields and values to easily design queries without having to type them out.

 - Let's use the same example as last activity: We need to create a search to find events from the source IP `10.11.36.17`.

 - Click on the IP `10.11.36.17`.   

   ![fields4](images/fields4.png)

 - Point out that it automatically adds the key-value pair to the search.

   ![SPL3](images/SPL3.png)

- We can continue to add additional key-value pairs by repeating this process.

In the next activity students will design several complex queries by clicking through the fields and values.

Ask the class if they have any questions before continuing to the next activity.    


### 14. Student Do: Searching Fields with Splunk (0:15)

Explain the following to students:

- Your manager at OMP is concerned with suspicious user activity on the Windows servers.

- Several OMP users are being locked out and deleted.

- You have been tasked with creating several complex SPL queries by selecting fields in your Splunk search.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: Searching Fields with Splunk](activities/13-Splunk-Fields/Unsolved/README.md)
- [Log File: winevent_logs.csv](resources/winevent_logs.csv)


### 15. Instructor Review: Searching Fields with Splunk Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Selecting fields is a simple way to design complex SPL queries.  Students were tasked with clicking through several fields to design SPL queries to investigate suspicious activities happening at OPM.

Completing this activity required the following steps:
  - Reviewing the provided security situations.
  - Designing SPL queries by clicking through fields.

Send students the following solution file and use it to guide your review:

- [Solution Guide: Searching Fields with Splunk](activities/13-Splunk-Fields/Solved/README.md)

Answer any questions that remain before proceeding to the next lesson.

### 16. Instructor Do: Advanced Searches with Piping  (0:10)

Explain that there will be times when we will need to modify or adjust the way data is displayed in search results.

  - This is often accomplished by **piping** in the SPL queries.

Introduce SPL piping by covering the following:

  - SPL piping uses the `|` symbol in the search queries.

  - Piping works in Splunk as it does in Linux: the data is modified from left to right as it flows through the pipeline.

  - Piping can be used to modify or adjust the display of the results or to create custom reports.

Explain that we will continue with the same logs from the previous demonstrations to show how piping can modify the search results.

  - For this demonstration, our manager would like to only see the first 20 records and sort the results by source IP address.

  - We will use piping with three new commands: `head` , `tail`, and `sort`.

#### Using Pipes Demonstration

1. Run the original SPL query to display all the results:

   -  `source="Linux_login.csv" host="Linux_Server" sourcetype="csv"`

    ![piping1](images/piping1.png)

2. Display only the first 20 records:

   - Enter the following command in your search field:

    `source="Linux_login.csv" host="<servername>" sourcetype="csv" | head 20`

   - Splunk will take the results from the first query and pipe the results to the next command called `head`.

   - `head` will take those results and modify them by only displaying the first 20 results.

3.  Run the query and point out that it returns the first 20 results based on time they occurred.

     ![piping2](images/piping2.png)

    - We can replace the `head` command with `tail` to view the last 20 records.

4. Sort the results by the source IP address:

    - Enter the following command in your search field:

    `source="Linux_login.csv" host="Linux_Server" sourcetype="csv" | head 20 | sort src_ip`

   - After piping the results into `head`, it will take those 20 results and sort them by source IP address.

   - Run the query and point out that 20 results will display, starting with the first source IP, `10.11.36.2`. The second result in the search is `10.11.36.3`.

     ![piping3](images/piping3.png)

Explain that the order of the piping can impact the results.

  - For example, if we switched the order of the `head` and `sort` commands, such as:
    - `source="Linux_login.csv" host="Linux_Server" sourcetype="csv" | sort src_ip | head 20`  `

  - It will still display 20 results, but the results will be first sorted by IP address, with the top 20 rows of those sorted results displayed.

  - Run this query and point out that now the first record has the source IP address of `10.11.36.1`.

   ![piping4](images/piping4.png)

Summarize this section:
  - SPL query results can be modified or adjusted by using piping in the SPL queries.

  - With piping, data changes from left to right as it flows through the pipeline.

  - Changing the order of the commands in the pipeline can change the search results.


In today's final activity, students will design several queries and use pipes to modify the search results.

Ask the class if they have any questions before continuing to today's final activity.     


### 17. Student Do: Advanced Searches with Piping (0:10)

Explain the following to students:

- Your manager believes there is one specific user that is being targeted by an adversary.

- You have been tasked with running several advanced searches to determine which user is being targeted.

:globe_with_meridians: This activity will use **breakout rooms**. Assign students into groups of 3-5 and move them into breakout rooms.

Send students the following instructions:

- [Activity File: Advanced Searches with Piping](activities/16-Advanced-Searches/Unsolved/README.md)
- [Log File: `winevent_logs_2.csv`](resources/winevent_logs_2.csv)


### 18. Instructor Review: Advanced Searches with Piping Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity.

Splunk users can use advanced searches and piping to assist with analyzing and presenting security events.  Students were tasked with using Splunk to determine which OMP user is being targeted.

Completing this activity required the following steps:
- Designing and running several complex splunk queries.
- Analyzing the results to determine specific data points.
- Summarizing your findings.

Send students the following solution file and use it to guide your review:

- [Solution Guide: Advanced Searches with Piping](activities/16-Advanced-Searches/Solved/README.md)

Answer any questions that remain before dismissing class for the day.


---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
