## 9.1 Lesson Plan: IPs and Routing

### Overview

Today's class will build on the first week of networking by diving deeper into how data travels across networks. Specifically, we will study how private and public IP addresses are assigned with Dynamic Host Configuration Protocol (DHCP) and Network Address Translation (NAT), and the security risks associated with both types of IPs.

We'll also examine the various routing schemes and protocols data can use to travel to a destination.

Lastly, we'll cover wireless networks, wireless security protocols, and wireless attacks.

### Class Objectives

By the end of class, students will be able to:

- Explain how DHCP and NAT assist with the transmission of data from private to public networks and from public to private networks.

- Analyze packet captures to diagnose potential DHCP issues on a network.  

- Optimize routing schemes by determining the shortest or quickest paths between multiple servers.

- Use Wireshark to visualize wireless beacon signals, capture BSSIDs and SSIDs, and determine the type of wireless security being used by WAPs.

- Use Aircrack-ng to obtain a wireless key and decrypt wireless traffic to determine security risks.

### Instructor Note

- On Day 2, there is an optional review in the second half of class.  If any of today's or the next class activities and lessons need additional time, feel free to adjust them as needed with additional time since day two has over an hour of optional reviews.

:warning: Before the beginning of class, download and save the packet capture Resources/WEP.pcap onto your Ubuntu VM in preparation for section **13. Instructor Do: Decrypting with Aircrack-NG.**

### Lab Environment

<details><summary>Lab Details</summary>
<br>


You will use your local Vagrant virtual machine for today's activities. Please note that instructors and students have different access credentials.

  - Instructor access:
    - Username: `instructor`
    - Password: `instructor`

  - Student access:
    - Username:`sysadmin`
    - Password: `cybersecurity`
 
</details>

### Online Classroom Strategies 

Refer to the following guidelines and best practices for conducting this class online: 

- [Cybersecurity Online Classroom Strategies](../../../00-Teaching-Staff-Prework/OnlineStrategies.md)


### Slideshow

