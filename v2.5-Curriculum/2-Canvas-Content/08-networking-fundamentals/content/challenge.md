# Module 8 Challenge

## Module 8 Challenge <assignment>

### Rocking your Network!

You have just been hired by RockStar Corporation as a network security analyst.

- RockStar Corp has recently built a new office in Hollywood, California. You are tasked with completing a **network vulnerability assessment** of the office.

- You will complete several steps in order to analyze the Hollywood network and then provide RockStar Corp a summary of your findings.

- RockStar Corp is also concerned that a malicious hacker may have infiltrated their Hollywood office. You will need to determine whether there is anything suspicious in your findings.

### Files Required

RockStar Corp has provided you with:

- A list of their network assets: [RockStar Corp Server List](https://docs.google.com/spreadsheets/d/1ZlcgbXvn8ekjLvgTfgf3wHsAYLv7OFbN2N-3BLiFBSE/edit?usp=sharing)
- Instructions to scan their network, provided below.

### Your Goal

You will follow instructions to work through four phases of the network assessment. As you work, fill out the [Module 8 Challenge Submission File](https://docs.google.com/document/d/1Cdh5AL5lHF5IQklVi1wecVwjjuk1u4ZnMNA5HI7iuxc/edit?usp=sharing) (remember to make a copy of this document before filling it out). You will submit this submission file as your Challenge deliverable. For each phase, you'll include the following information in your submission file:

- The steps and commands used to complete the tasks.
- A summary of your findings.
- Any network vulnerabilities discovered.
- Any fndings associated with a hacker.
- Recommended mitigation strategy.
- The OSI layer(s) your findings involve.


### Topics Covered in This Assignment

- Subnetting
- CIDR
- IP addresses
- `fping`
- OSI model and OSI layers
- Protocols
- Ports
- Wireshark
- PCAP analysis
- `DNS`
- `HTTP`
- `ARP`
- `Syn` scan
- `TCP`
- `nslookup`
- Network vulnerability assessments
- Network vulnerability mitigation

### Network Vulnerability Assessment Instructions

Use your Vagrant virtual machine for this assignment.

#### Phase 1: _"I'd like to Teach the World to `ping`"_

You have been provided a list of network assets belonging to RockStar Corp. Use `fping` to ping the network assets for only the Hollywood office.

  - Determine the IPs for the Hollywood office and run `fping` against the IP ranges in order to determine which IP(s) are accepting connections.

  - RockStar Corp doesn't want any of their servers, even if they are up, to indicate that they are accepting connections.
     - Use `fping <IP Address>` and ignore any results that say "Request timed out."
     - If any of the IP addresses send back a reply, press Ctrl+C to stop sending requests.

Enter the relevant information for Phase 1 in your submission file, including the `fping` command(s) used, a summary of the results (including which IPs accept connections and which do not), and which OSI layer(s) your findings involve.

#### Phase 2:  _"Some SYN for Nothin`"_

Using your findings from Phase 1, determine which ports are open.

  - You will run a SYN scan against the IP(s) accepting connections. Follow the instructions in the **SYN Scan Instructions** section below.

  - Using the results of the SYN scan, determine which ports are accepting connections.

Fill out the relevant information for Phase 2 in your submission file.

##### SYN Scan Instructions

What is **Nmap**?

  - **Nmap** is a free networking scanning tool available for Linux distributions.

  - Security professionals use Nmap to determine what devices are running on a network, as well as to find open ports to determine potential security vulnerabilities.

  - Nmap has many capabilities and commands that can be run. Refer to this [cheat sheet](https://www.stationx.net/nmap-cheat-sheet/) for reference.

For this activity, we will specifically focus on Nmap's ability to run a SYN scan.

  - You already know that a SYN scan is an automated method to check for the states of ports on a network. Nmap is simply a tool that can automate this task.

To run a SYN scan:

  - Open the terminal within your Linux machine.

  - Use the following command to run a SYN scan: `nmap -sS  <IP Address>`

    - For example, if you wanted to run a SYN scan against the server IP `74.207.244.221`, you would run `nmap -sS 74.207.244.221` and press Enter.

    - This will scan the most common 1000 ports.

  - After this runs for several minutes, it should return a result similar to the following that depicts the state of the ports on that server:

        Starting Nmap 7.70 ( https://nmap.org ) at 2019-08-14 11:51 EDT
        Nmap scan report for li86-221.members.linode.com (74.207.244.221)
        Host is up (1.4s latency).
        Not shown: 988 closed ports
        PORT    STATE    SERVICE
        22/tcp  open     ssh
        25/tcp  filtered smtp
        110/tcp open     pop3
        113/tcp filtered ident
        135/tcp filtered msrpc
        139/tcp filtered netbios-ssn
        143/tcp open     imap
        445/tcp filtered microsoft-ds
        465/tcp open     smtps
        587/tcp open     submission
        993/tcp open     imaps
        995/tcp open     pop3s

  - The results show the port number / TCP / UDP, the state of the port, and the service / protocol for the ports that are either open or filtered (stopped by a firewall).

  - Closed ports are not shown, as indicated on the line: `Not shown: 988 closed ports`.

For the purpose of this exercise, document in your submission file which ports are open on the RockStar Corp server, and which OSI layer SYN scans run on.

#### Phase 3: _"I Feel a DNS Change Comin' On"_

Using your findings from Phase 2, determine whether you can access the server(s) that accept connections.

- RockStar typically uses the same default username and password for most of their servers, so try this first:

  - **Username:** `jimi`

  - **Password:** `hendrix`

- Try to figure out which port/service would be used for remote system administration. Then, using these credentials, attempt to log in to the IP(s) that responded to pings in **Phase 1**.

RockStar Corp recently reported that they are unable to access rollingstone.com in the Hollywood office. Sometimes when they try to access the website, a different, unusual website comes up.

  - While logged into the RockStar server from the previous step, determine whether something was modified on this system that might affect viewing `rollingstone.com` within the browser. When you successfully find the configuration file, record the entry that is set to `rollingstone.com`.

  - Terminate your SSH session to the rollingstone.com server, and use `nslookup` to determine the real domain of the IP address that you found in the previous step.

    > **Note:** `nslookup` is a command-line utility that can work in Windows or Linux Systems. It is designed to query Domain Name System records. You can use PowerShell or MacOS/Linux terminal to run `nslookup`.

    - To run `nslookup`, simply enter the following on the command line:

      `nslookup <IP Address>` to find the domain associated to an IP address

      OR

      `nslookup <domain name>` to find the IP address associated to a domain

    - You'll know you've found the right domain if it begins with `unknown.`.

Add your findings to your submission file.

#### Phase 4:  _"Sh`ARP` Dressed Man"_

Within the RockStar server that you SSH'd into, and in the same directory as the configuration file from Phase 3, the hacker left a note about where she stored some packet captures.  

- View the file to find out where to recover the packet captures.

- These packets were captured from the activity in the Hollywood Office.

- Use Wireshark to analyze this PCAP file and determine whether there was any suspicious activity that could be attributed to a hacker.

- Record and identify your findings (i.e., OSI layers, protocols, IP addresses, MAC addresses, etc.).

    > **Hint:** Focus on the ARP and HTTP protocols. Recall the different types of HTTP request methods, and be sure to thoroughly examine the contents of these packets.

Add your findings to your submission file.

### Submission Guidelines: _"Its the End of the Assessment as We Know It, and I Feel Fine"_

* After you complete your Submission File, title it with the following format: < YOUR NAME >< Rocking your Network! >
* Make sure to set the file permissions so that anyone can view and comment on your document.
* Submit the URL of your Submission File Google Doc through Canvas.

