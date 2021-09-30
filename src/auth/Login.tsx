import axios, { AxiosError } from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { urlAccounts } from "../Endpoints";
import DisplayErrors from "../utilities/DisplayErrors";
import { authenticationResponse, userCredentials } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJwt";

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history = useHistory();

  async function login(userCredentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`,
        userCredentials
      );
      saveToken(response.data);
      update(getClaims());
      history.push("/");
    } catch (error) {
      const err = error as AxiosError;
      if (err && err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Login</h3>
      <DisplayErrors errors={errors} />
      <AuthForm
        model={{ email: "", password: "" }}
        onSubmit={async (values) => await login(values)}
      />
    </>
  );
}
