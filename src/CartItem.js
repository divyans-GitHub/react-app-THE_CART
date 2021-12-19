import React from 'react';

class CartItem extends React.Component{
  
  constructor(){
    super();
    this.state = {
      price: 99990,
      title: 'Phone',
      qty: 1,
      img: ''
    }
  }


    render(){
      const {price , title , qty} = this.state;
        return(
         <div className='cart-item'>
           <div className='left-block'>
               <img  style={styles.image} alt='item-pic'/>
           </div>
           <div className='right-block'>
              <div className='info' style={{fontSize:25}}> {title} <br /> Apple PhoneXI  </div>
              <div className='price' style={{fontSize:20}}>Rs. {price}/- </div>
              <div className='quantity'>Qty: {qty}</div>
              <div className='cart-item-actions'>
                {/* buttons: increase, decrease , delete */}
                <img alt='increase' className='action-icons' src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'/>
                <img alt='decrease' className='action-icons' src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' />
                <img alt='delete' className='action-icons' src='https://cdn-icons.flaticon.com/png/128/484/premium/484611.png?token=exp=1639895864~hmac=a4c3ce11b01006287ecddaa2d9234144' />
              </div>
            </div>

         </div>

        );
    }
}


const styles = {
  image: {
    height:100,
    width:100,
    borderRadius:3,
    backgroundColor: '#ccc'

  }
}


export default CartItem;
