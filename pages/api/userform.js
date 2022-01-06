import { ApolloServer, gql } from "apollo-server-micro";
let todos = [
  {
    id: "",
    title: "",
    detail: "",
    date: Date.toString(),
  },
];
const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
  }
  type Query {
    welcome: String
    todos: [Todo]
  }
  type Mutation {
    addTodo(title: String, detail: String, date: Date): Todo
  }
`;

const resolvers = {
  Query: {
    welcome: () => {
      return "welcome senaa!";
    },
    todos: () => todos,
  },
  Mutation: {
    addTodo: async (root, args) => {
      todos.id = args.id;
      todos.name = args.name;
      todos.author = args.author;
      return todos;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler({ path: "/api/userform" });
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
