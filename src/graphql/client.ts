import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://127.0.0.1:1337/graphql'
const client = new GraphQLClient(endpoint)

export default client