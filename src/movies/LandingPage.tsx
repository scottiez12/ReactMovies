import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Authorize from "../auth/Authorize";
import { urlMovies } from "../Endpoints";
import AlertContext from "../utilities/AlertContext";
import { landingPageDTO } from "./movie.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
      <Authorize
        authorized={<>You are authorized</>}
        notAuthorized={<>Not authorized.</>}
        role="admin"
      />

      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </AlertContext.Provider>
  );
}
