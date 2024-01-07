import styles from "./PriceCalculator.module.css";
import PropTypes from "prop-types";

const PriceCalculator = ({ cartItems }) => {
  return (
    <div className={styles.priceCalculater}>
      <div className={styles.priceContainer}>
        <p className={styles.priceDetails}>
          Price Details ({cartItems.length} product)
        </p>
        <p className={styles.totalPrice}>
          Total price : ₹
          {cartItems.reduce((total, item) => total + item.price, 0)}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttons}>Buy Products</button>
      </div>
    </div>
  );
};

export default PriceCalculator;

PriceCalculator.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
