const Item = ({name, desc}) => {
    return (
        <div className="menu-item">
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    );
}
 
export default Item;