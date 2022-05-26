import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import "./Card.scss"
export class Card extends Component {

    constructor(props){
      super(props)
      this.state ={
        activeCurrency:{},
        loading:false,
      }

      
    }

    render() {
      const {product} = this.props;
      const {name,prices,gallery,id} = product;
      
  

      if(this.loading === true){
        <h1>Loading....</h1>
      }else{

        return (
          <div className='card__body'>
              <img src={gallery[0]} alt="" />
              <h3 className='product__title'><Link to={`/${id}`}>{name}</Link></h3>
              
              <h6 className='product__price'>{(prices.find((e) => e.currency.label === this.props.currencyState)).currency.symbol }{(prices.find((e) => e.currency.label === this.props.currencyState)).amount} </h6>
              
              
             
              
          </div>
        )
      }
  }
}

const  mapStateToProps = (state) =>{
  return {
      currencyState:state.currency.currencyState
  }
}

export default connect(mapStateToProps) (Card)