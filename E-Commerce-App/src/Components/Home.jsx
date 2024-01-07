import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import ErrorBoundary from "./ErrorBoundary";
import ProductCard from "./ProductCard";

const Home = ({ addToCart }) => {
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
    <ErrorBoundary fallBack={<p>Something went wrong</p>}>
      <div className={styles.homePage}>
        <ProductCard data={data} addToCart={addToCart} />
      </div>
    </ErrorBoundary>
  );
};

export default Home;

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
