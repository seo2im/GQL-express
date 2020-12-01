import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type User{
		id : Int!
		name : String! 
	}

	type Query{
		users : [User]
		me(id : Int) : User
	}
`

export default typeDefs