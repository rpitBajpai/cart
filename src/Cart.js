import React from "react";
import CartItem from "./CartItem";


// class Cart extends React.Component{
const Cart = (props) => {
    

    // render(){
        // get all the products from state
        // const { products } = this.state;
        const { products } = props;
        return(
            <div className="cart">

            {/* <CartItem qty={1} price={99} title={"Watch"} img={''} /> */}

            {products.map((product) => {
                return (
                <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}



                />
                )
            })}

            
            </div>
        )
    }
    



export default Cart;