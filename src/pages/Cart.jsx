import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity,deleteFromCart } from "../store/cartSlice";


export default function Cart(){
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    if (items.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    return(
        <>
        <h2>Cart</h2>
        <div className="cart-container">
            {items.map(({ product, quantity }) => (
            <div key={product.id} className="cart-item">
            <img src={product.thumbnail} alt={product.title} />
                <div>{product.name}</div>
                <div>
                    <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                </div>
                <button onClick={() => dispatch(deleteFromCart(product.id))}>x</button>
            <div>£{product.price}</div>
            </div>
            ))}
    <div>
      Total: £{items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}
    </div>
  </div>
        </>
    );
};