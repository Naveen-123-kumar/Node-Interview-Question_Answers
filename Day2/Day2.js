// 1)What are the different types of HTTP requests?
// Ans->The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE.


// 2)Explain the concept of middleware in Node.js.
// Ans->Middleware is a request handler that has access to the application's request-response cycle.It takes three parameters req,res and next.next is used to execute the next middleware if present else it will ask the router to send response to the client.If we will not write next()then respose will be not sent and the browser will be refreshing again and again.It will not stop.There are two type of middleware
// i)Local middleware->It will be applied to only routes in which we will mention it.
// ii)Global middleware->It will be applied to all routes 

// 3) Explain CORS
// Ans->CORS stands for cross origin resounce sharing.Our server will like to share it resource only with those clients who are in same domain.By using cors globaly it allow our server to share data with clients who are not in same domain by relax the security applied to the API.


// 4)What is Express. how it helps you to create a backend application
// Ans->Express is Fast, unopinionated, minimalist web framework for Nodejs.It provides broad features for building web and mobile applications. It is used to build a single page, multipage web application

// 5)Explain min 5 status codes gets used in Backend development
// Ans->Status code(200) is for indicating request has been succeeded.The resource has been fetched and is transmitted in the message body.
// Stauts code(201) indicates that the request has succeeded and has led to the creation of a resource.
//Status code(202) indicates that the request has been accepted for processing, but the processing has not been completed;
// status code(204) indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.
//status code(400) indicates that the server will not process the request due to something that is perceived to be a client error 

//status code(401) indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
//status code(402) indicates that payment error
//status code(404) indicates the server was unable to find what was requested.

// 500 inter-server error 
// 503 service not available
// 6)Difference between HTTP and HTTPS
// Ans->HTTP stands for HyperText Transfer Protocol and HTTPS stands for HyperText Transfer Protocol Secure.
// In HTTP, URL begins with “http://” whereas URL starts with “https://”
// HTTP uses port number 80 for communication and HTTPS uses 443
// HTTP is considered to be insecure and HTTPS is secure
// HTTP Works at Application Layer and HTTPS works at Transport Layer
// HTTP does not require any certificates and HTTPS needs SSL Certificates
// HTTP speed is faster than HTTPS and HTTPS speed is slower than HTTP