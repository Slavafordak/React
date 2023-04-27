import { popper,createPopper} from "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter, Routes,Route,Link,Router } from "react-router-dom";
import Footer from "./components/Footer";
import Middle from "./components/middle";
import Test from "./components/Test";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import ProductPage from "./components/ProductWindow";
import products from "./components/Test";

function App() {
  return (
    <>
    <div className="bg-zinc-800 h-screen w-screen">
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="Torgi" element={<Test/>}/>
        <Route path="/" element={<Middle/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Registration" element={<RegistrationForm/>}/>
        <Route path="/products/:id" element={<ProductPage products={products} />}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
//у меня есть страница с переходом <Route path="/products/:id" element={<ProductPage products={products} />}/>, мне нужно чтобы при клике на торговую карточку, данsdfsdfsdfные были перенесы на другую страницу 