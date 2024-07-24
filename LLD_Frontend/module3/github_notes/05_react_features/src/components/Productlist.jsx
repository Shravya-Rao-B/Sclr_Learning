function Productlist(props) {
  const { prodList } = props;
  return (
    <>
      {prodList.map((product) => {
              return (<div key={product.id} className="product">
                <img src={product.image} alt="" className="product_image" />
                <div className="product_meta">
                  <p className="product_title"> {product.title}</p>
                  <p className="price"> {"price: $" + product.price }</p>

                </div>
              </div>);
            })}
    </>
  )
}

export default Productlist