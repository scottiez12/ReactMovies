import { Link } from "react-router-dom";

export default function IndexActors() {
  return (
    <>
      <h3>Actors</h3>
      <Link className="btn btn-primary mx-1" to={"/actors/create"}>
        Create Actor
      </Link>
      <Link className="btn btn-primary mx-1" to={"/actors/edit"}>
        Edit Actor
      </Link>
    </>
  );
}
