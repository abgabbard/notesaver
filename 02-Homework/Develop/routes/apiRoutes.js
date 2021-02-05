var fs = require("fs");
var path = require("path");
var notes = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });
  app.post("/api/notes", function (req, res) {
    const file = path.join(__dirname,"../db/db.json");
    const newNote = req.body;

    notes.push(newNote);

    fs.appendFile(file,JSON.stringify(newNote, null, 4) ,err => {
        if (err) throw err;
        console.log("note saved!");
    });
    res.send(newNote);
});
};
