import { PromiseProvider } from "mongoose";
import React from "react";
import Collapsible from "react-collapsible";

const DropDown = (props) => {
  var additionalText = "one\ntwo\nthree\nfour\nfive";
  if (props.currentApp.additional_text) {
    additionalText = props.currentApp.additional_text;
  }

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
          color: "#33691e",
          justifyContent: "center",
          alignText: "center",
          fontfamily: "Arial",
        }}
        onOpening={props.toggleAdditionalText}
        onClosing={props.toggleAdditionalText}
      >
        <br></br>
        <br></br>
        {additionalText.split("\n")[0]}

        <p
          className="description-text"
          id="feature"
          style={{
            display: "grid",
            gridArea: "feature",
          }}
        >
          {additionalText.split("\n")[1]}
        </p>
        <p
          className="description-text"
          id="addText1"
          style={{
            display: "grid",
            gridArea: "text1",
          }}
        >
          {additionalText.split("\n")[2]}
        </p>
        <p
          className="description-text"
          id="addText2"
          style={{
            display: "grid",
            gridArea: "text2",
          }}
        >
          {additionalText.split("\n")[3]}
        </p>
        <p
          className="description-text"
          id="addText3"
          style={{
            display: "grid",
            gridArea: "text3",
          }}
        >
          {additionalText.split("\n")[4]}
        </p>
      </Collapsible>
    </div>
  );
};
export default DropDown;
