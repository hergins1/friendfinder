app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});

//Am I going to need .. to set the correct dirname

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});