import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Simple from "./Simple";
import UseEffectExamples from "./UseEffectExamples";
import GrandParent from "./GrandParent";
import ValueContext from "./ValueContext";
import DisplayGrade from "./DisplayGrade";
import ErrorBoundary from "../../ErrorBoundary";

function App() {
  const [hide, setHide] = useState(false);
  const grades = [75, 95, -5, 55];
  return (
    <>
      <div>
        <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
        {hide ? null : <UseEffectExamples />}
        <ValueContext.Provider value={hide}>
          <GrandParent />
        </ValueContext.Provider>
      </div>
      <div>
        {grades.map((grade, index) => (
          <ErrorBoundary
            key={index}
            errorUI={<h3>There wasn an error displaying the grade</h3>}
          >
            <DisplayGrade grade={grade} />
          </ErrorBoundary>
        ))}
      </div>
    </>
  );
}

export default App;
