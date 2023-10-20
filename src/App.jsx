import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import { SingleProduct } from './components/SingleProduct';
import { Login } from './components/Login';
import { Error } from './components/Error';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:productId" element={<SingleProduct/>} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App;