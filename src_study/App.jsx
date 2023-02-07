import React, { useReducer, useState } from "react";

const reducer = (pre, act) => {
  let newState = { ...pre };

  switch (act.type) {
    case "increase":
      newState.count++;
      return newState;
    case "decrease":
      newState.count--;
      return newState;
    default:
      return pre;
  }
};

const init = {
  count: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "decrease",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "increase",
          });
        }}
      >
        +
      </button>
    </>
  );
}
