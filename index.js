"use strict";
var express = require("express");
var app = express();
var path = require("path");
var port = 3000;

//Статика
app.use('/static', express.static(__dirname + "/static"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));


app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render("main",{
        title:"MAIN"
    });
});

/**
 * Страница рендеринга VueJS
 */
app.route("/vuetest")
    .get((req, res) => {
        res.render("vue",{
            title:"VUE",
            VueRoute:true,
            animate:false
        });
    });

/**
 * Страница рендеринга jQuery
 */
app.route("/jquerytest")
    .get((req, res) => {
        res.render("jquery",{
            title:"jQuery",
            VueRoute:false,
            animate:false
        })
    });

/**
 * Страница pureJS
 */
app.route("/purejs")
    .get((req,res)=>{
        res.render("pure",{
            title:"pureJS",
            VueRoute:false,
            animate:false
        })
    });
app.route("/vuejs-css")
    .get((req,res)=>{
        res.render("vue",{
            title:"VUEJS ANIMATE",
            VueRoute:true,
            animate:true
        })
    })
/**
 * Запуск на порту
 */
app.listen(port, () => {
    console.log("App listening on port " + port);
});
