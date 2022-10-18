import React, { Component } from "react";
import "./SubHeader.css";
import { Link } from "react-router-dom";

class SubHeader extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/category")
      .then((res) => res.json())
      .then((categories) => {
        this.setState({ categories });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="sub-header row m-0 col-12 mb-2">
        {categories.map((category) => (
          <div className="col-1 p-2 hover-border text-center pb-0" key={category.id}>
            <Link to={"/home/" + category.name}>{category.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default SubHeader;
