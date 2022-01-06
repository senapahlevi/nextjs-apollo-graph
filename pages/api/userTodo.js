import { gql } from "apollo-server-micro";

const typeDefs = gql`
  query getTodos {
    todos {
      done: String
      id: ID
      text: String
    }
  }
`;

const resolvers = {
  Query: {
    book: () => book,
  },
  Mutation: {
    updateBook: (root, args) => {
      book.id = args.id;
      book.name = args.name;
      book.author = args.author;
      return book;
    },
  },
};
