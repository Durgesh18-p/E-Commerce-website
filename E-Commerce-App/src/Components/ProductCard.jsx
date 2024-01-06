

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data, addToCart, loadMoreData }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight - 500) {
          loadMoreData();
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadMoreData]);

  return (
    <div className={styles.heroSection} ref={containerRef}>
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
  );
};

export default ProductCard;

ProductCard.propTypes = {
  data: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  loadMoreData: PropTypes.func.isRequired,
};
