import sideImage from "../../assets/images/sideImage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onChangeLoginReducer, setLoginReducer } from "../../redux/state-slice/authSlice";
import CustomModal from "../../helper/CustomModal";
import store from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const loginFormValue = useSelector((state) => state.auth.loginFormValue);

  const generateToken = () => {
    return btoa(`${loginFormValue.email}:${loginFormValue.password}`);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);
    console.log(storedUser.email==loginFormValue.email)
    if(storedUser && storedUser.email==loginFormValue.email && storedUser.password==loginFormValue.password){

      const token = generateToken();
      // console.log(token);
      localStorage.setItem('token', token);
      
        setShowModal(true);
        window.location.href = '/'
    }else{
        alert('Invalid email or password');
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); 
  }

  return (
    <div className="d-flex justify-content-start align-items-center">
      <div style={{ width: "55%" }} className="">
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={sideImage}
        />
      </div>
      <div style={{ width: "45%", marginLeft: "40px" }} className="d-flex flex-column justify-content-start align-items-center">
        <h1 className="mb-5">Log in to Exclusive</h1>
        <h5 className="mb-5">Enter your details below</h5>
        <form onSubmit={handleLogin} className="d-flex flex-column gap-2">
          <input
            value={loginFormValue.email}
            onChange={(e) =>
              store.dispatch(
                onChangeLoginReducer({ name: "email", value: e.target.value })
              )
            }
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            value={loginFormValue.password}
            onChange={(e) =>
              store.dispatch(
                onChangeLoginReducer({
                  name: "password",
                  value: e.target.value,
                })
              )
            }
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
            Log In
          </button>
        </form>
        {/* <CustomModal show={showModal} handleClose={handleCloseModal} /> */}
      </div>
    </div>
  );
};

export default Login;

//http://192.168.114.231:4001/back/swagger/index.html