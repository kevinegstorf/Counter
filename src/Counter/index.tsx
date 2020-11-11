import React, { FC, ReactChild } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
};

const styles = makeStyles({
  button: {
    fontSize: "2em",
    margin: "10px",
  },
  input: {
    verticalAlign: "baseline",
  },
});
export const CounterContext = React.createContext<any>({});

export function countReducer(state = 0, { type }: { type: string }) {
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

type CounterProps = {
  children: ReactChild[] | ReactChild;
  value: number;
};
const Counter: FC<CounterProps> = ({ children, value = 0 }) => {
  const [state, dispatch] = React.useReducer(countReducer, value);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export function CounterIncrementButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();

  const handleClick = () => {
    onClick();
    dispatch({ type: actionTypes.increment });
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export function CounterDecrementButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();

  const handleClick = () => {
    onClick();
    dispatch({ type: actionTypes.decrement });
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export function CounterInput({ value }: { value: number }) {
  const { state } = React.useContext(CounterContext);
  const classes = styles();

  console.log(state);
  return (
    <TextField
      id="standard-number"
      inputProps={{
        min: 0,
        style: { textAlign: "center", fontSize: "2em", maxWidth: "4em" },
      }}
      classes={{ root: classes.input }}
      type="number"
      value={value ? value : state}
    />
  );
}

export default Counter;
