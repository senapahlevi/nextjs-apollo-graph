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

const SET_BOOK_DETAILS = gql`
  mutation UpdateBook($id: String, $name: String!, $author: String!) {
    updateBook(id: $id, name: $name, author: $author) {
      id
      name
      author
    }
  }
`;

const BookInfo = () => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS);
  const updateCache = (cache, { data: { updateBook } }) => {
    const existingBook = cache.readQuery({
      query: GET_BOOK_DETAILS,
    });
    cache.writeQuery({
      query: GET_BOOK_DETAILS,
      data: { book: updateBook },
    });
  };
  const [updateBook] = useMutation(SET_BOOK_DETAILS, { update: updateCache });
  if (loading) return <p>Loading... sabar yak book</p>;
  if (error) return <p>Error dong book</p>;

  const updateBookDetails = (args) => {
    console.log("Update booooooook detailss");
    updateBook({
      variables: { id: args.id, name: args.name, author: args.author },
    });
  };
  return (
    <div>
      <p>
        {data.book.name}-{data.book.author}
        ayo updateee
      </p>
      <button onClick={updateBookDetails}>Update Book NOW!</button>
    </div>
  );
};
export default BookInfo;
