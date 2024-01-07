import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ data, addToCart }) => {
  return (
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
                  addToCart(product.id - 1);
                }}
              >
                Add to Cart
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
};
