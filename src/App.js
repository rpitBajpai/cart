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
                img: '',
                id:1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: '',
                id:2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: '',
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
    </div>
  );
}
}

export default App;
