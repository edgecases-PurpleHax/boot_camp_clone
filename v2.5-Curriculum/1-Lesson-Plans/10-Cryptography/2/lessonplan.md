 ## 10.2 Lesson Plan: Asymmetric Encryption and Hashing

### Overview

Today's class will expand on fundamental cryptography concepts, covering asymmetric encryption and hashing.

### Class Objectives

By the end of class, students will be able to:

- Calculate the required number of symmetric and asymmetric keys based on the number of people exchanging secure messages.

- Use GPG to generate keys, and encrypt and decrypt private messages.

- Use hashes to validate the integrity of data.

- Use digital signatures to validate the authenticity of data.

### Instructor Notes

- Today's lesson includes an optional activity: 06. Optimizing with Asymmetric Public Keys Activity. 

  - If class falls on a saturday, you will have time to complete the activity. 
  
  - If class is not on a Saturday, distribute the file and tell students that it is an optional activity that they can do on their own time and then review during office hours if needed. 


- During 08. Applying Public Key Cryptography with GPG, there is a demonstration that depicts two different individuals completing public key encryption. It is recommended to have two virtual machines open in order to simulate two individuals: one VM representing Tim and one VM representing Julie.

   - If you conduct the demonstration on a single VM, be sure to clarify whether each command is executed by either Julie or Tim.

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


### Online Classroom Strategies 

Refer to the following guidelines and best practices for conducting this class online: 

- [Cybersecurity Online Classroom Strategies](../../../00-Teaching-Staff-Prework/OnlineStrategies.md)


</details>

### Slideshow 

