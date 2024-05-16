import sideImage from "../../assets/images/sideImage.png";
import "../../assets/css/form.css";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className="d-flex justify-content-start align-items-center mt-5 mb-5">
      <div className="">
        <img src={sideImage} />
      </div>
      <div style={{ marginLeft: "100px" }} className="">
        <h1 className="mb-5">Create an account</h1>
        <h5 className="mb-5">Enter your details below</h5>
        <form className="d-flex flex-column gap-2">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button
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
          <div className="d-flex gap-2 mt-3">
          <p>Already have a account?</p>
          <p>Log in</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
