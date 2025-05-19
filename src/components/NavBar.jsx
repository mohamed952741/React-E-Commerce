import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar(){
    const total = useSelector(state => state.cart.totalItems)

    return(
        <>
        <nav>
            <Link to='/'>Products</Link> | <Link to='/cart'>Cart: {total} Items </Link> | <Link to='/register'>Register</Link>
        </nav>
        </>
    );
};