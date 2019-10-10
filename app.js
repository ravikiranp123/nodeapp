// var express = require("express");
// var app = express();
var app = require("express")();
// var app = express();
var port = process.env.PORT || 3000;
app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    // if(req.params.animal == 'pig'){
    //     res.send("The pig says 'Oink'");
    // } else if(req.params.animal == 'cow') {
    //     res.send("The cow says 'Moo'");
    // } else if(req.params.animal == 'dog'){
    //     res.send("The dog says 'Woof'");
    // } else{
    //     res.send("Sorry, unknown animal");
    // }

    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof'",
        cat: "'I hate you human'",
        goldfish: "'...'"
    };
    res.send("The " + req.params.animal + " says " + sounds[req.params.animal.toLowerCase()]);
});

app.get("/repeat/:string/:num", function(req, res){
    var returnString = "";
    for(i=0; i<req.params.num; i++){
        returnString+=(req.params.string + " ");
    }
    res.send(returnString);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?")
})

app.listen(port, function(){
    console.log("Server started successfully on port:" + process.env.PORT);
})