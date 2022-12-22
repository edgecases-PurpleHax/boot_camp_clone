## 7.2 Lesson Plan: PowerShell Scripting

### Class Overview

Today's class will introduce students to the PowerShell command-line scripting language. Students will learn how to use PowerShell to create and execute various scripts for system administration.

### Class Objectives

By the end of today's class, students will be able to:

- Use basic PowerShell cmdlets to navigate Windows and manage directories and files.

- Use PowerShell pipelines to retrieve Windows system event logs.

- Combine various shell-scripting concepts such as cmdlets, parameters, conditions, and importing files with defined data structures.

### Instructor Notes

- **Understanding the Windows Unit Lab**: The following Google Doc contains a list of common Windows issues that occur during this unit. Be sure to distribute this to students and familiarize yourself with the unit's issues so that you'll be able to refer students accordingly:

  - [Understanding the Windows Unit Lab](https://docs.google.com/document/d/18Mz12q82nhxkypVRdIVgIqsLeNG1oCQj_TPsFJ3RgGk/edit)

- **Re-staging the Chocolatey Packages**: After prepping for the day, if you ran the package removal scripts, you can restage your Choco Apps by running the corresponding script for either the activity or demo or both:

  - [stagebloat.ps1](Resources/stagebloat.ps1)

  - If you are not familiar with `Chocolatey` packages and want to know more, please checkout [Why Chocolatey?](https://chocolatey.org/why-chocolatey). 


### Lab Environment

<details><summary>Lab Details</summary>
<br>

In this unit, you will be using the Windows lab environment located in Windows Azure Lab Services. RDP into the **Windows RDP host machine** using the following credentials:

  - Username: `azadmin`
  - Password: `p4ssw0rd*`

Open up the Hyper-V Manager in the Windows RDP Host machine to access the nested virtual machines:

**Windows 10 Machine**
  - Username: `sysadmin`
  - Password: `cybersecurity`

**Windows Server Machine**
  - Username: `sysadmin`
  - Password: `p4ssw0rd*`

For today the instructor lectures, demonstrations, student activities and reviews will all be completed using the **Windows RDP Host Machine**. 

We won't need the nested Hyper-V virtual machines until the third day of this unit. 

#### RDP Client Credential Issues

Sometimes the RDP client (specifically the Windows RDP client) fails to connect to the Azure lab when the same session is re-used. The solution, for some reason, seems to be to manually reloading the RDP file, re-entering the credentials, and attempting to reconnect again.

</details>



### Slideshow 

The slides for today can be viewed on Google Drive here: [7.2 Slides](https://docs.google.com/presentation/d/1uXLj7TmygvPGi7-bPqVO1DvLipiIiXOemZtEcF8alVo/edit#slide=id.g104ed13abc5_0_1206)

- To add slides to the student-facing repository, download the slides as a PDF by navigating to File > "Download as" and choose "PDF document." Then, add the PDF file to your class repository along with other necessary files.

- Note: Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to File > "Make a copy...".

### Time Tracker

The time tracker for today can be viewed on Google Drive here: [7.2 Time Tracker](https://docs.google.com/spreadsheets/d/1rE0rbzsar66bxVsR93SasZeOV7ySERJDrWIloN6jONs/edit#gid=1145703143) 

### Student Guide 

Distribute a student-facing version of the lesson plan: [7.2 Student Guide](StudentGuide.md)  

---

### 01. Welcome and Overview (0:15)

Welcome students to today's class. Review what was covered in the previous class:

- Auditing processes with Task Manager.

- Using CMD to create files.

- Creating a report with `wmic` in the command line.

- Auditing unwanted startup applications and services.

- Enumerating local users, groups, and current local password policies.

- Creating new regular and administrative users and setting the local password policy.

- Scheduling tasks using Task Scheduler.

Review why we used CMD to execute a lot of these tasks:

- The commands are short and simple. System administration tasks are easily repeatable when the commands are shorter.

- Given its simple commands, CMD is much easier to learn than other command lines, like PowerShell, which is a more complex, but also more powerful, scripting language.

While CMD has its benefits, it wasn't designed to allow system administrators to execute complex operations and procedures. PowerShell was designed as a powerful language for executing, automating, and customizing the most demanding and difficult tasks.

#### What is PowerShell?

Today, we will be covering PowerShell, the successor to CMD. Explain the following to class:

- PowerShell is a powerful scripting language that allows people to locally and remotely manage Microsoft products, which come with built-in PowerShell support.

- Because the Microsoft enterprise suite of products is the most widely used by organizations, it is critical that system administrators and security professionals know how to use PowerShell.

- PowerShell can be used to lock down and harden enterprise networks. Since PowerShell's capabilities are powerful enough to manage enterprise Windows systems, they can be leveraged by offensive security professionals and malicious actors.

Emphasize some professional career context as it relates to PowerShell.

**PowerShell in system administration**: PowerShell can be used to manage everything in a Microsoft enterprise environment, including:

  - Windows Server: Microsoft's central server for domain and networking services.
    - This includes managing users and network resources, such as a file-sharing server.

    - Certain types of Windows servers, such as domain controllers, are central components to an enterprise network. They maintain control and permissions of all users within Microsoft-based enterprises. It's vital to keep these servers secure. We'll learn more about domain controllers next class. 

    - A compromised domain controller is a worst-case scenario for most organizations.

  - Windows 10: Microsoft's personal and professional computer operating system. Windows 10 is the most commonly used operating system by individuals and within large enterprise environments. It comes in various editions, such as Pro or Enterprise, each adding some functionality, such as access to Hyper-V. 
    - Note that because Windows is the most widely used operating system, it is also the one attackers most often try to find vulnerabilities for.

    - Windows 7 is officially unsupported by Microsoft. This means that if a vulnerability is found for Windows 7, Microsoft may not release a patch for those systems to automatically retrieve and update.

  - Office365: Microsoft's line of subscription office services.
    - You've probably used one of these products, such as Microsoft Word or Excel.

  - Azure: Microsoft's cloud services.
    - Azure provides a wide range of cloud services such as virtual private clouds or cloud-based virtual machines, like the one you're using right now.

**PowerShell in cybersecurity**: For any organization using Windows-based environments, it's important for cybersecurity professionals to know some PowerShell.

  - Defensive security: PowerShell can be used to manage and audit logs. There are many commands for interacting with Windows Event logs. We will look at these later.

    - PowerShell can also be used to harden the security on Windows hosts and servers. There are many modules and scripts that extend PowerShell's powerful functionality to enforce cybersecurity policy.

  - Offensive security: PowerShell is often used as a "living off the land" tool, meaning a tool that exists on the target's computer that can be leveraged by attackers.

    - Once a system is breached, PowerShell is often used to retrieve a wide range of information within a network, such as user and server names. It can also be used to access and maintain access on other networked machines, if they are not properly secured.

#### Comparing PowerShell and CMD

:warning: **Reminder** that this entire day is done completed with the **Windows RDP Host Machine**.

Explain that while CMD allows the user to interact with Windows, its functionality is limited. 

- CMD's output is only available in simple text format. Our only option for unsupported file formats is to edit the output with meticulous character replacing. It's similar to using Wite-Out to edit a printed document over and over.

- CMD's command flags can be ambiguous and confusing. Each tool has its own flags. Let's look at two commands that use the `/s` and `/d` flags:

  - `shutdown /s` shuts down a computer.

  - `freekdisk /s` specifies the name of an IP or remote computer to check disk space.

  - `shutdown /d` specifies a reason for shutdown.

  - `freedisk /d` specifies which disk drive to check.

Explain that PowerShell remedies this inconsistency with clearly defined parameters for each command. This makes PowerShell more predictable, easier to write, and easier to read.

Type the following examples and ask if students can guess what each will do:

- `Stop-Computer -Confirm`

  - This command will ask you to confirm shutting down the computer. However, running tasks may prevent the shutdown from occurring.

- `Stop-Computer -Force`

  - This command will immediately shut down the computer regardless of what is running. This will ignore the usual tasks that can prevent a graceful shutdown, such as large file transfers and 3D applications.

#### PowerShell Piping for CMD's Unsupported Operations

Another issue with CMD is that it doesn't easily support certain operations.

In the next example, we'll run a complex CMD batch file and compare it to a simple PowerShell alternative.

If we want to find the file sizes of subdirectories in `C:\Windows\System`, we need a complex CMD batch file.

- Open CMD and put the two windows next to each other.

- In CMD run `type C:\Windows\filesizes.bat` to show its contents.

- Your output should be:

  ```batch
  @echo off
  set size=0
  for /r %%x in (System\*) do set /a size+=%%~zx
  echo %size% Bytes
  ```

- Explain that the batch file will need to be in the `C:\Windows` directory when the command is run.

- In the CMD window, navigate to the `C:\Windows` directory with `cd C:\Windows` (Note: if you don't do this, the batch file won't execute properly)

- Run `.\filesizes.bat` and point out the results (your results may vary). 

  - **Note**: This may take a while. Feel free to continue with the PowerShell version of this example.

  ```batch
  C:\Windows>.\filesizes.bat
  30795 Bytes
  ```

Tell students that PowerShell can do this same task using a simple pipe (`|`). Remind students that piping sends the output of one command as the input for another.

- In PowerShell, type `dir C:\Windows\System -Recurse`. Don't press Enter yet.

  - Explain that we can run `dir C:\Windows\System -Recurse` to grab the contents of all current directory and subdirectories, much like `ls -R` grabs the current directory and subdirectory contents in Linux.

  - Then, we can pipe that output to a command that will measure the files for us.

- Type the rest of the command: `dir C:\Windows\System -Recurse | Measure-Object -Sum Length`

  - The `Measure-Object` command receives all the previous inputs and returns the sum of all the file sizes. It does this more accurately than CMD.

- Run the command to show the results. Optionally, show the contents of the subdirectory in `System` (there should be a subdirectory, `Speech`, with files whose sizes add up to what's shown below).

Your results should be similar to:

```console
Count    : 3
Average  :
Sum      : 31039
Maximum  :
Minimum  :
Property : length
```

#### Differences Between CMD and PowerShell

Review the following: 

- The CMD batch script required a default file size be set to 0.
- It took a long time to find the individual file sizes within the subdirectory.
- It then read each of those text strings and added them to the original file size. 

This script is inefficient and challenging for others to read. 

The PowerShell pipe knew that file sizes were a type of property that a directory or file can have. 
- `dir` grabs all of the directories and files recursively. 
- Then, the `Measure-Object` is used to only retrieve the file sizes of the files and directories.  
- Then, we simply used an argument, `-Sum Length`, to total the file sizes.

In PowerShell, things that have defined properties, such as files having file sizes, are known as **objects**.

#### PowerShell and Objects Demo

**Note**: Encourage students to follow along. Be aware that students  may need extra time to catch up.

Note that objects are things with properties or attributes.

- PowerShell innately understands and interacts with everything as an object with attributes or properties.

Let's look at the following example:

- Run `ls C:\Windows`

- Explain that each file and directory is being processed by PowerShell as an object, each with its own properties, such as file size or file name.

  - For example: The file's name is a property of the file. We can define it as: `file.name`.

Explain to students that now we'll use a pipe to retrieve only the objects whose `name` property has the word "system" in it.

- Type: `ls C:\Windows | Where-Object {$_.name -like "*system*"}`. (Tab completion can be faster than typing the command.)

  - In this example, PowerShell will return the contents of a directory as objects.
  - It will look through their `.name` properties for the word "system."

  - `$_` means previous object. In this case, the previous objects are all of the files and directories under `C:\Windows`. 


- In summary, we are passing the objects of `ls C:\Windows` to the `Where-Object` command to be filtered down to names that contain "system."

- **Instructor Note**: Let students know not to worry about the rest of the syntax for now.

  Run the command to show the results:

```
PS C:\Users\azadmin> ls C:\Windows | Where-Object {$_.name -like "*system*"}

    Directory: C:\Windows


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        3/19/2019   4:52 AM                System
d-----        1/30/2020   5:58 PM                System32
d-----        3/19/2019   6:22 AM                SystemApps
d-----         1/9/2020   9:22 PM                SystemResources
-a----        3/19/2019   4:49 AM            219 system.ini
```

- **Note:** Results may vary slightly.

Explain that understanding how objects work is important for system administrators and security professionals interacting with Microsoft products.

Tell students we'll cover how PowerShell interacts with objects in today's activities.

#### More PowerShell Advantages and Aliases

Let's cover some more of PowerShell's advantages:

- PowerShell commands are extensively documented. There are multiple ways to make sure you're using the right commands with PowerShell's extensive internal documentation system.

- PowerShell uses **aliases** to mimic Unix commands like `ls` and `cat`.

  - Running `Get-Alias ls` will provide the PowerShell cmdlet counterpart for Unix commands. 

  - **Note**: These commands function differently than their Unix counterparts when it comes to options and arguments. For example, `ls` works but `ls -la` does not. 

- Despite being a Microsoft product, PowerShell is officially open source and available on GitHub. In contrast, there is no source code available for `cmd.exe` and writing tools for CMD are limited compared to PowerShell.  

### 02. Instructor Do: Intro to PowerShell (0:15)

Let students know that we are going to continue our system administration tasks by readying a Windows workstation for new users.

Remind students of the scenario we used in the previous lesson:

- Our CIO tasked us with readying this Windows workstation through the command line and GUI. Today, the CIO is asking us to use PowerShell to complete the following activities:

  - Navigate Windows with the PowerShell command line.

  - Create logs with PowerShell.

    - Eventually these logs can be transferred to a central logging repository for SIEM integration. We'll learn about SIEM more in a later unit.

  - Create scripts with PowerShell.

#### PowerShell Syntax: Cmdlets

Let's get started by looking at PowerShell's syntax.

- First we are going to learn how to use PowerShell commands, otherwise known as cmdlets (pronounced "command-lets").

Explain that cmdlets are the combinations of PowerShell verbs and nouns. This is part of what makes PowerShell easy to read and use.

- Send students the CheatSheet file for this week's lessons: [7.2 CheatSheet](CheatSheet.md)

- Tell students to open the file and look at the Common PowerShell Commands table while following this demo:

  | Cmdlet          | Function                                         | Equivalent Command     |
  | --------------- | ------------------------------------------------ | ---------------------- |
  | `Set-Location`  | Changes to specified directory                   | `cd`                   |
  | `Get-ChildItem` | Returns current directory's contents             | `ls`, `dir`            |
  | `New-Item`      | Makes a new file or directory                    | `touch`, `mkdir`       |
  | `Remove-Item`   | Deletes a file or directory                      | `rm`, `rmdir`          |
  | `Get-Location`  | Retrieves path to current directory              | `pwd`                  |
  | `Get-Content`   | Returns file contents                            | `cat`, `type`          |
  | `Copy-Item`     | Copies a file from one given location to another | `cp`                   |
  | `Move-Item`     | Moves a file from one given location to another  | `mv`                   |
  | `Write-Output`  | Prints output                                    | `echo`                 |
  | `Get-Alias`     | Shows aliases for the current session           | `alias`                |
  | `Get-Help`      | Retrieves information about PowerShell commands  | `man`                  |
  | `Get-Process`   | Gets processes running on local machine          | `ps`                   |
  | `Stop-Process`  | Stops one or more defined processes            | `kill`                 |
  | `Get-Service`   | Gets a list of services                          | `service --status-all` |

We'll start with some navigation commands and then work our way to creating Windows system event logs.

#### PowerShell Verb-Nouns Demo

Consider the following scenario:

- User `Alex` left our company. We need to remove their user account from the system. However, Alex has an unfinished `reports` directory on their account.

- Before removing the account, we need to move the `reports` directory and files from their desktop directory to a directory that will remain after we remove the account.

Encourage students to follow along with the demo.

1. Let's change the current working directory to the `reports` directory:

    - Run `Set-Location C:\Users\Alex\Desktop` 

    - **Tip**: Use tab completion to quickly enter commands. Encourage students to do so as well, especially for cmdlets. 

    - Reiterate to students that these commands follow a verb-noun format.

      - The verb in this case is `Set`.
      - The noun is `Location`.
      - We are setting the location of our terminal to `C:\Users\Alex\Desktop`. 

    - This is the same as `cd` in Linux, an option we can also use with PowerShell.

2. We want to move the `reports` logs from `Alex`'s desktop to the `C:\` drive. We can do this with `Move-Item`.

    - Run `Move-Item reports C:\`

    - The verb, `Move`, and will act on a noun, `Item`, which can be a file or directory. 

      - This is the same as `mv` in Linux.

4. We can check the contents by using the cmdlet `Get-ChildItem`.

    - Run `Get-ChildItem C:\` to show that `reports` now shows up under `C:\`.

      - This command will retrieve all the child items of the designated parent path, `C:\`.
      
      - The verb is `Get` and the noun is `ChildItem`. 
      
      - You can also use `ls`, just like in Linux.


5. Explain that we can create an **item** by running `New-Item demo_file`

    - By default, this cmdlet creates a file as opposed to a directory. This default behavior is the same command as `touch` in Linux. We'll see in a few moments how it can be used to create directories.

    - Run the command and then run `Get-ChildItem` to show the directory's contents.

6. Now that we've moved our `reports` directory outside of the user's desktop directory to `C:\`, we can delete the user account but retain the reports.

    - Run `Remove-Item demo_file` to delete the file. 

    - This cmdlet functions similarly to `rm` in Linux.

    - Run `Get-ChildItem` to show it's no longer there.

Now we can navigate anywhere, and create and delete files. Let's look at some slightly more complex commands.

#### Parameters

Return the the slides. In the previous demo we used the `New-Item` cmdlet to create an object with the item-type of file. This is the default behavior of `New-Item`—to act like the Linux command `touch`. 

If we want the item-type to be a directory, with a specific name and location (like the mkdir command), we can add a parameter `New-Item`.

Let's use `New-Item` with parameters to set up a new directory for storing the logs we generate.

- Type `New-Item -Path "C:\" -Name "Logs" -ItemType "Directory"`

- This command is a little more complicated but will make sense once they look more closely. This is the beauty of PowerShell's predictable and descriptive commands.

- Break down the syntax:

  - `New-Item` is similar to `Move-Item` in that it can create a file or, now, a directory.

  - `-Path` is the parameter specifying which directory we want our new item created in. In this case, `C:\`.

  - `-Name` is the parameter specifying what we want to name this new item. In this case, `Logs`.

  - `-ItemType` lastly, is the type of item we want to create. If we don't specify `"Directory"` it will default to file, like before.

- Explain that the parameters `-Name` and `-ItemType` modify the original function of `New-Item` by altering the object it will create.

Now we should see a directory, `Logs`, created in `C:\`.

- Run the command to show the confirmation output.

- Tell students we can verify this once again by using the cmdlet `Get-ChildItem`.

- Run `Get-ChildItem C:\` to show the newly created `Logs` directory.

With the power of PowerShell parameters, we can achieve the effects of `touch` and `mkdir` commands with the `New-Item` cmdlet.

#### Parameter Examples Demo

We'll run through some more examples of parameters in PowerShell.

1. Press the Up key or again type `New-Item -Path "C:\" -Name "Logs" -ItemType "Directory"`.

    :question: **Ask class**: "Does anyone know what will happen if this same command is entered when `Logs` already exists?

    - Answer: it will error out and the command will not go through.

    - Run the command to show the error message: `New-Item : An item with the specified name C:\Logs already exists.`

2. We can use the parameter `-Force` to run this `New-Item` command without error.

    - Run `New-Item -Path "C:\" -Name "Logs" -ItemType "Directory" -Force`

3. We can use `Get-Command`  to search for commands using keywords. 

    - For example, if we are looking for commands with the word "process" in them, we can use the following:

    - Run `Get-Command -Name *Process`

        - `*Process` is a wildcard parameter value that we're giving to the parameter `-Name`. This translates to: give me all the commands with the word "process" in them.

    - The output shows all commands with "process" in their name.

        ```
        CommandType     Name                                               Version    Source
        -----------     ----                                               -------    ------
        Function        Get-AppvVirtualProcess                             1.0.0.0    AppvClient
        Function        Start-AppvVirtualProcess                           1.0.0.0    AppvClient
        Cmdlet          Debug-Process                                      3.1.0.0    Microsoft.PowerShell.Management
        Cmdlet          Enter-PSHostProcess                                3.0.0.0    Microsoft.PowerShell.Core
        Cmdlet          Exit-PSHostProcess                                 3.0.0.0    Microsoft.PowerShell.Core
        Cmdlet          Get-Process                                        3.1.0.0    Microsoft.PowerShell.Management
        Cmdlet          Start-Process                                      3.1.0.0    Microsoft.PowerShell.Management
        Cmdlet          Stop-Process                                       3.1.0.0    Microsoft.PowerShell.Management
        Cmdlet          Wait-Process                                       3.1.0.0    Microsoft.PowerShell.Management
        ```

4. From this list, we see `Start-Process`. Let's run an administrative CMD session from PowerShell.

   - Run `Start-Process -FilePath CMD -Verb RunAs`

   We can also close the CMD process.

    - Run `Stop-Process -Name CMD`

Ask if students have any questions before proceeding to the first activity of the week.

### 03. Student Do: Move and Create Directories (0:10)

Explain the following to students:

- In this activity, you will work as a junior system administrator tasked with vetting a process to create Windows Event logs. These logs will later be integrated into a log management program known as a SIEM. You'll need to complete the following tasks:

  - Because we will eventually decommission the `Alex` user, move the `contracts` folder from Alex's desktop directory to `C:\`.

  - Create `Backups` and `Scripts` directories in `C:\`.

    - Also you'll be creating the `C:\Logs` directory if you did not do so earlier.

  - Check the contents of the `C:\` directory to make sure the `Logs`, `Backups`, and `Scripts` directories exist.

  - Use `Rename-Item` to capitalize the `contracts` directory if it is not already.

Send students the following activity file:

- [Activity File: Move and Create Directories](Activities/03_Move_and_Create_Dir/Unsolved/Readme.md)

### 04. Instructor Review: Move and Create Directories Activity (0:10)

In this quick activity, students were tasked with setting up multiple directories for the Windows workstation.

Completing this activity required the following steps:

- Moving the `contracts` directory to `C:\`.

- Creating the directories: `Logs`, `Backups`, and `Scripts` in `C:\`.

- Renaming the `contracts` directory to `Contracts`.

Send students the following file:

- [Solution Guide: Move and Create Directories](Activities/03_Move_and_Create_Dir/Solved/Readme.md)

#### Walkthrough

In order to complete these tasks, we had to do the following:

First, make sure we're working out of Alex's desktop directory:

- Run `Set-Location C:\Users\Alex\Desktop` to change directory.

  - This is the same as `cd` in Linux.

Next, move `contracts` to `C:\`:

- Run `Move-Item contracts C:\` to move the `contracts` directory to the `C:\` directory.

  - This is the same as `mv` in Linux.

Verify `contracts` is no longer here: 

- Run `Get-ChildItem C:\` to get a listing of the directories and files in `C:\`.

  - This is the same as `ls` in Linux.

Now, we want to work out of `C:\`:

- Run `Set-Location C:\`.

  - Again, this cmdlet is the same as `cd` in Linux.

Make the `Backups`, `Logs`, and `Scripts` directories:

- Type `New-Item -Path "C:\" -Name "Logs" -ItemType "Directory"`, but don't run it yet.

  - When we use the `-ItemType "Directory"` parameters here, it changes the `New-Item` functionality from being like `touch` to `mkdir` in Linux.

We can actually shorten this command a little and have it create both directories:

- Edit the line to match the following:

- Run `New-Item "Logs", "Backups", "Scripts" -ItemType "Directory" -Force`

  - This command will create all the directories in the current directory.

  - This is similar to using _brace expansion_ with `mkdir`: 

    - `mkdir {Logs, Backups, Scripts}`.

  - The `-Force` parameter will ignore any errors if the directories already exist.

- Run `Get-ChildItem` to show `contracts`, `Logs`, `Backups`, and `Scripts` in `C:\`. We now have the following directories:

  - `C:\Backups`
  - `C:\Logs`
  - `C:\contracts`
  - `C:\Scripts`

- Use `Rename-Item` to capitalize the `contracts` directory. 

This one is kind of tricky. Using `Rename-Item contracts Contracts` seems like the correct option (if you recall of `mv` in bash), however, the command errors out. 

- It errors out because the command (or, more specifically, PowerShell) does not recognize case-sensitivity while the underlying OS file system does. 

- The easiest way to change the title would be to rename it twice, essentially overwriting the original contracts title with a name that is varied beyond case. Then, once that title is changed, we can then rename it back to the original title with adjusted case. 

- For example, if we change `contracts` to `contracts1`, we can then change `contracts1` to `Contracts`. (Note: You can use any name in place of `contracts1`) 

Run the following: 

- `Rename-Item contracts contracts1`

- `Rename-Item contracts1 Contracts`

Now that we are comfortable with parameters, let's look at PowerShell pipelines.

### 05. Instructor Do: Generating Windows Event Log Files with Parameters and Pipelines (0:15)

:warning: **Heads Up**: Continue using the **Windows RDP Host machine** for this section's demos.

Remind students that in the previous activity, we used parameters to modify various PowerShell cmdlets.

Let students know that we're going to build on parameters further by chaining commands using pipelines.

- Chaining commands is important in system administration and security roles. For example, quickly retrieving and sorting through various logs is a common task.

In the next demo, we will continue our role as a junior system administrator. Our CIO has asked us to retrieve multiple types of logs from our Windows workstation and save them as JSON files in our newly created `C:\Logs` directory, so they can later be imported to a Splunk SIEM for the company's analysts.

For our next demo we are going to chain cmdlets together to create a PowerShell pipeline that does the following:

- Retrieves Windows logs from Windows Events.

- Transforms the logs to the structured data format JSON.

- Outputs these files to the `C:\Logs` directory we made in the last activity.

#### Powershell Parameters Demo

**Note**: Encourage students to follow along with this demo if time is not a concern. Be aware that you may need to slow down the demo if students need to catch up.

1. Let's learn the command for retrieving the Windows Event log from Windows.

  - Run `Get-WinEvent`

  - The output should show the huge amount of scrolling, invalid logs. This output could take days to finish (or error out).

    -  Windows Event logs are recorded instances and information of events that occur in Windows, such as date and time of event, criticality of event, what happened during the event (e.g., a service started), etc.

    - Press Ctrl+C to stop the output.

  - `Get-WinEvent` is a cmdlet that requires parameters to retrieve a manageable amount of logs.

    - For example, adding `-LogName` followed by the name of a log, such as `System`, will only show us the system logs. So let's clear our screen and try again.

  - Run `clear` in console to clear the screen.

2. Now let's list all log categories instead of every log ever created.

  - Run `Get-WinEvent -ListLog *`

    - Remind students that the asterisk `*` is a wildcard indicating everything after the `-ListLog` parameter, so it will return every log that we can retrieve with `Get-WinEvent`. 

    -  As you can see from the output, the command displays a much more concise and approachable output of log categories, rather an enormous list of  every single log. 

  - Scroll up and point out the `System` logs under the `LogName` column (it should be in the first few results):

      ```PowerShell
      LogMode   MaximumSizeInBytes RecordCount LogName
      -------   ------------------ ----------- -------
      Circular            15728640        4513 Windows PowerShell
      Circular             1052672           0 Windows Azure
      Circular            20971520       12661 System
      Circular            20971520       27813 Security
      ...
      ```

      - **Note:** Results may vary.

   - :books: Distribute the following link for students who are curious about LogMode Circular Logging:

      - [Whatis.com: Circular Logging](https://whatis.techtarget.com/definition/circular-logging#:~:text=Circular%20logging%20is%20a%20method,limit%20on%20the%20hard%20disk)

3. If we want to find specific logs, such as system, we can use the `-LogName` parameter to specify which ones.

    - Run `Get-WinEvent -LogName System` to return system logs.

    - This will produce a lot of results. Enter Ctrl+C to stop the output.

4. Since there are thousands of logs and PowerShell will attempt to retrieve all of them, we need to narrow down that list using parameters.

    - Run `Get-WinEvent -LogName System -MaxEvents 10`

      - By adding the `-MaxEvents` parameter and the value `10`, we should now see only up to 10 logs.

#### Piping Logs to JavaScript Object Notation with ConvertTo-Json Demo

Now that we used parameters to get the logs we need, we will output them into a file that can be used later by log analysis applications. This is where pipelines come in. But we also need to pick a file format.

-  **JSON (JavaScript Object Notation)** structured data format can be easily read and manipulated by today's most common scripting and programming languages.

- Windows logging systems understand JSON, so we will be converting our logs to this file format.

In this demo, we will convert logs to the JSON data format using the `|` piping character.

1. Pipe the output of the `Get-WinEvent -LogName System -MaxEvents 10` into another command that converts the logs to JSON. 

    - Run `Get-WinEvent -LogName System -MaxEvents 10 | ConvertTo-Json`

    - Note the slightly less reader-friendly, but highly structured JSON logs: 

      ```
      PS C:\Users\azadmin> Get-WinEvent -LogName System -MaxEvents 10 | ConvertTo-Json
          {
              "Id":  13,
              "Version":  0,
              "Qualifiers":  null,
              "Level":  4,
              "Task":  1003,
              "Opcode":  0,
              "Keywords":  -9223372036854775808,
              "RecordId":  2555,
              "ProviderName":  "Microsoft-Windows-Hyper-V-Netvsc",
              "ProviderId":  "152fbe4b-c7ad-4f68-bada-a4fcc1464f6c",
              "LogName":  "System",
              "ProcessId":  3360,
              "ThreadId":  9036,
              "MachineName":  "DESKTOP-U3FCUKI",
              "UserId":  null,
              "TimeCreated":  "\/Date(1595374458918)\/",
              "ActivityId":  null,
              "RelatedActivityId":  null,
              "ContainerLog":  "System",
              "MatchedQueryIds":  [
                                  ],
              "Bookmark":  {
                          },
              "LevelDisplayName":  "Information",
              "OpcodeDisplayName":  "Info",
              "TaskDisplayName":  null,
              "KeywordsDisplayNames":  [
                                      ],
              "Properties":  [
                                "System.Diagnostics.Eventing.Reader.EventProperty",
                                "System.Diagnostics.Eventing.Reader.EventProperty"
                            ],
              "Message":  "Miniport NIC \u0027Microsoft Hyper-V Network Adapter #3\u0027 disconnected"
          }
      ```

        - **Note:** Output may vary.

      - The output of `Get-WinEvent` is now in a JSON format.

2. Our logs aren't actually in a file yet, so we need a cmdlet that will send this output to a file.

   - PowerShell has a cmdlet called `Out-File` that uses the `-FilePath` parameter to designate the location for the output file. Let's name this file `RecentSystemLogs.json`.

   - Return to the JSON-converted logs, add the `Out-File` cmdlet, and specify a path with `-FilePath`.

     - Run `Get-WinEvent -LogName System -MaxEvents 10 | ConvertTo-Json | Out-File -FilePath C:\Logs\RecentSystemLogs.json`

    - This command will send our JSON-transformed output to a file called `RecentSystemLogs.json` in the `C:\Logs` directory. Remember, Windows file paths use backslashes instead of forward slashes.

3. Verify that this command worked:

    - Navigate to `C:\Logs` with `Set-Location C:\Logs`.

    - Run `Get-ChildItem` to confirm `RecentSystemLogs.json` exists in the current directory.

    - Run `Get-Content .\RecentSystemLogs.json` to confirm that we now have logs in the `C:\Logs` directory.

Now students will try using parameter and pipelines themselves.

### 06. Student Do: Generating Windows Event Log Files with Parameters and Pipelines (0:20)

Explain the following to students:

- In this activity, you will play the role of a Windows system administrator.

- You've been asked to create and save logs to the directory `C:\Logs`.

- These logs can then be sent to security analysts for examination in a Security Information and Event Management System (SIEM), which we will learn in depth during a later lesson.

Send students the following activity file:

- [Activity File: Generating Windows Logs](Activities/06_Generating_Windows_Logs/Unsolved/Readme.md)

### 07. Break (0:15)

### 08. Instructor Review: Generating Windows Event Log Files with Parameters and Pipelines Activity (0:10)

In this activity, students were responsible for retrieving recent security and application logs utilizing PowerShell, and then transforming them and saving them to `C:\Logs`.

Completing this activity required completing the following steps:

- Executing cmdlets with a variety of parameters and parameter values.

- Piping cmdlets together to transform the PowerShell output.

- Querying event logs with cmdlets.

- Selecting the most recent logs cmdlets.

- Outputting the logs to a JSON file.

Send students the following file:

- [Solution Guide: Generating Windows Log Files with Parameters and Pipelines](Activities/06_Generating_Windows_Logs/Solved/Readme.md)

#### Walkthrough

In this activity, you were responsible for retrieving recent security and application logs using PowerShell, transforming them to JSON, and saving them to `C:\Logs`.

First we need to check the names of the logs we want to retrieve:

- Run `Get-WinEvent -listlog *` to show all the log names.

- Scroll to the top to show the `Security` and `Application` log names in the `LogName` column.

- Note the column header `LogName`. This header is also the parameter we need.

Let's add parameters to our cmdlet to retrieve security logs:

- Run `Get-WinEvent -LogName Security -MaxEvents 100` to show only 100 events.

Add the `ConvertTo-Json` cmdlet to convert the output to JSON format:

- Run `Get-WinEvent -LogName Security -MaxEvents 100 | ConvertTo-Json`

Pipe that output to a file:

- Run `Get-WinEvent -LogName Security -MaxEvents 100 | ConvertTo-Json | Out-File -FilePath "C:\Logs\RecentSecurityLogs.json"`

Since we didn't see any confirmation output, let's check the contents of the logs:

- Run `Get-Content C:\Logs\RecentSecurityLogs.json` to confirm the logs were created.

To see the latest 100 events from the application logs, run:

- `Get-WinEvent -LogName Application -MaxEvents 100 | ConvertTo-Json | Out-File -FilePath "C:\Logs\RecentApplicationLogs.json"`

Ask if there are any questions before moving onto the next section.

### 09. Instructor Do: Scripting with PowerShell (0:25)

Recall that we highlighted the importance and convenience of Linux scripting in our recent system administration units.

- Scripts allow system administrators and security professionals to automate and execute basic and advanced procedures and operations.

- We can do everything from setting basic firewall rules to standing up entire cloud virtual machine environments with networking, storage, and users.

PowerShell, like Linux, allows us to script many commands in sequence.

- For example, suppose you were asked to set up Windows workstations for users in the accounting department. You could create a script to do the following, in this order:

  1. Pull sensitive accounting data and files to a specified directory from a file server.

  2. Download AppLocker, a program to create rules that allow or block certain executables or scripts from running on a system.

  3. Deploys application control policies for AppLocker to restrict executables in a directory so only people in the accounting group can run them.

In the following demonstration, we will use scripts to remove unnecessary applications and potential security hazards from Windows workstations.

:warning: **Re-staging the Chocolatey Packages**: If you ran the package removal scripts, restage the choco apps by running the following script for both the activity and demo:

- [stagebloat.ps1](Resources/stagebloat.ps1)

#### Demo Scenario: Scripting the Removal of Unnecessary Packages

In this demonstration, we will create a script in Git Bash's Nano to remove Microsoft Skype.

Explain the following about this Windows RDP Host machine:

- This Windows work station has been created to simulate a previous user having installed a bunch of applications that are considered largely unnecessary and potential vectors of attack.

- These settings include telemetry tracking and advertising IDs, and default installed applications include Skype.

- We want to remove these applications to reduce the attack surface area for this workstation. Instead of trusting our users to not use these apps, we're going to remove the possibility of the workstation being exploited.

- :books: Send the following link for students who are interested in  potential security and privacy vulnerabilities of seemingly harmless and popular applications: 

   - [ZDNet: North Korean hackers infiltrate Chile's ATM network after Skype job interview](https://www.zdnet.com/article/north-korean-hackers-infiltrate-chiles-atm-network-after-skype-job-interview/)

- Most importantly, it's annoying to see them start up when we boot up the machine!

By default, PowerShell does not allow scripts to run. This is a security measure to prevent malware, attackers, and improperly constructed scripts from potentially compromising a system.

- However, our machines have already been configured to allow scripts to run.

- This means that we can create and run PowerShell scripts for automation. Although this makes our job easier, it does pose a security risk, to be able to freely run scripts. 

- If we are infiltrated or run a malicious script on accident, we could potentially lose complete access to our machine and all of our data. 

- In the next lesson, we'll be looking at how to closely monitor PowerShell scripts. For now, let's look at how to create our first PowerShell script.

Let students know we will look at the steps needed to remove Skype with PowerShell. These steps will also be used later in a PowerShell script to remove many applications at once.

Tell students that in the upcoming demo, we have been tasked by our CIO with doing the following:

- Create a PowerShell script file and execute it.

- Use a cmdlet to import various items to interact with in a PowerShell script.

- Use a `foreach` loop to go through each item in an imported CSV file.

- **Note**: Encourage students to follow along with this demo if time is not a concern. Be aware that you may need to slow down if students need time to catch up. 

:warning: **Heads Up**: For the upcoming PowerShell script demos and activities, the scripts will be written in Git Bash using Nano, and then run using PowerShell. This is so students do not have to learn another text editor and can use one they are already familiar with. It is advisable that you have a Git Bash window open alongside a PowerShell window for the demos. 


#### Creating and Executing a PowerShell Script to Remove Applications Demo 

Begin by explaining that PowerShell script files end with a `.ps1` extension.

1. Using Git Bash, move into our previously created `Scripts` directory:

    - `cd C:\Scripts`.

    - We will be saving our scripts to this directory.
   
2. Create a new script that we will run in PowerShell:

    - In the Git Bash terminal, run the following command to create a blank file named `example_script.ps1` in the current directory:

      -  `nano example_script.ps1`.

3. Now we'll add code to our script to look for the preinstalled app, Skype. We'll set it as a variable here:

    - In the Git Bash Nano document, enter:

      ```PowerShell
      $packagename="Skype";
      choco info $packagename
      ```
    - Breakdown the syntax:

      - `choco`, or "Chocolatey", is a day-to-day Windows package manager similar to the Linux package manager, `apt-get`, that we have seen and used before. System administrators will often use `choco` to install all of the applications their users will need on a Windows workstation.


      - `$packagename="Skype"` declares the variable `$packagename` and assigns `"Skype"` to it.  This will find the `Chocolatey` package, Skype.


4. After we save this file and run it, it should output information about the choco package, Skype. 

    - Save the file using nano's write out function, so you don't have to close the script.

      - Type Ctrl+O and press Enter to save the file without closing Nano.

5. In the PowerShell window, navigate to the same directory (`C:\Scripts`) and run the script:

    - Run `.\example_script.ps1`

    - The console output should look like:

      ```
      Chocolatey v0.10.15
      skype 8.63.0.76 [Approved] Downloads cached for licensed users
      Title: Skype | Published: 8/3/2020
      Package approved as a trusted package on Aug 03 2020 10:28:35.
      Package testing status: Passing on Aug 03 2020 10:05:05.
      Number of Downloads: 3050158 | Downloads for this version: 29297
      Package url
      Chocolatey Package Source: https://github.com/chocolatey-community/chocolatey-coreteampackages/tree/master/automatic/skype
      Package Checksum: 'w37/kdOH/A4CrHmqFrEzr/pTYuKhq9KLUThlCOwcd5lJohdKbIDrE7kYWRECJ3ct7hq3LWME6ZNq3QafDB4gLA==' (SHA512)
      Tags: Skype VOIP voice over ip video conferencing admin
      Software Site: http://www.skype.com/
      Software License: https://www.microsoft.com/servicesagreement#14e_Skype
      Summary: Skype - VOIP
      Description: Skype - Install Skype, add your friends as contacts, then call, video call and instant message with them for free. Call people who aren't on Skype too, at r
      eally low rates.

        ## Notes
        The package have the following known issues.
        - Skype automatically starts after installation (no known way to disable it yet)
        - A desktop shortcut is automatically created.

      1 packages found.
      ```

    - Point out the `## Notes` section that says:

        ```
        The package have the following known issues.
        - Skype automatically starts after installation (no known way to disable it yet)
        ```

Understand that an automatically starting process, especially one that automatically logs in users and has a history of security issues, should not exist on a remote Windows workstation such as ours.

Now let's look at how we can edit our script from finding a package's information to removing a package from our system.

6. With Nano still open, edit the script to the following:

    ```PowerShell
    $packagename="Skype";
    choco uninstall -y $packagename
    ```

   - Explain that we are now going to use `choco uninstall` to remove Skype. 
  
   - The `-y` parameter here will automatically confirm that we want to remove the package, much like `apt-get remove -y <package name>`

7. Save and run the script. 

   - Save the script with `CTRL+O`.    

   - Run the script with `.\example_script.ps1` to show the output:

      ```PowerShell
      PS C:\Users\azadmin\Documents> .\example_script.ps1
      Chocolatey v0.10.15
      Uninstalling the following packages:
      Skype

      skype v8.63.0.76
      Running auto uninstaller...
      Auto uninstaller has successfully uninstalled skype or detected previous uninstall.
      skype has been successfully uninstalled.

      Chocolatey uninstalled 1/1 packages. 
      ```

8. We've successfully removed Skype from our system using a PowerShell script!

    - Explain that we could remove the choco packages one-by-one, it will be more efficient to create a script that will loop through a list of the packages and uninstall them all at once.

    - Luckily, we have a file with a list of packages we can remove.

    - Navigate to the choco demo directory with:

      - `cd C:\Users\azadmin\Documents\Demo\choco`

      - Run `ls` (or `Get-ChildItem`) in PowerShell to show the CSV file, `chocodemo.csv`.

9. Using PowerShell, open and display the [chocodemo.csv](./Resources/chocodemo.csv) file for the students:

   - Run `type .\chocodemo.csv`

   - Your output should be similar to:

      ```PowerShell
      name,description
      itunes,"Apple's music application"
      vlc,"An application for encoding and playing videos"
      [...]
      ```

   - Break down the syntax:

      - The first line, `name,description`, is the header of the CSV file and contains the types of fields for the other lines.

      - The rest of the rows, or records, contain field entries that should match the number and type of header fields.

      - For example, `"Apple's music application"` will match up with the `description` header field and `itunes` will match up with the `name` header field.

In the next section, we will take a brief hiatus from our demo to explain CSV files more in depth and how we can pair them with other familiar scripting tools in order to create a more efficient package removal script. 

#### What's a CSV File?

Return back to the slide show. Describe CSV files using the following information: 

- **Comma-separated values** (CSV) files are plain text files that contain simply structured data, or fields, separated by commas.

- CSV files often contain structured lines of information made up of rows of data.

- The top line of a CSV file contains the header, the row that describes each field. 

- For example, you may have the headers "fruit" and "vegetable", with the corresponding field entries "apple" and "carrot." Another row of entries may have "banana" and "potato."

Explain that system administrators and security professionals will often use CSV files containing lists of items that they need to parse through.

- For example, a system administrator may use such a file to maintain a list of employee email addresses and usernames.

- A penetration tester might have a list of IP addresses and corresponding domain and subdomain names to use during a test.

Explain that most common programming and scripting languages have ways to import CSV files and **loop** through the items one-by-one. PowerShell has this capability. 

- To loop through this file's items, we have the `foreach` loop.

- The `foreach` loop in PowerShell is similar to the `for` loop they learned about in the Linux unit, but it is mainly used for looping through files or read-only structured data. 

- Present some cases for which system administrators and security professionals may use a `foreach` loop instead of a `for` loop:

  - A system administrator may have a text or CSV file of usernames they need to loop through to reset each item's password.

  - A penetration tester might have a text file with a list of the most commonly-used passwords. They may use a `foreach` loop to try out each password with a known user's username.

- Reiterate that a `foreach` loop is best when iterating or moving through items in some form of a list. Let's look at how we can use it with CSV files.

Let's return to our demonstration and use CSV files and for loops to optimize our package removal script.

#### Using Import-Csv with a foreach Loop Demo

:warning: **Heads Up**: Feel free to use your preferred editor, such as PowerShell ISE. Nano instructions are provided.

We will be using the `Import-Csv` PowerShell cmdlet to source the CSV file `chocodemo.csv` to run with a demo PowerShell script. If the CSV file has the standard header and record format, `Import-Csv` will prepare the fields to be called by PowerShell.

Let's look at how that works by creating a PowerShell script that outputs each line of CSV file.

1. First, we'll create a new script. Make sure you're working within the `C:\Users\azadmin\Documents\Demo\choco` directory.

    - In Git Bash, start a new Powershell script: 
    
      - Run `nano removebloat.ps1` 


2. We are going to use a variable to import our CSV file for our script.

    - On the first line, type `$csv = Import-Csv -Path .\chocodemo.csv`.

      - The variable, `$csv`, gets assigned to the `Import-Csv` cmdlet and parameters.

      - The `Import-CSV` cmdlet is going to load the given file into memory to be usable by PowerShell. It will assign each line and field as an input to be read. 

   - All of the contents of this file will then become available to our script. 

3. Now we need a `foreach` loop.

    - Start typing a PowerShell `foreach` loop template:

      ```PowerShell
      $csv = Import-Csv -Path .\chocodemo.csv
      foreach () {

      }
      ```

4. Set the condition within the parentheses. In this case we're calling the CSV file with a variable and reading each line with another.

    - Enter `$line in $csv` in the parentheses `()`.

    - This specifies that for every line in the CSV file, `foreach` will execute the following code block with each line's contents.

5. Enter the code that will be executed on each line.

    - Enter `Write-Output $line` in the curly brackets `{}`:

      ```PowerShell
      $csv = Import-Csv -Path .\chocodemo.csv       
      foreach ($line in $csv) {
          Write-Output $line
      }
      ```

    - Explain the syntax:

      - Our `foreach` loop will grab the contents of each line in our CSV file and assign it to the `$line` variable.

      -  Then, for every line that gets assigned to the `$line` variable, the `Write-Output` cmdlet will print the contents.

      - This process will repeat, or loop, until there are no more lines left to be assigned to the `$line` variable.

6. Run the script to verify that it prints out each line of our CSV file in the terminal.

    - Type: Ctrl+O and press Enter to save the file in Nano.

    - Switch to the PowerShell window.

    - Run the script using the command `.\removebloat.ps1`:

      ```PS 
      PS C:\Users\azadmin\Documents\Demo\choco> .\removebloat.ps1

      name   description                                   
      ----   -----------                                   
      itunes Apple's music application                     
      vlc    An application for encoding and playing videos
      ```

    - Reiterate that for every line in this CSV file, PowerShell is assigning that line to the variable `$line` and printing it out. After a line is printed out, the loop will continue until all lines have been printed by the `Write-Output` cmdlet.

Explain that our `chocodemo.csv` file has multiple rows containing multiple attributes, such as `name` and `description`. Sometimes we want to only loop through the Windows Store application `name` or `description`.

This is made possible by appending `.name` to the `$line` variable. Your script will return the matching field or attribute entries instead of entire lines. In this case, it returns the application name.

7. Return to the Git Bash window and use Nano to open the script.

    - Add `.name` after the `Write-Output $line` to show the students the following:

      ```PowerShell
      $csv = Import-Csv -Path .\chocodemo.csv
      foreach ($line in $csv) {
          Write-Output $line.name
      }
      ```

    - Enter Ctrl+O to save your script file.

    - Return to the PowerShell window and run the script again.

    - Your output should be similar to:

      ```PowerShell
      PS C:\Users\azadmin\Documents\Demo\choco> .\removebloat.ps1
      itunes
      vlc
      ```

8. We can retrieve descriptions instead of names.

    - Using Git Bash, change the `.name` to `.description`, save, and re-run the script in the PowerShell window.

      ```powershell
      $csv = Import-Csv -Path .\chocodemo.csv
      foreach ($line in $csv) {
          Write-Output $line.description
      }
      ```

    - Verify the output:

      ```PowerShell
      PS C:\Users\azadmin\Documents\Demo\choco> .\removebloat.ps1
      Apple's music application
      An application for encoding and playing videos
      ```

9. Finally, let's combine the concepts of importing CSV files and creating `foreach` loops with our `choco uninstall` command.

    - Return to your script in Git Bash and change the code block from:

      -  `Write-Output $line.description` 
      
          to:

      - `choco uninstall -y $line.name`.

    - Save with Ctrl+O but do not run the script yet.

      ```PowerShell
      $csv = Import-Csv -Path .\chocodemo.csv
      foreach ($line in $csv) {
          choco uninstall -y $line.name
      }
      ```

    - Explain that when we execute this script, we should expect to see the output of the choco package manager uninstalling the application packages in the CSV file.

    - Run the script in PowerShell to verify the output. 
 
    - **Note**: There are multiple uninstalls with `itunes` due the nature of the extra applications it comes with, like its mobile device integration.

We have now written our first PowerShell script! This script will do the following: 

- Uses conditionals with foreach loops. 

- Imports files.

- Uses the choco package manager to remove unwanted system packages. 

Explain that students will apply these newly learned skills in the next activity to remove the rest of the unwanted `choco` packages from the Windows RDP Host machine.

### 10. Student Do: Removing Unnecessary Packages with Powershell (0:15)

Explain the following to students:

- In this activity, we will be continuing the role of junior system administrator.

- As a system administrator, we don't want our users playing games or using unnecessary applications while working. One reason is that these applications can potentially expose personal user email addresses, usernames, or other personal identification information to unnecessary applications.

- The CIO has tasked us with creating a PowerShell script that will get rid of these Windows bloat applications, and has provided a CSV file containing a list of these application's packages. 

  - Note that this list is significantly larger than in the demo.

Make sure the students have access to the following files (CSV exists in lab):

- [Activity File: Removing Unnecessary Packages with Powershell Scripts](Activities/09_Removing_Packages/Unsolved/Readme.md)
- [Choco CSV File](Activities/09_Removing_Packages/chocoactivity.csv) 
- [Syntax Reference and Helpful Hints](./Activities/09_Removing_Packages/tips.md)

### 11. Instructor Review: Removing Unnecessary Packages with PowerShell (0:15)

For this exercise, we used conditionals in a PowerShell script to delete Windows apps that both add bloat to the system and increase the attack surface of the system.

Completing this activity required the following steps:

- Using the cmdlet `Import-Csv` to import a CSV file as an object into PowerShell.

- Creating a `foreach` condition that loops through each line for the application name field in the CSV file.

- On every loop, executing a `choco uninstall` on the package name given to it.

Share the solution file to the students:
  - [Solution Guide: Removing Unnecessary Packages with PowerShell](./Activities/09_Removing_Packages/Solved/Readme.md)

#### Walkthrough

First, make sure you're working from the `C:\Users\azadmin\Documents\Activity\choco` directory:

- Run `cd C:\Users\azadmin\Documents\Activity\choco`

Next, we'll create a `removepackages.ps1` file using Git Bash.

- Run `nano removepackages.ps1`

We'll need a line for importing the CSV file.

- Type `Import-Csv -Path .\chocoactivity.csv`

- Start a PowerShell `foreach` loop template:

  ```PowerShell
  $csv = Import-Csv -Path .\chocoactivity.csv
  foreach () {

  }
  ```

Set our condition. In this case, we're calling the CSV file using a variable and reading each line.

Construct the `foreach` condition within the parentheses.

- Enter `$package in $csv` in the parentheses.

For each line variable in our CSV file variable, we will execute whatever is in the curly braces `{}`.

Now we need the part of the code block that executes for each line read in the CSV file:

- Enter `choco uninstall -y $package.name` in the code block.

- For the bonus, add the following line: `Write-Output $package.name removed!`.

Your final script should look like this:

```PowerShell
$csv = Import-Csv -Path .\chocoactivity.csv
foreach ($package in $csv) {
    choco uninstall -y $package.name
    Write-Output $package.name removed!
}
```

- Save and close Nano.

When we execute this script, we should expect see the `choco` package manager uninstall each package listed in our CSV list.

- Using PowerShell, run the script and show the output.

Answer any questions before ending class.

|  :warning: Shut Down Your Machines :warning:  |
|:--:|
| Remind everyone to shutdown their Windows RDP Host Machine. They will need the remaining hours for the next lesson and homework. |

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

