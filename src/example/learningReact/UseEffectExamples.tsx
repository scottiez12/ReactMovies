import { useEffect, useState } from "react";

export default function UseEffectExamples() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    //executed immediated
    console.log("component loaded....basically did mount");

    return () => {
      //run before the component is destroyed.... unmounted.
      console.log("this component is destroyed.... basically unmount");
    };
    //only run once
  }, []);

  useEffect(
    () => {
      document.title = `${clicks} times`;
    },
    //clicks is the dependency for rerender... basically rerunningthis useEffect.
    [clicks]
  );

  return (
    <>
      <h1>UseEffect Examples</h1>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You have clicked {clicks} times
        </button>
      </div>
    </>
  );
}
