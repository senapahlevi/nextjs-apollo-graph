import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useState } from "react";

import FormDetails from "./FormDetail";

const USERS_QUERY = gql`
  {
    users {
      id
      firstname
      lastname
    }
  }
`;

const FormList = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [userId, setUserId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.users.map(({ id, firstname, lastname }) => (
          <li onClick={() => setUserId(id)} key={id}>
            {firstname} {lastname}
          </li>
        ))}
      </ul>
      {userId && <FormDetails id={userId}></FormDetails>}
    </div>
  );
};

export default FormList;
