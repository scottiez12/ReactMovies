import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Brad Pitt",
          dateOfBirth: new Date("1981-04-01T00:00:00"),
          biography: `# Something
          , This person was born in **DR** `,
          pictureURL:
            "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
