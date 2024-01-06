/* eslint-disable react/prop-types */

import styles from "./Cart.module.css";

const Cart = ({ data, indexes }) => {
  const cartItems = indexes.map((index) => data[index]);

  return (
    <div className={styles.cartContainer}>
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
    </div>
  );
};

export default Cart;
