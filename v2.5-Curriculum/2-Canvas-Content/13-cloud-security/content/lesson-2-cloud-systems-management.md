## Lesson 2: Cloud Systems Management 
 
### Overview

Today's class will introduce containers, provisioners, and a working concept of **infrastructure as code**.
 
### What You’ll Learn
 
By the end of today’s class, you’ll be able to:
 
- Access your entire VNet from your jump box.

- Install and run containers using Docker.

- Set up Ansible connections to VMs inside your VNet.

### Today’s Activities

* **Cloud Architecture**: In this option, you'll choose the best network options for each of several scenarios.

* **Jump Box Administration**: In this activity, you will configure a virtual machine on your network as a jump box that you will connect to and use to configure other machines that will be added to the network. You will need to create a security group rule to allow SSH connections only from your current IP address and connect to your new virtual machine for management.

* **Containers**: In this activity, you will configure your jump box to run Docker containers and then install a container.

* **Provisioners**: In this activity, you will launch a new VM from the Azure portal that can only be accessed using a new SSH key from the container running inside your jump box.
