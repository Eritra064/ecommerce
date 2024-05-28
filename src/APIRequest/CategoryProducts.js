import axios from "axios";
import { setCategoryProduct } from "../redux/state-slice/productSlice";
import store from "../redux/store";

export const categoryProductRequest = async (categoryId) => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/ProductList/GetProductList/"+categoryId
        let Result = await axios.get(URL);
        console.log(Result.data["Data"])
        store.dispatch(setCategoryProduct(Result.data["Data"]));

    }catch(e){
        console.error(e);
    }
}