- The lesson slides are available on Google Drive here: [9.1 Slides](https://docs.google.com/presentation/d/1ns2AD4VWwH3zuHPwBEF-4K65VbP0ZxuvXVUnsjLQ9VQ/edit#slide=id.g4789b2c72f_0_6).

- To add slides to the student-facing repository, download the slides as a PDF by navigating to **File** > **Download as** and choosing **PDF document**. Then, add the PDF file to your class repository along with any other necessary files.

- **Note**: Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to **File** > **Make a copy**.

### Time Tracker

- The Time tracker is available on Google Drive here: [9.1 Time Tracker](https://docs.google.com/spreadsheets/d/12tDEik_fcO3LwJsrWr7EVPZuTd1urMVSui6egtNcbhE/edit#gid=0).

### Student Guide

Distribute the student-facing version of this lesson plan after class: [9.1 Student Guide](StudentGuide.md).

---

### 01. Instructor Do: Welcome and Introduction (0:05)

Welcome students to the first day of the second week of networking.

- Briefly review the first week of networking, noting that we covered many of the devices and technologies that build networks and assist in getting data from source to destination.  

- Explain that today, we will build upon the first week by diving deeper into how data travels across networks, and we'll examine the various methods and paths that data can travel to reach its destination.

Note the class objectives and that we will cover the following concepts:

- DHCP and NAT.

- Routing schemes and routing protocols.

- Remote networking concepts, such as wireless.

### 02. Instructor Do: DHCP and NAT (0:10)

To understand the first concept of the day, we'll need to quickly review private and public IP Addresses:

  - Private IP addresses are used for devices within a Local Area Network (LAN).

  - Public IP addresses are used for devices that are publicly accessible on a Wide Area Network (WAN).

#### Dynamic Host Configuration Protocol (DHCP)

Explain that when you turn on your laptop and connect to the internet, several processes are taking place.

- If you're on a LAN and want to connect to the internet and visit a webpage, your computer needs to be assigned a private IP address.

  - However, most computers do not have pre-assigned private IP addresses, so you'll need to obtain one before you can connect.

  - A networking device known as a **DHCP server** is responsible for managing and providing these private IP addresses.

Define **Dynamic Host Configuration Protocol (DHCP)** as a client-server based protocol on your local network that is responsible for managing and assigning IP addresses.

  - It is **dynamic**, because most devices don't have fixed IP addresses.

  - The **DHCP client** is any device that needs a dynamic IP address, e.g., your computer.

  - The **DHCP server** is the provider of the IP addresses on your local network.

  - On a small or home network, the DHCP server is typically located on your router, but at an enterprise level could be on its own server.

  - DHCP is a Layer 7: Application layer protocol, that uses two **UDP** ports:
    - Port `67` is used by the server
    - Port `68` is used by the client.

- Explain that there is a **four-step process** for requesting and receiving an IP from a DHCP Server:

  1. **DHCP Discover**: In the first step, the DHCP client needs to find the DHCP server.  It sends out a message to everyone on the local network: _"I need a DHCP server!"_

  2. **DHCP Offer**: In the next step, the DHCP server checks which IP addresses are available to give out. Then, the DHCP server selects an available IP address and sends it  out to the network. The DHCP server is saying: _"Here is your IP address, DHCP client."_

  3. **DHCP Request**: Next, the DHCP client sends a message back to the DHCP server: _"Thanks for the IP address, I will take it."_

  4. **DHCP ACK**: In the final step, the DHCP server is saying to the DHCP client, _"Great, glad you have the IP address, but I will need it back after a certain period of time."_
      - This period of time is called the **DHCP lease**. Once it expires, the DHCP server can give that IP to another device.

     - In this last step, the DHCP server issues the DHCP lease and any other configuration information the client might have requested.

#### Four-Step Walkthrough

Now we will walk through these four steps using Wireshark.

- Start Wireshark and open the [~/Cybersecurity-Lesson-Plans/1-Lesson-Plans/09-Networking-Fundamentals-II-and-CTF-review/1/Resources/dhcp.pcap file](Resources/dhcp.pcap).

- Point out that this Wireshark capture only contains the **Four-Step DHCP process** points.

  ![DHCP1](Images/DHCP1.png)

First, note the following IP addresses and what each represents:
  - `0.0.0.0` is the new device trying to get an IP address from the DHCP server.

  - `255.255.255.255` is a special broadcast address used to send a message to everyone in the LAN. With this IP, you can send a broadcast packet to everyone in the network you're connected to.

  - `192.168.0.1` is the IP address of the DHCP server.
  - `192.168.0.10` is the IP address that the DHCP server provides to the device. Once the device receives it, it takes on this IP address.

Walk through each packet and explain what is taking place:

  ![DHCP2](Images/DHCP2.png)

   1. **DHCP Discover**: In this first step, the DHCP client needs an IP. It is temporarily using the source IP `0.0.0.0`. The DHCP client broadcasts a message to the whole LAN, represented by the destination IP  `255.255.255.255`.

   2. **DHCP Offer**: The DHCP server with the IP `192.168.0.1` responds to the first DHCP discover request by offering the IP `192.168.0.10`.

   3. **DHCP Request**: The DHCP client, still represented as `0.0.0.0`, sends a message back across the whole LAN, represented by `255.255.255.255`, saying, _"Thanks for the IP address, I will take it."_

   4. **DHCP ACK**: In response, the DHCP server `192.168.0.1` says to the DHCP client `192.168.0.10`, _"Great, glad you have the IP address. I will need it back after a certain period of time."_  
    - In this last step, The DHCP server issues a **DHCP lease** and any other configuration information the client may have requested.

- Point out that in the packet, the DHCP server is telling the client that the lease for this IP address is for one hour.

  ![DHCP4](Images/DHCP4.png)

Explain that we can use filters to look for DHCP packets, and more specifically, DHCP steps.     

Enter in the following filters and explain their uses:

- To view all DHCP packets:

  - Enter `dhcp` in the filter and press Enter.

- To view specific DHCP steps:

  - **DHCP Discover** filter: `dhcp.option.dhcp == 1`

  - **DHCP Offer** filter: `dhcp.option.dhcp == 2`

  - **DHCP Request** filter: `dhcp.option.dhcp == 3`

  - **DHCP ACK** filter : `dhcp.option.dhcp == 5`

  - Clarify that `dhcp.option.dhcp == 4` is used for **DHCP Decline**. This is why DHCP ACK is `dhcp.option.dhcp == 5`.

  ![DHCP3](Images/dhcp3.png)

Explain that in the next lesson we will see practical applications for these filters.

Take a moment to address remaining questions on DHCP before proceeding to the next section.

#### Network Address Translation (NAT)

Now we know how **DHCP** issues a private IP address to your device. But this devices still needs to connect across a WAN, like the internet, to access public data, such as webpages.

- To connect across the internet, you need a **public IP address**. This allows messages to be sent to your device.

Public IP addresses are provided through **Network Address Translation (NAT)**.

Define **NAT** as a method of mapping a private IP address to a public IP address and vice versa.

  - This mapping gets stored in a **Network Address Translation table**, typically managed by the router.

  - The router is considered the **gateway** between private and public networks.

  - Traffic needing to go from private to public networks and public to private networks (or even private to private networks), needs to go through the gateway.

  - While NAT touches several OSI layers, it's main task is IP address translation, so it primarily works on Layer 3: Network.

Explain the steps of the NAT process by covering the following example:

 - Your computer, with the private IP `10.0.0.5`, is trying to access the webpage `google.com` with the public IP of `74.0.0.1`.  

 - Your network's public IP address is `32.0.0.1`.

#### Step One

First, your computer creates a packet with the following info:
- Destination IP and port: `74.0.0.1:80`.
- Source IP and port: `10.0.0.5:49200`.

Explain the IPs and ports in the packet:  

- The destination IP of the google.com webpage used to access `74.0.0.1`, and the destination port `80`—the port used for HTTP.

- The source IP is `10.0.0.5`—the private IP of your computer.

- A source port was randomly chosen from the **private port** range (`49152` to `65535`). This private port helps the router determine which device to send the response packet to. In this case, multiple devices exist on the LAN.

  - For this example, we randomly selected port `49200` from the private port range.

#### Step Two      

The packet is sent to the internal router, which creates a record in the NAT table.

  - The record in the NAT table will look like the following:
      ```bash
                NAT TRANSLATION TABLE
        LAN ADDRESS              WAN ADDRESS
        10.0.0.5:49200           32.0.0.1:49200
      ```

  - **Instructor Note**: A few additional details are purposely not covered, such as port translation, in order to avoid confusion.

#### Step Three

Your router modifies the packet and replaces the source IP with the **Network's public IP address**.
  - The new packet will have the following:

    - Destination IP and port: `74.0.0.1:80`
    - Source IP and port: `32.0.0.1:49200`

#### Step Four

When google.com receives the packet, it creates a response packet with the following:

  - Destination IP and port: `32.0.0.1:49200`
  - Source IP and port: `74.0.0.1:80`


#### Step Five

Once your router receives that packet, it checks the NAT table to see exactly which device is expecting that packet.

- It will update the packet and **translate** the IP with the following new packet details:
    - Destination IP and port: `10.0.0.5:49200`
    - Source IP and port: `74.0.0.1:80`

#### Step Six

Your device, with the private IP `10.0.0.5`, receives the packet. You can now view `google.com`.

Explain that in the next activity, student will manually build translations in a sample Network Address Translation table.

Take a moment to address remaining questions before proceeding.


### 03. Instructor Do: DHCP Attacks (0:10)

Explain that while there are many benefits provided by DHCP, there are also many risks that a malicious actor can exploit.

#### DHCP Starvation

Explain that **DHCP servers** only have a limited number of IP addresses they can distribute to the devices on their local network. These available IP addresses are typically enough to cover the number of devices on their network.
  - If an attacker is able to access the LAN, they can send a large number of fraudulent DHCP messages over the network, requesting IP addresses from the DHCP server.

  - If this number is large enough, the DHCP server may run out of IP addresses to distribute.

  - If the DHCP server runs out of IPs, new, legitimate users are won't be able to receive a private address.

  - This attack is known as a **DHCP starvation attack**.

Students should be aware of denial of service (DoS) attacks. Explain that a DHCP starvation attack is a type of denial of service attack that impacts the **availability** aspect of the CIA (confidentiality, integrity, and availability) triad.

  - For example: If a hospital experiences this type of attack, doctors needing to connect to the internet to access critical patient information wouldn't be able to do so.

Now we'll visualize a DHCP starvation attack by opening up the [.../09-Networking-Fundamentals-II-and-CTF-review/1/Resources/DHCPAttack.pcap](Resources/DHCPAttack.pcap) file in Wireshark.

![dhcpstarvepcap](Images/dhcpstarve.png)

Point out the following about the above image:
  - This is a capture of DHCP traffic for one network.

  - There are only milliseconds between each packet.

  - If we scan through the traffic, we notice many DHCP requests, indicating that an attacker is attempting to starve the DHCP server's IP addresses.

  - This capture is just a small sample. In a real DHCP starvation attack, there may be more than 50,000 DHCP packets.


Explain that one way to protect against this attack  is to set a **maximum threshold**. This threshold is the number of DHCP requests per second that can be accepted by the DHCP server.  When the threshold is reached, the DHCP server ignores requests until a certain period of time.

#### DHCP Spoofing

Explain that after a DHCP starvation attack occurs, an attacker can set up a fraudulent DHCP server.

  - This fraudulent DHCP server can falsely send out spoof messages to the DHCP clients, identifying a malicious router that clients should direct traffic to.

  - Once the DHCP clients make this change, they will start sending out their traffic to the malicious router.

  - The attacker can then use the router to capture sensitive data.

  - This attack is known as a **DHCP spoofing attack**.

Explain that we can protect against DHCP spoofing through a process known as DHCP snooping.
  - **DHCP snooping** is a process implemented on a network switch that inspects packets to confirm they're legitimate DHCP offers, and block those it determines to be unauthorized.

Explain that in the next activity, the students will analyze a packet capture to determine which type of DHCP Attack has occurred.

Take a moment to address remaining questions before proceeding to the DHCP Attack Activity.


### 04. Student Do: DHCP Attacks Activity (0:15)

Explain the following to students:

- In this activity, you will play the role of a security analyst at Acme Corp.

- Acme Corp employees are currently experiencing network access issues and are unable to connect to the internet.

- These employees are receiving error messages saying no local IP addresses are available, indicating a potential issue with DHCP.

- Acme believes an internal attack may have occurred and would like you to investigate by analyzing a packet capture to determine what type of attack may be causing the issue.

Send students the following files:

- [Activity File: DHCP Attacks](Activities/04_DHCP_Attacks/unsolved/readme.md)
- [Resources/DHCPactivity.pcap](Resources/DHCPactivity.pcapng)


### 05. Instructor Review: DHCP Attacks Activity (0:10)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

In the exercise, students analyzed a packet capture from Acme Corp to investigate the type of network attack preventing employees from accessing the internet.

Completing this activity required the following steps:
- Opening a packet capture of network traffic from Acme Corp.

- Creating filters for different types of DHCP activities.

- Summarizing findings to determine which type of attack has occurred and how it is preventing employees from accessing the internet.

Send students the following file:

- [Solution Guide: DHCP Attacks](Activities/04_DHCP_Attacks/solved/readme.md)

#### Walkthrough

- Create a filter to determine the count for each different DHCP activity:

  **DHCP Discover**

  - Filter: `dhcp.option.dhcp == 1`
  - There are 135 DHCP Discover packets.

  **DHCP Offer**

  - Filter: `dhcp.option.dhcp == 2`
  - There are 15 DHCP Offer packets.

  **DHCP Request**

  - Filter: `dhcp.option.dhcp == 3`
  - There are 0 DHCP Request packets.


- Based on these results, summarize what type of attack may have occurred, and why you believe Acme Corp's employees are having network issues.

  - Having found 135 DHCP Discover packets for a short period of time, we can say that this is a **DHCP starvation attack**.

  - Because there were many DHCP requests, the list of available IP addresses was used up.

  - Due to this, staff trying to connect to the network are unable to get a new IP address.

- Analyze the source MAC addresses of the DHCP activities and summarize what the attacker is doing.

  - For each DHCP request, the attacker is changing their MAC address.  They are likely using a spoofing tool to create a new MAC address for each request to successfully run the DHCP starvation attack.

Take a moment to address remaining questions before proceeding to the next section.   


### 06. Instructor Do: Routing Schemes and Protocols (0:15)

Remind class that we have covered many of the devices, protocols, and processes that move data from sources to destinations. We'll reference these devices as we cover routing schemes in the following section.

#### Routing Schemes

Explain that data takes a **route** from the source to the destination. **Routing** is the act of choosing the path that traffic takes in or across networks.

When network devices route their traffic, they have several **routing schemes** they can choose from. These schemes include:

- **Unicast**: A single device delivers a message to another single specific device.

    - For example: A phone call between two people.

- **Broadcast**: A single device broadcasts a message to all devices on that same network.

   -  For example: A DHCP offer message is broadcast across a whole LAN.

- **Multicast**: A device sends a message to devices that have expressed interest in receiving the message.

    - For example: A subscription-based service sends network traffic to its subscribers.

Explain that devices choose their routing scheme based on the protocol used, as well as the intended recipients of the traffic.

  - For example, if a router wants to send an ARP (Address Resolution Protocol) message to find out the owner of an IP address, it would use the **broadcast** routing scheme to send this message to all devices on its local network.

  - The router uses the broadcast routing scheme because it doesn't know which specific device to send the message to, so it broadcasts the message to all devices.

Explain that each scheme has disadvantages:

  - Unicast: If the message has to reach multiple destinations, many unicast messages must be sent.

  - Broadcast: Since broadcast messages are sent to everyone on a network, they can cause unnecessary traffic.

  - Multicast: Intended recipients will need to be updated and maintained to make sure they're accurate.

#### Routing Techniques

Now that we know the various methods that devices can use to send traffic, we'll discuss how to make sure routing is done *efficiently*.

  - Just like deciding the route to drive when planning a road trip, networks need to select an optimal route to make sure network traffic is delivered efficiently.

  - When traffic moves from a source to a destination, data can travel across many routes, which can include devices such as other WANs, routers, or switches.

Networks use two primary routing techniques to determine the path for transmitting their network traffic: **static** and **dynamic** routing.

- **Static routing** is the manual configuration of a network route, typically done by a network administrator.
    - Usually used on smaller networks or networks without many changes.

    - Advantages: lower CPU on the router, network administrator has full control of their network's routing behavior.

    - Disadvantages: fault tolerance, meaning if a device on a manually created path fails, the route can't be adjusted.

- **Dynamic routing** solves the fault tolerance issue by allowing the network to act on its own to avoid network blockages.

    - With dynamic routing, the network is adaptive and data gets forwarded on a different route depending on the network conditions.

    - The primary routing technique used over the internet.

    - Uses **routing protocols** to determine the best route to direct the traffic.

#### Routing Protocols

Explain that there are several types of dynamic routing protocols that help determine the path traffic takes to reach its final destination.

Dynamic routing protocols look at two primary criteria to determine the optimal path:

1. __Distance__: The amount of devices or hops used to get the data from the source to the destination.

    - For example, if one route has 10 hops, and another has seven hops,  the protocol will choose the route with seven hops.

    - Dynamic routing protocols that use distance as criteria are called **distance-vector routing protocols**.  

  - Distance-vector routing protocols include:
    - **Routing Information Protocol (RIP)**: One of the oldest dynamic protocols. It uses the hops count as its main criteria for choosing the route.

    - **Enhanced Interior Gateway Routing Protocol (EIGRP)**: A more efficient distance-vector routing protocol than RIP.

2. **Speed**: The route is determined by the time it takes to move from source to destination.

    - Just because a route has more hops, doesn't mean it's always slower. For example, the path with more hops might be faster if there's network congestion on the path with fewer hops.

    - Dynamic routing protocols that use speed as criteria are called **link-state routing protocols**.   

    - One link-state routing protocols is **Open Shortest Path First (OSPF)**.

    - Use the image in the slides to describe how **OSPF** works.

In this example, Device A needs to send data to Device C.
- If both are using a **distance-vector routing protocol**, such as RIP, the path would be:
  - **A** > **C** = one hop, the minimum number of hops.

- If using a  **link-state routing protocol** such as **OSPF**, speed would be the key factor.
  - The numbers between the devices indicate the time to get from one device to the next.
    - **A** > **B** > **C** = 6
    - **A** > **C** = 8

  - **OSPF** would choose the path of **A** > **B** > **C**.

Explain that in the next activity,  students will analyze network diagrams and use **OSPF** to determine the fastest route.

Take a moment to address remaining questions before proceeding to the network routing activity.


### 07. Student Do: Routing Schemes and Protocols Activity (0:15)

Explain the following to students:

- In this activity, you will play the role of a security analyst at Acme Corp.

- Acme Corp has several offices and needs to determine the shortest path between servers in order to create a static route.

- Your task is to analyze the network diagram and provide the shortest "Time-Wise" path between the servers provided.

Send students the following files:

- [Activity File: Routing Schemes and Protocols](Activities/07_Routing_Schemes_and_Protocols/unsolved/readme.md)
- [Acme Office Network Diagrams](Resources/AcmeOffice.docx)



### 08. Instructor Review: Routing Schemes and Protocols Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

In this exercise, students had to analyze the network diagrams of several Acme Corp offices and determine the shortest "Time-Wise" path between multiple servers in each office to identify the shortest routes.

Send students the following file:

- [Solution Guide: Routing Schemes and Protocols](Activities/07_Routing_Schemes_and_Protocols/solved/readme.md)

#### Walkthrough

New York Office

  - **A** to **C**: **A** > **B** > **C**
  - **A** to **I**: **A** > **B** > **C**  > **E**  > **I**
  - **A** to **K**: **A** > **B** > **C**  > **D**  > **G** > **K**
  - **A** to **M**:  **A** > **B** > **C**  > **E**  > **H** > **L** > **M**
  - **E**  to **N**:  **E**  > **H** > **L** > **M** > **N**


St. Louis Office

  - **A** to **C** :  **A** > **C**
  - **A** to **I**:  **A** > **C**  > **G** > **K** > **J** > **I**
  - **A** to **K**:  **A** > **C**  > **G** > **K**
  - **A** to **M**:  **A** > **C**  > **G** > **K** > **J** > **N** > **M**
  - **E** to **N**: **E**  > **I** > **J** > **N**


Miami Office

  - ****A** to **C** :**  **A** > **D**  > **C**
  - ****A** to **I**:**  **A** > **D**  > **C**  > **E**  > **F**  > **J** > **I**
  - ****A** to **K**:**  **A** > **D**  > **C**  > **E**  > **F**  > **J** > **K**
  - ****A** to **M**:**  **A** > **D**  > **C**  > **E** > **F**  > **J** > **K** > **N** > **M**
  - ****E**  to **N**:**  **E**  > **F**  > **J** > **K** > **N**


### 09. Break (0:15)

### 10. Instructor Do: Wireless Networking (0:15)

Welcome class back from the break. To introduce wireless networking, explain that users were originally only able to connect to their networks through wires, but as technologies improved, they were able to connect to their networks with a remote technology called **wireless**.

Introduce **WiFi** by covering the following:

  - Wireless technologies are those that communicate data without wires through air and space.

  - Wireless tech includes satellite television, cellular phones, and even garage door openers.

  - WiFi is the type of wireless technology that uses radio waves to provide wireless internet and network connections.

  - Devices using WiFi have a standard, **802.11**, developed by the Institute of Electrical and Electronics Engineers (IEEE) used by WiFi devices to talk to each other in an agreed-upon format.

  - 802.11 has different versions, such as 802.11a, 802.11b, 802.11c, and 802.11d. These versions allow different speeds, functionalities, and security protections.

Explain how computers connect to WiFi networks by covering the following:

  - Remind the class that a **wireless access point (WAP)** is a networking hardware device that connects a wireless network to a wired network.

  - WAPs broadcast a wireless signal called a **beacon** that computers can detect and tune into.

     - When you select "View Available Wireless Networks," on your computer or your mobile device, these devices are detecting the beacon signals.

  - When a WAP needs to broadcast its signal, it must identify itself.

    - A WAP uses a **Basic Service Set Identifier (BSSID)** to identify its MAC address in a beacon signal.

  - When you're looking for the wireless signal to connect to your computer, MAC addresses are not easy to recognize.

    - MAC addresses use six hexadecimal octets, such as `00-A4-22-01-F3-45`.

    - For this reason, WAPs also broadcast a **Service Set Identifier (SSID)** using a more recognizable format. The administrator of the WAP can configure this SSID.

    - When you select "View Available Wireless Networks" on your device, the SSIDs are the names listed, such as "Airport Wi-fi," "Cafe_Public," etc.

#### Wireless Security   

Explain that as WiFi provides great advantages by allowing users to connect their devices to the internet wirelessly. However, it's possible for attackers to capture and view private wireless network traffic.

Explain WiFi security by covering the following:

  - The first kind of WiFi security was **Wired Equivalent Privacy (WEP)**, created in 1999 as a security protocol using encryption to provide protection and privacy to wireless traffic.

    - WEP provided encryption between the wireless devices and WAPs.

    - Unfortunately, over time major security vulnerabilities were discovered in the WEP protocol, making network traffic using the protocol vulnerable to sniffing attacks.

    - For example, an attacker could see text data for devices connected to a WAP, giving them access to private messages, usernames, and passwords.

  - Due to the vulnerabilities discovered in WEP, a more secure and sophisticated wireless security protocol called **WiFi Protected Access (WPA)** was created in 2003.

  - In 2006, an even more secure wireless protocol was created called **WPA2**. WPA2  is the most commonly used security protocol in most WAPs today.

 #### Visualizing Wireless in Wireshark

Now we will now use Wireshark to visualize wireless beacon signals, capture BSSIDs and SSIDs, and determine which wireless security is being used by the wireless access points.

- Open the wireless packet capture:  [Resources/Beacon.pcapng](Resources/Beacon.pcapng).

- Note that there are two beacon signals in this wireless packet capture.

  - The `Info` column identifies the beacon signal.

  - All protocols found in this capture are identified in the `Protocol` column as `802.11`, indicating they are wireless packets.

   ![Wireless1](Images/wireless1.png)

- Note that the two beacon signals have a destination address of `ff:ff:ff:ff:ff:ff`.

- Explain that `ff:ff:ff:ff:ff:ff` is a broadcast address used by devices to broadcast the packet to everyone on a network.

    ![Wireless1b](Images/wireless1b.png)


Explain that Wireshark has an tool for analyzing the details of wireless traffic.

  - Click `Wireless` in the toolbar, then `WLAN Traffic`.

    ![Wireless2](Images/wireless2.png)

- A `Wireless LAN Statistics` page should appear:

    ![Wireless3](Images/wireless3.png)

- Explain that on this page the SSIDs, BSSID, and wireless security protection are clearly identified.

    ![Wireless4](Images/wireless4.png)

- The two WAPs have the following details:

   1. **SSID** = `Ment0rNet`, **BSSID** =  `00:23:69:61:00:d0`, **Security Protection** = `WEP`.

   2. **SSID** = `Coherer`, **BSSID** = `00:0c:41:82:b2:55`, **Security Protection** = `Unknown`.

- Explain that Wireshark is able to detect that Ment0rNet was using WEP, but unable to detect the security being used by Coherer.

Luckily, there is a way to manually analyze the packet to determine the security being used by Coherer.

- The first step is to create a column to easily see the SSIDs of the different WAPs.

  - To do this, select one beacon packet and expand the following trees in the Packet Details frame:
    -  `IEEE 802.11 wireless LAN`  > `Tagged parameters` > `Tag: SSID parameter set`

    - Right-click `SSID: Ment0rNet` and select `Apply as Column`.

  ![Wireless5](Images/wireless5.png)

Now you should easily be able to see the different SSIDs:

  ![Wireless6](Images/wireless6.png)

**Note:** depending on your screen real estate, you may want to remove other columns that you aren't using to see your new ssid column without having to scroll. Just right click and deselect a few columns you aren't using.

Explain that in order to view whether or not they are using WPA, and find out the WPA version, expand the following trees in packet details frame:

  - `IEEE 802.11 wireless LAN` > `Tagged parameters`  > `Tag: Vendor Specific: Microsoft Corp.: WPA Information Element`
  - Right-click on `WPA Version: 1` then select `Apply as Column`.

- Explain that you should now be able to see WPA Version:

![Wireless7](Images/wireless7.png)

Explain that in the next activity, we will analyze a wireless packet capture to determine the SSIDs, BSSIDs, and wireless security being used by multiple access points.

Take a moment to address remaining questions before proceeding to the wireless networking activity.

### 11. Student Do: Analyzing Wireless Security Activity (0:18)

Explain the following to students:

- In this activity, you will continue to play the role of a security analyst at Acme Corp.

- Acme Corp has acquired a company based in Kansas City and are concerned that they have weak wireless security.

- You went to the Kansas City office and captured all the wireless router beacon signals from this office using Wireshark.

- Your task is to now analyze your traffic capture from the Kansas City office and determine which wireless routers they have in the office, as well as the routers' SSIDs, BSSIDs, and the type of security they use.

Send students the following files:

- [Activity File: Analyzing Wireless Security](Activities/11_Analyzing_Wireless_Security/unsolved/readme.md)
- [Resources/wireless2.pcapng](Resources/wireless2.pcapng)

### 12. Instructor Review: Analyzing Wireless Security Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

In this exercise, students used Wireshark to analyze a packet capture from the newly acquired Kansas City office, finding all wireless routers in this office as well as the SSID, BSSID, and type of encryption from these devices.

Completing this activity required the following steps:

- Using Wireshark to determine how many wireless routers are in the Kansas City office.

- For each wireless router, adding a column to determine the following:

  - SSID.
  - BSSID.
  - Type of wireless security

Send students the following files:

- [Solution Guide: Analyzing Wireless Security](Activities/11_Analyzing_Wireless_Security/solved/readme.md)

#### Walkthrough

**SSID and BSSID**

- To view the SSID in a column, right-click the following values and select `Add a column`.
  - `IEEE 802.11 wireless LAN`  > `Tagged parameters` >`Tag: SSID parameter set` > `SSID`


- To view the BSSID in a column, right-click the following values and select `Add a column`.
  - `IEEE 802.11 Beacon frame` > `BSSID`

  You should see:

    ```bash
      BSSID                     SSID
      00:01:e3:41:bd:6e         martinet3       
      00:0c:41:82:b2:55         Coherer
      00:14:6c:7e:40:80         teddy    
      00:12:bf:12:32:29         Appart
    ```                    


**Type of Wireless Security**

- To view the wireless security in a column, right-click the following values and select `Add a column`.
  - `IEEE 802.11 wireless LAN` > `Tagged parameters` > `Tag: Vendor Specific: WPA Information Element` >  `WPA Version`

- To check the wireless security for non-WPA devices, select `Wireless`  from the toolbar. The `Protection` column will display if WEP is detected.  

  You should see:

    ```bash
    SSID                   Protection   
    martinet3                 
    Coherer                
    teddy                  
    Appart                 WEP
    ```
The martinet3, Coherer and teddy networks may have to be investigated from the main packet page.

Take a moment to address remaining questions before proceeding to the next section.   

### 13. Instructor Do: Decrypting with Aircrack-NG (0:15)

Remind class that in the previous sections, we covered multiple versions of wireless security protocols, including the weaker wireless security protocols, such as WEP.

Explain that in the following walkthrough, we will demonstrate decrypting WEP-encrypted wireless traffic using a tool called **Aircrack-NG**.

- Aircrack-NG is a free wireless decryption tool that is provided in Kali Linux. Here we have installed it on the Ubuntu machine you are already using.

Open the packet capture [Resources/WEP.pcap](Resources/WEP.pcap)

- Explain that this is the wireless traffic from the SSID `Ment0rNet`, from the previous lesson.

  - Remember: `Ment0rNet` was using **WEP**.

- Run `Aircrack-ng WEP.pcap`

  - The syntax is: `Aircrack-ng  [.pcap file name]`

Note the following while the decryption is running:
  - Aircrack-ng needs a certain number of wireless packets in order to figure out the secret key to decrypt, typically a minimum of 10,000.

    - The secret key is _not_ the same thing as the password for authenticating a wireless network.

    - The secret key is used to encrypt the wireless traffic from the device, and decrypt the wireless traffic from the WAP.

- Once it completes, note that Aircrack-ng figured out the secret key: `D0:E5:9E:B9:04`.

![aircrack2](Images/aircrack2.png)

Explain that we will use this key to decrypt the wireless traffic captured in Wireshark.

- Open up the same packet capture in Wireshark.

- Note that only the encrypted `802.11` packets are in this capture.

- Next, explain that the Wireless Toolbar should be enabled. Navigate to `View` and check  `Wireless Toolbar`.

![aircrack3](Images/aircrack3.png)

- In the Wireless Toolbar, select `802.11` preferences. A page will appear with `IEEE 802.11` pre-selected.

- On this page, confirm that `Enable Decryption` is checked and select `Edit` next to `Decryption keys`.

![aircrack5](Images/aircrack5.png)

 - On this page, click on the `+` icon to add the key.

 - Select `WEP` and copy and paste the key, `D0:E5:9E:B9:04`.
   - **Note:** The key may not be accepted if you _type_ it into Wireshark.
 - Select `OK` on both pages to save your changes.

![aircrack6](Images/aircrack6.png)

- Return to the Wireshark capture page, and scroll through the packets.

- Point out that there are now more than just the `802.11` protocol packets.  

- Explain that Wireshark was able to decrypt the encrypted wireless traffic and it found ARP and TCP packets.

![aircrack7](Images/aircrack7.png)

Explain that this walkthrough demonstrates how to decrypt wireless traffic that uses the weak WEP wireless protocol.

- While WPA and WPA aren't completely protected from similar attacks, they are much more difficult to decrypt and provide better protections.

Explain that cybercriminals have several methods of finding these weak wireless security routers:

  - **Wardriving** is the act of physically driving around an area with a computer and a wireless antenna to find wireless LANs that may be vulnerable.

  - Once a cybercriminal determines potential vulnerable targets, they mark the locations on the street with symbols in chalk so they can attempt to exploit these access points at a later time. This is called **warchalking**.

  - Some cybercriminals have evolved to use drones to find vulnerable access points, a process known as **warflying**.

Explain that while all the above methods are attacks that use a legitimate wireless access point, cybercriminals can also create a fake wireless access point, called an **evil twin**.

  - With an evil twin, an attacker can make a fake SSID to trick unsuspecting users into connecting to the attacker's wireless access point.

    - For example, an attacker can set up a fake WAP with the SSID `Starbucks_FreeWifi` in a Starbucks coffee shop. Once the user is connected, the attacker can capture and view their traffic.

Explain that in the last activity, students used Aircrack-ng and Wireshark to decrypt wireless traffic from the WEP wireless access point found in the previous activity.

Take a moment to address remaining questions before proceeding to the wireless attacks activity.

### 14. Student Do: Wireless Attacks Activity (0:20)

Explain the following to students:

- In this activity, you will continue to play the role of a security analyst at Acme Corp.

- There is concern about one of the wireless routers detected in the Kansas City office, as it was found to have weak encryption.

- You are concerned that a hacker could decrypt the traffic from this wireless router.

- Your task is to see if you can obtain the wireless secret key and decrypt the wireless traffic to determine any associated security risks.


Send students the following files:

- [Activity File: Wireless Attacks](Activities/14_Wireless_Attacks/unsolved/readme.md)

- [Resources/kansascityWEP.pcap](Resources/kansascityWEP.pcap)


### 15. Instructor Review: Wireless Attacks Activity (0:07)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

In this exercise, students analyzed a packet capture from the wireless router that was using a weaker encryption. They were tasked with finding the key for the wireless router, and using the key to decrypt the wireless traffic.

Completing this activity required the following steps:

- Open the kansascityWEP.pcapng file in wireshark.

- Using Aircrack-ng against the packet capture to determine the secret key.

- Using the key to decrypt the traffic.

- Analyzing the decrypted traffic and determining any associated security risks.

Send students the following file:

- [Solution Guide: Wireless Attacks](Activities/14_Wireless_Attacks/solved/readme.md)

#### Walkthrough

- Open the kansascityWEP.pcapng file in wireshark.

- Use Aircrack-ng against the packet capture to determine the secret key.

  From the command line, go to the location where the packet capture was saved.

  - Run `aircrack-ng kansascityWEP.pcap`

  - The results should show that the secret key is:

    `KEY FOUND! [ 1F:1F:1F:1F:1F ] `


- Use the key to decrypt the traffic.

  - Open the file `kansascityWEP.pcap` in Wireshark.

  - Make sure the Wireless Toolbar is added by going to `View`, and checking `Wireless Toolbar`.

  - Scroll up and down through the traffic. There should only be a wireless protocol of `802.11` in the Protocol column.

  - Click on `802.11 preferences` in the toolbar.

  - Select `Enable Decryption`.

  - Click on the `Edit` option next to decryption keys.

  - Click on the `+` icon to add the key.
  - Select `WEP` and paste in the key of `1F:1F:1F:1F:1F`.
  - Select `OK`.

- Analyze the decrypted traffic and determine the associated security risks.
  - Return to the Wireshark packet capture.

  - Note that there are now new decrypted packets identified by a light pink color.

  - The protocols for the decrypted traffic are ARP and IGMP.

  - The security risk is that a hacker can use the decrypted information from ARP to determine internal private server IP addresses.

-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
