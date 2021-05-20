import React, { Component } from "react";
import img from "../../assets/img1.png";
import Togglebtn from "../../common/togglebtn/Togglebtn";
import Icon from "../../common/icon/Icon";
import "./banner.css";

class Banner extends Component {
  state = {
    
  };
  food1 = (t) => {
    this.props.setFoodType("veg",t ? "veg" : "");
  };
  food2 = (t) => {
    this.props.setFoodType("non_veg",t ? "non_veg" : "");
  };
  render() {
    const { setFoodType } = this.props;
    return (
      <div className="header">
        <div className="header-content">
          <div className="h-c-img">
            <img src={img} alt="header" />
          </div>
          <div className="h-content-sec2">
            <div className="font-25">Demo</div>
            <div className="h-c-s-desc">
              <div className="h-c-s-desc-btn">
                <div className="t-btn">
                  <Togglebtn onclick={this.food1} />
                  <div className="font-12">vegitrian</div>
                </div>
                <div className="t-btn">
                  <Togglebtn onclick={this.food2} />
                  <div className="font-12">vegun</div>
                </div>
              </div>
              <div className="h-c-s-desc-icon font-25">
                <Icon cname="fa fa-star" />
                <Icon cname="fa fa-star" />
                <Icon cname="fa fa-star" />
                <Icon cname="fa fa-star" />
                <Icon cname="fa fa-star-o" />
                <div className="font-12">100k+ Rating </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
