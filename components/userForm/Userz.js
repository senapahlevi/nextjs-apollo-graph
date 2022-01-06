import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
const GET_TODOS = gql`
  {
    getTodos {
      id
      title
      detail
      date
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_TODOS);
  return (
    <form>
      <div class="mb-3">
        <label>Title</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Detail</label>
        <input type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Date</label>
        <input type="date" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Users;
