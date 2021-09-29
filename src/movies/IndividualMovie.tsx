import { movieDTO } from "./movie.model";
import css from "./IndividualMovie.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndividualMovie(props: movieDTO) {
  const buildLink = () => `/movie/${props.id}`;

  return (
    <div className={css.div}>
      <Link to={buildLink()}>
        <img alt="Poster" src={props.poster} />
      </Link>
      <p>
        <Link to={buildLink()}>{props.title}</Link>
      </p>
    </div>
  );
}
