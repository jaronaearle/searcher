import type { Component } from "solid-js";
import { fuckingTest } from "../../scrapes/index";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

const App: Component = () => {
  const [term, setTerm] = createSignal("");

  const onInputChange = (event: any) => {
    setTerm(event.target.value);
  };

  const onSearchSubmit = (event: any) => {
    event.preventDefault();
    console.log(term());
    fuckingTest();
  };

  const onTest = (test: string) => {
      console.
    }

  return (
    <div class={styles.App}>
      <label> Searching for? </label>
      <input type="text" onChange={onInputChange} />
      <button onClick={onSearchSubmit}> Submit Search </button>
    </div>
  );
};

export default App;
