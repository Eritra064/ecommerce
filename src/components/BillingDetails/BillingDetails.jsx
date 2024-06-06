import "../../assets/css/myaccount.css";
import { BaseURL } from "../../APIRequest/CommonURL";
import { useDispatch, useSelector } from "react-redux";
import bkash from "../../assets/images/Bkash.png";
import visa from "../../assets/images/Visa.png";
import mastercard from "../../assets/images/Mastercard.png";
import nagad from "../../assets/images/Nagad.png";

const BillingDetails = () => {
  const cartList = useSelector((state) => state.product.cartList);
  const totalPrice = cartList.reduce(
    (total, product) => total + product?.subTotal,
    0
  );

  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="d-flex flex-column flex-md-row col-12 justify-content-center align-items-center gap-5">
        <div className="col-12 col-md-6">
          <h2 className="mb-5">Billing Details</h2>
          <form
            className="d-flex flex-column gap-2"
            style={{ color: "#7D8184", width: "80%" }}
          >
            <div className="d-flex flex-column gap-2">
              <label>First Name</label>
              <input type="text" name="name" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Company Name</label>
              <input type="text" name="company" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Street Address</label>
              <input type="text" name="address" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Apartment,floor,etc. (optional)</label>
              <input type="text" name="apartment" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Town/City</label>
              <input type="text" name="town" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Phone Number</label>
              <input type="tel" name="number" />
            </div>
            <div className="d-flex flex-column gap-2">
              <label>Email Address</label>
              <input type="email" name="email" />
            </div>
            <div className="">
              <input
                type="checkbox"
                name="check"
                style={{ marginRight: "6px" }}
              />
              <label className="font-weight-bold" style={{ color: "black" }}>
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-5">
          <div className="d-flex mb-3 flex-column gap-4">
            {cartList.map((product, idex) => (
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <img
                    style={{ width: "40px" }}
                    src={BaseURL + product?.ImageURL}
                  />
                  <p>{product?.Title}</p>
                </div>
                <div>
                  <p>${product.subTotal}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <p>Subtotal:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div
              className=""
              style={{ height: "1px", backgroundColor: "#7D8184" }}
            ></div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div
              className=""
              style={{ height: "1px", backgroundColor: "#7D8184" }}
            ></div>

            <div className="d-flex justify-content-between">
              <p>Total:</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input className="mr-3" type="radio" />
              <label>Bank</label>
            </div>
            <div className="d-flex">
              <img src={bkash} />
              <img src={visa} />
              <img src={mastercard} />
              <img src={nagad} />
            </div>
          </div>
          <div>
            <input className="mr-3" type="radio" />
            <label>Cash on Delivery</label>
          </div>
          <div className="buttons d-flex gap-2 mt-3 mb-3">
            <button
              style={{ color: "#7D8184", width: "250px" }}
              className="bg-white border rounded py-3"
            >
              Coupon Code
            </button>
            <button
              style={{ backgroundColor: "#DB4444", color: "white" }}
              className="border-0 px-5 py-3 rounded"
            >
              Apply Coupon
            </button>
          </div>
          <button
            style={{ backgroundColor: "#DB4444", color: "white" }}
            className="border-0 px-5 py-3 rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
