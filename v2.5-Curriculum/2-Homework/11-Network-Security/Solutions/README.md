## Network Security Homework

----

## Part 1: Review Questions

#### Security Control Types

With the understanding that Defense in Depth can be broken down into three different security control types, answer the following questions:

1. Walls, bollards, fences, guard dogs, cameras, and lighting are what type of security control?

   > Answer: Physical Security Control

2. Security awareness programs, BYOD policies, and ethical hiring practices are what type of security control?

   > Answer: Administrative Security Controls

3. Encryption, biometric fingerprint readers, firewalls, endpoint security, and intrusion detection systems are what type of security control?

   > Answer: Technical Security Controls.

#### Intrusion Detection and Attack indicators

1. What's the difference between an IDS and an IPS?

   > Answer: An IDS requires an administrator to react to an alert by examining what has been flagged. An IPS can automatically take action by blocking and logging the threat.

2. What's the difference between an Indicator of Attack and an Indicator of Compromise?

   > Answer: An IOA occurs in real time. It's a proactive approach to intrusion attempts. An IOC occurred at some point in the past. It's a reactive approach to intrusions.

#### The Cyber Kill Chain

Name each of the seven stages for the Cyber Kill chain and provide a brief example of each.

1. **Reconnaissance:** Information gathering stage against targeted victim. Information sources include, DNS registration websites, LinkedIn, Facebook, Twitter, etc.

2. **Weaponization:** After collecting information regarding infrastructure and employees, adversaries have the capability to establish attack vectors and technical profiles of targets such as: logical and administrative security controls, infil/exfil points, etc.

3. **Delivery:** The delivering of the weaponized payload, via email, website, USB, etc.

4. **Exploitation:** Actively compromise adversary’s applications and servers while averting the physical, logical, and administrative controls. Exploiting employees through social engineering. This stage prepares for escalation during the installation phase.

5. **Installation:** a.k.a, the persistence preparation phase. Activities include, malicious software installation, backdoor implants, persistence mechanism (cron jobs), AutoRun keys, services, log file deletion, and timestamp manipulation.

6. **Command & Control (C2):** A command channel, most typically Internet Relay Chat (IRC), used for remote control of a victim's computer.

7. **Actions on Objectives:** After achieving the equivalent of "Hands on Keyboard" access to a victim's systems, adversaries are now able to act their objectives.


#### Snort Rule Analysis

Use the Snort rule to answer the following questions:

Snort Rule #1

```bash
alert tcp $EXTERNAL_NET any -> $HOME_NET 5800:5820 (msg:"ET SCAN Potential VNC Scan 5800-5820"; flags:S,12; threshold: type both, track by_src, count 5, seconds 60; reference:url,doc.emergingthreats.net/2002910; classtype:attempted-recon; sid:2002910; rev:5; metadata:created_at 2010_07_30, updated_at 2010_07_30;)
```

1. Break down the Sort Rule header and explain what is happening.

   > Answer: Generates an alert, for tcp traffic inbound from anywhere outside the LAN on any port, to port 5800 through 5820 on the LAN.

2. What stage of the Cyber Kill Chain does this alert violate?

   > Answer: Reconnaissance

3. What kind of attack is indicated?

   > Answer: Emerging Threat for Network SCAN Potential VNC Scan of port 5800-5820"

Snort Rule #2

```bash
alert tcp $EXTERNAL_NET $HTTP_PORTS -> $HOME_NET any (msg:"ET POLICY PE EXE or DLL Windows file download HTTP"; flow:established,to_client; flowbits:isnotset,ET.http.binary; flowbits:isnotset,ET.INFO.WindowsUpdate; file_data; content:"MZ"; within:2; byte_jump:4,58,relative,little; content:"PE|00 00|"; distance:-64; within:4; flowbits:set,ET.http.binary; metadata: former_category POLICY; reference:url,doc.emergingthreats.net/bin/view/Main/2018959; classtype:policy-violation; sid:2018959; rev:4; metadata:created_at 2014_08_19, updated_at 2017_02_01;)
```

1. Break down the Sort Rule header and explain what is happening.

   > Answer: Generate an alert, for tcp traffic inbound from anywhere outside the LAN on port 80, to any port on the LAN.

2. What stage of the Cyber Kill Chain does the alerted activity violate?

   > Answer: Stage 3 Delivery

3. What kind of attack is this rule monitoring?

   > Answer: Emerging Threat for Policy Violation "EXE or DLL Windows file download"

Snort Rule #3

