import { useState } from "react";
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
        <SelectNumber onSelected={setSelectedRate} />
        <div>{displayResult()}</div>
      </div>
    </>
  );
}
