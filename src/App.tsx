import React from "react";
import "./App.css";
import Home from "./components/Home";
import { data } from "./Data";

function App() {
  return <Home {...data} />;
}

export default App;
