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

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!");
})
// - **In terminal**
//   - `nodemon` or `nodemon server.js` (if you set your up your `package.json` to start `server.js` you don't need to put it after `nodemon`)
//   - **GOTCHA!** : nodemon will only work if you run it from the same location as your `package.json`
// - **In the browser**
//  - go to `localhost:3000`
//  - check that you have your `Welcome to the Pokemon App!` message displaying

// <hr>
//  &#x1F534; The commit message should read: <br>
//  "Commit 3 - My server is set up and running"
// <hr>
app.listen(PORT, () => {
	console.log("I am listening on port 3000.");
})