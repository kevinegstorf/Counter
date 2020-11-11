import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import {
  Counter,
  CounterDecrementButton,
  CounterIncrementButton,
  CounterInput,
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

  return (
    <Container className={classes.root}>
      <Counter>
        <CounterDecrementButton>-</CounterDecrementButton>
        <CounterInput />
        <CounterIncrementButton>+</CounterIncrementButton>
      </Counter>
    </Container>
  );
}

export default App;
