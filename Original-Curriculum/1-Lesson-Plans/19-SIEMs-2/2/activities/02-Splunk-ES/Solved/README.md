## Solution Guide: Splunk ES 

In this activity, you were tasked with setting a security investigation and analyzing one of the detected security events.

--- 

Since students will be selecting different events and Splunk Enterprise Security pulls from a live cloud, the data returned and answers to the question  will vary.
 - Below is an example for creating an investigation for a Brute Force event
 
1. To create an investigation:
   - Select **Investigation**.
   - Select **Create New Investigation**.
   - Title the investigation "Brute Force Investigation." The description can also be "Brute Force Investigation."
	 - Set Status to **New**.
   - Save.
   
2. Access the Security Posture page and select the notable event titled Brute Force Access Behavior Detected.
  
3. Select the top brute force event on the Incident Review page:
    - Under Actions select **Add Event to investigation**. 
      - Select **Brute Force Investigation**.
      - Save.

4. Return to the Incident Review page.
  - Select the event, and select "Edit Selected"
     - Set urgency to **High**.
     - Set owner to **Splunk Cloud Admin**.
     - Set status to **New**.
     - Save.
     
5. To answer the question:

    - This indicates that this event was labeled a suspicious brute force attempt event due to the amount of failed authentications compared to successful authentications over the last hour.

---
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
