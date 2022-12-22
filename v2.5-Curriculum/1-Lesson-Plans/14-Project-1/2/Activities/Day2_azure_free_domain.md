# Day 2 Activity File: Secure Your Web Application with SSL Certificates (Azure Free Domain Version)

Today, you will secure your web application. Specifically, you will:

  - (1) **Create a key vault**. 
  - (2) **Create a self-signed certificate**.
  - (3) **Analyze a self-signed certificate**.
  - (4) **Analyze a trusted certificate**.
  - (5) **Answer review questions**.


⚠️ Note: Since you selected a free Azure domain, Azure will provide a trusted certificate for your domain. You will analyze the difference between self-signed and trusted SSL certificates.

### Resources

- [Azure Key Vaults](https://azure.microsoft.com/en-us/services/key-vault/#product-overview)
- [What is a self signed certificate?](https://sectigostore.com/page/what-is-a-self-signed-certificate/)
- [Binding Certificates in Azure](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings#bind-your-ssl-certificate)
- [Azure App Service Managed Certificates](https://azure.microsoft.com/en-us/updates/secure-your-custom-domains-at-no-cost-with-app-service-managed-certificates-preview/)
- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- If Microsoft Support is needed, visit [How to open a support ticket](https://docs.microsoft.com/en-us/azure/azure-portal/supportability/how-to-create-azure-support-request)


---

### Getting Started/Prerequisites

Before you begin Day 2, you are required to have completed the following tasks from Day 1:

- Created your own web application.
- Created your own unique domain name.
- Deployed a Docker container to your web application.
- Customized your web application with your own unique content.

## Instructions

### Part 1: Create a Key Vault

In this first part, you will create an Azure key vault. To do so, complete the following steps:


1. Begin by logging in to the Azure portal: [https://portal.azure.com](https://portal.azure.com).

	 - Make sure that you're logged in to your personal Azure account (not @Cyberxsecurity), where your Cloud Security&ndash;unit VMs are located.
	
2. Select "Key vaults" from the Azure search field at the top of the page, as the following image shows:

      ![A screenshot depicts the "Services" menu with "Key vaults" highlighted.](../Images/project1_day2_1.png)
 
3. Select "+ Create" from the Key Vault page to create your key vault, as the following image shows:

      ![A screenshot highlights the "+ Create" button.](../Images/project1_day2_2.png)
 
4. On the "Create key vault" tab, make the following selections:
   - Subscription/Resource Group: Select the same subscription and resource groups that you selected on Day 1.
   - Key Vault Name: Choose a key vault name, such as `project1-KeyVault`. (Note: This name must be globally unique, so you will be prompted to choose a different name if the one you enter has been used before.)
   - Region: Select the same region that you selected on Day 1.
   - Pricing tier: Select the "Standard" tier.
   - Leave the default options for all of the other tabs (Access Policy, Networking, Tags).
  
   The following image shows the completed "Create key vault" tab:

   ![project1_1_day2_3](../Images/project1_day2_3.png)
  
   - Finally, select "Review + Create" to create your key vault.

5. After your key vault has been created, select your new resource to view your new key vault.

6. Preview the options available on your key vault to store secure information, including:
   - **Keys**
   - **Secrets**
   - **Certificates**

   The following image shows these options:

    ![A screenshot highlights the "Keys," "Secrets," and "Certificates" options.](../Images/project1_day2_4.png)



### Part 2: Create a Self-Signed Certificate

In this second part, you will return to the command line to create a self-signed certificate using OpenSSL. To do so, complete the following steps:

1.  From your Azure portal, access the same Cloud Shell that you accessed on Day 1 to load the Docker container, as the following image shows:

      ![A screenshot highlights the Cloud Shell icon.](../Images/project1_12.png)

     - From this command line, you will now use the open source cryptography and SSL/TLS "toolkit" **OpenSSL** (it is preinstalled).
         - Recall that during Cryptography week, we used OpenSSL to generate keys and an IV to encrypt a message.

2. Next, you will use OpenSSL to generate a **self-signed certificate**.
     - A self-signed certificate is a certificate that has not been signed by a certificate authority.
     - These certificates are simple to create and have no expense.
     - We will explore their advantages and disadvantages in today's review questions.

3. From the command line, enter the following command: `openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout <privatekeyname.key> -out <certificatename.crt> -addext "extendedKeyUsage=serverAuth"`
     - For example: `openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout project1-key.key -out project1-cert.crt -addext "extendedKeyUsage=serverAuth"`
     - The following image shows this step:
      
        ![A screenshot depicts the command line with the command entered.](../Images/project1_day2_5.png) 
 
     - We added the following options: 
         -  **-x509**: Indicates for OpenSSL to create an SSL certificate.
         -  **-sha256**: Uses the sha256 hashing algorithm.
         -  **-nodes** 
         -  **-days 365**: States the certificate will be valid for one year.
         -  **-newkey rsa:2048**: Uses a 2048-bit RSA key.
         -  **-keyout project1-key.key**: The outputted name of the private key.
         -  **-out project1-cert.crt**: The outputted name of the certificate.
         -  **-addext "extendedKeyUsage=serverAuth"**: Indicates how a public key can be used.

     - Refer to the following [document](https://wiki.openssl.org/index.php/Command_Line_Utilities) for additional information on OpenSSL options.

4. After pressing Enter, you will be asked several questions about your certificate. Answer the following:

      - **Country Name (2 letter code) [AU]**: Enter your country.
      - **State or Province Name (full name) [Some State]**: Enter your state.
      - **Locality Name (e.g., city) [ ]**: Enter your city.
      - **Organization Name (e.g., company) [Internet Widgits Pty Ltd]**: Enter "Student".
      - **Organizational Unit Name (e.g., section) [ ]**: Leave blank by pressing Enter.
      - **Common Name (e.g., server FQDN or YOUR name) [ ]**: Enter your full domain name, such as "bobsblog.com".
      - **Email Address [ ]:** Leave blank by pressing Enter.

      The following image shows this step:

      ![A screenshot depicts the command line with the questions filled out.](../Images/project1_day2_6.png) 

5. Now, view your newly created key (`.key`) and certificate (`.crt`) by running `ls`, as the following image shows:

      ![A screenshot depicts the `ls` command and its output.](../Images/project1_day2_7.png) 

      -  Note that Azure requires a PFX format for its certificates.
          - The PFX format is the server certificate and the private key combined into a single encrypted file. 

6. To create a PFX format, run the following command: `openssl pkcs12 -export -out <new_certificatename.pfx> -inkey <keyname.key> -in <certificename.crt>`
     - For example: `openssl pkcs12 -export -out project1-cert.pfx -inkey project1-key.key  -in project1-cert.crt`

     - We added the following options:
         -  **pkcs12**: Indicates for OpenSSL to create a PFX certificate.
         -  **-export -out project1-cert.pfx**: States what to name the PFX file.
         -  **-inkey project1-key.key**: This is the current private key that you are importing.
         -  **-in project1-cert.crt**: This is the current certificate that you are importing.

7. After pressing Enter, you will be prompted for a password to encrypt your PFX key.
     - Don't forget your password, as you will be prompted for it again shortly!
     - The following image shows this step:

      ![A screenshot depicts the "Enter Export Password" prompt.](../Images/project1_day2_8.png) 

8.  View your new PFX certificate by running `ls`, as the following image shows:

      ![A screenshot depicts the `ls` command and its output.](../Images/project1_day2_9.png) 
 
9.  To download your new PFX certificate, complete the following four steps:
     - (1) Click the "Upload/Download" icon in the toolbar above your Cloud Shell window.
     - (2) Select "Download."
     - (3) Enter the name of your PFX certificate in the "Download a file" window.
     - (4) Click "Download." 
     
     The following image shows these steps:

      ![A screenshot highlights each step in the process.](../Images/project1_day2_10.png) 


### Part 3: Analyze a Self-Signed Certificate

In this part, you will use Azure to import and analyze self-signed certificates. To do so, complete the following steps:

1. From the Azure Portal, select "Key Vaults."
     - Select the key vault that you created in Part 1.

2. From your key vault, select "Certificates" and then "+ Generate/Import," as the following image shows:

      ![A screenshot highlights the "Certificates" and "+ Generate/Import" options.](../Images/project1_day2_11.png)
 
3. On the "Create a certificate" page, select the following:
      - **Method of Certificate Creation**: Import
      - **Certificate Name**: project1PFX-cert
      - **Upload Certificate File**: Select your PFX certificate (it's likely in your `Downloads` folder)
      - **Password**: Enter the password that you created in Part 2

      The following image shows these steps:

      ![A screenshot depicts the filled out "Create a certificate" page.](../Images/project1_day2_12.png)


4. Select "Create" to upload your certificate.
      - The following success message should appear to confirm that your PFX certificate has been uploaded to your key vault:

      ![A screenshot depicts the success message.](../Images/project1_day2_13.png)

 
5. ⚠️ Normally, after uploading a certificate, you would add it to your web application. Since you have selected the free domain option and Azure has already provided a certificate, you will instead analyze a mock self-signed certificate.

6. Navigate to the following webpage: https://self-signed.badssl.com/.
     - This webpage represents how your application would operate if you had added your self-signed certificate to it.
     - Did your browser return an error like the one shown in the following image?

      ![A screenshot depicts an error message.](../Images/project1_day2_20.png)

     - Note that this image is from the Chrome browser; the message may look slightly different depending on your browser.

7. Let's examine this webpage's certificate. Click "Not secure" in the search bar if you are in Chrome, or a similar message depending on your browser, as shown in the following image:

      ![A screenshot highlights the "Not secure" message in the search bar.](../Images/project1_day2_21.png)

     - After selecting "Not secure," select "Certificate (Invalid)" from the menu to examine the certificate.
     - Note the reason for the error based on the message on the certificate. This is due to the fact that the certificate was not created by a trusted CA&mdash;it would have been created by you.


|:warning: **Checkpoint** :warning:|
|:--|
|Before continuing, make sure that you have completed the following critical tasks:|
| :heavy_check_mark: Created your Azure key vault. |
| :heavy_check_mark: Created a self-signed certificate using Open SSL. |

	
### Part 4: Analyze a Trusted SSL Certificate

In this part, you will analyze a trusted SSL certificate. An advantage of using Azure's free domain, "azurewebsites.net," is that Microsoft provides the secure SSL certificate. To analyze this certificate, complete the following steps:

1. Open a browser, and access the domain that you created on Day 1 (*webpage@azurewebsites.net*).
     - Did you encounter any errors, like you did with the self-signed certificate?
2. Click on the lock icon in the top left of your browser (the left-hand side of the search bar) to analyze your certificate and its details.

You will answer review questions about your certificate in the next part of the activity.
 

### Part 5: Answering review questions

- Open your copy of the [review questions](https://docs.google.com/document/d/1VoWNPNUvobnVj7F6oM2wnVO0vViaZlzgIUs43adVw1U/edit?usp=sharing), make a copy of the document, and answer the Day 2 review questions.   
     - Note that you will submit this document as one of your deliverables at the end of the project.

---

### Day 2 Milestone

In today's class, you:
  - (1) **Created a key vault**. 
  - (2) **Created a self-signed certificate**.
  - (3) **Analyzed a self-signed certificate**.
  - (4) **Analyzed a trusted certificate**.
  - (5) **Answered review questions**.


Completing these steps required you to leverage your terminal, systems administration, cloud, cryptography, and networking skills. This is an impressive set of tools to have in your toolkit!

---

© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
