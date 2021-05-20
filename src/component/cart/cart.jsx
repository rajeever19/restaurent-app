import React, { Component } from "react";
import img from "../../assets/cart.png";
import "./cart.css";
import CartElement from "./CartElement";

class Cart extends Component {
  state = {
    prodCart: this.props.prodCart,
  };
  componentDidUpdate(prop, pres) {
    // console.log(prop, pres);
    const prodCart = this.props.prodCart;
    if (pres.prodCart !== prodCart) {
      this.setState({ prodCart });
    }
  }
  handleCart1 = (p, c) => {
    // console.log(p,c)
    this.props.handleCart(p, c);
  };
  subTotal = (pr) => {
    let r = pr.reduce((a, c) => a + c.price * c.numberOfItem, 0);
    return r;
  };
  deletecart = () => {
    const cart = [...this.props.prodCart];
    cart.map((p) => this.props.delcartItem(p));
  };
  render() {
    const { prodCart } = this.state;
    if (prodCart.length <= 0) {
      return (
        <div className="row text-center px-3">
          <div className="col-10 cart_empty text-center py-3 text-wrap text-capitalize">
            <p className="">Feeling hungry? click on Add Button</p>
            <img src={img} alt="cart" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="">
          <div className="d-flex  justify-content-between">
            <div className="">
              <h2>Cart</h2>
              <div className="text-secondary">{prodCart.length} ITEM</div>
            </div>
            <div className="icon p-3 " onClick={this.deletecart}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
          {prodCart.map((p, i) => (
            <CartElement
              prod={p}
              handleCart={this.handleCart1}
              delItemTocart={this.props.delcartItem}
              key={i}
            />
          ))}
          <div className="sub-total my-3 ">
            <div className="sub-total-header d-flex">
              <div>Subtotal</div>
              <div className="total-amount">$ {this.subTotal(prodCart)}</div>
            </div>
            <div className="p">extra charges may apply</div>
          </div>
          <div className="d-grid my-2 ">
            <button className="btn btnab btn-md btn-block ">Checkout</button>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