- Your turn! Write a Snort rule that alerts when traffic is detected inbound on port 4444 to the local network on any port. Be sure to include the `msg` in the Rule Option.

   > Answer: alert tcp $EXTERNAL_NET 4444 -> $HOME_NET any (msg: "ET POLICY TROJAN Possible W32.Blaster.Worm)


### Part 2: "Drop Zone" Lab

#### Log into the Azure `firewalld` machine

Log in using the following credentials:

- Username: `sysadmin`
- Password: `cybersecurity`
    
#### Uninstall `ufw`

Before you get started, it's generally best practice to ensure that you do not have any instances of `ufw` running in order to avoid conflicts with your `firewalld` service. Additionally, this ensures that `firewalld` will be your default firewall.

- Run the command that removes any running instance of `ufw`.

    ```bash
    $ sudo apt remove ufw
    ```

#### Enable and start `firewalld`

By default, these service should be running. If not, then run the following commands:

- Run the commands that enable and start `firewalld` upon boots and reboots.

    ```bash
    $ sudo systemctl enable firewalld
    $ sudo systemctl start firewalld
    ```

  Note: This will ensure that `firewalld` remains active after each reboot.
    
#### Confirm that the service is running.

- Run the command that checks whether or not the `firewalld` service is up and running.

    ```bash
    $ sudo firewall-cmd --state
    ```
    
    
#### List all firewall rules currently configured.

Next, lists all currently configured firewall rules. This will give you a good idea of what's currently configured and save you time in the long run by not doing double work.

- Run the command that lists all currently configured firewall rules:

    ```bash
    $ sudo firewall-cmd --list-all
    ```

- Take note of what Zones and settings are configured. You many need to remove unneeded services and settings. 

#### List all supported service types that can be enabled.

- Run the command that lists all currently supported services to see if the service you need is available

    ```bash
    $ sudo firewall-cmd --get-services
    ```

 Note: that we can see that the `Home` and `Drop` Zones are created by default.
    

#### Zone Views

- Run the command that lists all currently configured zones.

    ```bash
    $ sudo firewall-cmd --list-all-zones
    ```

- We can see that the `Public` and `Drop` Zones are created by default. Therefore, we will need to create Zones for `Web`, `Sales`, and `Mail`.

#### Create Zones for `Web`, `Sales` and `Mail`.

- Run the command that creates Web, Sales and Mail zones.

    ```bash
    $ sudo firewall-cmd --permanent --new-zone=web
    $ sudo firewall-cmd --permanent --new-zone=sales
    $ sudo firewall-cmd --permanent --new-zone=mail
    ```
- Reload the firewalld service in order to apply your changes. 
  - Run: `firewall-cmd --reload` or `systemctl restart firewalld` .

#### Set the zones to their designated interfaces:

- Run the command that sets your `eth` interface to your zones.

    ```bash
    $ sudo firewall-cmd --zone=public --change-interface=eth0
    $ sudo firewall-cmd --zone=web --change-interface=eth1
    $ sudo firewall-cmd --zone=sales --change-interface=eth2
    $ sudo firewall-cmd --zone=mail --change-interface=eth3
    ```

#### Add services to the active zones:

- Run the commands that add services to the **public** zone, the **Web** zone, the **sales** zone,and the **mail** zone.

- Public:

    ```bash
    $ sudo firewall-cmd --zone=public --add-service=http
    $ sudo firewall-cmd --zone=public --add-service=https
    $ sudo firewall-cmd --zone=public --add-service=smtp
    $ sudo firewall-cmd --zone=public --add-service=pop3
    ```

- Web: 

    ```bash
    $ sudo firewall-cmd --zone=web --add-service=http
    ```

- Sales

    ```bash
    $ sudo firewall-cmd --zone=sales --add-service=https
    ```

- Mail

    ```bash
    $ sudo firewall-cmd --zone=mail --add-service=pop3
    $ sudo firewall-cmd --zone=mail --add-service=smtp
    ```

- What is the status of `http`, `https`, `smtp` and `pop3`?

#### Add you adversaries to the Drop Zone.

- Run the command that will add all current and any future blacklisted IPs to the Drop Zone.

     ```bash
    $ sudo firewall-cmd --permanent --zone=drop --add-source=10.208.56.23
    $ sudo firewall-cmd --permanent --zone=drop --add-source=135.95.103.76
    $ sudo firewall-cmd --permanent --zone=drop --add-source=76.34.169.118
    ```
    
#### Make rules permanent then reload them:

It's good practice to ensure that your `firewalld` installation remains nailed up and services across reboots. This ensure that the network remains secured after unplanned outages such as, power failures.

- Run the command that reloads the `firewalld` configurations and writes it to memory

    ```bash
    $ sudo firewall-cmd --reload
    ```
 
#### View active Zones

Now we'll want to provide truncated listings of all currently active zones. This a good point to verify your zone settings.

- Run the command that displays all zone services.

    ```bash
    $ sudo firewall-cmd --get-active-zones
    ```
    
- Output should be similar to below:
    
    ```bash
    mail
        interfaces: eth3
        sources: 201.45.105.12
    web
        interfaces: eth1
        sources: 201.45.34.126
    drop
        sources: 10.208.56.23 135.95.103.76 76.34.169.118
    sales
        interfaces: eth2
        sources: 201.45.15.48
    public
        interfaces: ens33 eth0
    ```


#### Block an IP address

- Use a rich-rule that blocks the IP address `138.138.0.3`.

    ```bash
    $ sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="138.138.0.3" reject'
    ```

#### Block Ping/ICMP Requests

You've decided to harden your network against `ping` scans by blocking `icmp ehco` replies.

- Run the command that blocks `pings` and `icmp` requests in your `public` zone.

    ```bash
    $ sudo firewall-cmd --zone=public --add-icmp-block=echo-reply --add-icmp-block=echo-request
    ```

#### Rule Check

Now that you've set up your brand new `firewalld` installation, it's time to verify that all of the settings have taken effect.

- Run the command that lists all  of the rule settings. Do one command at a time for each zone.

    ```bash
    $ sudo firewall-cmd --zone=public --list-all
    $ sudo firewall-cmd --zone=web --list-all
    $ sudo firewall-cmd --zone=sales --list-all
    $ sudo firewall-cmd --zone=mail --list-all
    $ sudo firewall-cmd --permanent --zone=drop --list-all
    ```

- Are all of our rules are in place? If not, then go back and make the necessary modification before checking again.

---


### Part 3: IDS, IPS, DiD and Firewalls

#### IDS vs. IPS Systems

1. Name and define two ways an IDS connects to a network.

   > Answer: **Network TAP (Test Access Port)**: A hardware device that provides access to a network. Network TAPs transmit both send and receive data streams on separate dedicated channels simultaneously, guaranteeing that all data arrives at the monitoring device in real time.

   > **(SPAN/Mirrored Port) SPAN Port (Switched Port Analyzer) also known as Port Mirroring** sends a mirror image of all network data to another physical port, where the packets can be captured and analyzed.

2. Describe how an IPS connects to a network.

   > Answer: Physically connects inline with the flow of data. An IPS is typically placed in between the firewall and network switch.

3. What type of IDS compares patterns of traffic to predefined signatures and is unable to detect Zero-Day attacks?

   > Answer: Signature Based

4. Which type of IDS is beneficial for detecting all suspicious traffic that deviates from the well-known baseline and is excellent at detecting when an attacker probes or sweeps a network?

   > Answer: Anomaly Based

#### Defense in Depth

- For each of the following scenarios, provide the layer of Defense in Depth that applies:

1.  A criminal hacker tailgates an employee through an exterior door into a secured facility, explaining that they forgot their badge at home. 

    > Answer: Physical

2. A zero-day goes undetected by antivirus software.

    > Answer: Application

3. A criminal successfully gains access to HR’s database.

    > Answer: Data

4. A criminal hacker exploits a vulnerability within an operating system.

    > Answer: Host

5. A hacktivist organization successfully performs a DDoS attack, taking down a government website.

    > Answer: Network

6. Data is classified at the wrong classification level.

    > Answer: Policy, Procedures, and Awareness

7. A state sponsored hacker group successfully firewalked an organization to produce a list of active services on an email server.
    
    > Answer: Perimeter

- Name one method of protecting data-at-rest from being readable on hard drive.

    > Answer: Hard Drive Encryption, i.e. Bitlocker

- Name one method to protect data-in-transit.

    > Answer: VPN

- What technology could provide law enforcement with the ability to track and recover a stolen laptop.

   > Answer: GPS enabled devices.

- How could you prevent an attacker from booting a stolen laptop using an external hard drive?

    > Answer: Firmware Password

#### Firewall Architectures and Methodologies

1. Which type of firewall verifies the three-way TCP handshake? TCP handshake checks are designed to ensure that session packets are from legitimate sources.

   > Answer: Circuit-level Proxy or Gateway

2. Which type of firewall considers the connection as a whole? Meaning, instead of looking at only individual packets, these firewalls look at whole streams of packets at one time.

   > Answer: Stateful Packet Filtering Firewall

3. Which type of firewall intercepts all traffic prior to being forwarded to its final destination. In a sense, these firewalls act on behalf of the recipient by ensuring the traffic is safe prior to forwarding it?

   > Answer: Application or Proxy Firewalls

4. Which type of firewall examines data within a packet as it progresses through a network interface by examining source and destination IP address, port number, and packet type- all without opening the packet to inspect its contents?

   > Answer: Packet-Filtering (Stateless) Firewall


5. Which type of firewall filters based solely on source and destination MAC address?

   > Answer: MAC Layer Firewall


----

### Bonus Lab: "Green Eggs & SPAM"

- Refer to the following solution file: [Solutions: "Threat Intellegence Card"](Green_Eggs_Spam_Solution.pdf)

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
