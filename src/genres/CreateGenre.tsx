import GenreForm from "./GenreForm";

export default function CreateGenre() {
  //const history = useHistory();
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          //function to run when the form is posted
          await new Promise((r) => setTimeout(r, 3000));
          console.log(value);
        }}
      />
    </>
  );
}
