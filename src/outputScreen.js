import React from "react";
import { OutputScreenRow } from "./outputScreen-row";
const OutputScreen = (props) => {
  return (
    <div className="Screen">
      <OutputScreenRow value={props.question} />
      <OutputScreenRow value={props.answer} />
    </div>
  );
};

export default OutputScreen;
