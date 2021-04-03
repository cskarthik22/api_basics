import React from 'react';
import '../CSS/cart.css';

class CartItem extends React.Component {
   /*  constructor () {
         super();
         this.state = {
             price: 999,
             title: 'Phone',
             qty: 1,
             pic: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604343703000'
         }
        // this.testing();
     }
     */
    
    testing() {
        const promise = new Promise((resolve,reject) => {
            setTimeout(()=> {
                resolve('done');
            }, 5000);
        })

        promise.then(
            () => {
                this.setState({ qty: this.state.qty +10 })
                this.setState({ qty: this.state.qty +10 })
                this.setState({ qty: this.state.qty +10 })
                console.log('AJAX call state', this.state)
            }
        );
    }
    

    render() {
        console.log('this.props.product', this.props.product);
        //const { price, title, qty, pic } = this.state;
        const { price, title, qty, pic } = this.props.product;
        const { product, onIncreaseQunatity, onDecreaseQunatity, onDeleteProduct} = this.props;
        return(
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image}  src={ pic } />
                </div>
                <div className="right-block">
                    <div style= {{ fontSize: 25 }}> { title } </div>
                    <div style={{ color: '#777' }}> { price } </div>
                    <div>Qty: { qty }</div>
                    <div className="cart-item-actions">
                        {/* Buttone */}
                        <img alt="increase" onClick={() => onIncreaseQunatity(product)} className="action-icons" src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img alt="decrease" onClick={() => onDecreaseQunatity(product)} className="action-icons" src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                        <img alt="delete" onClick={() => onDeleteProduct(product.id)} className="action-icons" src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;