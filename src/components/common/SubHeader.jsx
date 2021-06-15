import React, { Component } from "react";
import "./SubHeader.css";

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

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  render() {
    const { categories } = this.state;
    return (
      <div className="sub-header row m-0 col-12">
        {categories.map((category) => (
          <div className="col-1 p-2" key={category.id}>{category.name}</div>
        ))}
      </div>
    );
  }
}

export default SubHeader;
