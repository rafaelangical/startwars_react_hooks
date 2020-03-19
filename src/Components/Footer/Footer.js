import React from "react";

export default function Footer({ onClick, text }) {
  return (
    <footer className="button-botttom">
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </footer>
  );
}
