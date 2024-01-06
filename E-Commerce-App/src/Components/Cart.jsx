import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsContainer}>
        <div className={styles.productInfo}>
          <img
            className={styles.image}
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
          />
          <p className={styles.title}>Zayn Malik</p>
          <p className={styles.price}>Rs 678</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.buttons}>Delete</button>
        </div>
      </div>

      <div className={styles.priceCalculater}></div>
    </div>
  );
};

export default Cart;
