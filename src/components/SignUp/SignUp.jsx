import sideImage from "../../assets/images/sideImage.png";
import "../../assets/css/form.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import {
  onChangeSignUpReducer,
  setSignUpReducer,
} from "../../redux/state-slice/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const formValue = useSelector((state) => state.auth.formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSignUpReducer());
    alert("account created successfully");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ width: "55%" }} className="">
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={sideImage}
        />
      </div>
      <div style={{ width: "45%" }} className="d-flex flex-column justify-content-start align-items-center">
        <h1 className="mb-5">Create an account</h1>
        <h5 className="mb-5">Enter your details below</h5>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
          <input
            value={formValue.name}
            onChange={(e) =>
              store.dispatch(
                onChangeSignUpReducer({ name: "name", value: e.target.value })
              )
            }
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            value={formValue.email}
            onChange={(e) => {
              store.dispatch(onChangeSignUpReducer({name: "email", value: e.target.value}))
            }}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            value={formValue.password}
            onChange={(e) => {
              store.dispatch(onChangeSignUpReducer({name: "password", value: e.target.value}))
            }}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="border-0 p-3 rounded"
            style={{
              width: "300px",
              backgroundColor: "rgb(184, 43, 43)",
              color: "white",
            }}
          >
            Create Account
          </button>
          <button
            className="border p-3 rounded"
            style={{
              width: "300px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <FcGoogle /> Sign up with Google
          </button>
        </form>
        <div className="d-flex gap-2 mt-3">
          <p>Already have a account?</p>
          <Link style={{ textDecoration: "none" }} to="/login">
            <p>Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
