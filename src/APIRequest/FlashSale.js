import axios from "axios";
import { setProductList } from "../redux/state-slice/productSlice";
import store from "../redux/store";

export const FlashSaleListRequest = async () => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/ProductList/GetProductList/7"
        let Result = await axios.get(URL);
        store.dispatch(setProductList(Result.data["Data"]))
    }catch(e){
        console.error("Error fetching category list:", e);
    }
}