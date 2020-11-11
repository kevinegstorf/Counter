import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Counter,
  CounterDecrementButton,
  CounterIncrementButton,
  CounterInput,
  countReducer,
  ActionTypes,
} from "./Counter";

const styles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30vh",
  },
});

function App() {
  const classes = styles();
  const [state, dispatch] = React.useReducer(stateReducer, 0);
  function stateReducer(state: number, action: { type: string }) {
    return countReducer(state, action);
  }

  return (
    <Container className={classes.root}>
      <Counter value={state}>
        <div style={{ display: "inline-grid" }}>
          <CounterInput value={state} />
          <CounterIncrementButton
            onClick={() => {
              dispatch({ type: ActionTypes.increment });
            }}
          >
            +
          </CounterIncrementButton>
          <CounterDecrementButton
            disabled={state <= 0}
            onClick={() => {
              dispatch({ type: ActionTypes.decrement });
            }}
          >
            -
          </CounterDecrementButton>
        </div>
      </Counter>
    </Container>
  );
}

export default App;
