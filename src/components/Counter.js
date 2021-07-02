import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/index";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  let value = 2;

  const toggleCounterHandler = () => {
    dispatch({ type: actions.TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: actions.INCREMENT });
  };
  const increaseHandler = () => {
    dispatch({ type: actions.INCREASE, value });
  };
  const decrementHandler = () => {
    dispatch({ type: actions.DECREMENT });
  };
  const resetHandler = () => {
    dispatch({ type: actions.RESET });
  };
  // console.log(showCounter)
  return (
    <main className={classes.counter}>
      {showCounter && (
        <>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by {value}</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>
        {showCounter ? "Hide counter" : "Show Counter"}
      </button>
    </main>
  );
};

export default Counter;