The lesson slides are available on Google Drive here: [10.2 Slides](https://docs.google.com/presentation/d/145vdIJJyL72ZnFDLODTcgpvFC6VxVNCUiPBTtXDGAqI/edit#slide=id.g4f80a3047b_0_990).

- To add slides to the student-facing repository, download the slides as a PDF by navigating to **File** > **Download as** and choosing **PDF document**. Then, add the PDF file to your class repository along with any other necessary files.

- **Note**: Editing access is not available for this document. If you or your students wish to modify the slides, please create a copy by navigating to **File** > **Make a copy**.

### Time Tracker

The time tracker is available on Google Drive here: [10.2 Time Tracker](https://docs.google.com/spreadsheets/d/185EiHqBqZ3kVFAM7FpjOItv1qb1WjnqyLI467W4j0Mw/edit#gid=1145703143).


### Student Guide

Distribute a student-facing version of the lesson plan after class: [10.2 Student Guide](StudentGuide.md)

-------

### 01. Instructor Do: Welcome and Review (0:05)

Begin class by welcoming students back and informing them that today they will continue learning and applying cryptography concepts.

Before we introduce new concepts, let's review those taught in the last class:

- **Cryptography** is the art and science for keeping information secure.

- **Ciphers** are cryptographic methods which disguise data by applying mathematical concepts called **algorithms**.

- Ciphers use **encryption** to convert **plaintext** into **ciphertext**, and use **decryption** to convert ciphertext back to plaintext.

- Ciphers use a **key** to specify how plaintext is converted to ciphertext and vice versa.

- The main cipher categories are **block** and **stream ciphers**.

- Stream ciphers apply their algorithms one character at a time, and block ciphers apply their algorithms to blocks of characters.

- **Encoding** is used transform data to be used by another system, but is not designed to keep a message secret.

- Encoding, which doesn't use a key, is often used to transform Digital Text Data into Binary Data, where encryption commonly takes place.

- The goals of cryptography are illustrated with the **P.A.I.N. model**.

- P.A.I.N. stands for Privacy, Authentication, Integrity and Non-Repudiation.

- The **security tradeoff** is a cryptography concept that refers to the challenge of finding an encryption/decryption method that is fast and secure.

- **Modern symmetric key algorithms** attempt to solve this challenge by using a single key for encryption and decryption.

- **DES, 3DES, and AES** are modern symmetric key algorithms. AES is the most current and secure one in use today.

- **OpenSSL** is a command-line tool that can be used to apply symmetric key encryption.

Explain to  students that we will begin today's class with a cryptography refresher activity with OpenSSL.

  - Further explain that this activity will both refresh students on how to use OpenSSL for symmetric encryption, and introduce a cryptographic challenge of the secure exchange of keys.

  - Ask the class if they have any questions before starting on the warm-up activity.  


### 02. Student Do: Cryptography Refresher (0:20)

Explain the following to students:

- In this upcoming activity you will use your Key and IV that you had created in the previous class, and had saved into a file called `key_and_IV`. 

- You will continue to act as a security analyst working for the Hill Valley Police Department.

- Captain Strickland has moved a meeting to 6:00 p.m. and would like you to notify your partner of this change.

- As secrecy is still critical, your task is to write an updated message, and encrypt it with OpenSSL.

- Next, send the encrypted message to your partner with your key and IV (initialization vector), and decrypt the message you receive from your partner.

:globe_with_meridians: This activity will use breakout rooms. Assign students into groups of 2 and move them into breakout rooms.

Send students the following file:

- [Activity File: Cryptography Refresher](activities/02_Cryptography_Refresher/unsolved/readme.md)

See if any students have questions before getting started.

### 03. Instructor Review: Cryptography Refresher (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the point of this exercise was to review how to use Open SSL and then illustrate the challenge that securely exchanged keys pose to security professionals.

Completing this activity required the following steps:

  - Write a new message titled `meetingplace_update.txt` using the command line.
  - Encrypt the message using Open SSL.
  - Transfer the encrypted message, key, and IV over to your partner.
  - Receive your partners message, key and IV and decrypt it with Open SSL.
  - Answer several questions regarding secure key exchange.

Send students the following file:

- [Solution Guide: Cryptography Refresher](activities/02_Cryptography_Refresher/solved/readme.md)

#### Walkthrough

**Instructor Note:** Since each have a different key and IV, each result will be different. If needed, use the following example to illustrate how to encrypt and decrypt with Open SSL.

- Write a message (you can use Nano or Vi) to create a message  titled `meetingplace_update.txt` that contains the following information:

    ```
    Dear [partner's code name]

    Captain Strickland would like us to now meet at Lou's Cafe at 6 p.m. to discuss some additional information about the Alphabet Bandit. See you there!

    From,
    [Your code name]
    ```               
 - Use OpenSSL to encrypt the message by running the following:

    `openssl enc -pbkdf2 -nosalt -aes-256-cbc -in meetingplace_update.txt -out meetingplace_update.txt.enc -base64 -K <your_key> -iv <your_iv>`

 - Send the following to your partner:
      - `meetingplace_update.txt.enc`
      - Key
      - IV

- Upon receiving your partner's message, key , and IV, decrypt the message with the following command, updated with your partner's key and IV in their respective locations:

    `openssl enc -pbkdf2 -nosalt -aes-256-cbc -d -in meetingplace_update.txt.enc -base64 -K [partner_key] -iv [partner_IV]`

- It's likely that most of you used Slack or email to transmit the key and IV.

    While Slack and email may seem secure:

    - Emails are typically not encrypted.
    - Slack administrators can have access to view private messages between parties.

Explain to the class that in the next section we will demonstrate how cryptographic methods can address this secure key exchange challenge.

Answer any questions that remain before proceeding with the lesson.

### 04. Instructor Do: Introduction to Key Management and Exchange (0:07)

Remind the class that the activity they just completed used symmetric key encryption with OpenSSL.

  - Explain that symmetric key encryption has many benefits, such as:

    - Speed of encryption and decryption.

    - Efficiency of encryption and decryption, with minimal computer resources required.

    - Simple implementation for communication between two parties, as only one key is required.

Point out that while symmetric key encryption has these benefits, it also comes with several disadvantages.

#### Disadvantage One: Secure Key Exchange

As we saw in the previous exercise, the first major disadvantage is insecure methods of distributing the keys.

  - For example, unencrypted emails containing keys can be intercepted.

Explain that there are several other methods that can be used to exchange symmetric keys:

 - **Offline exchange**, also known as an **out-of-band exchange**, can include mailing the key, or calling the other party and reading them the key.

   - Point out that the vulnerabilities with this method could be: intercepted mail, or a tapped phone line.

 - **Diffie–Hellman key exchange** is a method that uses mathematics to create a shared secret between two parties over a public channel, where the secret can't be seen even if the communication is captured.

   - The shared secret is the key and **not** a communication.

   - Point out that while Diffie–Hellman is a complex method, students should just understand the basics—that this exchange is one method available for secure exchange of keys over public channels.

   - Additionally point out that Diffie–Hellman is often covered on security exams, such as Security+.

   - Explain that the primary challenge of using Diffie–Hellman is the complexity of its implementation.
   - If interested, students can research further using the following article and video:
     - [Diffie–Hellman Key Exchange (Wikipedia)](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
     - [Secret Key Exchange (Diffie-Hellman) Video
 (YouTube)](https://www.youtube.com/watch?v=NmM9HA2MQGI)

### Disadvantage Two: Key Management

Another disadvantage of symmetric key cryptography is key management.

- Point out that symmetric key cryptography between two parties only requires managing one key. But there needs to be a key for each combination of individuals, so the more combinations, the more keys required.

  - For example: If a small organization using symmetric key cryptography had four employees—Julie, Alice, Tim and Bob—the following employee combinations would require six symmetric keys.

    - (Key 1) Julie, Alice
    - (Key 2) Julie, Tim
    - (Key 3) Julie, Bob
    - (Key 4) Alice, Tim
    - (Key 5) Alice, Bob
    - (Key 6) Tim, Bob

   Summarize that this illustrates that four individuals would require six symmetric keys.

- Note that organizations typically have many more than four employees. Therefore, each additional person adds a higher volume of keys to be managed.

While it would be challenging to write out all the different combinations for a larger organization, we can use a formula to calculate the number of required symmetric keys:

- Where N is the count of individuals

  - (N * (N-1)) / 2  = count of symmetric keys

- For example, in order to figure out symmetric keys for an organization of seven people:

    -  (7 * 6) / 2  =    42/2 = 21  

- Point out that an organization of 1,000 employees would require managing almost half a million symmetric keys:

    - (1000 * 999) / 2 = 499,500‬

- Summarize that this formula illustrates the challenge of key management that large organizations face when using symmetric encryption.

   - Additionally, note that calculating the number of keys required is often featured in security exams, such as Security+.

Explain that in the next section, we will introduce a solution that was created to address these disadvantages with symmetric key encryption, called **asymmetric key encryption**.     

 - Answer any questions that remain before proceeding.

### 05. Instructor Do: Asymmetric/Public Key Cryptography  (0:15)

Now that we covered the various disadvantages that come with symmetric key encryption, we can focus on methods to address them with **asymmetric key encryption**.

Introduce asymmetric key encryption by covering the following:

  - Unlike symmetric encryption that uses one key, in asymmetric key encryption, each individual possesses a **two-key pair**.

  - The two-key pair consists of a **private key** and a **public key**, which are linked together.
    - **Public keys**, as the name suggests, can be public and available for anyone to see.
    - **Private keys** need to be kept secret, as exposure could affect confidentiality of messages.

 - Private and public keys are similar to symmetric keys, in that they are typically a string of random numbers and letters.   

Explain how  asymmetric key encryption works to encrypt a message by covering the following scenario:

Tim wants to send Julie his bank account number using asymmetric key encryption.

**Step 1: Creating Key Pairs**

  - Since Julie needs to receive an encrypted message from Tim, she will have public and private key pairs created:

    - Julie's key pair: **[Julie's private key]**   **[Julie's public key]**


  - Emphasize that Julie's public keys are truly public: Julie puts her public key on her own website so anyone in the world can see it.

**Step 2: Message Creation and Encryption**

  - Tim creates a plaintext message that contains his bank account number.

  - After he creates his message, he goes to Julie's website and gets her public key.

  - He uses Julie's public key to encrypt his message.

     **[Tim's plain text secret message]** encrypted with **[Julie's public key]** = **[Tim's encrypted message]**

**Step 3: Message Exchange**

  - Tim sends his encrypted message to Julie.

    - Note that he can send this message any way he chooses, even email or Slack, as it is now encrypted and can only be decrypted by Julie.

  - Once it has been encrypted with Julie's public key, the only person who can decrypt it is Julie, as she owns the matching private key.

**Step 4: Decryption**

  - Julie receives Tim's encrypted message and decrypts with her matching private key.

  - Explain that Julie can now see Tim's bank account number.

    **[Tim's encrypted message]** decrypted with **[Julie's private key]** = **[Tim's plaintext secret message]**


Summarize this scenario by pointing out the following:

  - In this scenario, only Julie's public and private key's were used.

  - If Julie wanted to send an encrypted response to Tim, she would apply the same process, but in reverse.

     - Tim would need to create his own public and private key pair and put his public key on his website.

     - Julie would encrypt her message with Tim's public key, which she obtained from his website.

     - Tim would receive Julie's encrypted message and then decrypt it with his private key.

  - Keys pairs always have to be used together.

     - In other words, if a public key is used to encrypt a message, its matching private key will be used to decrypt the message.

  - This scenario illustrates how asymmetric key encryption is used for confidentiality, by keeping Tim's message secure from unauthorized parties.


Explain that we will now illustrate how this process of asymmetric key encryption addresses the disadvantages of symmetric key encryption.

####  Secure Key Exchange

In the scenario above, there was no need for Julie to find a secure way to to get Tim her public key.

  - Since the key was public and can be seen and accessed by anyone, a secure key exchange method isn't required.

  - Summarize that this is one of the biggest advantages of asymmetric key encryption.

#### Key Management

Point out that if Tim and Julie each needed to send messages to each other, four keys would be required for for a secure communication:

  - (1) **[Tim's private key]**
  - (2) **[Tim's public key]**
  - (3) **[Julie's private key]**      
  - (4) **[Julie's public key]**

As noted earlier, While symmetric keys use only one key for a secure exchange between two individuals, when more individuals are added in larger organizations, more and more keys are required, making keys difficult to manage.

- For example, in an organization of 12 employees, symmetric encryption would require 66 symmetric keys.

  - (12 * 11) /2 = 66

For asymmetric encryption, each employee would only require their own key pair:

- The calculation is:
  -  N * 2

- 12 employees would require 24 keys to be managed.
  - (12 * 2) = 24

- Note that for an organization of 12 employees, using asymmetric instead of symmetric would require 42 fewer keys.
  - 66 - 24 = 42

Summarize that this illustrates how asymmetric encryption addresses the key management issue, as many fewer keys are required for managing larger organizations.

#### RSA

Explain that, similar to symmetric encryptions use of modern algorithm such as DES, 3DES, and AES, asymmetric encryption uses an algorithm called **RSA**.

Introduce **RSA** by covering the following:

  - Introduced in 1977 and named after the last names of its creators: Rivest, Shamir, and Adelman.

  - The asymmetric algorithm that is still a worldwide standard today.

  - Works by factoring large prime numbers.

    - If students are interested in further researching RSA, refer them to:
      - [RSA (cryptosystem) (Wikipedia)](https://en.wikipedia.org/wiki/RSA_(cryptosystem))

Summarize the concepts covered during this lesson:

  - Unlike symmetric encryption which uses one key, asymmetric encryption uses two keys: one public and one private.

  - Public keys are accessible by anyone, and private keys are only accessible by their owner.

  - Public and private keys have to work together: if a public key encrypts a message, only the matching private key can decrypt that message.

  - Asymmetric encryption addresses the challenges of symmetric encryption by:

    - Not requiring a secure key exchange method.

    - Using a smaller number of keys for larger organizations.

  - The standard asymmetric algorithm used today is RSA.
  
:warning: **Heads Up**: The next activity and review is optional: 

  - **If this class falls on a Saturday:** Explain that in the next activity, students will see how key management is simplified with asymmetric encryption by determining how many fewer keys are required for asymmetric encryption versus symmetric encryption.
  
  - **If this class falls on a weekday**: Explain that you will be sending out an optional activity to reinforce the concepts covered in this section.  Students can choose to complete the activity after class.
    
    - Send out the next activity and solution and proceed to `Instructor Do: Applying Public Key Cryptography with GPG `

Ask the class if they have any questions before proceeding.  

### 06. (Optional) Student Do: Optimizing with Asymmetric Public Keys Activity (0:00)

Explain the following to students:

- You will continue to be security analysts working for the Hill Valley Police department.

- Hill Valley's largest police divisions, the SWAT team, the Canine Unit, and Internal Affairs, are currently using symmetric keys to exchange secure messages with each other.

- As a security professional, you recommend to Captain Strickland to seriously consider moving to asymmetric keys, as it would mean many fewer keys to manage.

- Captain Strickland is excited about your recommendation, but would like to understand exactly how many fewer keys each division would be managing with this change.

- Your task is to provide a summary report for the captain showing how many keys are saved by moving from symmetric key cryptography to asymmetric key cryptography for the three divisions.

:globe_with_meridians: This activity will use breakout rooms. Assign students back into their groups of 2 and move them into breakout rooms.

Send students the following file:

- [Activity File: Optimizing with Asymmetric Public Keys](activities/06_Optimizing_w_Asymmetric/unsolved/readme.md)

### 07. (Optional) Instructor Review: Optimizing with Asymmetric Public Keys Activity (0:00)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the goal of this activity was to compare key distribution and the number of required keys for asymmetric encryption and symmetric encryption.
 Students calculated how many symmetric and asymmetric keys are needed depending on the amount of people exchanging secure messages.

Completing this activity required calculating the following values:

  - The amount of keys required for asymmetric encryption.
  - The amount of keys required for symmetric encryption.
  - The difference in the amount of keys between them.

Solution file is available here:

- [Solution Guide: Optimizing Asymmetric](activities/06_Optimizing_w_Asymmetric/solved/readme.md).

#### Walkthrough

Remind students of the following:

 - The key formulas for calculating the number of keys required:

    - Symmetric encrytion: **(N * (N-1)) / 2**
    - Asymmetric encryption: **N * 2**

     **In both formulas, N = the number of individuals.**

To calculate for the SWAT team, with 10 officers:

  - Symmetric: (10 * 9)/2  = 45
  - Asymmetric: 10 * 2   = 20
  - Difference: 45  - 20 = 25

To calculate for the Canine Unit, with 25 officers:

  - Symmetric: (25 * 24)/2 = 300
  - Asymmetric: 25 * 2 = 50
  - Difference: 300 - 50 =  250

To calculate for Internal Affairs, with 45 officers:

  - Symmetric: (45 * 44)/ 2 = 990
  - Asymmetric: 45 * 2    = 90
  - Difference: 990 - 90 = 900

The final summary:

- The SWAT team will need 25 fewer keys after moving from symmetric to asymmetric cryptography.

- The Canine Unit will need 250 fewer keys after moving from symmetric to asymmetric cryptography.

- Internal Affairs will need 900 fewer keys after moving from symmetric to asymmetric cryptography.

Answer any questions that remain, before sending your solution and proceeding to the lesson.


### 08. Instructor Do: Applying Public Key Cryptography with GPG  (0:10)

Similar to symmetric key encryption, asymmetric encryption also has command-line tools to simplify the process of key creation, encryption, and decryption.

Explain that the command-line tool we will demonstrate is called **GPG**.

- Introduce GPG by covering the following:
  - GPG, stands for for *GNU Privacy Guard*.

  - It is a free software program available on many Linux distributions, which can run symmetric and asymmetric encryption algorithms.

  - It can support a variety of algorithms such as 3DES, AES, and RSA.

Explain that we will demonstrate how to create a key pair and do asymmetric encryption and decryption with GPG.

 - Explain that we will be using the same scenario of Tim sending his bank account number to Julie.

:warning: **Heads Up**: This demonstration depicts two different individuals completing public key encryption.

   - While not required, it is recommended to have two virtual machines open in order to simulate two individuals: one VM representing Tim and one VM representing Julie.

   - If you conduct the demonstration on a single VM, be sure to clarify whether each command is executed by either Julie or Tim.

#### GPG Demonstration Setup

Begin by opening up your command line in your virtual machine.

  - Explain that that GPG is already preinstalled on your VM for use, and is also already installed in Ubuntu.

  - Explain that we will first be conducting the activities of Julie, as she needs to create her key pair and provide her public key to Tim.


- **Step 1: Creating the Key Pair**

  Explain that the first step of using asymmetric encryption is for Julie to generate her key pair.

  - Explain that to create her public and private key, Julie will enter the following command:

      `gpg --gen-key`

  - Following this, Julie will be prompted to enter the following information:
      - Real name: What the user will name their key. We will use *Julie*.

      - Email address: The email associated with the key. We will use julie@email.com.

      - `Change (N)ame, (E)mail, or (O)kay/(Q)uit?`: Enter `O` to confirm your information.

      - Passphrase: A password to protect your private key. Any time the private key is used, the passphrase will be checked.
        - Select any passphrase, just take note of what it is, as it will be used later.

  - A similar message will appear to show that the key pair has been created:

    ```
      gpg: key D81710193A5FC56A marked as ultimately trusted
      gpg: directory '/home/instructor/.gnupg/openpgp-revocs.d' created
      gpg: revocation certificate stored as '/home/instructor/.gnupg/openpgp-revocs.d/C4A3CFC51B1318FFD4D2C291D81710193A5FC56A.rev'
      public and secret key created and signed

    ```

  - If Julie wanted to validate the keys that are created, she would enter the following command:

    `gpg --list-keys`

  - This would return all the keys that are in Julie's keyring, as it is possible to have more than one key. A keyring is simply the storage of multiple keys.

    - A sample key ring with one key could like like the following:

      ```      
      /home/instructor/.gnupg/pubring.kbx
      -----------------------------------
      pub   rsa3072 2019-12-11 [SC] [expires: 2021-12-10]
      C4A3CFC51B1318FFD4D2C291D81710193A5FC56A
      uid           [ultimate] julie <julie@email.com>
      sub   rsa3072 2019-12-11 [E] [expires: 2021-12-10]
      ```


- #### Step 2: Exporting and Importing Keys

  Remind the class that the sender of the message needs to have the receiver's public key to encrypt the message.

  Explain that Julie needs to **export** her public key to make it public, so Tim can use it.

    - Explain that exporting puts the public key in a format that can be shared and used to encrypt.

    - Julie would use the following command Julie to export her public key:

        `gpg --armor --output julie.gpg --export julie@email.com`

    - Break down the syntax:
      - `gpg`: The command to run GPG.
      - `--armor`: Puts the key in an ASCII format.
      - `--output julie.gpg`: Creates the public key in an accessible format. In this case, we named the key `julie.gpg`.
      - `--export julie@email.com`: References which key to use from the key ring. It is referenced by the email.


    - Run the command and point out that this just exported the public key in a format that can be shared.

    - To view the key, run the following command:

      - `cat julie.gpg`

    - Point out the results should resemble the following format:

        - Note: This is a shortened example.

        ```
          -----BEGIN PGP PUBLIC KEY BLOCK-----

          oCN2AghQUDgu5yBVAmPAx7hatvcMBR1X6NqJN4wStLB21OvHdgT2VbiHUtwkGvbJ
          Hsui9eTR7bBY1YgP8PcGFjeMZ5+C7E94uYeksbwMzFWGE79M3kqEi1tgkDZTN/T8
          8O31qQUgDCCbUnuvpW5pYJ2BconeNBHAZNKSKg+9U3DfCazRpky89be6W7WtjDGs
          iFo5PEjBTvCJJXHvDgn2W7I7U0MWO220gyCT/Ja/eKad5GKTeMjOC4ERTwvha0ON

          -----END PGP PUBLIC KEY BLOCK-----
        ```

  - Explain that for our scenario, Julie would put this public key on her website, or she could directly share it with Tim.

  Next, we will illustrate the steps that Tim needs to take:

  - First, once Tim gets this key and saves it in his current directory, he will need to **import** it into his key ring.

  - The command for Tim to import this key is:

    `gpg --import julie.gpg`

  - Run this command, and point out to confirm that Julie's key has been imported, the `list-keys` command can be run again:  

    `gpg --list-keys`

  - Show that the results display that Julie's public key was added to Tim's key ring.

    - Point out that Tim has not yet created any keys. We will do that later.

                pub   rsa3072 2019-12-03 [SC] [expires: 2021-12-02]
                39B2BD6C93E1E63E8C004183FE91AF7A7B4EC267
                uid   [ultimate] Julie <julie@email.com>
                sub   rsa3072 2019-12-03 [E] [expires: 2021-12-02]


- #### Step 3: Encryption

  Explain that Tim now has Julie's public key in his key ring, so he is ready to create a message and encrypt it.

    - Explain that Tim will want to create a file that will contain a message, so we'll use the following echo command to create a file called `Tims_plainmessage.txt`.

        `echo "Hi Julie, my bank account number is 2783492" > Tims_plainmessage.txt`

  - Explain that the next step is to use Julie's public key to encrypt `Tims_plainmessage.txt`.

  - Explain that we will use the following command:

      `gpg --armor --output Tims_encryptedmessage.txt --encrypt --recipient julie@email.com Tims_plainmessage.txt`

    - Break down the syntax:

      - `gpg`: The command to run GPG.
      - `--armor`: Puts the encrypted message in an ASCII format.
      - `--output Tims_encryptedmessage.txt`: Command for the output file, which creates the name of the encrypted file.
      - `--encrypt`: Tells GPG to encrypt.
      - `--recipient julie@email.com`: Tells GPG which public key to use, based on the email address of the key.
      - `Tims_plainmessage.txt`: Specifies for GPG which plaintext file to encrypt.

  - Run the command and explain that this just created a file that has ciphertext called `Tims_encryptedmessage.txt`.

    - Run a preview command to illustrate the file has now been encrypted:

        `cat Tims_encryptedmessage.txt`

    - Note that the encrypted message should look like the following:

        ```
        -----BEGIN PGP MESSAGE-----

        hQGMA1p4Le4c2oCaAQv+MT2ghzg9RYymSIxnbwe41LpOPx76mA9f6mQYZO77c/Ij
        u14kEgfaVM9PxxBw8KpEkg5NvmBVPAfxFbFrcLoKB8lVW8MTpp3mQ8r0257PNORK
        bQOC+HHktQN3AJrsgN/Oj4OduM+hMtnPUdWa0X7uOOKRFW9r5CbuYga134EzoHG3

        -----END PGP MESSAGE-----
        ```

- #### Step 4: Decryption

  Explain that the last step is for Tim to send his encrypted message over to Julie, so she can decrypt it with her private key.

    - Explain that once Julie receives Tim's encrypted message, she will save it in a directory and then run decryption commands against the file.

    - The command that Julie will use to decrypt Tim's encrypted message is:

      `gpg --output Tims_decrypted_message --decrypt Tims_encryptedmessage.txt`

    - Explain the syntax:

      - `gpg`: The command to run gpg.

      - `--output Tims_decrypted_message`: This creates an output file, which is the decrypted message.

      - `--decrypt Tims_encryptedmessage.txt`: This is indicating to decrypt and what file to decrypt.

    - Run the command. Explain that it just decrypted Tim's message and placed the results into a file called `Tims_decrypted_message`.

    - Preview the decrypted file by running:

      - `cat Tims_decrypted_message`

    - Illustrate that this shows that now Julie can see Tim's plaintext message:

      - "Hi Julie, my bank account number is 2783492."

  Summarize this demonstration by explaining the following:

  - This walkthrough illustrated the steps for asymmetric encryption and decryption.

  - While it may seem complicated at first, the best way to understand them is to apply them yourself.

  - In the next activity, students will get to apply these same asymmetric encryption and decryption steps with a partner.

  - A guide for the GPG commands will be provided to them for assistance.

  Answer any questions that remain before proceeding to the GPG activity.


### 09. Student Do: GPG Activity (0:20)

Explain the following to students:

- You continue to be security analysts working for the Hill Valley Police Department.

- Captain Strickland has implemented your suggestion of using asymmetric key encryption across all departments at Hill Valley.

- Captain Strickland believes that the Alphabet Bandit may actually be an insider at Hill Valley Police Department.

- They would like you to propose a way to catch the insider and communicate this to your partner.

Students have to:

  - Develop an idea to catch the insider.

  - Document the idea in a text file.

  - Use asymmetric encryption with GPG to encrypt the text file with their partner's public key.

  - Send it to their partner to decrypt with their private key.

- Students will also receive their partner's message and decrypt it with their own private key.

Emphasize to the students that the idea they select to "catch the insider" isn't very important, More important is that students focus on successfully using GPG.

:globe_with_meridians: This activity will use breakout rooms. Assign students back into their groups of 2 and move them into breakout rooms.

Send students the following files:

- [Activity File: GPG](activities/09_GPG/unsolved/readme.md)


### 10. Instructor Review: GPG Activity (0:05)


:bar_chart: Run a comprehension check poll before reviewing the activity. 


In this activity, students practiced using GPG to apply a real world application of public key cryptography, generating public and private keys, and encrypting and decrypting secret messages with the appropriate keys.

Completing this activity required the following steps:

  - Writing a new message titled `secret_idea.txt` using the command line.
  - Generating key pairs using GPG.
  - Exporting your public key using `armor`.
  - Sending your public key to your partner.
  - Encrypting your message using your partner's public key.
  - Sending the encrypted message to your partner.
  - Receiving your partner's encrypted message and decrypting it with your private key.

Send students the following file:

- [Solution Guide: GPG](activities/09_GPG/solved/readme.md)

#### Walkthrough

This solution is an example of how to encrypt and decrypt with GPG.

- The first step is to come up with any idea of how to capture an insider at the Hill Valley Police Department, and add it to a message in a file called `secret_idea.txt`.

  - You can use Vi, Nano, or echo to create this message.

- The next step is to generate your public key:

   - `gpg --gen-key`

- Validate your key has been generated:

   - `gpg --list-keys`

- To export the public key in ASCII format:

  - `gpg --armor --output <yourname>_key.gpg --export <youremail>`

- Update your name and the email you used for generating the key.

- Confirm the key has been generated by running:

  - `more [yourname]_key.gpg `

- It should look similar to the following:

   *Note: This is a shortened example.*


       -----BEGIN PGP PUBLIC KEY BLOCK-----

       oCN2AghQUDgu5yBVAmPAx7hatvcMBR1X6NqJN4wStLB21OvHdgT2VbiHUtwkGvbJ
       Hsui9eTR7bBY1YgP8PcGFjeMZ5+C7E94uYeksbwMzFWGE79M3kqEi1tgkDZTN/T8
       8O31qQUgDCCbUnuvpW5pYJ2BconeNBHAZNKSKg+9U3DfCazRpky89be6W7WtjDGs
       iFo5PEjBTvCJJXHvDgn2W7I7U0MWO220gyCT/Ja/eKad5GKTeMjOC4ERTwvha0ON

       -----END PGP PUBLIC KEY BLOCK-----


- Send your key over to your partner using Slack.

  - Note: You can send the whole file or copy and paste the message (including the `-----BEGIN PGP PUBLIC KEY BLOCK-----` and the `-----END PGP PUBLIC KEY BLOCK-----`).

  - If you receive text from your partner instead of a file, create a file called `partner_key.gpg`, add the whole message, and save the file.

- With your partner's public key, import by running the following:

  - `gpg --import [partner_key.gpg]`

- Encrypt your message with your partner's public key by running the following command:

  - `gpg --output [yourname]_secret_idea.txt.enc --encrypt --recipient [partner_key.gpg] secret_idea.txt`


- Send the encrypted file `[yourname]_secret_idea.txt.enc` to your partner.

 - When you receive your partner's encrypted file, save it in your local directory.

- Decrypt the encrypted message with the following command:

  - `gpg --output decrypted_message.txt --decrypt [your_partners_name]_secret_idea.txt.enc`

- Preview the decrypted message and confirm with your partner this is the message they sent.        

Please verify with students that they were able to create their gpg key as they will need it for tomorrow's activities. 

Answer any questions that remain before proceeding to the break.


### 11. Break:  (0:15)


### 12. Instructor Do: Hashing and Data Integrity (0:10)

Welcome students back from break and remind them that over the last several sections, we covered how cryptography can be applied to protect the privacy and confidentiality of data with symmetric and asymmetric encryption.

   - Explain to the students that cryptography can also be applied to protect the **integrity of data**.

     - For example, a police investigator wants to present to a court a computer file as evidence.

     - The police investigator will want to also prove the file hasn't been modified or tampered with since it was collected.

     - This is to prove to the court that the integrity of the data has been protected.

Explain that a cryptographic method for proving the integrity of data is **hashing**.

Explain that hashing, like encryption, uses mathematical algorithms, called **hashing algorithms**, to take data and generate a unique output.

We will explain how hashing works with a simple hashing demonstration.

  - Point out that we will use the following plaintext sentence:

     - I Love Cryptography!

  - When wee apply a **hashing algorithm** to this sentence, we get:

      - `676e4bff90a76853bda00773f7ad4bed`

  - Point out that this is an MD5 hashing algorithm, which will be covered shortly.

- Explain that at first glace, hashing may look similar to encryption, as you are unable to understand the resulting message.

Emphasize that it is important to understand that hashing and encryption actually have several significant differences:

1. Encryption takes plaintext and converts it to ciphertext with a key and an algorithm.

    - Hashing takes plaintext and converts it into a **message digest** with an algorithm and no key.

        - A message digest, also known as a fingerprint, hash, or checksum, is a unique identifier of the plaintext which is outputted from a hashing algorithm.

        - In the example, the message digest was `676e4bff90a76853bda00773f7ad4bed`.  

2. With encryption, plaintext gets converted into ciphertext, and then gets returned back to plaintext with decryption.

    - With hashing, once the plaintext gets converted into a message digest, it cannot be converted back into plaintext.

      - In other words, `676e4bff90a76853bda00773f7ad4bed` is irreversible, and can never be converted back to "I Love Cryptography!"

      - This is why hashing is called a **one way function**.

3. With encryption, the input can be any length and the output can be any length with a specific algorithm.

    - With hashing, the input can be any length and the output has a fixed length with a specific hashing algorithm.

4. The primary goal of encryption is privacy. The primary goal of hashing is integrity.

Explain how integrity is accomplished with hashing by covering the following:

  - If a small change is made to the sentence, the same hashing algorithm would produce a completely different message digest.

    - This would indicate the integrity of the data was compromised.

  - For example, if we add a second exclamation point to our sentence—`I Love Cryptography!!`—and apply the same hashing algorithm, the message digest would be significantly different, indicating the data had been modified:

    - `4e6fc433ff57a6c4a854cbbeff65f61a`

  - Point out the following:

    - `I Love Cryptography!`  = `676e4bff90a76853bda00773f7ad4bed`

    - `I Love Cryptography!!` = `4e6fc433ff57a6c4a854cbbeff65f61a`


Point out that while the above example shows a simple sentence, cybersecurity professionals apply the same hashing concept to much larger sets of data such as files, website code, emails, databases, and computer hard drives.

- In these larger sets of data, even the smallest change would result in a significantly different message digest.

Remind students that we covered that encryption has common algorithms, such as AES, DES, and RSA.

  - Explain that hashing has several hashing algorithms we should be familiar with, such as:

    - **SHA** (Secure Hash Algorithms), which include its successors, SHA1 and SHA2.

      - SHA2 has variations, with different security strengths: SHA-256 and SHA-512.

     - **MD** (Message Digest) has several variations: MD2, MD4, and MD5.

     - **LM** and **NTLM** are hashes used by Windows.

Explain that while each of these hashing algorithms have different mathematical formulas, they are all used to convert plaintext into a message digest.

  - Point out that the easiest way to get familiar with the behavior of the various hash algorithms is to use them!

#### Creating Hashes on the Command Line  

While these hashing algorithms have complex mathematical formulas, there are command-line tools that easily create message digests with a simple terminal command.

Explain that we will be using two command line tools to create hashes: `md5sum` and `sha256sum`.

- Point out that:

  - Running `md5sum` uses the MD5 hashing algorithm to create a message digest from a plaintext message.

  - Running `sha256sum` uses the SHA-256 hashing algorithm to create a message digest from a plaintext message.

Explain that we will apply these commands against a new file called `secretmessage.txt`.

  - First, create a basic message inside the file, such as: "This is my first hashing activity."

  - Run the following command:

    - `echo "This is my first hashing activity" > secretmessage.txt`

Explain that in order to create an MD5 message digest of the new file, we will use the following command:
  -  `md5sum secretmessage.txt > hashes.txt`

  - Break down the syntax:

    - `md5sum`: The terminal command to run the MD5 algorithm.
    - `secretmessage.txt`: The file to be hashed.
    - `> hashes.txt`: The output file where the message digest is placed.
      - Point out that this last command is optional. If removed, the message digest will display back on the command line.

- Run the command and point out that a file containing the message digest, called `hashes.txt`, has been created.

   - Preview the file by running:

     - `cat hashes.txt`

   - The results should show:

      - `bdbd28dbb5f51abb282ecd0b9daa3e69  secretmessage.txt`

   - Explain that this shows the message digest and the file where the message digest originated from.  

Explain that `md5sum` can also be used to check the integrity of the file.

  - In other words, it will check to see if the file has been modified since the message digest was created.

We will demonstrate how to do this by making a change to the `secretmessage.txt` file.

- Modify the `secretmessage.txt` file by overwriting it with the following command.

  - `echo "This is my second hashing activity" > secretmessage.txt`

- Explain that next we will run the `md5sum` check command to validate the integrity of the file.

    - `md5sum -c hashes.txt > md5check.txt`

  - Break down the syntax:

      - `md5sum`: The terminal command to run the MD5 algorithm.
      - `-c`: The option to have `md5sum` check the hashes.
      - `hashes.txt`: The file the check is being run against.
      - `> md5check.txt`: The output file where the results of the check are placed.

  - The command works by:

      - Looking in the `hashes.txt` file for the file name and associated message digest.

      - Running the MD5 hash again on the files in the current directory and checking to see if the message digests still match.

  - Run the command and point out that it immediately confirms that one of the message digests (or checksums) didn't match:

      - `md5sum: WARNING: 1 computed checksum did NOT match`

  - Preview the output file to confirm which file failed the check:

      - `cat md5check.txt`

  - Point out the results should clearly show the file that was modified:

      -  `secretmessage.txt: FAILED`

Explain that `md5sum` uses the MD5 hashing algorithm and the exact same steps can be accomplished with the SHA-256 algorithm by simply replacing:

  - `md5sum` with `sha256sum`

Summarize the concepts covered in the previous lesson and demonstration:

  - While encryption is used for confidentiality, hashing is used for integrity.

  - Hashing uses hashing algorithms to create message digests from plaintext.

  - A small change in the plaintext causes a significant change in the message digest.

  - Common hashing algorithms are SHA1, SHA2 and MD5.

  - `md5sum` and `sha256sum` are command-line tools used to create message digests and check the integrity of files.

Explain that in the next activity, students will use `md5sum` to check the integrity of several Hill Valley evidence files.

- Answer any questions that remain before proceeding to the hashing activity.


### 13. Student Do: Generating Hashes Activity (0:17)

Explain the following to students:

- We will continue to play the role of security analysts working for the Hill Valley Police department.

- Captain Strickland believes that the Alphabet Bandit, who is likely an insider, has been changing the investigation report files to throw off the investigation.

- Fortunately, the Hill Valley Police Department has backup files of all the investigation reports.

- Captain Strickland would like you to determine if any investigation report files have been changed, as well as _what_ was changed.

- Your task is to generate hashes of each backup and current file, and compare the hashes to determine which files were changed.

- You must then use command-line tools to determine the changes made to those files.

:globe_with_meridians: This activity will use breakout rooms. Assign students back into their groups of 2 and move them into breakout rooms.

Send students the following files:

- [Activity File: Generating Hashes](activities/13_Generating_Hashes/unsolved/readme.md)
- [Current and Backup Evidence Files](resources/Alphabet_Bandit_Investigation_Reports.zip)


### 14. Instructor Review: Generating Hashes Activity  (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the goal of this exercise was to use hashes to validate the integrity of data.  Students were tasked with generating MD5 hashes to determine which files were modified.

Completing this activity required the following steps:

  - Extracting investigation summary files.

  - Creating MD5 hashes for the investigation summary files in a single file.

  - Determining which of the files were modified by running the `md5sum -c` command.

  - Using the `diff` command to determine what was modified in the files.

Send students the following file:

- [Solution Guide: Generating Hashes](activities/13_Generating_Hashes/solved/readme.md)

#### Walkthrough

- Extract the investigation summary files.

- Navigate to the backup directory:

  - Run `cd /Alphabet_Bandit_Investigation_Reports/backup`

- Create a single hash file for all of the files:

  - `md5sum * > hashes`

- Preview the hash file:

    - `more hashes`

- The file should look like:

  ```    
  94d53dff0ba90e465fcf1e7b900ec843 *Investigation_1101
  abf9816ba8e141b301848e09038ed1f8 *Investigation_1108
  3edab292de508c37fc8aeb5fd973d54b *Investigation_1110
  609c6b71a2241e1b8f878c682d138c2d *Investigation_1112
  2147a20472c421f2b9af8250d742bbd1 *Investigation_1116
  ```

- Copy the hash file to the `current` folder:

   - `mv hashes ../current/`

- Navigate to the `current` folder:

  - `cd ..`
  - `cd current`

- Run the following command to compare the hashes from the backup folder and the current folder:

  - `md5sum -c hashes`

- The results should show clearly the two files are different (`Investigation_1101` and `Investigation_1110`):

  ```
  Investigation_1101: FAILED
  Investigation_1108: OK
  Investigation_1110: FAILED
  Investigation_1112: OK
  Investigation_1116: OK
  md5sum: WARNING: 2 computed checksums did NOT match
  ```

- Next, since we know which two files were modified, run the following `diff` commands to find out what was changed:

  - `diff Investigation_1101 ../Investigation_1101`
  - `diff Investigation_1110 ../Investigation_1110`

- The results should show:

  - `1101`:
      ```
      < Dr Browns Residence was burglarized, exotic car was taken as well as several containers of Plutonium.
        ---
      > Dr Browns Residence was burglarized, exotic car was taken as well as several containers of Gasoline
      ```
  - `1110`

    ```
      < Jennifer Parkers House was burglarized, mostly jewelry was stolen and significant damage occurred at the house
        ---
      > Jennifer Parkers House was burglarized, mostly jewelry was stolen and no damage occurred at the house
    ```      

- These outputs show the following changes:

  - In the `1101` file, the word  `Plutonium` was changed to `Gasoline`.

  - In the `1110` file, the word  `significant` was changed to `no`.

Answer any questions that remain, before sending your solution.        


### 15.  Instructor Do: Digital Signatures (0:10)

Explain to class that, so far, we have covered how the cryptographic process of encryption is used for confidentiality and the process of hashing is used to verify integrity.

- Explain to the students that cryptography can also be used to validate **authenticity**.

  - For example, an accounting representative at an organization receives a message from their CEO to wire funds immediately to a location in Asia.

  - The accounting representative needs to validate the message is authentic and actually from the CEO.

  - If the accounting representative wires the funds before finding out the message was from a scammer and thus inauthentic, this could have a significant financial impact on the organization.

- Explain that there is a cryptographic process used to verify authenticity that can assist with this example and much more, called **digital signatures**.

Introduce digital signatures by covering the following:

  - A digital signature is a mathematical scheme for verifying the authenticity of digital data.

  - While its primary purpose is for authenticity, it can also provide non-repudiation and integrity.

  - In the United States and several other countries, digital signatures are considered legally binding, similar to a standard signature.

Explain that, like asymmetric encryption, digital signatures also use public key cryptography, except digital signatures use public and private keys in reverse.

#### Digital Signature Walkthrough

Explain that we will illustrate how digital signatures work with public key cryptography with the following scenario:

Tim wants to send Julie a message that says "Transfer $500 to the account I provided to you." He also wants to digitally sign the message so Julie knows it originated from him and is authentic.

- **Step 1:  Key Creation**

  - We previously created a key pair for Julie, but we now will create a key pair for Tim.


- **Step 2: Creating the Message**  

  - Tim places his message in a file called `Tims_message.txt`.

- **Step 3: Signing the Message**

  - Tim signs the message with his private key to create a digital signature.

    **[`Tims_message.txt`]** signed with **[Tim's private key]** = **[Tim's digital signature]**

  - Emphasize that this step is critical to understand:

     - Encryption uses the recipient's public key to encrypt.   

     - Digital signatures use the sender's private key to sign.

- **Step 4: Sending the Message and Signature**  
  - Tim sends the digital signature to Julie along with his plaintext message.

      - Julie will receive **[`Tims_message.txt`]** and **[Tim's digital signature]**

- **Step 5: Validating the Signature**

  - After Julie receives Tim's digital signature and Tim's message, she will grab Tim's public key from Tim's website to validate the signature.

    - **[Tim's digital signature]** + **[`Tims_message.txt`]** validated with **[Tim's public key]**  

  - Julie will use a signature validation program, such as GPG, to validate the message is authentic based on the signature.

  - The program will either:

      - Confirm the message is authentic and came from Tim.
      - Deny, if the message is inauthentic and didnt come from Tim.

Illustrate that this scenario shows how digital signatures can be also used for integrity and non-repudiation:

 - Integrity: If Tim's message was modified, the digital signature validation would fail.
 - Non-Repudiation: Tim would not be able to deny he was the one who signed the message.

Explain that this walkthrough illustrates one of the ways digital signatures can be used to verify a message's authenticity. This method is called a **detached signature**.

  - It is called a detached signature because the message and the signature are sent separately and not attached to each other.

- Other digital signature methods can include:

    - **All at once**, referring to a signature appended to an encrypted message.

    - **Clearsigned**, referring to a signature appended to an unencrypted message.

    - **Signed hash**, meaning that instead of signing a message, a hash is created first and the hash is signed for verification.

Explain that the next section will demonstrate how to utilize GPG to apply a detached digital signature method.

  - Ask the class if they have any questions before proceeding to the next lesson.

### 16. Instructor Do: Signing with GPG (0:10)

Remind the class that we previously explained that the best way to understand these cryptography concepts is to apply them.

Explain that in the next demonstration, we will illustrate how to apply a detached digital signature with the same GPG program used for GPG asymmetric encryption.

  - Explain that we will conduct this demonstration with the scenario of Tim signing a message for Julie stating: "Transfer $500 to the account I provided to you."

#### Walkthrough

- **Step 1: Key Creation**

  - Explain that since we've only created a key pair for Julie, we will now create one for Tim with the same commands:

    - `gpg --gen-key`

  - After pressing Enter, Tim will be prompted with the same questions:

     - Real name: What the user will name their key. We will use *Tim Doe*.

     - Email address: The email associated with the key. We will use tim@email.com.

     - `Change (N)ame, (E)mail, or (O)kay/(Q)uit?`: Enter `O` to confirm your information.

     - Passphrase: A password to protect your private key. Any time the private key is used, the passphrase will be checked.
       - Select any passphrase, just take note of what it is, as it will be used later.

  - Tim will also export his public key with the following command:

    - `gpg --armor --output tim.gpg --export tim@email.com`

  - Explain that Tim will put his public key, `tim.gpg`, on his website for anyone to use.    

- **Step 2: Creating the Message**

  - Tim will place his message in a file called `Tims_message.txt`.

    - Run the following command to create the file containing the message:

      `echo "Transfer $500 to the account I provided to you" > Tims_message.txt`

- **Step 3: Signing the Message**

  - Next, Tim will sign the message with his private key to create a detached digital signature.

      - Type and explain that we will use the following command to sign the message:

        - `gpg --output Tims_signature --armor --detach-sig Tims_message.txt`

      - Bread down the syntax:

        - `gpg` runs the GPG command.
        - `--output Tims_signature` specifies the output file that contains the digital signature.
        - `--armor` outputs the signature in an ASCII format.
        - `--detach-sig Tims_message.txt` specifies that a detached signature will be created against the file `Tims_message.txt`.

- Run the command and point out that since digital signatures automatically use your private key, GPG will prompt you to put in the password used to create your key pair.

- Enter the password and explain that a separate digital signature called `Tims_signature` has just been created.

  - Preview the Signature by running the following command:
      `cat Tims_signature`

- Point out the signature should look like the following:  
  ```
        -----BEGIN PGP SIGNATURE-----

        iQGzBAABCgAdFiEEObK9bJPh5j6MAEGD/pGventOwmcFAl3pGKoACgkQ/pGventO
        wmdPfQv8CigGztcvrdbZrJVr91mPiLL5cry7nKYDAsRqkyIDltiJMxtggVbCtSPm
        YLfqZATWYofBWdE4wkpmeYE96gXTeJP4VVNUpwnshg1A1q0att10S+rlv6N73g4V

        -----END PGP SIGNATURE-----
  ```

- **Step 4:  Sending the Message and Signature**  

  - Tim will send the digital signature file to Julie along with his plaintext message.

  - Julie will receives `Tims_signature` and `Tims_message.txt`.

  - Julie needs to place both files in the directory where she is running the verification.


- **Step 5: Validating the Signature**

  - After Julie receives Tim's digital signature and Tim's message, she will grab Tim's public key from Tim's website to validate the signature.

  - For Julie to verify Tim's message, Julie will need to import Tim's public key that she got from Tim's website with the following command:

      - `gpg --import tim.gpg`

  -  For Julie to validate Tim's signature, the following command will be run:

     - `gpg --verify Tims_signature Tims_message.txt`

  - Run the command and illustrate that it will verify that the signature is valid:

    ```
    gpg: Signature made Thu 05 Dec 2019 09:48:10 AM EST
    gpg:                using RSA key 39B2BD6C93E1E63E8C004183FE91AF7A7B4EC267
    gpg: Good signature from "Tim <tim@email.com>" [ultimate]
    ```

Explain that we will now illustrate how digital signatures with GPG can be used to not only validate the authenticity, but also the integrity.

- **Step 1: Modifying the Message**

  - We will run the following command to modify the amount of money specified in the message:

    `echo "Transfer $34,547 to the account I provided to you" > Tims_message.txt`

- **Step 2: Validating the Signature Again**

  - Run `gpg --verify Tims_signature Tims_message.txt`

  - Point out that this now clearly shows the the signature failed.

    ```    
    gpg: Signature made Thu 05 Dec 2019 09:48:10 AM EST
    gpg:                using RSA key 39B2BD6C93E1E63E8C004183FE91AF7A7B4EC267
    gpg: BAD signature from "Tim <tim@email.com>" [ultimate]
    ```

Explain that this walkthrough illustrated how to do a detached digital signature. There are other methods of digital signatures that can also be accomplished with GPG.

  - If students are interested in learning other digital signature methods, they can visit [The GNU Privacy Handbook entry on making and verifying signatures
](https://www.gnupg.org/gph/en/manual/x135.html).

Summarize the concepts covered in the previous lesson and demonstration:

- While encryption is used for confidentiality and hashing is used for integrity, digital signatures are used for authentication, non-repudiation, and integrity.

- A digital signature is a mathematical scheme for verifying the authenticity of digital data.

- Like encryption, digital signatures also use public key cryptography.

  - However, in the case of digital signatures, a user uses their own private key to sign a document, and the public key would be used by other users to validate the signature.

- There are several types of digital signatures available: detached signatures, all at once, and clearsigned.

- GPG is a command-line tool which can apply these digital signature methods.

Explain that in the final activity, students will use GPG to validate clearsigned digital signatures from Captain Strickland.

Answer any questions that remain before proceeding to the final activity.   


### 17. Student Do: Digital Signatures Activity (0:20)

Explain the following to students:

- You will continue to play the role of security analysts working for the Hill Valley Police Department.

- Captain Strickland has sent you several more urgent messages about the Alphabet Bandit case.

- It's quite likely that one of the messages was sent by the Alphabet Bandit pretending to be Captain Strickland to throw off the investigation.

- Your task is to use GPG to determine which of the messages is not authentic.

:globe_with_meridians: This activity will use breakout rooms. Assign students back into their groups of 2 and move them into breakout rooms.

Send students the following files:

- [Activity File: Digital Signatures](activities/17_Digital_Signature_Activity/unsolved/readme.md)
- [Messages from Captain Strickland](resources/Stricklands_messages.zip)
- [Captain Strickland's Public Key](resources/strickland_publickey.gpg)


### 18. Instructor Review:  Digital Signatures Activity (0:05)

:bar_chart: Run a comprehension check poll before reviewing the activity. 

Remind students that the point of this exercise was to illustrate how digital signatures can be used to validate authenticity.  Students were tasked with validating signatures with GPG to determine authenticity.

Completing this activity required the following steps:

  - Extracting messages from Captain Strickland.

  - Importing a public key.

  - Using GPG to verify the authenticity of a message.

Send students the following file:

- [Solution Guide: Digital Signature](activities/17_Digital_Signature_Activity/unsolved/readme.md)

#### Walkthrough

- First, extract the messages from Captain Strickland.

- Next, import Captain Strickland's public key with the following command:

  - `gpg --import strickland_publickey.gpg`

- After importing the public key, verify each clearsigned message with the following commands:

  - `gpg --verify message1.sig`
  - `gpg --verify message2.sig`
  - `gpg --verify message3.sig`

- This will clearly show that `message1` and `message2` are authentic:

  ```
  gpg: Signature made Mon, Nov 25, 2019  2:17:27 PM EST`
  gpg:                using RSA key 4C0E98AC34FF09005EF0451899DDD0570ABED677`
  gpg: Good signature from "strickland <strickland@hillvalleypd.com>" [ultimate]`
  ```       

- This will also show that `message3` is not authentic and likely forged:

  ```
    gpg: CRC error; E606B8 - 74217B
    gpg: no signature found
    gpg: the signature could not be verified.
    Please remember that the signature file (.sig or .asc)
    should be the first file given on the command line.
  ```

Answer any remaining questions before dismissing class.

-------

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
