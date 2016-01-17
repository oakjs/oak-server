## Tasks

* [x] Basic websocket server. We'll use express and Socket.io. See model app in resources below.
* [x] Communication protocol (analogous to flux/redux actions)
* [ ] Function to bundle up the meta-information of a project stored in a directory structure.
  * [ ] Determine directory structure
  * [ ] Write the function to traverse and build the meta-information object
  * [ ] Send to client and have it display
* [ ] Actions to 
  * [ ] Return meta-information on a project
  * [ ] Return specific resources
* [ ] FS watchers (directory, file, directory hierarchy)
* [ ] Implement subscription to changes by a client that works on a project
  * [ ] Internal tracking
  * [ ] Notifications
* [ ] User authentication and access control (http://passportjs.org/)

## Resources

* Model socket.io app: http://socket.io/get-started/chat/.


## Notes

*  Later we'll want to support https, but we may do that via a reverse proxy (and if not, shouldn't be hard to change directly here).
* It's tempting to figure out how to use ES2015 and hot-reloading on this, but I'm not going to. While possible (see the links below), it seems to be a little bit hacky. Given that the server should be as simple as possible, it doesn't seem worth it to me. We can convert later when it's more important.
  * http://jlongster.com/Backend-Apps-with-Webpack--Part-I
  * http://jlongster.com/Backend-Apps-with-Webpack--Part-II
  * http://jlongster.com/Backend-Apps-with-Webpack--Part-III
