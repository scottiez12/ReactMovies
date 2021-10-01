import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorize from "./auth/Authorize";
import { logout } from "./auth/handleJwt";
import Button from "./utilities/Button";

export default function Menu() {
  const { update, claims } = useContext(AuthenticationContext);

  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Movies
        </NavLink>
        <div
          className="collapse navbar-collapse"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link" to="/movies/filter">
                Filter Movies
              </NavLink>
            </li>

            <Authorize
              role="admin"
              authorized={
                <>
                  <li>
                    <NavLink className="nav-link" to="/genres">
                      Genres
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/actors">
                      Actors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/movieTheaters">
                      Movie Theaters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/movies/create">
                      Create a Movie
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/users">
                      Users
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>

          <div className="d-flex">
            <Authorize
              authorized={
                <>
                  <span className="nav-link">Hello, {getUserEmail()} </span>
                  <Button
                    className="nav-link btn btn-link"
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                  >
                    Log Out{" "}
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <Link to="/register" className="nav-link btn btn-link">
                    {" "}
                    Register{" "}
                  </Link>
                  <Link to="/login" className="nav-link btn btn-link">
                    {" "}
                    Login{" "}
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
