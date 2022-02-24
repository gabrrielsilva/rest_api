# Architecture

Request:
-> route: receives the request, handles, and forwards it to the 'service'
-> service: implements business rules and calls 'data' passing the object
-> data: receives the object, and sends it to the database (query, insertion)
<- data: returns the result of the operation to 'service'
<- service: returns to the 'route'
<- route: returns the status of the request (and/or object in json)
:Response

# Structure of the request-response

Request:

GET / HTTP/1.1
Host: localhost:3000
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
sec-ch-ua: "Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"
sec-ch-ua-mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,_/_;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9,pt;q=0.8

Response:

HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 139
Date: Sat, 06 Mar 2021 21:00:51 GMT
Connection: keep-alive
