import { useEffect, useState } from "react";
import { landingPageDTO } from "./movie.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  //using this setTimeout to replicate the latency of calling an API....async....
  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Fight Club",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
          },
          {
            id: 2,
            title: "Donnie Darko",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/d/db/Donnie_Darko_poster.jpg",
          },
          {
            id: 3,
            title: "A Clockwork Orange",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/A_Clockwork_Orange_%281971%29.png/220px-A_Clockwork_Orange_%281971%29.png",
          },
        ],
        upcomingReleases: [
          {
            id: 4,
            title: "Resident Evil",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Resident_evil_ver4.jpg/220px-Resident_evil_ver4.jpg",
          },
        ],
      });
    }, 2500);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </>
  );
}
