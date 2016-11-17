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
 * Atom - https://atom.io/
 * Notepad++ - https://notepad-plus-plus.org/

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

Getting started video https://www.youtube.com/watch?v=Om7tyGGemXI

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
For MongoDB you must create a folder `C:\data\db`

You also need to include Mongo in your PATH variable

Have two command line terminals open and navigate to the chatbot folder in both.

In the first terminal run `npm install` to install the NodeJS modules.

Then run `mongod` to start MongoDB.

In the second terminal run `npm start`

Check to see if your chatbot works
---

In your browser navigate to `localhost:3000`

You should see the chatbot up and running!

More Git
---
To pull from remote `git pull`

To stage local changes `git add -A`

To commit local changes `git commit -m "<commit comment>"`

To push to remote `git push`

Your Task
---

COME UP WITH A BUSINESS THAT YOUR CHATBOT CAN SERVE E.G.
* PIZZA SHOP
* TRAVEL AGENCY
* TECH SUPPORT

WE ARE LOOKING FOR CREATIVITY SO BE CREATIVE!
PROGRAM YOUR CHATBOT TO SERVE YOUR BUSINESS

YOU HAVE A LOT OF TIME SO TRY AND MAKE IT AS ROBUST AS YOU CAN

IF YOU CAN, LEARN TO USE MONGO TO STORE DATA FROM YOUR CHATBOT

CREATE A HOME PAGE FOR YOUR BUSINESS

CAN BE TOGETHER WITH YOUR CHATBOT OR SEPARATE
IF YOU DON’T KNOW HOW TO CODE WITH HTML/CSS YOU CAN USE INSTAPAGE FREE TRIAL
https://instapage.com/


How to Submit Your Project
---
SUBMIT VIA EMAIL: STARTUPLAUNCHPADCLUB@GMAIL.COM

SUBJECT: GROUP/PERSON NAME + HACKATHON

SEND:
LINK TO YOUR GITHUB REPO
IF YOUR REPO DOES NOT HAVE THE API KEY STORED IN IT SEND THE KEY SEPARATE IN THE EMAIL
IF YOUR BUSINESS PAGE IS SEPARATE FROM YOUR CHATBOT SEND THE LINK TO IT
SHORT DESCRIPTION ON WHAT WE SHOULD ASK YOUR CHATBOT

