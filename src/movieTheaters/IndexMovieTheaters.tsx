import { Link } from "react-router-dom";
import { urlMovieTheaters } from "../Endpoints";
import IndexEntity from "../utilities/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.model";

export default function IndexMovieTheaters() {
  return (
    <>
      <IndexEntity<movieTheaterDTO>
        url={urlMovieTheaters}
        title="Movie Theaters"
        createUrl="movieTheaters/create"
        entityName="Movie Theater"
      >
        {(entities, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {entities?.map((entity) => (
                <tr key={entity.id}>
                  <td>
                    {buttons(`movieTheaters/edit/${entity.id}`, entity.id)}
                  </td>
                  <td>{entity.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
