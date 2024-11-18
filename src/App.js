import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Unused variable (Code Smell: Blocker Issue)
  const unusedVariable = "I am not used anywhere";

  // Hardcoded sensitive data (Security Vulnerability)
  const apiKey = "12345-ABCDE"; // Hardcoded secret key (critical issue)

  // Use of eval() (Security Vulnerability: Blocker Issue)
  const dangerousFunction = () => {
    const userInput = "alert('This is a security risk!')";
    eval(userInput); // This is a critical security issue
  };

  // Deprecated use of JavaScript functions (Code Smell)
  const deprecatedFunction = () => {
    document.write("This is not recommended in modern web development."); // Deprecated
  };

  // Missing error handling for fetch (Code Smell: Critical Issue)
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data); // No error handling for potential network or JSON parsing errors
  };

  // Long and complex function (Code Smell)
  const overlyComplexFunction = () => {
    for (let i = 0; i < 100; i++) {
      if (i % 2 === 0) {
        console.log(`Even number: ${i}`);
      } else {
        console.log(`Odd number: ${i}`);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SonarQube Trigger Test</h1>

        {/* Trigger security vulnerability */}
        <button onClick={dangerousFunction}>Run Dangerous Function</button>

        {/* Trigger deprecated usage */}
        <button onClick={deprecatedFunction}>Run Deprecated Function</button>

        {/* Trigger fetch without error handling */}
        <button onClick={fetchData}>Fetch Data</button>

        {/* Trigger long function */}
        <button onClick={overlyComplexFunction}>Run Complex Function</button>
      </header>
    </div>
  );
}

export default App;
