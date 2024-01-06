import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";

function App() {
  const addToCart = (id) => {
    console.log(id);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} data={data} />} />
        <Route path="/cart" element={<Cart data={data} />} />
      </Routes>
    </>
  );
}

export default App;
