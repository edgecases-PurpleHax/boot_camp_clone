# Module 9 Challenge

## Module 9 Challenge <assignment>

### In a Network Far, Far Away!

- You are a Network Jedi working for the Resistance.

- The Sith Empire recently carried out a DoS attack, taking out the Resistance's core network infrastructure, including its DNS servers.

- This attack destroyed the Resistance's ability to communicate via email and retrieve other crucial information about one another's operations. The Empire has taken advantage of this compromised availability by ambushing numerous Resistance outposts, all vulnerable because the Resistance can no longer call for help.
 
- Your task is a crucial one: restore the Resistance's core DNS infrastructure and verify that traffic is routing as expected.

**Good luck, and may the Force be with you!**

### Files Required 

-  [Dark Side PCAP](https://drive.google.com/file/d/1lleKbGhkSZA-9q2WsHuW6dxMM5KrrRyS/view?usp=sharing)
-  [Galaxy Network Map](https://drive.google.com/file/d/1pzkrxYfNPwBwfG-tZYi5wydGnyq8xVbt/view?usp=sharing)


### Your Objectives 

- Review each network issue in the missions below.

- Document each DNS record type found.

- Make note of the DNS records that explain the reasons for the existing network issue.

- Provide recommended fixes to save the Galaxy!

- Fill out the [Module 9 Challenge Submission File](https://docs.google.com/document/d/1qEME13f1oVlfxAeIVUT9UA6NFtDcm_SQAJRnEDU74b8/edit?usp=sharing) with this information as you work (remember to make a copy of this document before filling it out), and submit this document as your final deliverable.

### Topics Covered in This Assignment

- DNS
- `nslookup`
- DNS record types
  - `A`, `PTR`, `MX`, `NS`, `SOA`, `SRV`, `TXT`
- Wireless
  - `WEP`, `WPA`
- Aircrack-ng
- Wireshark Wireless analysis and decryption


### Mission 1  

**Issue**: With the DoS attack, the Empire took down the Resistance's DNS and primary email servers. 

- The Resistance's network team was able to build and deploy a new DNS server and mail server.

- The new primary mail server is `asltx.l.google.com`, and the secondary should be `asltx.2.google.com`.

- The Resistance (starwars.com) is able to send emails but unable to receive any.

**Your Mission**:

1. Determine and document the mail servers for starwars.com using `nslookup`.

2. Explain why the Resistance isn't receiving any emails.

3. Document your suggested DNS corrections.

### Mission 2

**Issue**: Now that you've addressed the mail servers, all emails are coming through. However, users are still reporting that they haven't received mail from the `theforce.net` alert bulletins.

- Many of the alert bulletins are being blocked or going into spam folders.

- This is probably due to the fact that `theforce.net` changed the IP address of their mail server to `45.23.176.21` while your network was down.

- These alerts are critical for identifying pending attacks from the Empire.

**Your Mission**:

1. Determine and document the `SPF` for `theforce.net` using `nslookup`.

2. Explain why the Force's emails are going to spam.

3. Document your suggested DNS corrections.
  
### Mission 3

**Issue**: You have successfully resolved all email issues and the Resistance can now receive alert bulletins. However, the Resistance is unable to easily read the details of alert bulletins online. 
  
  - They are supposed to be automatically redirected from their subpage `resistance.theforce.net` to `theforce.net`.

**Your Mission**:
  
1. Document how a CNAME should look by viewing the CNAME of `www.theforce.net` using `nslookup`.
  
2. Explain why the subpage `resistance.theforce.net` isn't redirecting to `theforce.net`.
  
  - Document your suggested DNS corrections.
  
  
### Mission 4

**Issue**: During the attack, it was determined that the Empire also took down the primary DNS server of `princessleia.site`. 

- Fortunately, the DNS server for `princessleia.site` is backed up and functioning. 

- However, the Resistance was unable to access this important site during the attacks, and now they need you to prevent this from happening again.

- The Resistance's networking team provided you with a backup DNS server of: `ns2.galaxybackup.com`.

**Your Mission**:

1. Confirm the DNS records for `princessleia.site`.

2. Document how you would fix the DNS record to prevent this issue from occurring again.
    
  
### Mission 5

**Issue**: The network traffic from the planet of Batuu to the planet of  Jedha is very slow.  

- You have been provided a network map with a list of connected planets between Batuu and Jedha.

- It has been determined that the slowness is due to the Empire attacking Planet N.

**Your Mission**: 

1. View the [Galaxy Network Map](https://drive.google.com/file/d/1pzkrxYfNPwBwfG-tZYi5wydGnyq8xVbt/view?usp=sharing), and determine the `OSPF` shortest path from Batuu to Jedha.

     - Confirm that your path doesn't include `Planet N` in its route.

     - Document the shortest path so that the Resistance can use it to develop a static route to improve the traffic.
  
### Mission 6

**Issue**: The Resistance is determined to seek revenge for the damage the Empire has caused with all of its attacks. 

- You are tasked with gathering secret information from the Dark Side network servers that can be used to launch network attacks against the Empire.

- You have captured some of the Dark Side's encrypted wireless internet traffic in the following PCAP: [Dark Side PCAP](https://drive.google.com/file/d/1lleKbGhkSZA-9q2WsHuW6dxMM5KrrRyS/view?usp=sharing).

**Your Mission**:

1. Figure out the Dark Side's secret wireless key by using Aircrack-ng.

   > **Hint:** This is a more challenging encrypted wireless traffic using WPA.

   - In order to decrypt, you will need to use a wordlist (`-w`) such as `rockyou.txt`.

2. Use the Dark Side's key to decrypt the wireless traffic in Wireshark.

   > **Hint:** The format for they key to decrypt wireless is `<Wireless_key>:<SSID>`.

   - Once you have decrypted the traffic, figure out the following Dark Side information:

       - Host IP addresses and MAC addresses (examine the decrypted `ARP` traffic).

   - Document these IP and MAC addresses, as the Resistance will use these IP addresses to launch a retaliatory attack.


### Mission 7 

**Issue**: As a thank you for saving the Galaxy, the Resistance wants to send you a secret message!

**Your Mission**:

1. View the DNS record from Mission 4. The Resistance provided you with a hidden message in the `TXT` record. Follow the steps included in the message.

     > **Note:** A backup option is provided in the TXT record (as a website) in case the main telnet site is unavailable
  
     - Take a screenshot of the results.
    
### Submission Guidelines

Congratulations, you have completed your mission and saved the Galaxy!

* After you complete your Submission File, title it with the following format: < YOUR NAME >< In a Network Far, Far Away! >
* Make sure to set the file permissions so that anyone can view and comment on your document.
* Submit the URL of your Submission File Google Doc through Canvas.
