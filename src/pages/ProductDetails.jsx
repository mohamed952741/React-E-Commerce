import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/cartSlice";

export default function ProductDetails(){
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const BASE_URL = import.meta.env.VITE_API_URL;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
      };

  useEffect(() => {
    console.log("Base URL from env:", import.meta.env.VITE_API_URL);
    axios.get(`${BASE_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id,BASE_URL]);

    if(!product) return <p>Loading data from server........</p>
    return(
        <>
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title}></img>
            <p>{product.description}</p>
            <p>${product.price} USD</p>
            <p>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            <button onClick={handleAddToCart} disabled={product.stock === 0}>Add to Cart</button>
        </div>
        </>
    );
};