import axios from "axios";
import store from "../redux/store";
import { setCategoryList } from "../redux/state-slice/categorySlice";

export const CategoryListRequest = async () => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/Category/GetCategoryList"
        let Result = await axios.get(URL);
        store.dispatch(setCategoryList(Result.data["Data"]))
    }catch(e){
        console.error("Error fetching category list:", e);
    }
}