import HeroCard from "./HeroCard";

const Hero = () => {
    return (
        <div className="slider">
            <HeroCard />
            <div className="img-container">
                <img src={require("./img/banner.png")} alt="banner1" className="slider-img" />
            </div>
        </div>    
    );
}
 
export default Hero;