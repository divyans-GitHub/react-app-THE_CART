import React from 'react';

import CartItem from './CartItem';

const Cart = (props) => {
   
     const {products} = props;
     return (
     <div className='cart'>
        {/* <CartItem  qty={19}  title={"WATCH"} price={123} img={""} /> */}
        
        { products.map( (product) =>{
        
         return(
            <CartItem  
                product={product}  
                key={product.id} 
                onIncreaseQty={props.onIncreaseQty}
                onDecreaseQty = {props.onDecreaseQty}
                onDeleteItem={props.onDeleteItem}
            />
            )
        })}
        
     </div>
    );

   
}

export default Cart ;