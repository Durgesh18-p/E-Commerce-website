import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Cart from "./Components/Cart";
import Form from "./Components/Form";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [length, setLength] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState(null);
  const [popup, setPopup] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setShowPopup(true);
      setPopup("Fill in all the fields");
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        email: email,
        password: password,
      }));
    }
  };

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
    if (!indexes.includes(id)) {
      setIndexes((prevIndexes) => [id, ...prevIndexes]);
    }
  };

  useEffect(() => {
    setLength(indexes.length);
  }, [indexes]);

  const handleRemoveProduct = (id) => {
    setIndexes((prevIndexes) => prevIndexes.filter((index) => index !== id));
  };

  if (!user) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Login
              handleSubmit={handleSubmit}
              popup={popup}
              showPopup={showPopup}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              handleSubmit={handleSubmit}
              popup={popup}
              setShowPopup={setShowPopup}
              showPopup={showPopup}
            />
          }
        />
      </Routes>
    );
  }

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
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        />
        <Route
          path="/form"
          element={<Form totalPrice={totalPrice} setLength={setLength} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
