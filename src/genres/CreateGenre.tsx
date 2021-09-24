import GenreForm from "./GenreForm";
import axios, { AxiosError } from "axios";
import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../Endpoints";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utilities/DisplayErrors";

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      history.push("/genres");
    } catch (error) {
      const err = error as AxiosError;
      if (err && err.response) {
        setErrors(err.response.data);
      }
    }
  }
  return (
    <>
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
