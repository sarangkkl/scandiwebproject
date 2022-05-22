import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import { Card } from '../../components'
import "./ProductListing.scss"

export class ProductListing extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      productsToRender:{},
      loading:true,
    }
  }
  
  componentDidMount(){
    let {products} = this.props;
    
    const currentUrl = window.location.href;
    
    // I am checking if the all is present in the url i will set productsToRender
    // I am facing a weired issue that is  the props are not accessible to the inside if blocks
    
    
    if(currentUrl.search("all")!==-1){
      this.setState({
        productsToRender:products[0],
        loading:false,
      })
    }else if(currentUrl.search("clothes")!==-1){
      this.setState({
        productsToRender:products[1],
        loading:false,
      })
    }else if(currentUrl.search("tech")!==-1){
      this.setState({
        productsToRender:products[2],
        loading:false,
      })
    }
    
  }
  render() {
 
    if(this.state.loading === true){
      return <h1>LOADING....</h1>
    }else{
      return (
        <div>
          <h2 className='listing__title'>{this.state.productsToRender.name[0].toUpperCase() + this.state.productsToRender.name.substring(1)}</h2>
          <div className="product__listing">
            {this.state.productsToRender.products.map((item,index)=>(
              <Card product={item} key={index}/>
            ))}
          </div>  
        </div>
      )
    }
  }
}

export default ProductListing