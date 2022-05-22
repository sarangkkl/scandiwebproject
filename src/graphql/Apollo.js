import { ApolloClient,InMemoryCache,HttpLink,from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if(graphQLErrors){
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
})

const link = from ([
    errorLink,
    new HttpLink({uri:"http://localhost:4000"})
  ])
export  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:link
  })