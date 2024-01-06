import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsContainer}>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
        <div className={styles.productContainer}>
          <img
            src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            alt=""
            className={styles.image}
          />
          <p className={styles.title}>
            John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </p>
          <p className={styles.price}>Rs 555</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttons}>Remove from Cart</div>
          </div>
        </div>
      </div>

      <div className={styles.priceCalculater}>
        <div className={styles.priceContainer}>
          <p className={styles.priceDetails}>Price Details (1 product)</p>
          <p className={styles.totalPrice}>Total price : ₹ 555</p>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.buttons}>Buy Products</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
