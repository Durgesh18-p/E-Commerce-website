import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [length, setLength] = useState(0);

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

  const addToCart = (id) => {
    setIndexes((prevIndexes) => [id, ...prevIndexes]);
    console.log(id);
  };

  useEffect(() => {
    setLength(indexes.length);
  }, [indexes]);

  const handleRemoveProduct = (id) => {
    setIndexes((prevIndexes) => prevIndexes.filter((index) => index !== id));
    console.log(indexes);
    console.log(id);
  };

  return (
    <>
      <Navigation lengths={length}></Navigation>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} data={data} />} />
        <Route
          path="/cart"
          element={
            <Cart
              data={data}
              indexes={indexes}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
