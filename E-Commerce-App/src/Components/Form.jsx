import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { useRef, useState } from "react";
import image from "../Assets/bag.jpg";

const Form = ({ totalPrice }) => {
  const finalPrice = useRef(totalPrice);
  const formRef = useRef(null);
  const name = useRef("");
  const address = useRef("");
  const totalPay = useRef("");
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    totalPay: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    finalPrice.current = 0;

    setFormData({
      name: name.current.value,
      address: address.current.value,
      totalPay: totalPay.current.value,
    });

    setShowPopup(true);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.checkoutForm}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Image" />
      </div>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form} ref={formRef}>
          <div className={styles.customerInfo}>
            <h2 className={styles.heading}>Customer Information</h2>
            <label htmlFor="name" className={styles.label}>
              Name :
            </label>
            <input
              id="name"
              type="text"
              ref={name}
              className={styles.nameInput}
              placeholder="Enter full name..."
            />
            <label htmlFor="name" className={styles.label}>
              Address :
            </label>
            <textarea
              name="address"
              id="address"
              cols="20"
              rows="5"
              ref={address}
              className={styles.address}
              placeholder="Enter address..."
            ></textarea>
          </div>

          <div className={styles.paymentDetails}>
            <h2 className={styles.heading}>Payment Details</h2>
            <label htmlFor="name" className={styles.label}>
              Total Amount :
            </label>
            <input
              type="text"
              ref={totalPay}
              className={styles.nameInput}
              value={`₹ ${finalPrice.current}`}
              readOnly
            />
            <input
              type="password"
              id="cardNumber"
              placeholder="Enter card number..."
              autoComplete=""
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
              <p className={styles.inputs}>
                Your payment was successful! Thank you. 🙏
              </p>
              <div className={styles.info}>
                <p className={styles.inputs}>Name: {formData.name}</p>
                <p className={styles.inputs}>Address: {formData.address}</p>
                <p className={styles.inputs}>
                  Amount Paid: {formData.totalPay}
                </p>
              </div>
              <button onClick={() => closePopup()}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

Form.propTypes = {
  totalPrice: PropTypes.any.isRequired,
};
