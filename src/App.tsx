import React from "react";
import { Home } from "../src/Routes/Home";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Gallery } from "./Routes/Gallery";
import { Contact } from "./Routes/Contact";
import { Cart } from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* <Container fluid={true}> */}
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
        {/* </Container> */}
      </div>
    </CartProvider>
  );
}

export default App;
