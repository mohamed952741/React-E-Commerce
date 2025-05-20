import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
//import ProductList from './pages/ProductList'
import NotFound from './pages/NotFound'
//import ProductDetails from './pages/ProductDetails'
//import Cart from './pages/Cart'
import NavBar from './components/NavBar'
//import Register from './pages/Register'
import { lazy } from 'react'

const Cart = lazy(()=> import('./pages/Cart'))
const ProductList = lazy(()=> import('./pages/ProductList'))
const ProductDetails = lazy(()=> import('./pages/ProductDetails'))
const Register = lazy(()=> import('./pages/Register'))

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
