import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../store/index";
import { counterActions } from "../store/index";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  let value = 2;

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(value));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
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
