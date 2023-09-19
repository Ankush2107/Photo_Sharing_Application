const express = require('express');
const app = new express();

const port = 8080;

app.use(express.static('public'))


app.get('/', (request, response) => {
    response.json({
        "Hosting":  "Kinsta"
    })
})

app.listen(port, () => {
    console.log(`Seeing photo app on http://localhost:${port}`);
})