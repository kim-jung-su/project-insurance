import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import PlannerInfo from "./PlannerInfo";
import Contract from "./Contract";

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Homepage">
          <diV className="Header">
            블록체인 GA 플랫폼
            <div className="menu">
              <Link className="menu-item" to="/Home">
                보험계약현황
              </Link>
              <Link className="menu-item" to="/PlannerInfo">
                설계사 정보
              </Link>
              <Link className="menu-item" to="/Contract">
                타 보험사 거래 현황
              </Link>
            </div>
          </diV>
          <Route path="/Home" component={Home} />
          <Route path="/PlannerInfo" component={PlannerInfo} />
          <Route path="/Contract" component={Contract} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
