# Architecture

Request:

→ route: receives the request, handles, and forwards it to the 'service'

→ service: implements business rules and calls 'data' passing the object

→ data: receives the object, and sends it to the database (making a query, insertion)

Response:

← data: returns the result of the operation to 'service'

← service: returns to the 'route'

← route: returns the status of the request and/or object in json
