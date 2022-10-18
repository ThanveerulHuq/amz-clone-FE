import React, { Component } from "react";
import "./Header.css";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="bg-dark">
        <div className="col-12 px-4 row">
          <div className="col-2">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              className="logo hover-border"
              alt="amazon log"
            />
          </div>
          <div className="col-6 py-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text search_icon">
                <BsSearch></BsSearch>
              </span>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-end header-signin  p-2">
            <div className="ms-5 hover-border">
              <p className="signin-hello">Hello Sign in</p>
              <h6 className="f-6">
                Account & Lists <BsCaretDownFill />
              </h6>
            </div>
          </div>
          <div className="col-1 badge p-3 d-flex justify-content-end hover-border">
            <BiCart className="cart-icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
