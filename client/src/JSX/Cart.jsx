import React from 'react';
import '../CSS/cart.css';
import CartItem from './CartItem';
const Cart = (props) => {
        const { products } = props;
        return(
          <div className="cart">
              { products.map((product) => {
                  return (
                  <CartItem  
                  product={product} 
                  key={product.id}
                  onIncreaseQunatity={props.onIncreaseQunatity}
                  onDecreaseQunatity={props.onDecreaseQunatity}
                  onDeleteProduct={props.onDeleteProduct}  />
                  )
              }) }
              
            
          </div>  
        );
}



export default Cart;