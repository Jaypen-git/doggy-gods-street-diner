import HeroCard from "./HeroCard";

const Hero = () => {
    return (
        <div className="hero">
            <HeroCard />
            <div className="img-container">
                <img src={require("./img/banner.png")} alt="banner1" className="hero-img" />
            </div>
        </div>    
    );
}
 
export default Hero;