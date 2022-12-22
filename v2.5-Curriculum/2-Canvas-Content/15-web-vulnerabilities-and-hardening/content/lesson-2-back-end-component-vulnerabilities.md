## Lesson 2: Back-End Component Vulnerabilities 
 
### Overview

Today, we'll continue our introduction to web vulnerabilities. You'll learn about the vulnerabilities that exist within web applications' back-end components, and then you'll learn how to conduct exploits against them. Specifically, we'll focus on directory traversal and local and remote file inclusion exploits. Additionally, you'll learn about the mitigation methods used to protect against these vulnerabilities.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
* Differentiate between front-end and back-end component vulnerabilities.

* View confidential files with a directory traversal attack by using the dot-slash method.

* Exploit a web application's file upload functionality to conduct a local file inclusion attack.

* Modify a web application's URL to use a malicious remote script to conduct three different remote file inclusion attacks.

### Today’s Activities

* **Directory Traversal**: In this activity, you'll test the intended purpose of an application to view back-end files from the web application's server. Then, you'll manipulate the URL with the dot-slash technique to view confidential and hidden files on the web application server.

* **Local File Inclusion**: In this activity, you'll test an intended purpose of an application by uploading and viewing a basic image file. Then, you'll upload a malicious PHP script and use the script to run command-line scripts against the web server.

* **Remote File Inclusion**: In this activity, you'll first reference a non-malicious URL to determine how it modifies a webpage and reference a remote malicious script contained within a webpage. Then, you'll modify the URL to run command-line commands with the malicious script. As a bonus, you may try to combine RFI and XSS with a single exploit.
