## curl References

This reference sheet includes important information about `curl`.

`curl` is a tool to transfer data from or to a server, using one of the supported protocols, without user interaction. 


### The curl Syntax

```bash
# Fetch HTML
curl example.com
```

  - Fetches the HTML for a webpage using a GET request. 

```bash
# Views the request/response text
curl -v example.com
```

  - Views the request/response text by adding the `-v` flag.


###

```bash
# View the response headers
curl -I example.com
```

 - Uses the `-I`  flag to view the response headers only.

###

```bash
# Setting a request type and URL
curl --request GET --url example.com
```

- Explicitly sets a request type and URL with the `--request` and` --url` options.


###

```bash
# Viewing available options
curl --help
```

- Shows all available options for `curl` command.

###

```bash
# Send a GET request with parameters
curl --request https://example.com/get?parameter=value
```

- Sends a GET request to the `/get` endpoint with the indicated parameters. 

  - `-- request`: Set the request type.


###

```bash
# Send a GET request with parameters and show both request and response headers
curl -v --request https://example.com/get?name=rodric&location=atlanta
```

- Sends a GET request to the `/get` endpoint with name and location parameters, and also prints out both request and response headers.

  - `-v`: Show more detailed info, such as request and response headers.
  - `--request`: Set the request type.
  - `name`: Your name.
  - `location`: Your current city.


###

```bash
# Send a POST request with parameters
curl -v --request POST --url https://postman-echo.com/post --data 'name=<yourname>&location=<yourlocation>'
```

- Sends a POST request to the `/post` endpoint using the same data as query parameters before, but using `curl`'s `--data` option instead.

  - `--url`: Specific custom URL.
  - `--data`: Specific parameters. 

```bash
# Send a GET request with request headers
curl -X --url https://httpbin.org/bearer -H 'authorization: {Type} {Credential}'
```

- Sends a GET request to the` /bearer` endpoint for httpbin.org. You must set the `type` of authorization and the `credential`.

  - `-H`: Sets a request header.
    

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.  
