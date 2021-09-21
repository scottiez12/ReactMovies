import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];
  const selectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: "Des Peres" },
  ];
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Crestwood" },
  ];

  const selectedActors: actorMovieDTO[] = [
    {
      id: 3,
      name: "Miles",
      character: "Himself",
      picture:
        "https://www.dogtime.com/assets/uploads/2019/07/labradane-mixed-dog-breed-pictures-cover.jpg",
    },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Lilo and Stitch",
          inTheaters: false,
          trailer: "url",
          releaseDate: new Date("2003-04-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={selectedGenres}
        nonSelectedGenres={nonSelectedGenres}
        selectedMovieTheaters={selectedMovieTheaters}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
