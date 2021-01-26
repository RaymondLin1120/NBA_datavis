const express = require('express');
const app = express();
const playerRoutes = require('./routes/player');

const HTTP_PORT = process.env.PORT || 8080;

app.use("/player", playerRoutes);

app.listen(HTTP_PORT, () => {
    console.log("Server running on port " + HTTP_PORT);
})