import React, { Component } from "react";
import img1 from "../../assets/veg.png";
import Inputnumbtn from "../form/inputbtn/inputnumbtn";
class CartElement extends Component {
  state = { prod: this.props.prod };
  handleInput = (i) => {
    if(i<=0){
      return
    }
    this.props.handleCart(this.state.prod, i);
  };
  deletecartitem = (prod) => {
    this.props.delItemTocart(prod);
    console.log(prod)
  };
  render() {
    const { prod } = this.props;
    return (
      <div className="prod-details d-flex align-items-end">
        <img className="my-1 " src={img1} alt="icon" />
        <div className="prod-name flex-grow-1">{prod.name}</div>
        <div className="inputbtn ">
          <Inputnumbtn value={prod.numberOfItem} onChange={this.handleInput} />
        </div>
        <div className="price ">$ {prod.numberOfItem * prod.price}</div>
        <div
          className="delete_prod"
          onClick={()=>this.deletecartitem(prod)}
        >
          x
        </div>
      </div>
    );
  }
}

export default CartElement;
