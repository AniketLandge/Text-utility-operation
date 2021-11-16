import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWord = (word) => {
    word = word.replace(/(^\s*)|(\s*$)/gi, "");
    word = word.replace(/[ ]{2,}/gi, " ");
    word = word.replace(/\n /, "\n");
    return word.split(" ").length;
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#716F81" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text === "" ? 0 : countWord(text)} word and {text.length} character
        </p>

        <p>{text === "" ? 0 : 0.008 * countWord(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}
