import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../Endpoints";
import GenericList from "../utilities/GenericList";
import Button from "../utilities/Button";
import Pagination from "../utilities/Pagination";

export default function IndexGenres() {
  const [genres, setGenres] = useState<genreDTO[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(urlGenres).then((response: AxiosResponse<genreDTO[]>) => {
      const totalAmountOfRecords = parseInt(
        response.headers["totalamountofrecords"],
        10
      );
      console.log(totalAmountOfRecords);
      setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
      setGenres(response.data);
    });
  }, []);

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary mx-1" to={"/genres/create"}>
        Create Genre
      </Link>

      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>
                  <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                    Edit
                  </Link>
                  <Button className="btn btn-danger">Delete</Button>
                </td>
                <td>{genre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
