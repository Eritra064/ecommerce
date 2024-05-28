import FlashSale from "./FlashSale/FlashSale";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Featured from "../../components/Home/Featured/Featured";
import BestSelling from "./BestSelling/BestSelling";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <FlashSale />
            <Categories />
            <BestSelling />
            <Featured />
        </div>
     );
}
 
export default Home;