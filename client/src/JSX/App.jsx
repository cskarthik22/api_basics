import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import TopNavBar from './TopNavBar';
import '../CSS/App.css';
import data from './CartData.json';
import firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {
    constructor () {
        super();
       
        this.state = {
            products: [],
            loading: false
        }
       // this.testing();
      // <CartItem  qty={1} price={990} title={"Phone"} pic={""} />
    }

    handleIncreaseQuantity = (product) => {
        console.log("hey increase qty");
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        },
        () => {
            console.log('this.products increased', this.products) 
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log("hey decrease qty");
        const { products } = this.state;
        const index = products.indexOf(product);
       
        
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        },
        () => {
            console.log('this.products decreased', this.product) 
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id != id );
        this.setState({
            products: items
        });
    }

    getCartCount = () => {
        const { products } = this.state;
        let count = 0;
        products.forEach((product) => {
            count += product.qty;
        })
       return count;
    }

    componentDidMount() {
        firebase.firestore()
               .collection('products')
               .get()
               .then((snapshot) => {
                   console.log('snapshot',snapshot);
                   snapshot.docs.map((doc) => {
                       console.log(doc.data())
                   })
                   const products = snapshot.docs.map((doc) => {
                       const data = doc.data();
                       data['id'] = doc.id;
                       return data;
                   })

                   this.setState({
                        products
                   })
               });

    }

    render() {
        console.log("data loaded from file", data);
        const {products, loading} = this.state;
        return(
            <div className="App">
                <TopNavBar count={this.getCartCount()} />
                <Navbar />
                <Cart  
                  products={products}
                  onIncreaseQunatity={this.handleIncreaseQuantity}
                  onDecreaseQunatity={this.handleDecreaseQuantity}
                  onDeleteProduct={this.handleDeleteProduct} />
                  {loading && <h1> Loading...</h1>}
            </div>
        
        );
    }
}

export default App;