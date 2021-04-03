import React from 'react';
import '../CSS/cart.css';

const TopNavBar = (props) => {
        return(
           <div style={styles.nav}>
              <div style={styles.cartIconContainer}>
                  <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/711/711897.svg?token=exp=1617002606~hmac=3686a4ef64b70f55ecab586d3d1b7b26" alt="cart-icon" />
                  <span style={styles.cartCount}>{props.count}</span>
              </div>
           </div>
        );
    
}

const styles = {

    cartIcon: {
        height: 32,
        marginRight:20
    },
    nav: {
        height: 80,
        background: '#deaa86',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}

export default TopNavBar;