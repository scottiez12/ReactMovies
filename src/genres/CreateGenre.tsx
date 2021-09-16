import { Link, useHistory } from "react-router-dom";
import Button from "../utilities/Button";

export default function CreateGenre() {
  const history = useHistory();
  return (
    <>
      <h3>Create Genre</h3>
      <Button
        onClick={() => {
          //...save in db then redirect user
          history.push("/genres");
        }}
      >
        Save Changes
      </Button>
    </>
  );
}
