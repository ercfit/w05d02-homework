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

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!");
})

app.get("/pokemon", (req, res) => {
	res.render("index.ejs", {"pokemonList":Pokemon})
});

//     "Commit 6 - I can view a list of all my pokemon in the browser "
// <hr>



		
app.listen(PORT, () => {
	console.log("I am listening on port 3000.");
})