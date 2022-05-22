import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "./Header.scss"
export class Header extends Component {
  constructor(){
    super();
    this.state = {
      isCartActive:false,
    }
  }
  
  handleCartToggle(){
    
    this.setState({
      isCartActive: (!this.state.isCartActive)
    })
  }
  render() {
    
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
            <span><img src="dollar1.png" alt="" /></span>
          </div>
          <div className='buying__logo'>
            <img src="empty.png" alt="" onClick={()=>{this.handleCartToggle()}}/>
            {this.state.isCartActive ? <div className="cart__box">
              <h4>My Bag has 3 Items</h4>
            </div>:""}
          </div>
        </div>
      </div>
    )
  }
}

export default Header