import React from 'react';

import CartItem from './CartItem';

class Cart extends React.Component{
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
   

   render(){
     const {products} = this.state;
     return (
     <div className='cart'>
        {/* <CartItem  qty={19}  title={"WATCH"} price={123} img={""} /> */}
        
        { products.map( (product) =>{
        
         return(
            <CartItem  
                product={product}  
                key={product.id} 
                onIncreaseQty={this.handleIncreaseQuantity}
                onDecreaseQty = {this.handleDecreaseQuantity}
                onDeleteItem={this.deleteCartItem}
            />
            )
        })}
        
     </div>
    );

   }
}

export default Cart ;