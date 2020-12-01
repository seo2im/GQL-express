import { bodyParserGraphQL } from 'body-parser-graphql'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import fs from 'fs'


const typeDefs = fs.readFileSync("schema.graphql", { encoding : 'utf-8'});
import resolver from './Resolver'

const app = express();
app.use(bodyParserGraphQL());
app.use(compression());

const server = new ApolloServer({
	typeDefs, resolvers, introspection : true, playground : true
})

server.applyMiddleware({
	app,
	path : "/graphql"
});

app.listen(4000, function(){
	console.log("gql port : 4000");
})