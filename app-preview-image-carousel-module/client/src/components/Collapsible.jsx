import { PromiseProvider } from "mongoose";
import React from "react";
import Collapsible from "react-collapsible";

const DropDown = (props) => {
  console.log("props dropdown", props);
  const additionalText = props.currentApp;
  console.log("currentApp", additionalText);
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
          gridTemplate: "feature text1 text2 text3 readmore",
          color: "green",
          justifyContent: "center",
          alignText: "center",
          fontfamily: "Arial",
        }}
        onOpening={props.toggleAdditionalText}
        onClosing={props.toggleAdditionalText}
      >
        {props.readMore}

        <p
          className="description-text"
          id="feature"
          style={{
            display: "grid",
            gridArea: "feature",
          }}
        >
          {additionalText[0]}
        </p>
        <p
          className="description-text"
          id="text1"
          style={{
            display: "grid",
            gridArea: "text1",
          }}
        >
          {additionalText[1]}
        </p>
        <p
          className="description-text"
          id="addText2"
          style={{
            display: "grid",
            gridArea: "text2",
          }}
        >
          {additionalText[2]}
        </p>
        <p
          className="description-text"
          id="addText3"
          style={{
            display: "grid",
            gridArea: "text3",
          }}
        >
          {additionalText[3]}
        </p>
      </Collapsible>
    </div>
  );
};
export default DropDown;
