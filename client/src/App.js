import React from "react";
import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold ">Welcome to My App</h1>
        <ItemList />
      </header>
    </div>
  );
}

export default App;
