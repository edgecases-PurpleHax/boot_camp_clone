## Week 16 Homework Solution File: Penetration Testing 1

#### Step 1: Google Dorking


- Using Google, can you identify who the Chief Executive Officer of Altoro Mutual is: **Karl Fitzgerald**

- How can this information be helpful to an attacker: **A hacker can target them with social engineering attacks**.


#### Step 2: DNS and Domain Discovery

Enter the IP address for `demo.testfire.net` into Domain Dossier and answer the following questions based on the results:

  1. Where is the company located: **Sunnyvale, CA**

  2. What is the NetRange IP address: `65.61.137.64 - 65.61.137.127`

  3. What is the company they use to store their infrastructure: **Rackspace Backbone Engineering**

  4. What is the IP address of the DNS server: `65.61.137.117`

#### Step 3: Shodan

- What open ports and running services did Shodan find:

    - `80 Apache Tomcat/Coyote JSP engine`
    - `443 Apache Tomcat/Coyote JSP engine`
    - `8080 Apache Tomcat/Coyote JSP engine`
    - `8443 Apache Tomcat/Coyote JSP engine`

#### Step 4: Recon-ng

- Install the Recon module `xssed`. 
- Set the source to `demo.testfire.net`. 
- Run the module. 

Is Altoro Mutual vulnerable to XSS: **Yes**

Solution:

```
[recon-ng][default] > modules load recon/domains-vulnerabilities/xssed
[recon-ng][default][xssed] > options set SOURCE demo.testfire.net
SOURCE => demo.testfire.net
[recon-ng][default][xssed] > run

-----------------
DEMO.TESTFIRE.NET
-----------------
[*] Category: XSS
[*] Example: http://demo.testfire.net/search.aspx?txtSearch=%22%3E%3Cscript%3Ealert(%2Fwww.sec-r1z.com%2F)%3C%2Fs<br>cript%3E%22%3E%3C%2Fscript%3E
[*] Host: demo.testfire.net
[*] Notes: None
[*] Publish_Date: 2011-12-16 00:00:00
[*] Reference: http://xssed.com/mirror/57864/
[*] Status: unfixed
[*] --------------------------------------------------

-------
SUMMARY
------
[*] 1 total (1 new) vulnerabilities found.

```

### Step 5: Zenmap

Your client has asked that you help identify any vulnerabilities with their file-sharing server. Using the Metasploitable machine to act as your client's server, complete the following:

- Command for Zenmap to run a service scan against the Metasploitable machine: `nmap -sV 192.168.0.10`
 
- Bonus command to output results into a new text file named `zenmapscan.txt`: `nmap -sV -oN zenmapscan.txt --script smb-enum-shares 192.168.0.10`

- Zenmap vulnerability script command: `nmap --script smb-enum-shares 192.168.0.10`

Once you have identified this vulnerability, answer the following questions for your client:

  1. What is the vulnerability: `Anonymous users have read/write access to their SAMBA shares.`

  2. Why is it dangerous: `Anonymous users can access company files and change them.`

  3. What mitigation strategies can you recommend for the client to protect their server: `Update their SAMBA server to the newest version and disable anonymous access.`


---
© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  

