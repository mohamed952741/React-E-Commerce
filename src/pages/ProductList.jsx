import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function ProductList(){
    const [products,setProducts] = useState([]);
    const [skip,setSkip] = useState(0);
    const limit = 10;

    const fetchProducts = async () =>{
        const res = await axios.get('https://dummyjson.com/products?limit='+limit+'&skip='+skip);
        setProducts(res.data.products);
    };
    useEffect(() => {fetchProducts();
    },[skip]);

    return(
        <>
        <div>
            <h2>Products</h2>
            <div className="product-grid">
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
            <Pagination skip={skip} setSkip={setSkip} limit={limit} />
        </div>
        </>
    );
};