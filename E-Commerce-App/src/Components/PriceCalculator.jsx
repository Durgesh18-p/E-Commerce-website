/* eslint-disable react/prop-types */
import styles from "./PriceCalculator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PriceCalculator = ({ cartItems, setTotalPrice, totalPrice }) => {
  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
  }, [cartItems, setTotalPrice]);

  return (
    <div className={styles.priceCalculater}>
      <div className={styles.priceContainer}>
        <p className={styles.priceDetails}>
          Price Details ({cartItems.length} product)
        </p>
        <p className={styles.totalPrice}>Total price : ₹{totalPrice}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <Link to="/form" className={styles.buttons}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default PriceCalculator;

PriceCalculator.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
