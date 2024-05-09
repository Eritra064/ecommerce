import voucher from "../../../assets/images/voucher.png"
const Hero = () => {
    return ( 
        <div className="row col-9 d-flex mx-auto">
            <div className="hello col-3 p-5 border-end">
                <p>Women's Fashion</p>
                <p>Men's Fashion</p>
                <p>Electronics</p>
                <p>Home & Lifestyle</p>
                <p>Medicine</p>
                <p>Sports & Outdoor</p>
                <p>Women's Fashion</p>
            </div>
            <div className="images p-5 col-6">
                <img src={voucher} />
            </div>
        </div>
     );
}
 
export default Hero;