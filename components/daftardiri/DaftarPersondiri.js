import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";

const GET_TODO = gql`
  query GetTodoes {
    getTodos {
      id
      title
      description
      status
    }
  }
`;

const CREATE_TODO = gql`
  mutation AddTodo($todoInput: TodoInput!) {
    addTodo(todoInput: $todoInput) {
      id
      title
      description
    }
  }
`;

function DaftarPerson() {
  //create Person
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const { data, loading, refetch } = useQuery(GET_TODO);

  //
  const [addTodo] = useMutation(CREATE_TODO);
  if (loading) {
    return <h1>data lagi ngeload dong!</h1>;
  }
  return (
    <div>
      <h1>welcome to input your todo</h1>
      <div>
        <input
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <button
          onClick={() => {
            addTodo({
              variables: {
                todoInput: { title, description, status },
              },
            });
            setStatus(true);
          }}
        >
          CREATE USER
        </button>
      </div>
    </div>
  );
}
export default DaftarPerson;
