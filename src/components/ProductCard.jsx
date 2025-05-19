import { Link } from "react-router-dom";
export default function ProductCard({product}){
    return(
        <>
        <div className="card">
            <img src={product.thumbnail} alt={product.title}></img>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p style={{ color: product.stock > 0 ? 'green' : 'red' }}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'} </p>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
        </>
    );
};