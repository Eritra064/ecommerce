import axios from "axios";
import { setProductDetails } from "../redux/state-slice/productSlice";
import store from "../redux/store";

export const ProductDetailRequest = async (productId) => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/ProductList/GetProductDetails/1/"+productId;
        let Result = await axios.get(URL);
        store.dispatch(setProductDetails(Result.data["Data"]))
    }catch(e){
        console.error(e)
    }
}