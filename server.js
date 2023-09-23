const express = require('express');
const path = require('path');
const app = new express();

const port = 8080;

app.use(express.static('public'))
app.set("view engine", "ejs")

app.set('views', path.join(__dirname, 'views'));


app.get("/", (request, response) => {
    response.render("index")
})

app.listen(port, () => {
    console.log(`Seeing photo app on http://localhost:${port}`);
})