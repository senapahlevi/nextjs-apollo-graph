import { ApolloServer, gql } from "apollo-server-micro";

let todos = [
  {
    id: Date.now().toString(),
    text: "Hello From GraphQL",
    completed: true,
  },
];
const typeDefs = gql`
  type Todo {
    id: String
    text: String
    completed: Boolean
  }
  type Query {
    todos: [Todo]!
  }
  type Mutation {
    createTodo(text: String!): String
    removeTodo(id: String!): String
    updateTodo(id: String!): String
  }
`;

const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    createTodo: (parent, args, context, info) => {
      return todos.push({
        id: Date.now().toString(),
        text: args.text,
        completed: false,
      });
    },
    removeTodo: (parent, args, context, info) => {
      for (let i in todos) {
        if (todos[i].id === args.id) {
          todos.splice(i, 1);
        }
      }
      return args.id;
    },
    updateTodo: (parent, args, context, info) => {
      for (let i in todos) {
        if (todos[i].id === args.id) {
          todos[i].completed = !todos[i].completed;
        }
      }
      return args.id;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler({ path: "/api/graphqlform" });
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
