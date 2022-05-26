import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleCurrency } from '../../store/features/currencyReducer';
import Cart from "../Cart/Cart"
import "./Header.scss"
export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCartActive:false,
      loading:true,
      currencies:{},
    }
    this.props.toggleCurrency("USD")

    const query = `
    query{
      currencies {
        label,
        symbol
      }
    }`

    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify({
          query
      })
  }).then(response => {
      return response.json();
  }).then(data => {
      this.setState({
        currencies: data.data.currencies,
        loading:false,
          
      })
      // console.log("The data i am getting is", data.data.categories);
  })
  }
  
  handleCartToggle(){
    this.setState({
      isCartActive: (!this.state.isCartActive)
    })
  }
  handleToggleCurrency(value){
    console.log(value)
    this.props.toggleCurrency(value)
  }
  render() {

    if(this.state.loading===true){
      return <h1>Loading header...</h1>
    }else{
      return (
        <div className='header__bar'>
          
          <div className="right__bar">
            <div className='nav_link'><NavLink to={"/all"} activeClassName="active">ALL</NavLink></div>
            <div className='nav_link'><NavLink to={"/clothes"} activeClassName="active">CLOTHES</NavLink></div>
            <div className='nav_link'><NavLink to={"/tech"} activeClassName="active">TECH</NavLink></div>
            
          </div>
          <div className="middle__bar">
            <div className="logo">
              <img src="a-logo.png" alt="" />
            </div>
          </div>
          <div className="left__bar">
            <div className='dollar__logo'>
              <select name="" id="" onChange={(e)=>{this.handleToggleCurrency(e.target.value)}}>
                {this.state.currencies.map((item,index)=>(
                  <option value={item.label} key={index}>{item.symbol}</option>
                ))}              
                <option value="USD" selected>$</option>
              </select>
              
            </div>
            <div className='buying__logo'>
              <img src="empty.png" alt="" onClick={()=>{this.handleCartToggle()}}/>
              {this.state.isCartActive ? <Cart/>:""}
            </div>
          </div>
        </div>
      )

    }


  }
}

export default connect(null,{toggleCurrency}) (Header);