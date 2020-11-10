import React, { FC } from "react";
import { Button, TextField, Box, makeStyles } from "@material-ui/core";

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const styles = makeStyles({
  button: {
    fontSize: "2em",
    margin: "10px",
  },
  input: { verticalAlign: "baseline" },
});
export const CounterContext = React.createContext<any>({});

function countReducer(state = 0, { type, initialState }: any): any {
  switch (type) {
    case actionTypes.increment: {
      return state + 1;
    }
    case actionTypes.decrement: {
      return state - 1;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

type UseCounter = any;

export const useCounter: UseCounter = (reducer = countReducer) => ({});

type CounterProps = {
  children: any;
  value: number;
};
const Counter: FC<CounterProps> = ({ children, value }) => {
  const [state, dispatch] = React.useReducer(countReducer, value);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export function CounterIncrementButton(props: any) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();

  const handleClick = () => {
    dispatch({ type: actionTypes.increment });
  };
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}

export function CounterDecrementButton(props: any) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();
  const handleClick = () => {
    dispatch({ type: actionTypes.decrement });
  };
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}

export function CounterInput({ ...props }) {
  const { state } = React.useContext(CounterContext);
  const classes = styles();
  return (
    <TextField
      id="standard-number"
      inputProps={{
        min: 0,
        style: { textAlign: "center", fontSize: "2em", maxWidth: "4em" },
      }}
      classes={{ root: classes.input }}
      type="number"
      value={state}
    />
  );
}

export default Counter;
