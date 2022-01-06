import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_BOOK_DETAILS = gql`
  query {
    book {
      id
      name
      author
    }
  }
`;

const AuthorInfo = () => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS);
  if (loading) return <p>Loadingg....please wait</p>;
  if (error) return <p>Error sad!!</p>;
  return (
    <div>
      <h3>{data.book.author}</h3>
    </div>
  );
};

export default AuthorInfo;
