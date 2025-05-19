import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails(){
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/'+id).then(res => setProduct(res.data));
    },[id])
    if(!product) return <p>Loading data from server........</p>
    return(
        <>
        <div>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title}></img>
            <p>{product.description}</p>
            <p>${product.price} USD</p>
            <p>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
        </div>
        </>
    );
};