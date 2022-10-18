import Section from "./menu/Section";
import Data from "./Data";

const Menu = () => {
    const burgers = Data.burgers;
    const chicken = Data.chicken;
    const sides = Data.sides

    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <Section title={'Burgers'} items={burgers} />
            <Section title={'Chicken'} items={chicken} />
            <Section title={'Sides'} items={sides} />
        </div>
    );
}
 
export default Menu;