import SliderCard from "./SliderCard";

const Slider = () => {
    return (
        <div className="slider">
            <SliderCard />
            <div className="img-container">
                <img src={require("./img/banner.png")} alt="banner1" className="slider-img" />
            </div>
        </div>    
    );
}
 
export default Slider;