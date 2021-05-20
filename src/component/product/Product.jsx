import React, { Component } from "react";
import img from "../../assets/paneer.jpg";
import logo from "../../assets/veg.png";
import logo1 from "../../assets/non-veg.jpg";
import Inputnumbtn from "../form/inputbtn/inputnumbtn";
import "./product.css";
class Product extends Component {
  state = {
    cartItem: this.props.pdetails.numberOfItem,
  };
  handleInput = (i) => {
    console.log(i)
    if (i < 0) {
      return;
    }
    this.props.handleCart(i);
  };
  render() {
    const { cartItem } = this.state;
    const { index, pdetails, numberOfItem, view } = this.props;
    const { name, details, price,food_type:ftype } = pdetails;
    return (
      <div className={view ? "d-flex my-4" : "col-5 row m-2"} key={index}>
        <div className={view ? "prod_img p-2" : "prod_img2 col-xs-12"}>
          <img src={img} className="" alt="paneer" />
        </div>

        <div
          className={
            view ? "prod_desc flex-grow-1" : "prod_desc flex-grow-1 col-12"
          }
        >
          <div className="prod_desc_title">
            <img src={ftype==='veg'?logo:logo1} alt="veg icon" />
            {name} {pdetails.numberOfItem}
          </div>
          <div className="prod_desc_details">{details}</div>
          <div className="prod_desc_price">$ {price}</div>
        </div>
        <div className={ "prod_btn"}>
          {numberOfItem ? (
            <Inputnumbtn
              value={numberOfItem ? numberOfItem : ""}
              onChange={this.handleInput}
            />
          ) : (
            <button
              className="btn btn-xs btn-outline-danger"
              onClick={() => this.handleInput(1)}
            >
              + ADD
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
