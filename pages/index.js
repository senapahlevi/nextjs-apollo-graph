/*import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { Component } from "react";
import { BookInfo, AuthorInfo } from "../components";

const Home = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql-data",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <BookInfo />
        <AuthorInfo />
      </div>
    </ApolloProvider>
  );
};

export default Home;
*/ import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import BookInfo from "../components/BookInfo/BookInfo";
import UserMovieForm from "../components/userMovie/userMovieForm";
import DaftarPerson from "../components/daftardiri/DaftarPersondiri";
const Home = () => {
  // const client = new ApolloClient({
  //   uri: "http://localhost:3000/api/userMovie",
  //   cache: new InMemoryCache(),
  // });

  const client = new ApolloClient({
    uri: " https://tyoku.sse.codesandbox.io/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <DaftarPerson />
      </div>
    </ApolloProvider>
  );
};

export default Home;
