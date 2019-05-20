const friends = require("../data/friends.js");

app.get("/api/friends", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

$("#submit").on("click", function (event) {
  event.preventDefault();

  let answers = {
    name: $("#name").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val(),
    ]
  };
});

app.post("/api/friends", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));

  let newFriend = req.body;

  friends.push(newFriend);

  res.json(newFriend);

  for (let i = 0; i < friends.length; i++) {

  }
});

