import { CombinedGraphQLErrors } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error'


const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
        error.errors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    } else {
        console.error(`[Network error]:`, error)
    }
})

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_GRAPHQL_API,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    }
})

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

export default client