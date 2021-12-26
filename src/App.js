import React from 'react';

import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
    products:[]
    }
  }

  handleIncreaseQuantity= (product) => {
  //console.log("increase qty request has been reached successfully on product: " , product);

  const {products} = this.state;
  const index = products.indexOf(product);
  products[index].qty += 1
  this.setState({
    products: products
  })

  }
  handleDecreaseQuantity = (product) => {
  console.log('decrease quantity req recieved');
  
  const{products} = this.state;
  const index = products.indexOf(product);
  if(products[index].qty === 0 ) {return;}

  products[index].qty -= 1

  this.setState({
    products: products
  })

  }

  deleteCartItem = (id) => {
  const {products} = this.state;
  
  const itemsToKeep = products.filter( (product) => product.id !== id  ); //[{}]
  //console.log( "*" , itemsToKeep);
  this.setState({
      products: itemsToKeep
  })
  }
  

  getTotalItemsCount = () => {
    const {products} = this.state;
    let counts = 0;
    
    products.forEach( (item) => {
      counts += item.qty;
    } )

    return counts;
  }    
  
  getTotalPrice = () => {
    const {products} = this.state;

    let totalPrice = 0;
    products.forEach( (item) => {
      totalPrice += (item.qty * item.price)
    });
    return totalPrice;
  }


  render(){
    const {products} = this.state;
    return (
    <React.Fragment>
      <Navbar count={this.getTotalItemsCount()} />
      <Cart 
        products={products}
        onIncreaseQty={this.handleIncreaseQuantity}
        onDecreaseQty = {this.handleDecreaseQuantity}
        onDeleteItem={this.deleteCartItem}
      
      />
      
      <div style={{fontSize: 20 , padding: 10}}>
       TOTAL PRICE: {this.getTotalPrice()} /-
      </div>

    </React.Fragment>
    );
  }
}

export default App;
