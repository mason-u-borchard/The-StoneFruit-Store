import { PromiseProvider } from "mongoose";
import React from "react";
import Collapsible from "react-collapsible";
import { drop } from "underscore";

const DropDown = (props) => {
  var additionalText = 'FEATURES\n★  Plz send new non silly brain plz! things are way too silly!\n★  Steady havin what I believe a psychiatrist would call a "mental breakdance"\n★  When it comes to my mental brain, im just lookin 4 the right crank to pull (keep pulling the wrong cranks, turns out)\n★  Not everyday that u get so hilarious brained that u invent the solutions machine'.split(
    "\n"
  );
  if (props.currentApp.additional_text) {
    additionalText = props.currentApp.additional_text.split("\n");
  }

  const dropdownInfo = additionalText.map((line, i) => {
    return (
      <p
        className="description-text"
        id={`addText${i}`}
        style={{
          display: "grid",
          gridArea: `text${i}`,
        }}
      >
        {line}
      </p>
    );
  });
  console.log("dropDown info", dropdownInfo);

  return (
    <div>
      <Collapsible
        id="readmore"
        dataPlacement="bottom"
        className="comet-popover--top-left-aligned"
        trigger={props.readMore}
        style={{
          display: "grid",
          cursor: "pointer",
          gridArea: "readMore",
          gridTemplate: "text0 text1 text2 text3 readmore",
          justifyContent: "center",
          alignText: "center",
        }}
        onOpening={props.toggleAdditionalText}
        onClosing={props.toggleAdditionalText}
      >
        <br></br>
        <br></br>
        {dropdownInfo}
      </Collapsible>
    </div>
  );
};
export default DropDown;
