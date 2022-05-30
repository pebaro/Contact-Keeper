# FE-technical-task
technical task for Dotcrafted - front end application to create, manage, store, display a library of contacts

Before setting up the package.json file I'm going to list what I intend to use initially to create my first commit
(this list will grow as I progress through the build process)



# ACCESS TO DATABASE:
Go to the link: 
# https://account.mongodb.com/account/login?signedOut=true
user email: 
# dotcrafted@pebaro.co.uk
user password: 
# D0tcraft3dMDB

once logged in to cloud.mongodb.com select the only project available called FE Technical Task

in the config folder create a file called...
# default.json 
...and paste the following code inside that file and save it:
{
	"mongoURI": "mongodb+srv://dotcraftedmdb:D0tcraft3dMDB@fetechtask.nwzbk.mongodb.net/?retryWrites=true&w=majority"
}



# STEPS:
1. set up the package.json for the intial stages of development
2. get MongoDB set up and connected


# MAIN DEPENDENCIES:
1. Express - web framework to handle the routing
2. BcryptJS - for hashing passwords
3. JSON Web Token - for authentication using JWTs
4. Config - for use with global variables
5. Express Validator - to validate incoming data
6. Mongoose - abstraction layer to interacting with the database

# DEV DEPENDENCIES:
1. NodeMon - allows the server to have a watch set up
2. Concurrently - allows the running of front and back end servers at the same time


