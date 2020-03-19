import React from "react";

export default function Footer({ onClick, text }) {
  return (
    <div className="button-botttom">
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
