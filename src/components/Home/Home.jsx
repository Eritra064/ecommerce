import FlashSale from "./FlashSale/FlashSale";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Featured from "../../components/Home/Featured/Featured";
import BestSelling from "./BestSelling/BestSelling";
import OurProducts from "./OurProducts/OurProducts";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <FlashSale />
            <Categories />
            <BestSelling />
            <OurProducts />
            <Featured />
        </div>
     );
}
 
export default Home;