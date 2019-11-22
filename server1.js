// Dependencies
// ===========================================================
const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;
const path = require("path");


app.use(express.urlencoded({extend: true}));
app.use(express.json());
// Data
// ===========================================================

const characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
},
{
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}];

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;

  const chosenOne = characters.filter(obj => {
    return obj.routeName === chosen
  });

  if (chosenOne.length) {
    return res.json(chosenOne[0]);
  } else {
  return res.send('wat, who you lookin for?');
  }
});

app.get("/api/characters", (req, res) => {
  return res.json(characters);
  
});


app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;
  
  newCharacter.routeName - newCharacter.name.replace(/\s+/g, "").toLowerCase();

  characters.push(newCharacter);
  console.log(newCharacter);
  res.json(newCharacter);

})


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
