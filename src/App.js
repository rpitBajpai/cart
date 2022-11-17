import React from "react";
// import CartItem from "./CartItem";
import Cart from './Cart';
import Navbar from './Navbar'

// function App() {
class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
                id:1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
                id:2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
                id:3
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}

handleIncreaseQuantity = (product) => {
    console.log('Heyy! please increase the quantity of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        // products: products
        products
    });

}

handleDecreaseQuantity = (product) => {
    console.log('Heyy! please decrease the quantity of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        // products: products
        products
    });

}

handleDeleteProduct = (id) => {
    const{ products } = this.state;

    const items = products.filter((item) => item.id !== id); //[{}]

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty; 
  })

  return count;
}
getCartTotal = () => {
  const {products} = this.state;

  let cartTotal = 0;
  products.map((product) => {
    cartTotal += product.price * product.qty;
  })
  return cartTotal;
}

render(){
  const {products}= this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={ { padding:10, fontSize:20 } }>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
