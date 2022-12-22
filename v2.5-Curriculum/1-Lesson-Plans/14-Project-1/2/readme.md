## 14.2 Lesson Plan: Secure Web Applications with SSL Certificates

### Overview

Today, students will be tasked with **securing** their web application with SSL certificates. This day will incorporate topics from the Cryptography and Terminal modules.


### Instructor Notes

- Today does not include specific times for individual lectures and activities, but you should follow the day-by-day breakdown.

- Be sure to keep an eye out for students who miss any days of the project. Notify those students that they will need to catch up on any missed work as each day's activities need to be completed in order.

- Based on the domain option the students selected in the previous class, the students will follow a daily guide that outlines the steps for today's portion of the project.

- To learn about different SSL certificates, students will first create and install a self-signed certificate, understand its disadvantages, and then replace it with an Azure-managed certificate. 


### Lab Environment

Students will continue using their personal Azure accounts and building upon their existing Azure VMs. They will **not** use their Cyberxsecurity accounts.

### Additional Resources



### Slideshow

The slideshow for today's class is located on Google Drive here: [Project 1 Day 2 Slides](https://docs.google.com/presentation/d/1oVZOpuc0D0s5LQwBW9fjpkReg_5cB3FGA-8h06b3Utc/edit#slide=id.g4789b2c72f_0_6).

---

## Day 2: Securing Your Web Application with SSL Certificates


### 01. Instructor Do: Welcome and Project Day 2 Overview  

Welcome students to class and explain that today is the second day of **Project Week 1**.

  - Remind students that in the last class, they completed the following deliverables for the first day of Project 1:
    - Used Microsoft Azure to create a web app.
    - Chose a unique domain from one of two cost options.
    - Deployed a Docker container on their web app.
    - Designed their custom web application.
    - Answered review questions.

Emphasize that students must complete the above steps before proceeding with today's activities.  

   
⚠️ **Important** ⚠️
   
   - Students can choose to work on their projects independently or in groups, but they are **required** to remain in class (online or in person).
   - Each day's lessons build on the previous day, so each day's activities are required to be completed **in order**.


#### Today's Class

Let students know that the rest of today's class will proceed as follows:

- Introduction to Azure Key Vaults
- Overview of tasks students will complete on Day 2
- Project work: working through the project steps to protect their web application

Take a moment to address questions before proceeding.

### 02. Instructor Do: Azure Key Vaults

Begin by explaining to the class that when administrators manage cloud services such as web applications, these admins need to maintain lots of information securely, such as:
  - Passwords 
  - Cryptographic keys
  - API keys
  - SSL certificates

Explain that it is imperative to store this information securely, accessible only by specific individuals, and to manage it in a central location.

- Fortunately, Microsoft Azure can accomplish these tasks with the **Azure Key Vaults**.

Per [Microsoft](https://azure.microsoft.com/en-us/services/key-vault/#product-overview), Azure Key Vault is defined as:
- "*A cloud service for securely storing and accessing secrets. A secret is anything that you want to tightly control access to, such as API keys, passwords, certificates, or cryptographic keys.*"

Explain some of the following benefits of using Azure Key Vaults:
 - Azure Key vaults can store secret information in a single central location.
 - Key Vault secrets can be given access policies either by user or by application.
 - Secret information from the key vault can be accessed from other cloud resources.
    - Note that today you will access SSL certs from your key vault to bind to your web application.
 - Certificates and keys can be imported or directly generated from within the key vault.

Explain that in today's class, we will create an Azure Key Vault and utilize it to store an SSL certificate.
  - Remind the class that during our cryptography module we covered how SSL certificates are used to validate the authenticity of a web application and additionally assist with encrypting the user's traffic between the client and the server.

Today, we will create and bind two types of SSL certificates to the students' web applications and explore the advantages and disadvantages of each certificate.

 - Ask the class if they have any questions before proceeding to the Day 2 overview.
  

### 03. Instructor Do: Day 2 Project Overview

Now that students are familiar with Azure Key Vaults, we will cover what they will do on Day 2 of their project. 
- You will shortly provide students with a guide containing five steps:
  - (1) - **Create a Key Vault**.
  - (2) - **Create a self-signed certificate**.
  - (3) - **Import and bind your self-signed certificate to your web app**.
  - (4) - **Create and bind an app service managed certificate**.
  - (5) - **Answer review questions**.

Explain the following five steps in detail:

####  (1) - Create a Key Vault

Students will soon be provided a document with the steps required to complete the Day 2 activities.

 - Today's first step will be to create an Azure Key Vault.

 - Remind the class to continue using their same subscription and resource group from the previous class.

####  (2) - Create a Self-Signed Certificate

Next, explain that students will return to the command line and revisit a tool they used during the cryptography week: **OpenSSL**.

- Remind the class that during cryptography week, we used OpenSSL to generate a symmetric key and initialization vector.

During today's project, students will use OpenSSL from the command line to generate a certificate called a **self-signed certificate**.

  
####  (3) - Import and Bind Your Self-Signed Certificate to Your Web App

Explain that after students have created their **self-signed certificate**, they will next import their certificate into their Azure Key Vault.
  - Following this, students will use the TLS/SSL feature inside their web application to bind their **self-signed certificate** to their web application.

Students will then view the certificate that they added directly on their browser, and analyze the security risks with their new certificate.

 - ⚠️ **Important** ⚠️ If students chose a free domain, they will not be able to bind any certificate to their web application since one has already been provided by Azure. Their daily guide will provide them with a theoretical exercise.

####  (4) - Create and Bind an App Service Managed Certificate

Explain that based on the security risks students have determined, they will now use Azure's services to add a more secure certificate, an **app service managed certificate**, directly to their web application.


####  (5) - Answer review questions

Explain that like Day 1's activities, Day 2's activities will conclude with several review questions about their project and the domains covered up to this point in the class.

- Encourage students to use any resources available (e.g., class notes, slides, online resources) to answer these questions.

Ask the class if they have any questions before proceeding to the student activity.

### 04. Student Do: Secure Your Web Application with SSL Certificates

For the remainder of today's class, students will work on completing the Day 2 tasks for their projects.

Remind the students of the following before they start:
  - While each student is responsible for completing their own project, they can use their classmates, TA, or the instructor to assist if they have any questions.
  - Today's milestone is to **add an SSL certificate to their web application**.
  - Remind students to use the guide for the domain cost that they selected in the prior class (free domain or paid domain)

Send out the following two student guides. Note that the two paid methods will use the same directions today. The free azure domain will use a different set of instructions. Remind the class to use the one that matches the domain option they selected in Day 1.

- [Day 2 Guide Using Free Domain ](Activities/Day2_azure_free_domain.md) 

- [Day 2 Guide Using Paid Domains](Activities/Day2_paid_domains.md)

Additionally, provide the following resource to assist with their project:

- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)


### 05. Instructor Do: Class Conclusion

Congratulate the students for completing the Day 2 activities for their first project!

- Point out the following:
  - If the students didn't complete all of the required steps, they can continue with them on Day 3 (remind them that all activities must be completed in order).
  - On the next day of our project, students will **protect** their web applications with Azure's Cloud security features.

Ask the class if they have any final questions before concluding the class.


---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
