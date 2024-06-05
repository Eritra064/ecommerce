import { Link } from "react-router-dom";
import "../../assets/css/myaccount.css";

const MyAccount = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser)

    return ( 
        
        <div className="container mx-auto mt-5">
            <div className="d-flex justify-content-between mb-5">
                <div className="d-flex gap-2">
                    <Link style={{textDecoration: "none", color: "black"}} to="/"><p>Home</p></Link>
                    <p>/</p>
                    <Link style={{textDecoration: "none", color:"black"}} to="/myaccount"><p className="font-weight-bold">My Account</p></Link>
                </div>
                <div><p>Welcome! <span style={{color: "red"}}>{storedUser.name}</span></p></div>
            </div>
            <div className="mb-5">
                <h3>Edit Your Profile</h3>
                <form>
                    <div className="d-flex gap-5">
                        <div className="d-flex flex-column">
                            <label>First Name</label>
                            <input type="text" name="name" placeholder={storedUser.name} />
                        </div>
                        <div className="d-flex flex-column">
                            <label>Last Name</label>
                            <input type="text" name="name" placeholder={storedUser.name} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default MyAccount;