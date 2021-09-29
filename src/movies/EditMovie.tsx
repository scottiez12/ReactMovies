import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlMovies } from "../Endpoints";
import DisplayErrors from "../utilities/DisplayErrors";
import { convertMovieToFormData } from "../utilities/formDataUtilities";
import Loading from "../utilities/Loading";
import { movieCreationDTO, moviePutGetDTO } from "./movie.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieCreationDTO>();
  const [moviePutGet, setMoviePutGet] = useState<moviePutGetDTO>();
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${urlMovies}/PutGet/${id}`)
      .then((response: AxiosResponse<moviePutGetDTO>) => {
        const model: movieCreationDTO = {
          title: response.data.movie.title,
          inTheaters: response.data.movie.inTheaters,
          trailer: response.data.movie.trailer,
          posterURL: response.data.movie.poster,
          summary: response.data.movie.summary,
          releaseDate: new Date(response.data.movie.releaseDate),
        };
        setMovie(model);
        setMoviePutGet(response.data);
      });
  }, [id]);

  async function edit(movieToEdit: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movieToEdit);
      await axios({
        method: "put",
        url: `${urlMovies}/${id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push(`/movie/${id}`);
    } catch (error) {
      const err = error as AxiosError;
      setErrors(err.response?.data);
    }
  }

  return (
    <>
      <h3>Edit Movie</h3>
      <DisplayErrors errors={errors} />
      {movie && moviePutGet ? (
        <MovieForm
          model={movie}
          onSubmit={async (values) => await edit(values)}
          selectedGenres={moviePutGet.selectedGenres}
          nonSelectedGenres={moviePutGet.nonSelectedGenres}
          selectedMovieTheaters={moviePutGet.selectedMovieTheaters}
          nonSelectedMovieTheaters={moviePutGet.nonSelectedMovieTheaters}
          selectedActors={moviePutGet.actors}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
