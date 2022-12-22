## Networks Fundamentals II Homework Solution Guide: *In a Network Far, Far Away!*

### Mission 1

**Issue**: Due to the DoS attack, the Empire took down the Resistance's DNS and primary email servers. 
- The Resistance's network team was able to build and deploy a new DNS server and mail server.
- The new primary mail server is `asltx.l.google.com` and the secondary should be `asltx.2.google.com`.
- The Resistance (starwars.com) is able to send emails but unable to receive any.

Your mission:
- Determine and document the mail servers for starwars.com using NSLOOKUP.
- Explain why the Resistance isn't receiving any emails.
- Document what a corrected DNS record should be.

  
 #### Solution
 
- To view the Mailservers for Starwars run: `nslookup -type=mx starwars.com`:

      starwars.com    MX preference = 10, mail exchanger = aspmx2.googlemail.com
      starwars.com    MX preference = 1, mail exchanger = aspmx.l.google.com
      starwars.com    MX preference = 10, mail exchanger = aspmx3.googlemail.com
      starwars.com    MX preference = 5, mail exchanger = alt1.aspx.l.google.com
      starwars.com    MX preference = 5, mail exchanger = alt2.aspmx.l.google.com
            
- The Resistance isn't receiving any email, because their new mailservers are not setup. A corrected Mailserver record should look like:
 
      starwars.com    MX preference = 1, mail exchanger = asltx.l.google.com
      starwars.com    MX preference = 5, mail exchanger = asltx.2.google.com
 
 

### Mission 2

**Issue**: Now that you've addressed the mail servers, all emails are coming through. However, users are still reporting that they haven't received mail from the `theforce.net` alert bulletins.
- Many of the alert bulletins are being blocked or going into spam folders.
- This is probably due to the fact that `theforce.net` changed the IP address of their mail server to `45.23.176.21` while your network was down.
- These alerts are critical to identify pending attacks from the Empire.

Your mission:
- Determine and document the `SPF` for `theforce.net` using NSLOOKUP.
- Explain why the Force's emails are going to spam.
- Document what a corrected DNS record should be.
  
#### Solution
 
 - To view the SPF record, run: `nslookup -type=txt theforce.net`
 - The SPF record is: `v=spf1 a mx mx:smtp.secureserver.net include:aspmx.googlemail.com ip4:104.156.250.80 ip4:45.63.15.159 ip4:45.63.4.215"`
 - The emails are going to spam because the new mailserver IP is not in the SPF record.
 - The new SPF record needs to include the new IP such as: `v=spf1 a mx mx:smtp.secureserver.net include:aspmx.googlemail.com ip4:45.23.176.21 ip4:104.156.250.80 ip4:45.63.15.159 ip4:45.63.4.215"`
 
   
  
### Mission 3

**Issue**: You have successfully resolved all email issues and the resistance can now receive alert bulletins. However, the Resistance is unable to easily read the details of alert bulletins online. 
  - They are supposed to be automatically redirected from their sub page of `resistance.theforce.net`  to `theforce.net`.

Your mission:
- Document how a CNAME should look by viewing the CNAME of `www.theforce.net` using NSLOOKUP.  
- Explain why the sub page of `resistance.theforce.net` isn't redirecting to `www.theforce.net`. 
- Document what a corrected DNS record should be.
  
 #### Solution  
 
 - To view the CNAME, run the following NSLOOKUP Query: `nslookup -type=all www.theforce.net`
 - The CNAME records:` www.theforce.net        canonical name = theforce.net`
 - The subpage of resistance.theforce.net isn't redirecting because there isn't a CNAME for it.
 - A CNAME record should be added such as: `resistance.theforce.net         CNAME   theforce.net`
     
  
  
### Mission 4

**Issue**: During the attack, it was determined that the Empire also took down the primary DNS server of `princessleia.site`. 

- Fortunately, the DNS server for `princessleia.site` is backed up and functioning. 
- However, the Resistance was unable to access this important site during the attacks and now they need you to prevent this from happening again.
- The Resistance's networking team provided you with a backup DNS server of: `ns2.galaxybackup.com`.

Your mission:
- Confirm the DNS records for `princessleia.site`.
- Document how you would fix the DNS record to prevent this issue from happening again.
    
  
#### Solution  
 
