import React, { Component } from "react";

import Rating from "./Rating.jsx";
import AdditionalInfo from "./AdditionalInfo.jsx";

const Info = function (props) {
  var editorsChoiceLogo =
    "https://icons-987654321.s3-us-west-1.amazonaws.com/editchoicefull.png";
  var editorsChoice = "Editors' Choice";

  if (props.app.editorChoice === true) {
    editorsChoiceLogo =
      "https://icons-987654321.s3-us-west-1.amazonaws.com/editchoicefull.png";
    editorsChoice = " Editors' Choice";
  }

  return (
    <div className="info">
      <img
        className="image"
        src="https://icons-987654321.s3-us-west-1.amazonaws.com/stonefruitlogo.jpg"
      ></img>
      <div className="name">StoneFruitStore</div>
      <div className="editorsChoice">
        {" "}
        <img style={{ maxWidth: "70%" }} src={editorsChoiceLogo}></img>
      </div>
      <div className="author">Cranjis McBasketball</div>
      <div className="category"> Productivity</div>

      <div className="ads">
        {" "}
        <img
          className="everyone"
          src="https://icons-987654321.s3-us-west-1.amazonaws.com/everyone-rating.png"
        ></img>
        <div className="contains">Contains Ads · Offers in-app purchases</div>
        <img
          className="caution"
          src="https://w1.pngwave.com/png/693/31/638/warning-icon-red-triangle-sign-line-signage-traffic-sign-symbol-png-clip-art.png"
        ></img>
        You don't have any devices.
      </div>
      <div className="wishlist">
        <img
          className="wishlistLogo"
          src="https://cdn0.iconfinder.com/data/icons/mix-of-simple-vol-4/57/02-512.png"
        ></img>
        Add to Wishlist
      </div>
      <button className="install-button">Install</button>
      <Rating rating={props.app.rating} ratings={props.app.ratings} />
      <AdditionalInfo
        size={props.app.size}
        currentVersion={props.app.currentVersion}
        installs={props.app.installs}
        updatedAt={props.app.updatedAt}
      />
    </div>
  );
};

export default Info;
