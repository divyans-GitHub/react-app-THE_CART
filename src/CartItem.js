import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
         <div className='cart-item'>
           <div className='left-block'>
               <img  style={styles.image} alt='item-pic'/>
           </div>
           <div className='right-block'>
              <div className='info'>Phone Apple PhoneXI  </div>
              <div className='price'>Rs. 90999/- </div>
              <div className='quantity'>Qty: 1</div>
              <div className='cart-item-actions'>
                {/* buttons: increase, decrease , delete */}
              </div>
            </div>

         </div>

        );
    }
}


const styles = {
  image: {
    height:110,
    width:110,
    borderRadius:3
  }
}


export default CartItem;
