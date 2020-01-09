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

app.get("/cars/new", (req, res) => {
    res.render('newCar');
})

app.listen(8000, () => console.log("listening on port 8000"));