import { Users } from './DB'

const resolver = {
	Query : {
		users : (_, args, context) => {
			return Users
		},

		me : (_, { id }, context) => {
			return Users.find(user => user.id === id);
		}
	}
}

export default resolver;