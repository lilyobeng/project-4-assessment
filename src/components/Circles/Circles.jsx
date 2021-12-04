import React from "react";
import "./Circles.css";

function Circles(props) {
  return (
    <div className="Circles">
      <div className={props.state.selected1 ? "selected" : '' }>1</div>
      <div className={props.state.selected2 ? "selected" : '' }>2</div>
      <div className={props.state.selected3 ? "selected" : ''}>3</div>
      <div className={props.state.selected4 ? "selected" : ''}>4</div>
    </div>
  );
}

export default Circles;