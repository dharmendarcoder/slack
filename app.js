const express = require('express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const app = express()
const port = process.env.PORT
const db = require("./models");
require("./routes/user.routes")(app);
require("./routes/team.routes")(app);
require("./routes/channel.routes")(app);
require("./routes/message.routes")(app);
require("./routes/member.routes")(app);
const { ApolloServer, gql } = require('apollo-server-express');
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});
async function startApolloServer() {

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });


    await new Promise(resolve => app.listen(port, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
    return { server, app };
}

startApolloServer()

// app.listen(port, () => {
//     console.log(port)
// })