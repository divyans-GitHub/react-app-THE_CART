import React from 'react';

import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
    products:[
      {
        title: 'MOBILE PHONE',
        price: 9900,
        qty: 11,
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        id: 1
      },
      {
        title: 'SMART WATCH',
        price: 12000,
        qty: 10,
        img: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: 2
      },
      {
        title: 'IPAD PRO MAX',
        price: 100000,
        qty: 1,
        img: 'https://images.unsplash.com/photo-1637152736123-8a027366b07a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwYWQlMjBwcm8lMjBtYXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        id: 3
      }
    ]
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

    </React.Fragment>
    );
  }
}

export default App;
