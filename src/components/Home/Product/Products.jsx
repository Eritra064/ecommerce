import gamepad from "../../../assets/images/gamepad.png";
import keyboard from "../../../assets/images/keyboard.png";
import monitor from "../../../assets/images/monitor.png";
import chair from "../../../assets/images/chair.png";

const Products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        image: gamepad,
        sale: "-40%"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: "$960",
        image: keyboard,
        sale: "-35%"
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: "$370",
        image: monitor,
        sale: "-30%"
    },
    {
        id:4,
        name: "S-Series Comfort Chair",
        price: "$375",
        image: chair,
        sale: "-25%"
    }
]

export default Products;