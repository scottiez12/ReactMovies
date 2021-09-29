import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { urlMovies } from "../Endpoints";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import DisplayErrors from "../utilities/DisplayErrors";
import {
  convertActorToFormData,
  convertMovieToFormData,
} from "../utilities/formDataUtilities";
import Loading from "../utilities/Loading";
import { movieCreationDTO, moviesPostGetDTO } from "./movie.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<
    movieTheaterDTO[]
  >([]);

  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectedGenres(response.data.genres);
        setNonSelectedMovieTheaters(response.data.movieTheaters);
        setLoading(false);
      });
  }, []);

  async function create(movie: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movie);
      const response = await axios({
        method: "post",
        url: urlMovies,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push(`/movie/${response.data}`);
    } catch (error) {
      const err = error as AxiosError;
      if (err && err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Movie</h3>
      <DisplayErrors errors={errors} />
      {loading ? (
        <Loading />
      ) : (
        <MovieForm
          model={{ title: "", inTheaters: false, trailer: "" }}
          onSubmit={async (values) => await create(values)}
          selectedGenres={[]}
          nonSelectedGenres={nonSelectedGenres}
          selectedMovieTheaters={[]}
          nonSelectedMovieTheaters={nonSelectedMovieTheaters}
          selectedActors={[]}
        />
      )}
    </>
  );
}
