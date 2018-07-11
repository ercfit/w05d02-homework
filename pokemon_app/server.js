//Does npm init create a file? 
	//yes
//Where does it create the file? 
	//in pokemon_app
//What is the name of the file?
	//package.json

const express = require("express");
const app = express();
const PORT = 3000;
const Pokemon = require("./models/pokemon");

app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!");
})

app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {"pokemonList":Pokemon})
});


app.get("/pokemon/:id", (req, res) => {
	res.render("show.ejs", {
		pokemon: Pokemon[req.params.id]
	})
});

//  - Set up your app to be able to use CSS like we did in class.  Use a dummy (i.e. just set a background color) CSS declaration.  Remember: you need express.static() middleware. (also remember that you don't need to npm install anything for this particular middleware because its part of express. But for others you do.)

// <hr>
// &#x1F534; The commit message should read: <br>
//   "Commit 10 - set up serving of static files so we can add CSS"
// <hr>

// ### Style your app, 

// <hr>
// &#x1F534; The commit message should read: <br>
//   "Commit 11 - The app is styled"
// <hr>



		
app.listen(PORT, () => {
	console.log("I am listening on port 3000.");
})