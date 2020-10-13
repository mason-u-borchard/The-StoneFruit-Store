import React from "react";
import axios from "axios";
import Collapsible from "react-collapsible";
import ImageCarousel from "./ImageCarousel.jsx";
import DropDown from "./Collapsible.jsx";

class App0 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 11,
      currentApp: {},
      readMore: "READ MORE",
    };
    this.toggleAdditionalText = this.toggleAdditionalText.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/carousels/${this.state.id}`)
      .then((res) => {
        console.log(res.data[0]);
        this.setState({
          currentApp: res.data[0],
        });
      })
      .then(() => console.log("get req successful", this.state.currentApp))
      .catch((err) => console.log(err));
  }

  toggleAdditionalText() {
    console.log("click!");
    if (this.state.readMore === "READ MORE") {
      this.setState({
        readMore: "COLLAPSE",
      });
    } else {
      this.setState({
        readMore: "READ MORE",
      });
    }
  }

  render() {
    return (
      <div className="carouselContents">
        <ImageCarousel id={this.props.id} />
        <div className="container-carousel-service">
          <p className="description-text" style={{ marginTop: "5px" }}>
            {this.state.currentApp.app_description}{" "}
          </p>
          <DropDown
            currentApp={this.state.currentApp}
            readMore={this.state.readMore}
            toggleAdditionalText={this.toggleAdditionalText}
          />
        </div>
      </div>
    );
  }
}

export default App0;
