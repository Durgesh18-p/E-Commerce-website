import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import ErrorBoundary from "./ErrorBoundary";
import ProductCard from "./ProductCard";

const Home = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?_page=${page}&_limit=500`
      );
      const json = await response.json();
      setData((prevData) => [...prevData, ...json]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <ErrorBoundary fallBack={<p>Something went wrong</p>}>
      <div className={styles.homePage}>
        <ProductCard
          data={data}
          addToCart={addToCart}
          loadMoreData={loadMoreData}
        />
      </div>
    </ErrorBoundary>
  );
};

export default Home;

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
