import React, { Component } from "react";
import logo from "../static/goX.png";
import menuLine from "../static/menu-line.png";
import "../stylesheets/navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_executive: "current",
      selected_tourstops: "none",
      selected_gallery: "none"
    };
  }

  setDisplay(display) {
    this.props.setDisplay(display);

    // Set Navigation Selected
    this.setState({
      selected_executive: "none"
    });
    this.setState({
      selected_tourstops: "none"
    });
    this.setState({
      selected_gallery: "none"
    });

    if (display == "Executives") {
      selected_executive: "current";
      this.setState({
        selected_executive: "current"
      });
    } else if (display == "Stores") {
      this.setState({
        selected_tourstops: "current"
      });
    } else if (display == "GALLERY") {
      this.setState({
        selected_gallery: "current"
      });
    }
  }

  handleLogoClicked() {
    window.location.reload();
  }

  render() {
    return (
      <div className="height_full navigation">
        <header>
          <div className="logo">
            <img
              className="headerImage"
              src={logo}
              alt=""
              onClick={this.handleLogoClicked}
            />
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a
                  className={this.state.selected_executive}
                  onClick={this.setDisplay.bind(this, "Executives")}
                >
                  Tour Members
                </a>
              </li>
              <li>
                <a
                  className={this.state.selected_tourstops}
                  onClick={this.setDisplay.bind(this, "Stores")}
                >
                  Tour Stops
                </a>
              </li>
              <li>
                <a
                  className={this.state.selected_gallery}
                  onClick={this.setDisplay.bind(this, "GALLERY")}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a>STATS</a>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span />
          </label>
          <div className="separator_row" />
        </header>
      </div>
    );
  }
}