To view the current NS records for princessleia.site run `nslookup -type=ns princessleia.site`:
            
      princessleia.site       nameserver = ns26.domaincontrol.com
      princessleia.site       nameserver = ns25.domaincontrol.com                       
             
 To fix this, you would add a secondary server such as   

      princessleia.site       nameserver = ns26.domaincontrol.com
      princessleia.site       nameserver = ns25.domaincontrol.com
      princessleia.site       nameserver = ns2.galaxybackup.com
 
  
### Mission 5

**Issue**: The network traffic from the planet of `Batuu` to the planet of  `Jedha` is very slow.  
- You have been provided a network map with a list of planets connected between `Batuu` and `Jedha`.
- It has been determined that the slowness is due to the Empire attacking `Planet N`.

Your Mission: 

- View the [Galaxy Network Map](../resources/Galaxy_Network_map.png) and determine the `OSPF` shortest path from `Batuu` to `Jedha`.
- Confirm your path doesn't include `Planet N` in its route.
- Document this shortest path so it can be used by the Resistance to develop a static route to improve the traffic.

#### Solution

- The OSPF path from the planet of `Batuu` to the planet of  `Jedha`, that doesn't include Planet N is:

  `Batuu > D > C > E > F > J > I > L  > Q > T > V > Jedha` 

### Mission 6

**Issue:** Due to all these attacks, the Resistance is determined to seek revenge for the damage the Empire has caused. 
- You are tasked with gathering secret information from the Dark Side network servers that can be used to launch network attacks against the Empire.
- You have captured some of the Dark Side's encrypted wireless internet traffic in the following pcap: [Darkside.pcap](resources/Darkside.pcap).

Your Mission:

- Figure out the Dark Side's secret wireless key by using Aircrack-ng.
  - Hint: This is a more challenging encrypted wireless traffic using WPA.
  - In order to decrypt, you will need to use a wordlist (-w) such as `rockyou.txt`.
- Use the Dark Side's key to decrypt the wireless traffic in Wireshark.
  - Hint: The format for they key to decrypt wireless is `<Wireless_key>:<SSID>`.
- Once you have decrypted the traffic, figure out the following Dark Side information:
  - Host IP Addresses and MAC Addresses by looking at the decrypted `ARP` traffic.
  - Document these IP and MAC Addresses, as the resistance will use these IP addresses to launch a retaliatory attack.
 MAC Addresses, as the resistance will use these IP addresses to launch a retaliatory Attack
    
#### Solution  
  
- To Crack this wireless traffic, first save the file in Kali Linux in the directory: `usr/share/wordlists`.
- Change to the `usr/share/wordlists` directory.
- Make sure the `rockyou.txt ` is unzipped. If it is not, run `gunzip rockyou.txt.gzip`.

- Run the following Aircrack-ng command:
  - `aircrack-ng -w rockyou.txt Darkside.pcap`

- This should crack the wireless key revealing: `dictionary`
- Open up Darkside.pcap in Wireshark. To decrypt the pcap, do the following:
  - Select `View` from toolbar, make sure the `Wireless Toolbar` is checked.
  - Return to the main Wireshark screen, select `802.11 preferences`.
  - When this screen pops up, make sure `Enable Decryption` is selected.
  - Select `Edit` below this option.
  - Add in the following decryption:
    - Keytype: wpa-pwd
    - Key:  dictionary:linksys
      - Note: this is the password and the SSID.
- Return back to the Wireshark Packet Capture.
- There are a few ways to view IP Addresses. One is to filter by ARP and view the ARP response in packet 315.
  - The packet details show several of the Private IPs and MAC Addresses in the network.
      ```
      Sender MAC address: Cisco-Li_e3:e4:01 (00:0f:66:e3:e4:01)
      Sender IP address: 172.16.0.1
      Target MAC address: IntelCor_55:98:ef (00:13:ce:55:98:ef)
      Target IP address: 172.16.0.101
      ```          
  - A DNS Filter will also show several IP addresses in the 10.x network.
  

### Mission 7 

As a thank you for saving the galaxy, the Resistance wants to send you a secret message!

Your Mission:
  - View the DNS record from Mission #4.
  - The Resistance provided you with a hidden message in the `TXT` record, with several steps to follow.
  - Follow the steps from the `TXT` record.
    - Note: A backup option is provided in the TXT record (as a website) in case the main telnet site is unavailable
  - Take a screen shot of the results.
  
#### Solution  
  
 -  To view the TXT record, run `nslookup -type=txt princessleia.site`.
 -  The TXT record shows: `run the following in a command line: telnet towel.blinkenlights.nl or as a backup access in a browser: www.asciimation.co.nz`
 -  Running this will play a Star Wars video.
    
---
    
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. 
    
