// const express = require('express');
// const app = express();
// const cors = require('cors');
// const playerRoutes = require('./routes/player');

// const HTTP_PORT = process.env.PORT || 8080;

// app.use(cors());

// app.use("/player", playerRoutes);

// app.listen(HTTP_PORT, () => {
//     console.log("Server running on port " + HTTP_PORT);
// })

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => {
    console.log("Server running on port " + HTTP_PORT)
})