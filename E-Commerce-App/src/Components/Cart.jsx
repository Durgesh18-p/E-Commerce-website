import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import AddedProducts from "./AddedProducts";
import PriceCalculator from "./PriceCalculator";

const Cart = ({ data, indexes }) => {
  const cartItems = indexes.map((index) => data[index]);

  return (
    <div className={styles.cartContainer}>
      <AddedProducts cartItems={cartItems} />
      <PriceCalculator cartItems={cartItems} />
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  data: PropTypes.any.isRequired,
  indexes: PropTypes.any.isRequired,
};
