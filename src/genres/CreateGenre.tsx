import GenreForm from "./GenreForm";
import axios from "axios";
import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../Endpoints";
import { useHistory } from "react-router-dom";

export default function CreateGenre() {
  const history = useHistory();
  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      history.push("/genres");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
