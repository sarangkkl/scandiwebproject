import React, { Component } from "react";
import "./Cart.scss";
export class Cart extends Component {
  render() {
    return (
      <div className="cart__box">
        <div className="cart__container">
          <p>
            <span className="cart__title">My Bag,</span> 3 items
          </p>

          <div className="item__box">
            <div className="item__data">
              <p className="product__title">Appollo Running Short</p>
              <p className="product__price">$ 50</p>
              <div className="product__variations"></div>
            </div>
            <div className="item__action">
              <div>
                <button>+</button>
              </div>
              <div>
                <button>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
