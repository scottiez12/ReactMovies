import { Link } from "react-router-dom";

export default function IndexMovieTheaters() {
  return (
    <>
      <h3>Movie Theaters</h3>
      <Link className="btn btn-primary mx-1" to={"/movieTheaters/create"}>
        Create Movie Theater
      </Link>
      <Link className="btn btn-primary mx-1" to={"/movieTheaters/create"}>
        Edit Movie Theater
      </Link>
    </>
  );
}
