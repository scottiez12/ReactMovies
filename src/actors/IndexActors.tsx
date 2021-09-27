import { urlActors } from "../Endpoints";
import IndexEntity from "../utilities/IndexEntity";
import { actorDTO } from "./actors.model";

export default function IndexActors() {
  return (
    <IndexEntity<actorDTO>
      url={urlActors}
      title="Actors"
      createUrl="actors/create"
      entityName="Actors"
    >
      {(actors, buttons) => (
        <>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {actors?.map((actor) => (
              <tr key={actor.id}>
                <td>{buttons(`actors/edit/${actor.id}`, actor.id)}</td>
                <td>{actor.name}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
