## Activity File: XSS with bWAPP 

In this activity, you will continue your role as an Application Security Engineer.

- In the previous SQL review exercise, you were able to use a `union select` query to retrieve the number of columns on a web application and then use that knowledge to craft a specific cross-table SQL injection payload.

- For this task, your manager has asked that you once again try out your XSS techniques against this new web app.

- You will still be using the bWAPP application (`http://localhost:10011`) from the previous activity to test your XSS knowledge.


#### Instructions

1. For this first test, you'll be testing out previously learned XSS techniques. To get started, make sure you're logged in as `buzz` and under `Choose your bug:`, select `Cross-Site Scripting - Reflected (GET)` and then press `Hack`.

   - On this page, enter `bumble` for the first name and `bee` for the last and click `Go`. What happens?

   - Next, run a basic XSS payload to pop up an alert message that says `Vulnerable!`.

2. For the second test, your manager wants you to see if you can pop up the browser's session and cookie information.

   - On this page, run a reflected XSS payload that retrieves and displays the browser's cookie within an alert message.

3. For your third task, your manager wants you to try a stored XSS payload on the `Cross-Site Scripting - Stored (Blog)` page.

   - For the first part of this task, enter `My first blog post!` into the input field with just the `Add:` checkbox selected and click on the `Submit` button.

     - Next, post a malicious XSS payload and have it display the user's cookie in an alert pop up. Submit the XSS payload with only the `Add:` checkbox selected.

     - Once you've submitted your XSS payload, check the `Show all:` box and click `Submit`. This will display all of the blogs stored on this page. What happens? What do you see for your blog entry? What is your `PHPSESSID`?

   - For the second part of this task, go to the navigation bar and click on `Logout`. When it says `Are you sure you want to leave?`, click `OK`. **Alternatively**, launch Google Chrome (or Firefox if you're using Chrome) within the machine, navigate to `http://localhost:10011`, and do the following steps:

      - At the login page, enter `bee` for the username and `bug` for the password. Leave the security setting at `low`. The user `bee` is the default administration account for the web app.

      - Return to the `Cross-Site Scripting - Stored (Blog)` page. In the input field enter `Happy Bee-logging, fellow Bees!` with just `Add:` checked and submit.

      - Lastly, with just `Show all:` checked, click `Submit` again to see what happens. What is your `PHPSESSID` now?

      - When you click `OK` on the alert pop up, what shows up right after?

4. **Bonus**:  The previous tasks from your manager should have been relatively easy to test as they've used previous XSS techniques you've already learned. This next task is a bit more complicated. Go to the `Cross-Site Scripting - Reflected (JSON)` page to get started.

    - First, see what happens when nothing is entered into the field and you click the `Search` button. What happens?

    - Next, enter `Superman` into the input field and click the `Search` button. What is the message?

    - Enter `Iron Man` into the input field and click the `Search` button. What is the message now?

    - Now that we've seen the _intended_ functionality of this page, find out how the site actually creates these responses.

      - **Hints** :
      
        - If you're unsure on where to start for this, right-click anywhere on the page and select `View page source`.

        - If you want to see this action, open the browser's console (press `F12`) to the `Network` tab, run any kind of search, and check the response body. The _JSON response_ message that returns from the search is a _string_ and is stored within a JavaScript `var` variable. The message you receive will depend on whether you entered a valid movie in the search field.

    - Lastly, create a malicious payload that terminates the JSON early and shows either an alert message or the contents of the browser's cookie. To figure out how to terminate JSON with our payload, do the following steps:

      - Run an empty search again and view the page's source. Within the `<script>` find what is assigned to `JSONResponseString`. Take note of the entire line assigned to the variable.

      - Next, run a search for `Iron Man`, view the page source, and find the same `var JSONResponseString` variable assignment.

      - Compare the two variable assignments and starting from the right, copy all of the characters up until where the responses are different. 

        - **Hint**: Do not include the `:)` or `...`.

      - Next, enter this into the search field with an ending `</script>` tag after it. What happens?

      - You won't need the beginning `<script>` HTML tag as you'll be injecting your payload after where it starts.

      - Add the malicious script before the ending `</script>` and run it. What happens?
      
---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.    