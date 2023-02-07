import React, { useContext, useReducer } from "react";

const initialState = {
  a: "1111",
  b: "2222",
};

const reducer = (prevState, action) => {
  let newState = { ...prevState };

  switch (action.type) {
    case "change-a":
      newState.a = action.value;
      return newState;
    case "change-b":
      newState.b = action.value;
      return newState;
    default:
      return prevState;
  }

  return prevState;
};

const GlobalContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Child1 />
      <Child2 />
      <Child3 />
    </GlobalContext.Provider>
  );
}

function Child1() {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "change-a",
            value: "2222222222222",
          });
        }}
      >
        改变a
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "change-b",
            value: "66666666666666666666666666",
          });
        }}
      >
        改变b
      </button>
    </div>
  );
}

function Child2() {
  const { state } = useContext(GlobalContext);
  return <div style={{ backgroundColor: "yellowgreen" }}>Child2-{state.a}</div>;
}

function Child3() {
  const { state } = useContext(GlobalContext);
  return <div style={{ backgroundColor: "pink" }}>Child3-{state.b}</div>;
}
