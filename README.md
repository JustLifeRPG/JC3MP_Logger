# ServerPackage_Logger
## An event listening, log writing package. 
### Log entries are written to console

# PACKAGE COOMING SOON

Just load this Package before you load all the other stuff if you wish to log errors. 
Creates 'log' directory and creates a log file for each day and each Package. 

Easy to use with a little helper class with same syntax server and client side.

Clientside log massages get send to server and look near the log messages for server.
The difference is, remote logs shows a remote keyword and the playername who sends the log message.

### How To

Please take a look int the 'examples and classes' directory.
There is also stored a easy to use class.


Implemented log events:

| log types | effect |
| -------- | -------- |
| normal | Simple logmessage 			|
| error  | Red message to console 		|
| info   | Green message to console 	|
| debug  | Grey message to console 		|
| warn   | Yellow message to console 	|
