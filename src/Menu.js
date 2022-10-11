import Section from "./menu/Section";
import Data from "./Data";

const Menu = () => {
    console.log(Data);

    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <Section title={'Burgers'} />
            <Section title={'Chicken'} />
            <Section title={'Sides'}/>
        </div>
    );
}
 
export default Menu;