# Module 12 Challenge

## Module 12 Challenge <assignment>

### Web Development

In this Challenge assignment, you'll review many of the concepts and tools that we covered in the Web Development module. If needed, feel free to use the following reference sheets:

* [HTTP Reference Sheet](https://docs.google.com/document/d/114kp6IsNklMhiz852qTxUlSsaJwwFfbUxDWZmtAv8S8/edit?usp=sharing)
* [curl Reference Sheet](https://docs.google.com/document/d/18IkhxEUQ9-eyEH8JhWFaQf5zhM5HzFv8YVCHS0c42Gw/edit?usp=sharing)

As you work through the questions below, fill out your answers in the [M12 Challenge Submission File](https://docs.google.com/document/d/12u2E1p_yVwXD9t0ZIVI-Bo78qZo5nLmH-dPviHji3As/edit?usp=sharing) (make a copy of the file to work from). You will submit this completed document as your Challenge deliverable.

#### HTTP Requests and Responses

Answer the following questions about the HTTP request and response process:

1. What type of architecture does the HTTP request and response process occur in?

2. What are the parts of an HTTP request? 

3. Which part of an HTTP request is optional?

4. What are the three parts of an HTTP response?

5. Which status-code number class represents errors?

6. What are the two most common request methods for a security professional to encounter?

7. Which type of HTTP request method is used to send data?

8. Which part of an HTTP request contains the data being sent to the server?

9. In which part of an HTTP response does the browser receive the web code to generate and style a webpage?

#### Using cURL

Answer the following questions about `curl`:

10. What are the advantages of using `curl` over the browser?

11. Which `curl` option changes the request method?

12. Which `curl` option sets request headers?

13. Which `curl` option is used to view the response header?

14. Which request method might an attacker use to figure out what HTTP requests an HTTP server will accept?

#### Sessions and Cookies

Recall that HTTP servers need to be able to recognize and distinguish clients from one another. They do this through sessions and cookies.

Answer the following questions about sessions and cookies:

15. Which response header sends a cookie to the client?

    ```HTTP
    HTTP/1.1 200 OK
    Content-type: text/html
    Set-Cookie: cart=Bob
    ```

16. Which request header will continue the client's session?

    ```HTTP
    GET /cart HTTP/1.1
    Host: www.example.org
    Cookie: cart=Bob
    ```

#### Example HTTP Requests and Responses

Use the following sample HTTP request and response to answer the questions in this section:

**HTTP Request**

```HTTP
POST /login.php HTTP/1.1
Host: example.com
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 34
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Mobile Safari/537.36

username=Barbara&password=password
```

17. What is the request method?

18. Which header expresses the client's preference for an encrypted response?

19. Does the request have a user session associated with it?

20. What kind of data is being sent from this request body?

**HTTP Response**

```HTTP
HTTP/1.1 200 OK
Date: Mon, 16 Mar 2020 17:05:43 GMT
Last-Modified: Sat, 01 Feb 2020 00:00:00 GMT
Content-Encoding: gzip
Expires: Fri, 01 May 2020 00:00:00 GMT
Server: Apache
Set-Cookie: SessionID=5
Content-Type: text/html; charset=UTF-8
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type: NoSniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block

[page content]
```

21. What is the response status code?

22. What web server is handling this HTTP response?

23. Does this response have a user session associated with it?

24. What kind of content is likely to be in the [page content] response body?

25. If your class covered security headers, what security request headers have been included?

#### Monoliths and Microservices

Answer the following questions about monoliths and microservices:

26. What are the individual components of microservices called?

27. What is a service that writes to a database and communicates to other services?

28. What type of underlying technology allows for microservices to become scalable and have redundancy?

#### Deploying and Testing a Container Set

Answer the following questions about multi-container deployment:

29. What tool can you use to deploy multiple containers at once?

30. What kind of file format is required to deploy a container set?

#### Databases

31. Which type of SQL query would you use to view all of the information within a table called `customers`?

32. Which type of SQL query would you use to enter new data into a table? (You don't need a full query, just the first part of the statement.)

33. Why would you never run `DELETE FROM <table-name>;` by itself?

---

### Bonus Activity: The Cookie Jar

For this challenge, you'll once again use `curl`, but this time you'll use it to manage and swap sessions.

:warning: **Heads Up**: In order to complete this activity, you must have WordPress set up from the Swapping Sessions activity on Day 1 of this module. If you have not completed the activity or WordPress is improperly set up, please refer to the Day 1 student guide and the Swapping Sessions activity file.

Recall that on Day 1 of this module, you used Google Chrome's Cookie-Editor extension to swap sessions and cookies. For this Challenge activity, you'll use the command-line tool `curl` to practice swapping cookies and sessions within the WordPress app.

It is important for cybersecurity professionals to know how to manage cookies with `curl`.

- Web application security engineers need to regularly ensure cookies are both functional and safe from tampering.

  - For example, you might need to request a cookie from a webpage and then test various HTTP responses using that cookie. Doing this over and over through the browser is tedious, but can be automated with scripts.

- The same concept applies for penetration testers and hackers: `curl` is used to quickly save a cookie in order to test various exploits.

  - For example, an HTTP server may be configured so that, in order to POST data to specific pages, clients need to have cookies or authentication information set in their request headers, which the server will verify.

#### Revisiting curl

Recall that you used `curl` to craft different kinds of requests for your `curl` activity, and that you used the Chrome extension Cookie-Editor to export and import cookies and swap sessions.

There will be many systems in which you will need to test requests and cookies that will not connect to a browser or browser extension. 

`curl` not only allows users to examine headers, send data, and authenticate to servers, but also to save and send cookies through two `curl` options: `--cookie-jar` and `--cookie`.

These two options work just like Cookie-Editor, but on the command line. 

- `--cookie-jar` allows a curl user to save the cookies set within a response header into a text file.

- `--cookie` allows a user to specify a text file where a cookie is saved, in order to send a request with the cookies embedded in the request header.

Let's create a `curl` command that will log in to a webpage with a supplied username and password, and also save the server's response that should contain a cookie.

#### Logging In and Saving Cookies with curl

If you want to use the `curl` command to log in to an account, `Amanda`, with the password `password`, use the following `curl` options:

- `curl --cookie-jar ./amandacookies.txt --form "log=Amanda" --form "pwd=password" http://localhost:8080/wp-login.php --verbose`
- `curl`: The tool that you are using.
  
- `--cookie-jar`: Specifies where you will save the cookies.
  
- `./amandacookies.txt`: Location and file where the cookies will be saved.
  
- `--form`: Lets you pick the login username and password forms that you set in your user info earlier. In this case, it's your username.
  
- `log=Amanda`: How WordPress understands and accepts usernames.
  
- `--form`: Lets you pick the login username and password forms that you set in our user info earlier. In this case it's your password.
  
- `pwd=password`: How WordPress understands and accepts passwords.
  
- `http://localhost:8080/wp-login.php`: Your WordPress login page.
  
- `--verbose`: Outputs more specific description about the actions the command is taking.  

Run the command:  `curl --cookie-jar ./amandacookies.txt --form "log=Amanda" --form "pwd=password" http://localhost:8080/wp-login.php --verbose`

If the site confirms your credentials, it will give you a cookie in return, which `curl` will save in the cookie jar file `./amandacookies.txt`.

Now, let's use that saved cookie on a page that requires you to be logged in.

#### Using a Saved Cookie

To use a saved cookie, use the following `curl` syntax:

- `curl --cookie ./amandacookies.txt http://localhost:8080/wp-admin/users.php`
  - `curl`: The tool that you are using.
    
  - `--cookie`: Precedes the location of your saved cookie that you want to use.
    
  - `./amandacookies.txt`: Location and file where the cookies are saved.
    
  - `http://localhost:8080/wp-admin/users.php`: A page that requires authentication in order to view it properly. Note that you are not going to the login page, because supplying a cookie in this instance assumes that you are already logged in.

Now that you know how to use the `curl` cookie jar, you can complete this bonus activity.

### Bonus Activity Instructions: The Cookie Jar

First, using Docker Compose, navigate to the Day 1 WordPress activity directory and bring up the container set:

- `/home/sysadmin/Documents/docker_files`

Using `curl`, do the following for the Ryan user:

  - Log in to WordPress and save the user's cookies to a cookie jar.

  - Test a WordPress page by using a cookie from the cookie jar.

  - Pipe the output from the cookie with `grep` to check for authenticated page access.

  - Attempt to access a privileged WordPress admin page.

#### Step 1: Set Up

Create two new users: Amanda and Ryan.   

1. Navigate to `localhost:8080/wp-admin/`

2. On the left-hand toolbar, hover over "Users" and click "Add New."

3. Enter the following information to create the new user named Amanda:

    - Username: `Amanda`
    - Email: `amanda@email.com`

4. Skip down to password:

    - Password: `password`
    - Confirm Password: Check the box to confirm use of weak password.
    - Role: `Administrator`

5. Create another user named Ryan.

    - Username: `Ryan`
    - Email: `ryan@email.com`

6. Skip down to password:

    - Password: `123456`
    - Confirm Password: Check the box to confirm use of weak password.
    - Role: `Editor`

7. Log out, and log in with the following credentials:

    - Username: `Amanda`
    - Password: `password`

#### Step 2: Baselining

For these "baselining" steps, you'll log in to two different types of accounts to see how the WordPress site looks at the `localhost:8080/wp-admin/users.php` page. You want to see how the Users page looks from the perspective of an administrator vs. a regular user.

1. Using your browser, log in to your WordPress site as your sysadmin account, and navigate to `localhost:8080/wp-admin/users.php`, where you previously created the user Ryan. Examine this page briefly. Log out.

2. Using your browser, log in to your Ryan account, and attempt to navigate to `localhost:8080/wp-admin/index.php`. Note the wording on your Dashboard.

3. Attempt to navigate to `localhost:8080/wp-admin/users.php`. Note what appears now.

Log out in the browser.

#### Step 3: Using Forms and a Cookie Jar

Navigate to `~/Documents` in a terminal to save your cookies.

1. Construct a `curl` request that enters two forms, `"log={username}"` and `"pwd={password}"`, and goes to `http://localhost:8080/wp-login.php`. Enter Ryan's credentials where there are placeholders.

    - **Question 1**: Did you see any obvious confirmation of a login? (Y/N)

2. Construct the same `curl` request, but this time, add the option and path to save your cookie: `--cookie-jar ./ryancookies.txt`. This option tells `curl` to save the cookies to the `ryancookies.txt` text file.

3. Read the contents of the `ryancookies.txt` file.

   - **Question 2**: How many items exist in this file?

Note that each one of these is a cookie that was granted to Ryan after logging in.

#### Step 4: Log in Using Cookies

1. Craft a new `curl` command that now uses the `--cookie` option, followed by the path to your cookies file. For the URL, use `http://localhost:8080/wp-admin/index.php`.

   - **Question 3**: Is it obvious that you can access the dashboard? (Y/N)

2. Press the up arrow on your keyboard to run the same command, but this time, pipe `| grep Dashboard` to the end of your command to return all instances of the word `Dashboard` on the page.

    - **Question 4**: Look through the output where `Dashboard` is highlighted. Does any of the wording on this page seem familiar? (Y/N) If so, you should be successfully logged in to your Editor's dashboard.

#### Step 5: Test the Users.php Page

1. Finally, write a `curl` command using the same `--cookie ryancookies.txt` option, but attempt to access `http://localhost:8080/wp-admin/users.php`.

    - **Question 5**: What happens this time?

### Submission Guidelines

* After you complete your Submission File, title it with the following format: < YOUR NAME >< Web Development Challenge >
* Make sure to set the file permissions so that anyone can view and comment on your document.
* Submit the URL of your Submission File Google Doc through Canvas.


### Important Note Regarding Module 13

Please make sure that you are set up on your personal Azure account prior to the first day of the Cloud Security module. Use the following setup guide for assistance: [Setup Guide](https://docs.google.com/document/d/1gs_09b7eotl7hzTL82xlqPt-OwOd0aWA78qcQxtMr6Y/edit?usp=sharing).
