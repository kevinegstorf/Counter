import { Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Counter, {
  CounterDecrementButton,
  CounterIncrementButton,
  CounterInput,
} from "./Counter";

const styles = makeStyles({
  root: {
    margin: "10em auto",
    width: "22%",
  },
  gridContainer: {
    margin: "0 auto",
  },
  gridItem: {
    margin: "0 auto",
  },
});

function App() {
  const classes = styles();
  // Make state visible and useable
  // add custom reducer like no negative numbers, max value
  // make it multiply or add 2
  return (
    <Card className={classes.root} elevation={6}>
      <Grid className={classes.gridContainer} container>
        <Grid className={classes.gridItem}>
          <Counter value={0}>
            <CounterDecrementButton>-</CounterDecrementButton>
            <CounterInput />
            <CounterIncrementButton>+</CounterIncrementButton>
          </Counter>
        </Grid>
      </Grid>
    </Card>
  );
}

export default App;
