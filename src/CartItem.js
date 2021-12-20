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
    // this.increaseQuantity = this.increaseQuantity.bind(this)   //this is second approach.third using arrow func.
  }
  increaseQuantity = () =>{
    // this.state.qty += 1;
    // console.log('this.state.qty is: ' , this.state.qty );
    //1. Ist way to call setState 
    // this.setState({
    //   qty: this.state.qty + 1
    // });
    //2. when we need previous state:
    this.setState((prevState) =>{
      return {
      qty: prevState.qty + 1
      }
    })
  }
  decreaseQuantity = () =>{
    this.setState({
      qty: this.state.qty - 1
    })
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
            <img 
              alt='increase' 
              className='action-icons' 
              src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
              onClick={this.increaseQuantity}
            />
            <img 
              alt='decrease' 
              className='action-icons' 
              src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' 
              onClick={this.decreaseQuantity}
            />
            <img 
              alt='delete' 
              className='action-icons' 
              src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' 
            />
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
