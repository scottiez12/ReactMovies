import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Brad Pitt",
          dateOfBirth: new Date("1981-04-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
