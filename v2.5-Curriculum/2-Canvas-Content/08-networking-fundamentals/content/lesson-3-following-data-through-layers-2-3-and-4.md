## Lesson 3: Following Data Through Layers 2, 3, and 4 
 
### Overview

On the third day of our introduction to networking, you will learn how to gather data from specific networks using enumeration.

Then we will move through the following three layers of the OSI model in more depth:
* Layer 2: Data Link layer
* Layer 3: Network layer and 
* Layer 4: Transport layer

We'll cover the following tools and protocols related to each layer: 
* Layer 2: ARP
* Layer 3: `ping` and `traceroute`
* Layer 4: TCP and UDP

You'll finish class by performing a SYN scan to search for open ports on a network.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
- Define enumeration as a set of methods used by security professionals and hackers to determine network vulnerabilities.

- Use Wireshark to visualize and analyze ARP activity, including ARP spoofing.

- Use `ping` and `fping` to determine if hosts are up and accepting connections.

- Use `traceroute` to troubleshoot networking communication issues between two devices.

- Define and distinguish TCP and UDP.

- Analyze TCP traffic in Wireshark.

- Analyze SYN scans to determine the availability of ports on a network.

### Today’s Activities

* **Analyzing ARP Activity**: In this activity, you will analyze ARP activity from a packet capture to determine if any vulnerabilities exist.

* **Enumeration with `ping`**: In this activity, you'll be provided with a list of a fictional company's host IP addresses, and you'll use `ping` to determine which hosts are currently reachable.

* **Enumeration with `traceroute`**: In this activity, you'll further analyze the IPs rejected in the last activity to determine where in their path the connection is being dropped.

* **Analyzing TCP Traffic**: In this activity, you'll analyze the TCP traffic of a new employee at the same company to determine what they're working on during their first week.

* **Analyzing a SYN Scan**: In this activity, you'll analyze a packet capture of a SYN Scan that the same company ran against one of its hosts. You'll determine what ports are open, closed, and filtered.
