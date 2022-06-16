import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkModeIsOn, setDarkModeIsOn] = useState(false);
  const appClass = darkModeIsOn ? "App dark" : "App light"

  const toggleDarkMode = () => {
    setDarkModeIsOn(darkModeIsOn => !darkModeIsOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
