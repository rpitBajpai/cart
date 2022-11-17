import React from "react";

// class CartItem extends React.Component{
const CartItem = (props) => {
    

    // render(){
        // console.log('this.props', this.props);

        // const{price, title, qty} = this.props.product;
        const{price, title, qty} = props.product;
        
        const{
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        // } = this.props;
    } = props;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>INR {price}</div>
                    <div style={{color: "lightgrey"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                        // onClick={this.increaseQuantity.bind(this)}
                        // onClick={this.increaseQuantity}
                        onClick={() => onIncreaseQuantity(product)}
                        />

                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={() => onDecreaseQuantity(product)}
                        />

                        <img alt="delete" 
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background : '#ccc'
    }
}

export default CartItem;