import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // State to store the API response
  const [apiResponse, setApiResponse] = useState(null);

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/");
      const data = await response.json();
      if (data.message === "response generated successfully") {
        setApiResponse(data.value);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // useEffect to call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Raoof Naushad</p>
        {/* Display API response */}
        {apiResponse && <p>{apiResponse}</p>}
      </header>
    </div>
  );
}

export default App;
