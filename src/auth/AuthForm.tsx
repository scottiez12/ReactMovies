import { Form, Formik, FormikHelpers } from "formik";
import { userCredentials } from "./auth.models";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props: authFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("This value is required")
          .email("You must insert a valid email"),
        password: Yup.string().required("This field is required"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="email" displayName="Email" />
          <TextField field="password" displayName="Password" type="password" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Send
          </Button>
          <Link className="btn btn-secondary" to="/">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface authFormProps {
  model: userCredentials;
  onSubmit(
    values: userCredentials,
    actions: FormikHelpers<userCredentials>
  ): void;
}
