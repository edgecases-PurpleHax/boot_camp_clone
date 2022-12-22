## Week 12 Homework Solution: Web Development 
---

### Question Solutions

#### HTTP Requests and Responses

1. What type of architecture does the HTTP request and response process occur in?

    -  HTTP uses client-server architecture, in which a client requests certain resources from a server and the server sends a response.

2. What are the different parts of an HTTP request? 

    -  The parts of an HTTP request are: the request line, the request headers, and an optional request body.

3. Which part of an HTTP request is optional?

    -  The request body.

4. What are the three parts of an HTTP response?

    -  The parts of an HTTP response are: the status line, the response headers, and the response body.

5. Which number class of status codes represent errors?

    -  400 and 500 status codes represent errors:
       -  400 status codes represent client errors.
       -  500 status codes represent server errors.

6. What are the two most common request methods that a security professional will encounter?

    -  GET and POST requests.

7. Which type of HTTP request method is used for sending data?

    -  POST requests.

8. Which part of an HTTP request contains the data being sent to the server?

    -  The request body.

9. In which part of an HTTP response does the browser receive the web code to generate and style a web page?

    - The response body.

#### Using curl

10. What are the advantages of using `curl` over the browser?

    - It allows you to easily see the response status lines, is repeatable, can be automated, and can be edited while in use.

11. Which `curl` option is used to change the request method?

    - The `curl` option `-X` followed by a request method, such as POST, allows you to change the request method.

12. Which `curl` option is used to set request headers?

    - The curl option `-H` allows you to add a header to a request. For example: `curl example.com -H "Cookie: SessionID=Bob"`.

13. Which `curl` option is used to view the response header?

    - The curl option `-I` allows you to view the response header.

14. Which request method might an attacker use to figure out which HTTP requests an HTTP server will accept?

    - An attacker will likely use the OPTIONS request method for finding usable request methods.

#### Sessions and Cookies

15. Which response header sends a cookie to the client?

    -  The `Set-Cookie` response header sends a cookie to the client. Note the example is similar to the Bob example from the lecture.

    ```HTTP
    HTTP/1.1 200 OK
    Content-type: text/html
    Set-Cookie: cart=Bob
    ```

16. Which request header will continue the client's session?

    - The `Cookie` request header will send the `cart=Bob` cookie along with the GET request. 

    ```HTTP
    GET /cart HTTP/1.1
    Host: www.example.org
    Cookie: cart=Bob
    ```

#### Example HTTP Requests and Responses

HTTP Request:

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

    - The request method in this example is `POST`.

18. Which header expresses the client's preference for an encrypted response?

    - The `Upgrade-Insecure-Requests: 1` header is the browser requesting an encrypted response.

19. Does the request have a user session associated with it?

    - The request does not have a `Cookie` header set, so it does not look like a user session is associated with this request.

20. What kind of data is being sent from from this request body? 

    -  It is clear from the request body that this request is an attempt to authenticate into the site's login.php page.

HTTP Response:

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

    - The status code returned with a `200 OK`.

22. What web server is handling this HTTP response?

    - The web server in this response is Apache.

23. Does this response have a user session associated to it?

    - This user does have a session associated with it, as seen by the `Set-Cookie` header.

24.  What kind of content is likely to be in the \[page content\] response body?
     - Based on the `content-type: text/html` header, the response body contains the site's web code.
    
25. If your class covered security headers, what security request headers have been included?

    - There are many security headers in this example, but the one covered in class would have been `Strict-Transport-Security`, which tells the client that it should only be accessed over HTTPS and not HTTP.

#### Monoliths and Microservices

26. What are the individual components of microservices called?

    -  When a monolith's components are separated by functions, they are called services.

27. What is a service that writes to a database and communicates to other services?

    -  An Application Programming Interface or API is a service that allows people to interact directly with back-end-like services.

28. What type of underlying technology allows for microservices to become scalable and have redundancy?

    -  Containers allow microservices to be both scalable and redundant.

#### Deploying and Testing a Container Set

29. What tool can be used to deploy multiple containers at once?

    - Docker-Compose can deploy multiple containers at once, with predefined conditions, from a `docker-compose.yml` file.

30. What kind of file format is required for us to deploy a container set?

    - A YAML file, specifically a `docker-compose.yml` configuration file that contains all of the base containers, networking, and other configurations for our container set.

