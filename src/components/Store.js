import React, { Component } from "react";
// import "../stylesheets/store.css";
import image from "../static/plane.png";

class Store extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
          <td>
            <img src={image} width="100" alt={this.props.name} />
          </td>
          <td>
            <div className="name">{this.props.name}</div>
            <div className="title">{this.props.state}</div>
          </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Store;
