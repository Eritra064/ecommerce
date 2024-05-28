import axios from "axios";
import { setRelatedItems } from "../redux/state-slice/productSlice";

import store from "../redux/store";

export const relatedItemRequest = async (categoryId) => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/ProductList/GetProductList/"+categoryId
        let Result = await axios.get(URL);
        console.log(Result.data["Data"])
        store.dispatch(setRelatedItems(Result.data["Data"]));

    }catch(e){
        console.error(e);
    }
}
