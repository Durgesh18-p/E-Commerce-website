import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import AddedProducts from "./AddedProducts";
import PriceCalculator from "./PriceCalculator";

const Cart = ({
  data,
  indexes,
  handleRemoveProduct,
  totalPrice,
  setTotalPrice,
}) => {
  const cartItems = indexes.map((index) => data[index]);

  return (
    <div className={styles.cartContainer}>
      <AddedProducts
        cartItems={cartItems}
        handleRemoveProduct={handleRemoveProduct}
      />
      <PriceCalculator
        cartItems={cartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  data: PropTypes.any.isRequired,
  indexes: PropTypes.any.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
  totalPrice: PropTypes.any.isRequired,
  setTotalPrice: PropTypes.any.isRequired,
};
