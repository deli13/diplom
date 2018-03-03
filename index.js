var express=require("express");
var app=express();
var path=require("path");


//Статика
app.use('/static',express.static(__dirname+"/static"));
app.use('/bower_components',express.static(__dirname+"/bower_components"));

app.get("/",function (req,res) {
    res.send("hello world");
});
app.route("/vuetest")
    .get(function (req,res) {
        res.sendFile(path.join(__dirname,"/index.html"))
    });
app.route("/jquerytest")
    .get(function(req,res){
        res.sendFile(path.join(__dirname,"/index2.html"))
    });
app.listen(3000,function () {
    console.log("example app listening on port 3000")
})