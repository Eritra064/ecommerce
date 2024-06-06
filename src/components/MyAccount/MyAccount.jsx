import { Link } from "react-router-dom";
import "../../assets/css/myaccount.css";

const MyAccount = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);

  return (
    <div className="container mx-auto mt-5">
      <div className="d-flex justify-content-between mb-5">
        <div className="d-flex gap-2">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <p>Home</p>
          </Link>
          <p>/</p>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/myaccount"
          >
            <p className="font-weight-bold">My Account</p>
          </Link>
        </div>
        <div>
          <p>
            Welcome! <span style={{ color: "red" }}>{storedUser.name}</span>
          </p>
        </div>
      </div>
      <div className="row d-flex flex-column-reverse flex-md-row col-12">
        <div className="col-4">
          <div className="d-flex flex-column">
            <p className="font-weight-bold">Manage My Account</p>
            <div style={{ marginLeft: "5%", color: "#7D8184" }}>
              <p>My Profile</p>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </div>
          </div>

          <div className="d-flex flex-column">
            <p className="font-weight-bold">My Orders</p>
            <div style={{ marginLeft: "5%", color: "#7D8184" }}>
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
          </div>
          <p className="font-weight-bold">My WishList</p>
        </div>
        <div className="col-8 mb-5 p-5 box">
          <h4 style={{ color: "red" }}>Edit Your Profile</h4>
          <form className="d-flex flex-column gap-3">
            <div className="d-flex">
              <div style={{ width: "45%", marginRight:"10%" }} className="d-flex flex-column">
                <label>First Name</label>
                <input type="text" name="name" placeholder={storedUser.name} />
              </div>
              <div style={{ width: "45%" }} className="d-flex flex-column">
                <label>Last Name</label>
                <input type="text" name="name" placeholder={storedUser.name} />
              </div>
            </div>

            <div className="d-flex">
              <div style={{ width: "45%", marginRight:"10%" }} className="d-flex flex-column">
                <label>Email</label>
                <input type="text" name="name" placeholder={storedUser.email} />
              </div>
              <div style={{ width: "45%" }} className="d-flex flex-column">
                <label>Address</label>
                <input type="text" name="name" />
              </div>
            </div>
            <div style={{ width: "100%" }} className="d-flex flex-column gap-2">
              <label>Password Changes</label>
              <input
                type="password"
                name="password"
                placeholder="Current Password"
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
              />
              <input
                type="password"
                name="password"
                placeholder="Confirm New Password"
              />
            </div>
            <div className="d-flex gap-2 ml-auto">
              <button className="bg-white border-0">Cancel</button>
              <button
                className="px-5 py-3 border-0 rounded"
                style={{ backgroundColor: "#DB4444", color: "white" }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;