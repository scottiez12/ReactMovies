import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movie.model";
import * as Yup from "yup";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import ImageField from "../forms/ImageField";
import DateField from "../forms/DateField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorMovieDTO } from "../actors/actors.model";
import MarkdownField from "../forms/MarkdownField";

export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );

  const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(
    mapToModel(props.selectedMovieTheaters)
  );
  const [nonSelectedMovieTheaters, setNonselectedMovieTheaters] = useState(
    mapToModel(props.nonSelectedMovieTheaters)
  );

  const [selectedActors, setSelectedActors] = useState(props.selectedActors);

  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((item) => {
      return { key: item.id, value: item.name };
    });
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genreIds = selectedGenres.map((item) => item.key);
        values.movieTheatersIds = selectedMovieTheaters.map((item) => item.key);
        values.actors = selectedActors;
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required.")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title" />
          <CheckboxField displayName="In Theaters" field="inTheaters" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Release Date" field="releaseDate" />
          <MarkdownField displayName="Summary" field="summary" />
          <ImageField
            displayName="Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />
          <MultipleSelector
            displayName={"Genres"}
            selected={selectedGenres}
            nonSelected={nonSelectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />
          <MultipleSelector
            displayName={"Movie Theaters"}
            selected={selectedMovieTheaters}
            nonSelected={nonSelectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected);
              setNonselectedMovieTheaters(nonSelected);
            }}
          />

          <TypeAheadActors
            displayName="Actors"
            actors={selectedActors}
            onAdd={(actors) => {
              setSelectedActors(actors);
            }}
            onRemove={(actor) => {
              const actors = selectedActors.filter((x) => x !== actor);
              setSelectedActors(actors);
            }}
            listUI={(actor: actorMovieDTO) => (
              <>
                {actor.name} /
                <input
                  placeholder="Character"
                  type="text"
                  value={actor.character}
                  onChange={(e) => {
                    const index = selectedActors.findIndex(
                      (x) => x.id === actor.id
                    );
                    const actors = [...selectedActors];
                    actors[index].character = e.currentTarget.value;
                    setSelectedActors(actors);
                  }}
                />
              </>
            )}
          />
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to={"/genres"}>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheaters: movieTheaterDTO[];
  selectedActors: actorMovieDTO[];
}
