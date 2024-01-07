import styles from "./AddedProducts.module.css";
import PropTypes from "prop-types";

const AddedProducts = ({ cartItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {cartItems.map((product, index) => (
        <div className={styles.productContainer} key={index}>
          <img
            src={product.image}
            alt="product image"
            className={styles.image}
          />
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>₹ {product.price}</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedProducts;

AddedProducts.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
