// eslint-disable-next-line react/prop-types
export default function ItemList({list}) {
    // Implement the ItemList component to render the list of stationary items here
    // eslint-disable-next-line react/prop-types
    return (
        <>
        <div>
            <ul>
        {list.map(item => {
            return (<li key={item}>{item}</li>)
        })}
        </ul>
        </div>
        </>
    );
}