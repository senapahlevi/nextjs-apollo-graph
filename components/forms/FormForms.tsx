import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useState, useEffect } from "react";
const CREATE_USER = gql`
  mutation CreateUser($firstname: String!, $lastname: String!, $nickname: String!, $email: String!, $password: String!) {
    createUser(data: { firstname: $firstname, lastname: $lastname, nickname: $nickname, email: $email, password: $password }) {
      id
    }
  }
`;
const FormForms = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    createUser({ variables: { ...user } });
    event.preventDefault();
  };

  return (
    <div onSubmit={handleSubmit}>
      <label>
        First name:
        <input onChange={handleOnChange} type="text" name="firstname" />
      </label>
      <label>
        Second name:
        <input onChange={handleOnChange} type="text" name="lastname" />
      </label>
      <label>
        Nickname:
        <input onChange={handleOnChange} type="text" name="nickname" />
      </label>
      <label>
        Email:
        <input onChange={handleOnChange} type="text" name="email" />
      </label>
      <label>
        Password:
        <input onChange={handleOnChange} type="password" name="password" />
      </label>
      <input type="submit" value="Create" />
    </div>
  );
};

export default FormForms;
