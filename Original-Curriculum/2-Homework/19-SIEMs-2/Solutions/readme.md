
## Unit 19 Homework Solution Guide: Protecting VSI from Future Attacks

### Part 1: Windows Server Attack

Note: This is a public facing windows server that VSI employees access.
 
#### Question 1
- Several users were impacted during the attack on March 25th.
- Based on the attack signatures, what mitigations would you recommend to protect each user account? Provide global mitigations that the whole company can use and individual mitigations that are specific to each user.
  

**Solution:** 

Solutions will vary. Emphasis should be placed on student's ability to justify their strategies.  
		
- A global mitigation can be setting up whitelisting to only allow certain user's based on their source IP Addresses.
		
Individual solutions include
	
- User_K: An attempt was made to reset an accounts password.

	- For user_K, there were many automated attempts to reset the users password, but the logs show no evidence that there was any success by the attacker in resetting the password or getting access into their account.

	- A mitigation could be to temporarily set up alerts with lower thresholds applied specifically to user_k to see if password resets occur again.
	
		
- User_J: An account was successfully logged on.
			
	- This appears to be the most concerning activity, as the attacker seems to have User_J's correct password.
			
	- The first mitigation would be to change User_J's password. Alerts with lower thresholds could be applied specifically to user_j to see if automated logins or attempted logins occur again.
		
- User_A : A user account was locked out.
		
   - This activity would indicate the attacker may be trying to brute force their way into user A's account. However, they don't have the correct password.
		
   - User_A should change their password to something very complex password to remove any possibility that the attacker can access their account.

   - If the account continues to be locked out and becomes a nuisance to user_A, VSI could change User_A's username.
  
  
#### Question 2
- VSI has insider information that JobeCorp attempted to target users by sending "Bad Logins" to lock out every user.
- What sort of mitigation could you use to protect against this?
  

**Solution:** 

Solutions will vary. Emphasis should be placed on student's ability to justify their strategies.  

- One method to prevent many VSI users from being locked out is to set up a time-based lockout.

- Therefore, if an attacker tried to lockout a user, after a period of time such as 4 hours, the user would automatically become unlocked.
  
### Part 2: Apache Webserver Attack:

#### Question 1
- Based on the geographic map, recommend a firewall rule that the networking team should implement.
- Provide a "plain english" description of the rule.
  - For example: "Block all incoming HTTP traffic where the source IP comes from the city of Los Angeles."
- Provide a screen shot of the geographic map that justifies why you created this rule. 
	
**Solution:** 
- Since the primary attacks are coming from several cities in the Ukraine, a rule would be:

	- "Block all incoming HTTP traffic where the source IP comes from the country of Ukraine"

- The screen shot should display multiple cities within Ukraine have activity.

#### Question 2

- VSI has insider information that JobeCorp will launch the same webserver attack but use a different IP each time in order to avoid being stopped by the rule you just created.

- What other rules can you create to protect VSI from attacks against your webserver?
  - Conceive of two more rules in "plain english". 
  - Hint: Look for other fields that indicate the attacker.
  	
#### Solution:**

- Two fields that could be used to identify the attacker are `user_agent` and `bytes`. 

- Rules that could be designed to stop further attacks include

	- "Block all incoming HTTP traffic where the useragent is "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 2.0.50727987787; InfoPath.1)."

	- "Block all incoming HTTP traffic where the bytes count is 65748."
          

---          
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

