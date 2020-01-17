import React from "react";
import logo from "./logo.svg";
import "normalize.css";
import "./App.css";
import ExchangeForm from "./ui/ExchangeForm/ExchangeForm";
import { AppProvider } from "./hooks/app-context";
import Screen from "./ui/Screen/Screen";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Screen title="Exchange">
          <ExchangeForm />
        </Screen>
      </div>
    </AppProvider>
  );
}

export default App;
