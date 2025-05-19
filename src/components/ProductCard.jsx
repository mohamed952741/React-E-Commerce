import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({product}){
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return(
        <>
        <div className="card">
            <img src={product.thumbnail} alt={product.title}></img>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p style={{ color: product.stock > 0 ? 'green' : 'red' }}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'} </p>
            <button onClick={handleAddToCart} disabled={product.stock === 0}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
        </>
    );
};