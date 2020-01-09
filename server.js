const express = require("express");
const app = express();



app.use(express.static(__dirname + "/static"));
app.get('/', (request, response) => {
    response.send("/static/index.html", { root: __dirname });
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get("/users", (req, res) => {
    // hard-coded user data
    var users_array = [
        // { name: "Michael", email: "michael@codingdojo.com" },
        // { name: "Jay", email: "jay@codingdojo.com" },
        // { name: "Brendan", email: "brendan@codingdojo.com" },
        // { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    res.render('cars', { users: users_array });
})

app.get("/cars", (req, res) => {
    res.render('cars');
})

app.get("/cats", (req, res) => {
    res.render('cats');
})
var cats_arr = [
    { name: "Garfield", age: "7", description: "A cat with lazyness" },
    { name: "cuddles", age: "2", description: "A cat with cuteness" },
    { name: "Sly", age: "5", description: "A cat with attitude" },
];


app.get("/cats1", (req, res) => {
    res.render('./catsf/cat1', { cat: cats_arr });
})
app.get("/cats2", (req, res) => {
    res.render('./catsf/cat2', { cat: cats_arr });
})
app.get("/cats3", (req, res) => {
    res.render('./catsf/cat3', { cat: cats_arr });
})


app.get("/cars/new", (req, res) => {
    res.render('newCar');
})

app.listen(8000, () => console.log("listening on port 8000"));