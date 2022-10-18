import Item from "./Item";

const Section = ({title, items}) => {
    return (
        <div className="Section Title">
            {/* for each item in the section,  */}
            <h1>{title}</h1>
            {/* Item component isn't being used? */}
            {items.map((item, i) => {
                // remember to return a value
                return <Item key={i} name={item.name} desc={item.desc} />
            })}
        </div>
    );
}
 
export default Section;