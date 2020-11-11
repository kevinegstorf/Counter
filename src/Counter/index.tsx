import React, { FC, ReactChild } from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";

enum ActionTypes {
  increment = "increment",
  decrement = "decrement",
}

const styles = makeStyles({
  button: {
    fontSize: "2em",
    margin: "10px",
  },
  input: {
    verticalAlign: "baseline",
  },
});

interface IContextProps {
  state: number;
  dispatch: ({ type }: { type: ActionTypes }) => void;
}

const CounterContext = React.createContext({} as IContextProps);

function countReducer(state = 0, { type }: { type: string }) {
  switch (type) {
    case ActionTypes.increment: {
      return state + 1;
    }
    case ActionTypes.decrement: {
      return state - 1;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

type CounterProps = {
  children: ReactChild[] | ReactChild;
  value?: number;
};

const Counter: FC<CounterProps> = ({ children, value = 0 }) => {
  const [state, dispatch] = React.useReducer(countReducer, value);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

function CounterIncrementButton({
  children,
  onClick,
  disabled = false,
}: {
  children: string;
  onClick?: (() => void) | undefined;
  disabled?: boolean;
}) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();

  const handleClick = () => {
    if (onClick) onClick();

    dispatch({ type: ActionTypes.increment });
  };

  return (
    <Button
      disabled={disabled}
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

function CounterDecrementButton({
  children,
  onClick,
  disabled = false,
}: {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const { dispatch } = React.useContext(CounterContext);
  const classes = styles();

  const handleClick = () => {
    if (onClick) onClick();

    dispatch({ type: ActionTypes.decrement });
  };

  return (
    <Button
      disabled={disabled}
      className={classes.button}
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

function CounterInput({ value }: { value?: number }) {
  const { state } = React.useContext(CounterContext);
  const classes = styles();

  return (
    <TextField
      inputProps={{
        min: 0,
        style: { textAlign: "center", fontSize: "2em", maxWidth: "4em" },
      }}
      classes={{ root: classes.input }}
      type="text"
      value={value ? value : state}
    />
  );
}

export {
  Counter,
  CounterInput,
  CounterDecrementButton,
  CounterIncrementButton,
  CounterContext,
  countReducer,
  ActionTypes,
};
