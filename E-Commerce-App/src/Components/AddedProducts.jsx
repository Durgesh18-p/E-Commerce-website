import styles from "./AddedProducts.module.css";
import PropTypes from "prop-types";

const AddedProducts = ({ cartItems, handleRemoveProduct }) => {
  return (
    <div className={styles.itemsContainer}>
      {cartItems.map((product) => (
        <div className={styles.productContainer} key={product.id}>
          <img
            src={product.image}
            alt="product image"
            className={styles.image}
          />
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>₹ {product.price}</p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttons}
              onClick={() => handleRemoveProduct(product.id - 1)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedProducts;

AddedProducts.propTypes = {
  cartItems: PropTypes.any.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
};
