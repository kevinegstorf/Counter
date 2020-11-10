import React, { FC } from "react";
import { Button, TextField, Box } from "@material-ui/core";

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const CounterContext = React.createContext<any>({});

function countReducer(state = 0, { type, initialState }: any): any {
  switch (type) {
    case actionTypes.increment: {
      console.log(state);
      return state + 1;
    }
    case actionTypes.decrement: {
      console.log(state);
      return state - 1;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

type UseCounter = any;

export const useCounter: UseCounter = (
  value = 0,
  reducer = countReducer,
  onChange: any = null
) => ({});

type CounterProps = {
  children: any;
  value: number;
};
const Counter: FC<CounterProps> = ({ children, value }) => {
  const [state, dispatch] = React.useReducer(countReducer, value);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Box display="flex" style={{ margin: "0 auto" }}>
        {children}
      </Box>
    </CounterContext.Provider>
  );
};

export function CounterIncrementButton(props: any) {
  const { dispatch } = React.useContext(CounterContext);

  const handleClick = () => {
    dispatch({ type: actionTypes.increment });
  };
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      {props.children}
    </Button>
  );
}

export function CounterDecrementButton(props: any) {
  const { dispatch } = React.useContext(CounterContext);

  const handleClick = () => {
    dispatch({ type: actionTypes.decrement });
  };
  return (
    <Button variant="contained" color="secondary" onClick={handleClick}>
      {props.children}
    </Button>
  );
}

export function CounterInput({ ...props }) {
  const { state } = React.useContext(CounterContext);

  return (
    <TextField
      id="standard-number"
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      type="number"
      value={state}
    />
  );
}

export default Counter;
