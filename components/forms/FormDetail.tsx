import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useState, useEffect } from "react";

const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      firstname
      lastname
      nickname
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;

const FormDetails = ({ id }) => {
  const { data } = useQuery(GET_USER, { variables: { id } });
  const [deleteUser] = useMutation(DELETE_USER);

  const handleOnClick = () => {
    deleteUser({ variables: { id } });
  };

  if (data && data.user) {
    const {
      user: { firstname, lastname, nickname, email },
    } = data;
    return (
      <div>
        <h2>Details</h2>
        <p>
          Name: {firstname} {lastname}
        </p>
        <p>Nickname: {nickname}</p>
        <p>E-mail: {email}</p>
        <button onClick={handleOnClick}>Remove</button>
      </div>
    );
  }

  return null;
};

export default FormDetails;
