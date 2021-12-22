import React from 'react';

class CartItem extends React.Component{
  
  // constructor(){
  //   super();
  //   this.state = {
  //     price: 99990,
  //     title: 'Phone',
  //     qty: 1,
  //     img: ''
  //   }
  //   // this.increaseQuantity = this.increaseQuantity.bind(this)   //this is second approach.third using arrow func.
  //   //this.testing();
  // }

  // lets test setState function in Promises
  // testing(){

  //   const promise = new Promise( (resolve , reject) => {
  //   // setTimeout(()=>{
  //   //  resolve('done');
  //   // } , 5000);
  //   resolve()
  //   })

  //   promise.then( ()=>{
  //     this.setState({qty: this.state.qty + 100});
  //     this.setState({qty: this.state.qty + 100});
  //     this.setState({qty: this.state.qty + 100});
      
  //     console.log('this.state is: ' , this.state);
  //   });
  // }






 //increaseQuantity = () =>{
    // this.state.qty += 1;
    // console.log('this.state.qty is: ' , this.state.qty );
    //1. Ist way to call setState 
    // this.setState({
    //   qty: this.state.qty + 1
      
    // });
    
    //2. when we need previous state:
    // this.setState((prevState) =>{
    //   return {
    //   qty: prevState.qty + 1
    //   }
    // })
    // console.log("THIS.STATE " , this.state);
    //browser qty number didnot match with qty we printed on the console, since setState function is asynchronous
  //}
  // decreaseQuantity = () =>{
  //   const {qty} = this.state;
  //   if(qty === 0 ){
  //     return;
  //   }
  //   this.setState({
  //     qty: this.state.qty - 1
  //   })
  // }

    render(){
      //console.log('render called');
      console.log("this.props" , this.props );
      const {price , title , qty} = this.props.product;
      const {
        product,
        onDecreaseQty,
        onDeleteItem 
      } = this.props;

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
              onClick={()=> this.props.onIncreaseQty(this.props.product)}
            />
            <img 
              alt='decrease' 
              className='action-icons' 
              src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' 
              onClick={() => onDecreaseQty(product)}
            />
            <img 
              alt='delete' 
              className='action-icons' 
              src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
              onClick={()=> onDeleteItem(product.id)} 
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
