import { ApolloServer, gql } from "apollo-server-micro";
let book = {
  id: "",
  name: "Rendang khas minang otentik",
  author: "budiono",
};

const typeDefs = gql`
  type Book {
    id: String
    name: String
    author: String
  }
  type Query {
    book: Book
  }
  type Mutation {
    updateBook(id: String, name: String!, author: String!): Book
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

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler({ path: "/api/graphql-data" });
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
