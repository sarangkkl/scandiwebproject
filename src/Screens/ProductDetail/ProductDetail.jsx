import React, { Component } from "react";
import "./ProductDetail.scss";
import Parser from "html-react-parser";
import { connect } from 'react-redux'



export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
      imgUrl:"",
    };
  }
  componentDidMount() {
    const currentUrl = window.location.pathname;
    const id = currentUrl.replace("/", "");
    // console.log("The id is", id);
    const query = `
    query ($productId: String!) {
      product(id:$productId) {
        name,
        inStock,
        gallery,
        description,
        category,
        attributes{
          id,
          name,
          type,
          items{
            displayValue,
            value,
            id,
          }
        },prices {
          amount,
          currency {
            label,
            symbol
          }
        },brand
    
      }
      
  }
  
    `;
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          productId: id,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          product: data.data.product,
          loading: false,
        });

        // console.log("The data i am getting is", data.data.categories);
        // {console.log(this.state.product)}
      });
  }

  render() {

    const handleImageChange = (value) =>{
      console.log(value)
      var x = document.getElementById("main__img")
      x.src = value;
    }
    if (this.state.loading === true) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div>
          {this.state.product && this.state.product ? (
            <div>
              <div className="product__detail__container">
                <div className="img__gallery">
                  {this.state.product.gallery &&
                    this.state.product.gallery.map((item, index) => (
                      <div className="img" key={index}>
                        
                        <img src={item} alt="" onClick={(e)=>{handleImageChange(e.target.src)}}/>
                      </div>
                    ))}
                </div>
                <div className="main__img">
                  <img src={this.state.product.gallery[0]} alt="" id="main__img"/>
                </div>
                <div className="information__menu">
                  <h3>{this.state.product.name}</h3>
                  <h4>{this.state.product.brand}</h4>
                  {this.state.product.attributes.map((item, index,orignalArray) => (
                    <div key={index}>
                      {item.id ==="Color" ? <div>
                       
                      <h6>{item.id}</h6>
                      <div className="attribute_div">
                        {item.items.map((val, i) => (
                          
                          <div>
                            <label htmlFor={val.displayValue}>
                            <input type="radio" name="color" style={{
                              backgroundColor:`${val.value}`
                            }} value={val.value} /></label>
                          </div>
                        ))}
                      </div>
                        
                      </div>:<div>
                      <h6>{item.id}</h6>
                      <div className="non_color__attribute">
                        {item.items.map((val, i) => (
                            <div className="">
                            <input type="radio" name={orignalArray[index].id} value={val.value}/>
                          <label key={i} className="label_check">
                          {val.value}
                          </label>
                          </div>
                          
                        ))}
                      </div>
                        </div>}
                      
                    </div>
                  ))}
                  <h6>{(this.state.product.prices.find((e) => e.currency.label === this.props.currencyState)).currency.symbol } {(this.state.product.prices.find((e) => e.currency.label === this.props.currencyState)).amount}</h6>
                  
                  <button className="add__to__cart">ADD TO CART</button>
                  <div>{Parser(this.state.product.description)}</div>
                  {/* {} */}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  }
}

const  mapStateToProps = (state) =>{
  return {
      currencyState:state.currency.currencyState
  }
}
export default connect(mapStateToProps) (ProductDetail);
