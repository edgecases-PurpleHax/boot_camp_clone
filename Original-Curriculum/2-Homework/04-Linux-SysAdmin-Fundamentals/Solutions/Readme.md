## Week 4 Homework Solution: Linux Systems Administration

### Step 1: Ensure Permissions on Sensitive Files

Start by inspecting the file permissions on each of the files listed, and determine if they are set correctly or if you need to change the permissions.

-Note:  These should already be set, as we did this in a previous activity.

1. Set permissions `600` on `/etc/shadow` (`rw` for root only):

    - **Solution**: `ls -l /etc/shadow` shows the permissions are set to `640`.
  
   - **Solution**: `sudo chmod 600 /etc/shadow`

2. Set permissions `600` on `/etc/gshadow` (`rw` for root only):

   - **Solution**: `ls -l /etc/gshadow` shows the permissions set to `640`.
  
    - **Solution**: `sudo chmod 600 /etc/gshadow`.

3. Set permissions `644` on `/etc/group` (`rw` for root and `r` for anyone else):

    - **Solution**: `ls -l /etc/group` shows that the permissions are already set to `644`.

4. Set permissions `644` on `/etc/passwd` (`rw` for root and `r` for anyone else):

   - **Solution**: `ls -l /etc/passwd` shows that the permissions are already set to `644`.

### Step 2: Create User Accounts
1. Add user accounts for `sam`, `joe`, `amy`, `sara`, and `admin`.

    - **Solution**: `sudo useradd sam`

    - **Solution**: `sudo useradd joe`

    - **Solution**: `sudo useradd amy`

    - **Solution**: `sudo useradd sara`

    - **Solution**: `sudo useradd admin`


2. Ensure that only the `admin` has general `sudo` access:

    - **Solution**: Add the `admin` only to the `sudo` group and no other users:
      - `sudo usermod -G sudo admin`

### Step 3: Create User Group and Collaborative Folder

1. Add an `engineers` group to the system:

    - **Solution**: `sudo addgroup engineers`

2. Add users `sam`, `joe`, `amy`, and `sara` to the managed group: 
 
    - Using `-G` in the command below instead of `-aG` will remove the user from all other groups besides the one specified.
    - **Solution**: `sudo usermod -aG engineers sam`
    - **Solution**: `sudo usermod -aG engineers joe`
    - **Solution**: `sudo usermod -aG engineers amy`
    - **Solution**: `sudo usermod -aG engineers sara`

3. Create a shared folder for this group at `/home/engineers`:

    - **Solution**: `sudo mkdir /home/engineers`

4. Change ownership on the new engineers' shared folder to the `engineers` group:

    - There are two common commands that can be used to accomplish this goal.
    - **Solution**: `sudo chown :engineers /home/engineers`
    - **Solution**: `sudo chgrp engineers /home/engineers`


### Step 4: Lynis Auditing

1. Install and run Lynis:

    - **Solution**: `sudo apt install lynis`
2. See documentation and instructions:

      - **Solution**: `sudo lynis --help`

3. Run an audit: 
    - **Solution**: `sudo lynis audit system` to run an audit

4. Provide a report from Lynis output on what more could be done to harden the system.

    - **Solution**: Use the Suggestions from the Lynis output to create a report. Sample output below:

```bash
  Suggestions (33):
  ----------------------------
  * Install libpam-usb to enable multi-factor authentication for PAM sessions [CUST-0285]
      https://your-domain.example.org/controls/CUST-0285/

  * Install needrestart, alternatively to debian-goodies, so that you can run needrestart after upgrades to determine which daemons are using old versions of libraries and need restarting. [CUST-0831]
      https://your-domain.example.org/controls/CUST-0831/

  * Copy /etc/fail2ban/jail.conf to jail.local to prevent it being changed by updates. [DEB-0880]
      https://cisofy.com/controls/DEB-0880/

  * Set a password on GRUB bootloader to prevent altering boot configuration (e.g. boot in single user mode without password) [BOOT-5122]
      https://cisofy.com/controls/BOOT-5122/

  * Check the output of ps for dead or zombie processes [PROC-3612]
      https://cisofy.com/controls/PROC-3612/

  * Install a PAM module for password strength testing like pam_cracklib or pam_passwdqc [AUTH-9262]
      https://cisofy.com/controls/AUTH-9262/

```

#### Bonus 

1. Install and run chkrootkit to verify the system does not have a root kit installed: 

    - **Solution:** `sudo apt install chkrootkit`

2. See documentation and instructions:
    - **Solution:** `sudo chkrootkit --help`

3. Run expert mode:
    - **Solution:** `sudo chkrootkit -x`

4. Provide a report from the chkrootkit output on what can be done to harden the system.
  
    * End of sample output:

```bash
! root          511 tty7   /usr/bin/qubes-gui
! root          583 tty7   /usr/bin/qubes-gui-runuser user /bin/sh -l -c exec /usr/bin/xinit /etc/X11/Xsession qubes-session -- /usr/lib/xorg/Xorg :0 -nolisten tcp vt07 -wr -config xorg-qubes.conf > ~/.xsession-errors 2>&1
! root         6738 pts/0  /bin/sh /usr/sbin/chkrootkit -x
! root         7165 pts/0  ./chkutmp
! root         7167 pts/0  ps axk tty,ruser,args -o tty,pid,ruser,args
! root         7166 pts/0  sh -c ps axk "tty,ruser,args" -o "tty,pid,ruser,args"
! root         6736 pts/0  sudo chkrootkit -x
! user         4944 pts/0  bash
chkutmp: nothing deleted
not infected
```

---
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. 
