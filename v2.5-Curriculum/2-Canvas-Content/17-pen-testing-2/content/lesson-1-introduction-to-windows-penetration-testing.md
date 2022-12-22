## Lesson 1: Introduction to Windows Penetration Testing 
 
### Overview

In today's class, we'll review the previous module, Linux penetration testing, and then introduce this module's topic: Windows penetration testing. We will cover Windows port scanning, initial access for Windows, and exploitation. You'll finish the day by running a Meterpreter shell on a Windows workstation.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
* Discern the differences between Windows and Linux penetration testing.

* Explain what ports a Windows machine commonly has open.

* Explain how Windows authentication works.

* Perform poisoning/spoofing attacks on a Windows network.

### Today’s Activities

* **Port Scanning**: In today's activities, you will continue to play the role of a pentester conducting an engagement on MegaCorpOne. Since it's been a week since the last port scan, you will re-conduct scanning in order to determine whether any Windows machines are on the network.

* **Password Spraying**: Now that you've recognized which machines on MegaCorpOne's network are Windows machines, in this activity, you will perform your first attack, password spraying. In the previous module, you cracked several passwords belonging to the users from the /etc/shadow file on the Linux machine. Now, you'll attempt to use those to log in to a Windows machine.

* **LLMNR Spoofing**: In this activity, you will perform LLMNR spoofing in order to retrieve a set of credentials for another domain user, which you will crack offline with John the Ripper.

* **Windows Exploitation**: Now that you have two sets of credentials, in this activity, you will leverage these credentials and use a Metasploit module in order to run commands on the remote machine.
