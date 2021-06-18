import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="row col-12">
        <div className="col-2 side-menu">sidebar</div>
        <div className="col-10 p-0">
          Products pane Home
          <h2>{this.props.match.params.category}</h2>
        </div>
      </div>
    );
  }
}

export default Home;
