import React, { useState } from "react";

export default function TextForm(props) {
  const handleSentenceClick =()=>{
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      let newText = text.toLowerCase();
      newText = newText.replace(/(^\s*\w|[\.\!\?]\s*\w|\bi\b)/g, function(match) {
          return match.toUpperCase();
      });
      setText(newText.trim());
      props.showAlert("Your text has been converted to Sentence case", "success");
    }
  }

  const handleUpClick = () => {
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      const newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Your text has been converted to Upper case", "success");
    }
  };

  const handleLoClick = () => {
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Your text has been converted to Lower case", "success");
    }
  };

  const handleCapitalClick = () => {
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      const newText = text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      setText(newText);
      props.showAlert("Your text has been converted to Capitalized", "success");
    }
  };

  const handleRemoveExptraSpaceClick = () => {
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      const newText = text.replace(/\s+/g,' ').trim();
      setText(newText);
      props.showAlert("Your text has been removed extra spaces", "success");
    }
  }

  const handleCopyToClipClick = ()=>{
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      navigator.clipboard.writeText(text);
      props.showAlert("Your text has been copied to clipboard", "success");
    }
  }

  const handleClearClick = () => {
    if(text.length === 0){
      props.showAlert("Enter something on text box", "danger");
    } else {
      const newText = "";
      setText(newText);
      props.showAlert("Your textbox has been cleared", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("asdasdfaf");

  const countWords = (word) => {
    if (!text.trim()) {
      return 0;
    }
    return text.trim().split(/\s+/).filter(Boolean).length;
  };
  return (
    <>
      <div className="mb-3 mt-3">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <textarea className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#737373",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`} onClick={handleSentenceClick}>
          Sentence case
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`} onClick={handleUpClick}>
          UPPER CASE
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`} onClick={handleLoClick}>
          lower case
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`} onClick={handleCapitalClick}>
          Capitalized Case
        </button>
        <button className={`btn ${props.mode === "light" ? "btn-primary" : "btn-dark"} mt-3 mx-1`} onClick={handleRemoveExptraSpaceClick}>
          Remove extra space
        </button>
        <button className={`btn btn-success mt-3 mx-1`} onClick={handleCopyToClipClick}>
          Copy Text
        </button>
        <button className="btn btn-danger mt-3 mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h4 className="mt-5">Text Summery</h4>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
      </div>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h3 className="mt-5">Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text for preview"}</p>
      </div>
    </>
  );
}
