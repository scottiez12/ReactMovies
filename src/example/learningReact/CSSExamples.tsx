// import './CSSExamples.css'; //this imports this for everything! not just this component! Kind of counter intuitive! import modules!
import cssModule from "./CSSExamples.module.css";

export default function CSSExamples() {
  const square = {
    backgroundColor: "green",
    height: "50px",
    width: "50px",
    marginLeft: "1rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <h1 className="red">CSS Examples</h1>
      <h2 style={{ color: "blue", fontSize: "18px" }}>SubText</h2>
      <div style={square}></div>
      <br />
      {/* <h3 className={cssModule["primary-color"]}> Text style from a module</h3> */}
      <h3 className="primary-color"> Text style from a not from module</h3>
    </>
  );
}
