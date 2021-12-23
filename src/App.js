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
        img: '',
        id: 1
      },
      {
        title: 'SMART WATCH',
        price: 12000,
        qty: 10,
        img: '',
        id: 2
      },
      {
        title: 'IPAD PRO MAX',
        price: 100000,
        qty: 1,
        img: '',
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
