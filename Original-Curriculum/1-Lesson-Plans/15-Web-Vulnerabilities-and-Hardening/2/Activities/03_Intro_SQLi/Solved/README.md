## Intro to SQLi Solutions Guide

### Instructions

Navigate to the following page of DB Fiddle: <https://www.db-fiddle.com/f/upnxDj1JbZyQeG7BKNqAUL/0>

#### SELECT WHERE with Conditions

Load the Fiddle at the above link. Then complete the following steps:

- Select all users whose last name is `Doe`.

  - **Solution**: `SELECT * FROM site_data.users WHERE last='Doe';`

- Select all users whose last name is `Doe` OR `Competent`.

  - **Solution**: `SELECT * FROM site_data.users WHERE last='Doe' OR last='Competent';`

- Select all users whose first name is `Jane` AND whose password is `asdf772nx`.

  - **Solution**: `SELECT * FROM site_data.users WHERE last='Jane' AND password='asdf772nx';`

#### Questions

The following queries might seem strange, but you'll use them in your SQL injections. For now, just try to understand why they produce the results they do, not why you'd write queries like this.

  ```sql
  -- This is Query #4. What is the result? What does the OR clause do?
  SELECT * FROM site_data.users WHERE first='Jane' OR '1'='1';

  -- TODO: This is Query #5. What is the result? What does the AND clause do?
  SELECT * FROM site_data.users WHERE first='Jane' AND password='uwasf';
  
  -- TODO: This is Query #6. What is the result? What does the AND clause do?
  SELECT * FROM site_data.users WHERE first='Jane' OR '1'='1' -- AND password='uwasf';
  ```

**Solutions**

- The first query retrieves the record for `Jane Doe`. The `OR` clause says, do NOT return a result of this condition if false. Since `'1'='1'` is always true, it doesn't change the result.

- The second query retrieves no record. This will happen if someone tries to log in to Jane's account with the wrong password.

- The third query retrieves the record for Jane. This is the same as the first query, because the AND clause is commented out and therefore does nothing in this query.

You'll see why strange queries like this are useful when you study login bypasses.

#### Bonus #1

Here you will perform SQL injection on a live web server and observe the results. 

- Launch DVWA by opening a terminal and running `start_dvwa`.

- Open a web browser and navigate to <http://localhost>.

- Log in with the username `admin` and the password `password`.

- Click **Create/Reset Database** at the bottom of the page, then log in again.

- Click **SQL Injection** on the left navigation bar.

- Point out that this page contains a simple web form where you can enter a user ID and get information about that user from the database.

- Enter the SQLi command in the **User ID** field (that dumps ALL user password information) and click **Submit**.

- The command used is:

  > Answer: `1' OR '1' = '1`

- You should get the following output:

  ```bash
  ID: ' OR '1' = '1
  First name: admin
  Surname: admin
  
  ID: ' OR '1' = '1
  First name: Gordon
  Surname: Brown
  
  ID: ' OR '1' = '1
  First name: Hack
  Surname: Me

  ID: ' OR '1' = '1
  First name: Pablo
  Surname: Picasso

  ID: ' OR '1' = '1
  First name: Bob
  Surname: Smith
  ```

#### Bonus #2

For this next challenge, you will need to identify the value affected by SQL injections within the page source of the web browser.

- Go back to your DVWA machine and use the simple web form located at the SQL Injection activity.

- View the page source and see if you can identify which form field is manipulated by the SQL injection.

- **Hint**: What role do the quotes play when you use SQL command injection?

  > **Answer**: From the simple web form, click on **View Page Source** at the borrom right. 

---

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. 