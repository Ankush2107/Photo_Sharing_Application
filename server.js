const express = require('express');
const app = new express();

const port = 8080;

app.listen(port, () => {
    console.log(`Seeing photo app on http://localhost:${port}`);
})