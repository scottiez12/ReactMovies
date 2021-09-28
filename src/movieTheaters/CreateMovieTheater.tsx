import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { urlMovieTheaters } from "../Endpoints";
import DisplayErrors from "../utilities/DisplayErrors";
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater() {
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  async function create(movieTheater: movieTheaterCreationDTO) {
    try {
      await axios.post(urlMovieTheaters, movieTheater);
      history.push("/movieTheaters");
    } catch (error) {
      const err = error as AxiosError;
      if (err && err.response) {
        setErrors(err.response.data);
      }
    }
  }
  return (
    <>
      <h3>Create Movie Theater</h3>
      <DisplayErrors errors={errors} />
      <MovieTheaterForm
        model={{ name: "" }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
