/* eslint-disable react/prop-types */
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = ({ lengths }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.link}>
          <p className={styles.logo}>Bought or not</p>
        </Link>
      </div>
      <div className={styles.iconDiv}>
        <Link to="/cart" className={styles.link}>
          <FaShoppingCart className={styles.cartIcon} />
          <span className={styles.cart}>{lengths && lengths}</span>
          <span className={styles.cart}>Items</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
