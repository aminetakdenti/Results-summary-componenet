import React from "react";
import Circle from "./Circle";
import "./index.css";

function LeftSide() {
  return (
    <div
      id="test"
      className="flex-shrink-1 flex min-w-fit  flex-col items-center justify-between space-y-2 rounded-b-3xl p-8 text-center text-PaleBlue md:rounded-3xl "
    >
      <h2 className="text-xl font-bold">Your Result</h2>
      <Circle />
      <h1 className="text-4xl font-bold text-White">Great</h1>
      <p className="max-w-[160px] text-[12px]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default LeftSide;
