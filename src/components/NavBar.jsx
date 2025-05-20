import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

export default function NavBar(){
    const total = useSelector(state => state.cart.totalItems);
    const {language,setLanguage} = useContext(LanguageContext);

    return(
        <>
        <nav>
            <Link to='/'>Products</Link> | <Link to='/cart'>Cart: {total} Items </Link> | <Link to='/register'>Register</Link> | <select value={language} onChange={(e)=> setLanguage(e.target.value)}><option value='en'>English</option><option value='ar'>العربية</option></select>
        </nav>
        </>
    );
};