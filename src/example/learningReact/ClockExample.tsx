import { useEffect, useState } from "react";

export default function ClockExample() {
  const [myDate, setMydate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMydate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div>
      <h3>Example HTML</h3>
      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
}
