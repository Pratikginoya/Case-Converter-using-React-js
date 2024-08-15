import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "#212529",
    backgroundColor: "white",
  });
  const [myText, setMyText] = useState("Enable Dark Mode");

  const modeChange = () => {
    if (props.mode === "light") {
      setMyStyle({
        color: "#212529",
        backgroundColor: "white",
      });
      setMyText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
      setMyText("Enable Light Mode");
    }
  };
  return (
    <>
      <div
        className="px-4 py-5 my-5 text-center"
        style={{
          color: props.mode === "light" ? "#212529" : "white",
          backgroundColor: props.mode === "light" ? "white" : "#737373",
        }}
      >
        <h1 className="display-5 fw-bold mb-4">About Us</h1>
        <div className="col-lg-8 mx-auto mt-4">
          <p className="mt-4">
            Hello! I am Pratik Ginoya, and this is my first React.js project
            during my React learning journey.
          </p>
          <p className="mt-4">
            This project is a type of case converter. If you want to convert
            your text to sentence case, uppercase, lowercase, or capitalized
            case, you're most welcome to use it.
          </p>
          <p className="mt-4">
            You can copy your output using the "Copy Text" button, and you can
            check the total characters and words in your text using this
            project.
          </p>
          <p className="mt-4">
            With the "Clear Text" button, you can easily clear the text box for
            further input.
          </p>
          <p className="mt-4">
            Mode change (Dark mode / Light mode) functionality also given in
            navbar
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/" className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
