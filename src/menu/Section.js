import Item from "./Item";

const Section = ({title}) => {
    return (
        <div className="Section Title">
            {/* for each item in the section,  */}
            <h1>{title}</h1>
            <Item />
        </div>
    );
}
 
export default Section;