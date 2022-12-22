## Lesson 1: IPs and Routing 
 
### Overview

In today's class, we'll build on what we learned in the first week of networking by diving deeper into how data travels across networks. Specifically, we will study how private and public IP addresses are assigned with Dynamic Host Configuration Protocol (DHCP) and Network Address Translation (NAT), and the security risks associated with both types of IPs.

We'll also examine the various routing schemes and protocols data can use to travel to a destination.

Lastly, we'll cover wireless networks, wireless security protocols, and wireless attacks.

### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
- Explain how DHCP and NAT assist with the transmission of data from private to public networks and from public to private networks.

- Analyze packet captures to diagnose potential DHCP issues on a network.  

- Optimize routing schemes by determining the shortest or quickest paths between multiple servers.

- Use Wireshark to visualize wireless beacon signals, capture BSSIDs and SSIDs, and determine the type of wireless security being used by WAPs.

- Use Aircrack-ng to obtain a wireless key and decrypt wireless traffic to determine security risks.

### Today’s Activities

* **DHCP Attacks**: In this exercise, you'll analyze a packet capture from a fictional company, Acme Corp, to investigate what type of network attack is preventing employees from accessing the internet.

* **Routing Schemes and Protocols**: In this exercise, you'll analyze the network diagrams of several Acme Corp offices and determine the shortest "Time-Wise" path between multiple servers in each office to identify the shortest routes.

* **Analyzing Wireless Security**: In this exercise, you'll use Wireshark to analyze a packet capture from the newly acquired Kansas City office, finding all wireless routers in this office as well as the SSID, BSSID, and type of encryption from these devices.

* **Wireless Attacks**: In this exercise, you'll analyze a packet capture from the wireless router that was using a weaker encryption. You'll need to find the key for the wireless router and use the key to decrypt the wireless traffic.
