import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../Endpoints";

export default function IndexGenres() {
  useEffect(() => {
    axios.get(urlGenres).then((response: AxiosResponse<genreDTO[]>) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary mx-1" to={"/genres/create"}>
        Create Genre
      </Link>
      <Link className="btn btn-primary mx-1" to={"/genres/edit"}>
        Edit Genre
      </Link>
    </>
  );
}
