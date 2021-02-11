import React from "react";

const CounterContext = React.createContext({
  value: 0,
  setValue: () => { },
});
export const CounterContextProvider = CounterContext.Provider;
export default CounterContext;

