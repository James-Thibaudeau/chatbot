#Startup Launchpad - Chatbot Hackathon

This is the skeleton project for Startup Launchpad's fall 2016 hackathon
at Algonquin College.

Getting Started
---

Required software:

* Git - http://git-scm.com/downloads
* NodeJS - http://nodejs.org/
* MongoDB - www.mongodb.com
* Text Editor/IDE

Make sure you have installed all the required software.

GitHub
---

Create an account on GitHub.

Forking the Repository
---

http://github.com/James-Thibaudeau/chatbot

Click fork to fork the repo to your own GitHub


Cloning the Repository
---

Make a new folder for this project and name it as you like.

`git init` in the folder.

`git clone` and the URL for the repository.

`git remote add origin` Followed by the URL of your repo.

In your project folder you will have a folder named chatbot.

API.ai
---

Go to http://API.ai

Create an account.

Once you have an account create an agent.

Connect your Agent to the project
---

In your editor/IDE open the chatbot project.

In the routes folder open chatbot.js.

Where it says `var app = apiai("<add your api key here!>");` replace the contents of the double quotes with
the API key of your agent

Where it says 
`  var options = {
sessionId: "<36 character sessionID>"
  };`
Enter a unique session id of your choosing.

Setting up NodeJS and MongoDB
---

Have two command line terminals open and navigate to the chatbot folder in both.

In the first terminal run `npm install` to install the NodeJS modules.

Then run `mongod` to start MongoDB.

In the second terminal run `npm start`

Check to see if your chatbot works
---

In your browser navigate to `localhost:3000`

You should see the chatbot up and running!
