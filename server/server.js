const express = require('express');
const path = require('path');
const db = require('./config/connection'); //folder exists
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); //folder exists
const { authMiddleware } = require('./utils/auth'); //folder exists

const PORT = process.env.PORT || 3001;
const app = express();

//setes up new ApolloServer to deal with graphQL content
const server = new ApolloServer({
  typeDefs, //right now, don't exist; need to create a schemas folder
  resolvers, // see above. Need a schemas folder
  context: authMiddleware, 
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build'))); //there was no build file in the client in starter code??
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html')); 
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});