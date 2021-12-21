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
   render(){
     const {products} = this.state;
     return (
     <div className='cart'>
        {/* <CartItem  qty={19}  title={"WATCH"} price={123} img={""} /> */}
        
        { products.map( (product) =>{
        // console.log("here is product" , product)
        return <CartItem  product={product}  key={product.id} />
        })}
        
     </div>
    );

   }
}

export default Cart ;