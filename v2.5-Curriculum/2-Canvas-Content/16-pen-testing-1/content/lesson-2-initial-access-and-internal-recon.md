## Lesson 2: Initial Access and Internal Recon 
 
### Overview

Today's class will introduce the MITRE tactic of initial access by applying phishing and accessing a VPN to gain access to an internal network. You'll then proceed with the penetration testing engagement against MegaCorpOne by running Zenmap to scan a network and then by exploiting a vulnerable machine.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
* Understand how initial access fits into the MITRE matrix.

* Recognize phishing emails and understand why attackers so commonly use them in order to obtain initial access.

* Perform advanced Nmap scans with NSE scripts.

* Exploit a machine with a Python script.

### Today’s Activities

* **Accessing Remote Services through Valid Accounts**: In today's activities, you'll continue playing the role of a pentester conducting an engagement against MegaCorpOne. In this activity, you'll use the passwords that you found during Day 1's OSINT phase to try and log in to vpn.megacorpone.com, and then run a shell script that will log you in to the internal network.

* **Zenmap**: In this activity, now that you are on MegaCorpOne's internal network, you will use Zenmap and NSE scripts to build out a profile in order to perform a scan on a certain machine on the network.

* **Exploitation**: Now that you have identified a potential exploitable service on a host, in this activity, you will use SearchSploit to find a script that can exploit it and determine whether you can gain shell access on the host.
