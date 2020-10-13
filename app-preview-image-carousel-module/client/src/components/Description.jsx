import React from "react";
const Description = (props) => {
  var appDescription =
    "Reckon i aint got but one pose, as i am but a simple country poser, ur officer (this whole COURT is out of order, similar to its snack deployment machine in tha lobby)\n Youre a hairy wizard! *flails pixelated arms to the left*, *flails pixelated arms to the right* *head remains intact but only from the nose up*. Im a hhhhwwwhat?!\n Your honor, we have another cut and dry case of yet another baby genius who thinks he can swindle the american justice system. We must try this cunning infant as an adult or we may have a crime wave on our hands the likes of which we have never smelled before.";

  if (props.currentApp.app_description) {
    appDescription = props.currentApp.app_description;
  }
  return (
    <div>
      <p className="description-text" style={{ marginTop: "5px" }}>
        {appDescription}{" "}
      </p>
    </div>
  );
};
export default Description;

// render() {
//     return (
//       <div className="carouselContents">
//         <ImageCarousel id={this.props.id} />
//         <Description currentApp={this.state.currentApp}>
//           <DropDown
//             currentApp={this.state.currentApp}
//             readMore={this.state.readMore}
//             toggleAdditionalText={this.toggleAdditionalText}
//           />
//         </Description>
//       </div>
//     );
//   }
// }
