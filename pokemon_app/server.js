//Does npm init create a file? 
	//yes
//Where does it create the file? 
	//in pokemon_app
//What is the name of the file?
	//package.json
   
//"Commit 1 - All my files are created"

//"Commit 2 - All my npm packages are added"

const express = require("express");
const app = express();
const PORT = 3000;
const Pokemon = require("./models/pokemon")

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!");
})

//"Commit 3 - My server is set up and running"

app.get("/pokemon", (req, res) => {
	res.send(Pokemon);
})


//"Commit 4 - Connected my database, can see json in the browser"



app.listen(PORT, () => {
	console.log("I am listening on port 3000.");
})