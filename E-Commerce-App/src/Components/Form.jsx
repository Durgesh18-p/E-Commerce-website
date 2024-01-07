import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { useRef, useState } from "react";

const Form = ({ totalPrice }) => {
  const finalPrice = useRef(totalPrice);
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(!true);

  const onSubmit = (e) => {
    e.preventDefault();
    finalPrice.current = 0;
    if (formRef.current) {
      formRef.current.reset();
    }
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(!true);
  };

  return (
    <div className={styles.formContainer}>
      <form action="#" className={styles.form} ref={formRef}>
        <div className={styles.customerInfo}>
          <h2 className={styles.heading}>Customer Information</h2>
          <label htmlFor="name" className={styles.label}>
            Name :
          </label>
          <input type="text" className={styles.nameInput} />
          <label htmlFor="name" className={styles.label}>
            Address :
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={styles.address}
          ></textarea>
        </div>

        <div className={styles.paymentDetails}>
          <h2 className={styles.heading}>Payment Details</h2>
          <label htmlFor="name" className={styles.label}>
            Total Amount :
          </label>
          <input
            type="text"
            className={styles.nameInput}
            value={`₹ ${finalPrice.current}`}
          />
          <input
            type="password"
            placeholder="Enter card number..."
            className={styles.nameInput}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={styles.buttons}
            type="submit"
            onClick={(e) => onSubmit(e)}
          >
            Pay
          </button>
        </div>
      </form>
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <p className={styles.input}>
              Your payment was successful! Thank you.
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;

Form.propTypes = {
  totalPrice: PropTypes.any.isRequired,
};
