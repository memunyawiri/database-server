# Database Server

A practice a tech test to demonstrate my understanding of web technologies.

## The brief

```
Write a program that runs a server that
is accessible on http://localhost:4000/.

When your server receives a request on
http://localhost:4000/set?somekey=somevalue
it should store the passed key and value in memory.

When it receives a request on
http://localhost:4000/get?key=somekey it should
return the value stored at somekey.

Store the data in memory, not in a database,
but bear in mind that you will later need
to add a database to this code.

```

### Requirements

* Clean & well tested code
* Code should be easily extensible to add a data store

### Code Preview
TBA

### Test & Run instructions
- Fork this repo
- Run ```$ git clone``` with this repo [link](https://github.com/memunyawiri/database-server.git)
- Run ```$ make test``` to see test status
- open in your preferred text editor to review code

### Processes
- TDD
- OOD
- BDD

### Technologies used
- [Node](https://nodejs.org/en/)
- [Chai](http://chaijs.com/) Assertion library
- [Mocha](https://mochajs.org/) testing framework
- [Request](https://github.com/request/request) library to send requests to my server
