import React, { useState } from "react";
import ProjectContent from "./ProjectContent";
import SelectNumber from "./SelectNumber";
import Simple from "./Simple";

export default function ConditionalsIfSeveralComponents() {
  const [selectedRate, setSelectedRate] = useState(1);
  function displayResult() {
    if (selectedRate === 1) {
      return <span>No!</span>;
    } else if (selectedRate === 2)
      return (
        <>
          <span>Tell us how to get better.</span>
        </>
      );
    else if (selectedRate === 3) {
      return <Simple />;
    } else {
      return <span> Thanks!</span>;
    }
  }

  return (
    <>
      <div>
        <h2> Conditionals If Example</h2>
        <div>Rate This website</div>
        <SelectNumber
          selectContent={(value) => `Select ${value}`}
          onSelected={setSelectedRate}
        />
        {/* <div>{displayResult()}</div> */}
        <div>
          <ProjectContent bottomPart={<>This is the end.</>}>
            <>
              <div>
                {" "}
                <span>
                  I'm pretty sure this is a lot like renderFragment in blazor...
                  or vice versa.
                </span>
              </div>
              <div>
                <button
                  onClick={() =>
                    console.log(
                      "I was clicked...functionality passed as content parameter."
                    )
                  }
                >
                  This is a button as a parameter.
                </button>
              </div>
            </>
          </ProjectContent>
        </div>
      </div>
    </>
  );
}
