import axios from "axios";

export const productRequest = async (categoryId) => {
    try{
        let URL = "http://192.168.114.231:4001/back/api/ProductList/GetProductList/"+categoryId
        let Result = await axios.get(URL);
        return Result.data["Data"];
    }catch(e){
        console.error(e);
    }
}