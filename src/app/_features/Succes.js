import { useState } from "react";
export const Succes = (props) => {
  return (
    <div className="Succes" style={{ color: "red" }}>
      <div className="Set">
        <img className="pine-logo" src="pine.svg"></img>
        <h1 className="join">You're All Set 🔥</h1>
        <p className="please">We have received your submission. Thank you!</p>
      </div>
    </div>
  );
};
