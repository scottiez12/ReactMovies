import { urlMovieTheaters } from "../Endpoints";
import EditEntity from "../utilities/EditEntity";
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
        url={urlMovieTheaters}
        entityName="Movie Theater"
        indexURL="/movieTheaters"
      >
        {(entity, edit) => (
          <MovieTheaterForm
            model={entity}
            onSubmit={async (values) => await edit(values)}
          />
        )}
      </EditEntity>
    </>
  );
}
