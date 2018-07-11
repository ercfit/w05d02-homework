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

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

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

		
app.listen(PORT, () => {
	console.log("I am listening on port 3000.");
})