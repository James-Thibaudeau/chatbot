#Startup Launchpad - Chatbot Hackathon

This is the skeleton project for Startup Launchpad's fall 2016 hackathon
at Algonquin College.

Getting Started
---

Required software:

* Git
* NodeJS
* MongoDB
* Text Editor/IDE

Make sure you have installed all the required software.

API.ai
---

Go to http://API.ai

Create an account.

Once you have an account create an agent.

Cloning the Repository
---

Make a new folder for this project and name it as you like.

`git init` in the folder.

`git clone` and the URL for the repository.

In your project folder you will have a folder named chatbot.

Connect your Agent to the project
---

In your editor/IDE open the chatbot project.

In the routes folder open chatbot.js.

Where it says `var app = apiai("<add your api key here!>");` replace the contents of the double quotes with
the API key of your agent

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
