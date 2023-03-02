import React, { useState } from "react";
import "./App.css";
import GitHubUser from "./Components/GitHubUser";
import UserInput from "./Components/UserInput";

function App() {
  const [login, setLogin] = useState("");

  return (
    <div className="App">
      <UserInput
        value={login}
        logout={() => setLogin("")}
        login={(login) => setLogin(login)}
      ></UserInput>
      <GitHubUser login={login}></GitHubUser>
    </div>
  );
}

export default App;
