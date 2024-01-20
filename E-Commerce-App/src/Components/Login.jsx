import PropTypes from "prop-types";
import styles from "./Login.module.css";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleSubmit, popup, setShowPopup, showPopup }) => {
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
        Login to &ldquo;<span className={styles.brand}>Bought or Not</span>
        &rdquo;
      </p>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <div className={styles.inputContainer}>
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
              Login
            </button>
          </div>
        </form>
      </div>
      <div className={styles.signupContainer}>
        <p className={styles.signup}>New to &ldquo;Bought or Not&ldquo;</p>
        <p>
          <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  popup: PropTypes.string.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
};
