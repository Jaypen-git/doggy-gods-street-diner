import SliderCard from "./SliderCard";

const Slider = () => {
    return (
        <div className="slider">
            <SliderCard />
            <img src={require("./img/banner.png")} alt="banner1" className="slider-img" />
        </div>    
    );
}
 
export default Slider;