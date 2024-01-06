import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");
  // const [cartData, setCartData] = useState({});

  const addToCart = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
      } catch (error) {
        setErrors(error);
        console.error(errors);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        {data &&
          data.map((product) => (
            <div className={styles.productContainer} key={product.id}>
              <div className={styles.productInfo}>
                <img
                  src={product.image}
                  alt="product image"
                  className={styles.image}
                />
                <p className={styles.title}>{product.title}</p>
                <p className={styles.price}>₹{product.price}</p>
              </div>

              <div className={styles.buttonContainer}>
                <button
                  className={styles.buttons}
                  onClick={() => {
                    addToCart(product.id);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
