## Lesson 3: Sysadmin Essentials - Monitoring Log Files 
 
### Overview

Today’s class will introduce Linux log management and how to ensure network integrity with proper log management.

In the activities, you will perform log file management tasks and trace a series of historical events to establish whether or not a breach has occurred at a fictional organization. You'll audit logs that provide critical insight into an attacker’s tactics, techniques, and procedures.

In order to investigate suspicious network activity, you will learn how to manage log size, and how to enable, troubleshoot, monitor, and audit logs using `journalctl`, `logrotate`, and `auditd`.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
-  Filter `cron` and `boot` log messages using `journalctl`.

-  Perform log size management using `logrotate`.

-  Install and configure audit rules using `auditd` and write audit logs to disk.

### Today’s Activities

* **Log Filtering**: In this activity, you will use `journalctl` to filter log files. 

* **Log Size Management**: In this activity, you will edit a logrotate configuration file and establish a log rotation scheme based on a specific set of criteria.

* **Event Monitor Log**: In this activity, you will use `audit` to create an event monitoring system that specifically generates alerts when new user accounts are created and/or modified.
