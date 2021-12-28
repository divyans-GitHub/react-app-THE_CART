import React from 'react';

import Navbar from './Navbar';
import Cart from './Cart';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//import { getFirestore,  getDocs } from 'firebase/firestore/lite';
import {  getFirestore,collection , query ,where ,onSnapshot   } from 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6NrN0HoBCOIhPsqh4vkcZsRTTxJcYi1s",
  authDomain: "the-cart-9619a.firebaseapp.com",
  projectId: "the-cart-9619a",
  storageBucket: "the-cart-9619a.appspot.com",
  messagingSenderId: "29624543698",
  appId: "1:29624543698:web:251785f179d2642aeb400b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);







class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
     products:[],
     loading: true
    }
  }

  //accesing firestore DB for products
  componentDidMount(){
   
    //  const collectionRef = collection(db , 'products');
    
    //  const promise = getDocs(collectionRef);

    //   promise.then( (snapshot) => {
      
    //     snapshot.docs.map( (doc)=>{
    //      //console.log("HERE IS DOC: ",doc);
    //      //console.log(doc.data());
    //      return "";
    //     } );

    //     const products = snapshot.docs.map( (doc) => {
    //       let obj = doc.data();
    //       obj["id"] = doc.id;
    //       return obj;
          
    //     } );

    //     this.setState({
    //       products:products,
    //       loading: false
    //     })

    //   })
    
  
  
    onSnapshot(collection(db , 'products') ,  (snapshot) => {
     
      snapshot.docs.map( (doc)=>{
       console.log("HERE IS DOC: ",doc);
       //console.log(doc.data());
       return "";
      } );

      const products = snapshot.docs.map( (doc) => {
        let obj = doc.data();
        obj["id"] = doc.id;
        return obj;
        
      } );

      this.setState({
        products:products,
        loading: false
      })

    })
  
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
    const {products , loading} = this.state;
    console.log("render is called");
    return (
    <React.Fragment>
      <Navbar count={this.getTotalItemsCount()} />
      <Cart 
        products={products}
        onIncreaseQty={this.handleIncreaseQuantity}
        onDecreaseQty = {this.handleDecreaseQuantity}
        onDeleteItem={this.deleteCartItem}
      
      />
      {loading && <h1>Loading.....please wait :)</h1> }

      <div style={{fontSize: 20 , padding: 10}}>
       TOTAL PRICE: {this.getTotalPrice()} /-
      </div>

    </React.Fragment>
    );
  }
}

export default App;
