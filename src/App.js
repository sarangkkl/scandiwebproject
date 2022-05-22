import React, { Component } from 'react';
import { Header } from './components';
import { ProductListing, ProductDetail, Cart } from './Screens';

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export class App extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            cart: [],
            count: 0,
            loading:true,
        }
    }

    async componentDidMount() {
        const query = `
    query{
      categories {
          name
          products {
            id,
            name,
            inStock,
            gallery,
            category,
            prices {
                amount,
                currency {
                  label,
                  symbol
                }
              }
          }
        }
  }
    `;
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
                products: data.data.categories,
                count: data.data.categories.length,
                loading:false
            })
            // console.log("The data i am getting is", data.data.categories);
        })
        
    }
    
    
    render() {
        if(this.state.loading===true){
            return <h4>Loading.....</h4>
        }else{
            
            return (
                <>
                
                    <Header />
                   
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/all" />} />
                        <Route exact path="/all"  element={<ProductListing products={this.state.products} key="all"/>} />
                        <Route exact path="/clothes"  element={<ProductListing products={this.state.products} key="clothes"/>} />
                        <Route exact path="/tech"  element={<ProductListing products={this.state.products} key="tech" />} />
                        <Route path="/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        {/* <Route exact path="/:category" element={<ProductListing products={this.state.products} key={Date.now()}/>} /> */}
                        
                    </Routes>
                    
                </>
            )

        }
        
    }
}

export default App