import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Example of an unused variable
  const unusedVariable = "I am not used anywhere";

  // Example of hardcoded credentials (vulnerable to security scanning tools)
  const apiKey = "12345-ABCDE"; // Sensitive information hardcoded

  // Example of using eval(), which is a security risk in JavaScript
  const potentiallyDangerousFunction = () => {
    const userInput = "2 + 2"; // Simulated user input
    // Using eval() can be dangerous and is generally not recommended
    const result = eval(userInput);
    console.log(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is the test branch</h1>
        {/* Calling the insecure function */}
        <button onClick={potentiallyDangerousFunction}>Run Eval</button>
      </header>
    </div>
  );
}

export default App;
