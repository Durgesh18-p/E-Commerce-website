/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import styles from "./Signup.module.css";

const Signup = ({ handleSubmit, popup, setShowPopup, showPopup }) => {
  const email = useRef("");
  const password = useRef("");

  useEffect(() => {
    if (popup) {
      const timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [popup, setShowPopup]);
  return (
    <div className={styles.loginContainer}>
      {showPopup && <p className={styles.popup}>{popup}</p>}
      <p className={styles.heading}>
        Sign Up for &ldquo;<span className={styles.brand}>Bought or Not</span>
        &rdquo;
      </p>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="name..." className={styles.input} />
            <input
              type="email"
              placeholder="email..."
              ref={email}
              className={styles.input}
              autoComplete="email"
            />
            <input
              type="password"
              name=""
              id=""
              ref={password}
              placeholder="password..."
              className={styles.input}
              autoComplete="password"
            />
          </div>
          <div className="loginButtonContainer">
            <button
              className={styles.loginButton}
              type="submit"
              onClick={(e) =>
                handleSubmit(
                  e,
                  email.current.value,
                  password.current.value,
                  showPopup
                )
              }
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
