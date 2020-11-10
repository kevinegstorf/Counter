import { Card, Container, Grid } from "@material-ui/core";
import React from "react";
import Counter, {
  CounterDecrementButton,
  CounterIncrementButton,
  CounterInput,
} from "./Counter";

function App() {
  return (
    <Container>
      <Card elevation={4}>
        <Grid>
          <Counter value={0}>
            <CounterDecrementButton>-</CounterDecrementButton>
            <CounterInput />
            <CounterIncrementButton>+</CounterIncrementButton>
          </Counter>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