#### Databases

31. Which type of SQL query would we use to see all of the information within a table called `customers`?

    - `SELECT * FROM customers;`

32. Which type of SQL query would we use to enter new data into a table? (You don't need a full query, just the first part of the statement.)

    - `INSERT INTO`

33. Why would we never run `DELETE FROM <table-name>;` by itself?

    - This would delete the entire table, as opposed to one entry from a table.

---

### Bonus Challenge Solution: The Cookie Jar

The goal for this bonus challenge was to quickly get familiar with using `curl` to save and manage cookies. Security roles that deal with testing websites will need to know how to use command-line cookies for scripting and automation.

The solution below skips Step 1: Set Up. 

#### Step 2: Baselining

The goal of the baselining portion of this activity was to get you familiar with the contents of the Dashboard and what `users.php` look like for both Administrator and Editor users. 

 The later parts of the activity checked to see if `curl` returned these same pages.

#### Step 3: Using Forms and a Cookie Jar

1.  Construct a `curl` request that enters two forms: `"log={username}"` and `"pwd={password}"` and goes to `http://localhost:8080/wp-login.php`. Enter Ryan's credentials where there are placeholders:

    - `curl --form "log=Ryan" --form "pwd=123456" http://localhost:8080/wp-login.php` 

    - **Question:** Did you see any obvious confirmation of a login? (Y/N)
- **Answer:** There was no obvious notification of login.
    
2. Construct the same `curl` request, but this time add the option and path to save your cookie: `--cookie-jar ./ryancookies.txt`. This option tells `curl` to save the cookies to the `ryancookies.txt` text file:

   - `curl --cookie-jar ./ryancookies.txt --form "log=Ryan" --form "pwd=123456" http://localhost:8080/wp-login.php`

3.  Read the contents of the `ryancookies.txt` file. 

    - **Question:** How many items exist in this file?
      - **Answer:** Four cookies exist in the `ryancookies.txt` file.

#### Step 4: Log in Using Cookies

1. Craft a new `curl` command that now uses the `--cookie` option, followed by the path to your cookies file. For the URL, use `http://localhost:8080/wp-admin/index.php`:

    - `curl --cookie ./ryancookies.txt http://localhost:8080/wp-admin/index.php` 

    - **Question:** Is it obvious that we can access the Dashboard? (Y/N)
    
       - **Answer:** It doesn't seem obvious that we can access the Dashboard.

2. Press the up arrow on your keyboard to run the same command, but this time, pipe `| grep Dashboard` to the end of your command to return all instances of the word `Dashboard` on the page:

    - `curl --cookie ./ryancookies.txt http://localhost:8080/wp-admin/index.php | grep Dashboard`

    - **Question:** Look through the output where `Dashboard` is highlighted. Does any of the wording on this page seem familiar? (Y/N) If so, you should be successfully logged into your Editor's dashboard.
- **Answer:** After adding the grep pipe, we can see all occurrences of the word `Dashboard` within the returned response body, showing us a successfully returned `index.php` session.

#### Step 5: Test the Users.php Page

1. Finally, write a `curl` command using the same `--cookie ryancookies.txt` option, but attempt to access `http://localhost:8080/wp-admin/users.php`:

    - `curl --cookie ./ryancookies.txt http://localhost:8080/wp-admin/users.php`

    - **Question:** What happens this time?

         - **Answer:** We once again see the warning `You need a higher level of permission. Sorry, you are not allowed to list users.`

#### Bonus Challenge Summary

The goal for this challenge was to show you how to use the command line to manage cookies and sessions on a web server. Using the command line for authentication and managing sessions is an easy and fast way to log into web applications. It can be made both repeatable and automated.

  - Imagine trying to automate double-clicking a browser icon, entering a URL for a web app, typing your username and password into the forms, pressing Enter, then finally clicking on a page that required you to be authenticated. This manual process can be much more easily handled by `curl`. 

  - As you saw, you can use the command line to log into a certain page using a `grep` pipe that filters elements that you know should only exist on an authenticated web page. It is easier to do this with a script than with an automation solution involving the browser as the web client. 

  - Another kind of authentication automation that you may have already thought of is a script that repeats `curl` login attempts, but continuously replaces the username and password until a 200 OK status page is received. This type of web application attack is known as a dictionary attack. We'll be looking at these in more depth in the next unit.

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
