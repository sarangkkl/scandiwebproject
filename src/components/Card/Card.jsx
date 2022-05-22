import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"
export class Card extends Component {
    render() {
      const {product} = this.props;
      // console.log(first)
      const {name,prices,gallery,id} = product;
    return (
      <div className='card__body'>
          <img src={gallery[0]} alt="" />
          <h3 className='product__title'><Link to={`/${id}`}>{name}</Link></h3>
          <h6 className='product__price'>{prices[0].currency.symbol}  {prices[0].amount}</h6>
      </div>
    )
  }
}

export default Card