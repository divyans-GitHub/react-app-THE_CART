import React from 'react';

 const Navbar = (props) =>{
    return (
    <div>
      <div style={styles.nav}></div>
        <div>
            <img style={styles.cartIcon} src='https://t3.ftcdn.net/jpg/01/13/95/02/240_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg' alt='cart-icon'  />
            <span style={styles.itemNumber}>3</span>
        </div>
    </div>
    );
 

   }

const styles = {
 nav: {
    height: 55,
    width: 1518,
    backgroundColor: 'lightgrey',
    display: 'flex'
 },
 cartIcon: {
    height:48,
    width: 48,
    color:'#000',
    float: 'right',
    marginTop: -53,
    marginRight: 15
 },
 itemNumber: {
   color: 'blue',
   
   float: 'right',
    marginTop: -57,
    marginRight: 15
 }
}

export default Navbar;
