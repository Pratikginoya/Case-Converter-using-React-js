import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#737373";
      document.title = "MyProject - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "MyProject - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Case Converter"
          nav_1="Home"
          mode={mode}
          toggleChange={toggleChange}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter Text Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
