import GenericList from "../utilities/GenericList";
import Loading from "../utilities/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movie.model";
import css from "./MoviesList.module.css";

export default function MoviesList(props: moviesListProps) {
  return (
    <GenericList list={props.movies}>
      <div className={css.div}>
        {props.movies?.map((movie) => (
          <IndividualMovie {...movie} key={movie.id} />
        ))}
      </div>
    </GenericList>
  );
}

interface moviesListProps {
  movies?: movieDTO[];
}
