import { Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Counter, {
  CounterDecrementButton,
  CounterIncrementButton,
  CounterInput,
  countReducer,
  actionTypes,
} from "./Counter";

const styles = makeStyles({
  root: {
    margin: "10em auto",
    width: "50vw",
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
  const [state, dispatch] = React.useReducer(stateReducer, 0);
  function stateReducer(state: number, action: { type: string }) {
    return countReducer(state, action);
  }

  return (
    <Card className={classes.root} elevation={6}>
      <Grid className={classes.gridContainer} container>
        <Grid className={classes.gridItem}>
          <Counter value={state}>
            <CounterDecrementButton
              onClick={() => {
                dispatch({ type: actionTypes.decrement });
              }}
            >
              -
            </CounterDecrementButton>
            <CounterInput value={state} />
            <CounterIncrementButton
              onClick={() => {
                dispatch({ type: actionTypes.increment });
              }}
            >
              +
            </CounterIncrementButton>
          </Counter>
        </Grid>
      </Grid>
    </Card>
  );
}

export default App;
