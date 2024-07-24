
function Categories(props) {
    const {category, setCurrentCategory} = props;   
  return (
    <>
    <button onClick={() => {
      setCurrentCategory("All Categories");
    }}>
    </button>
        {category.map((category, index) => {
            return (
                <button key={index} onClick={setCurrentCategory}>{category}</button>
            )
        })}
    </>
  )
}

export default Categories