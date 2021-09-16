import { Link } from "react-router-dom";

export default function IndexGenres() {
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary mx-1" to={"/genres/create"}>
        Create Genre
      </Link>
      <Link className="btn btn-primary mx-1" to={"/genres/edit"}>
        Edit Genre
      </Link>
    </>
  );
}
