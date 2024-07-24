import { useEffect } from 'react';
import { useState } from 'react';
import basicOps from './utility/basicOps';
import Productlist from './Productlist';
import Categories from './Categories';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [sortDir, setSortDir] = useState(0);
  const [currCategory, setCurrentCategory] = useState("All categories")


  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();
      if(searchTerm != "") {
        let fProds = (basicOps(productData, searchTerm));
        setProducts(fProds);
        setSearchTerm("");
        }
        else 
        {
      setProducts(productData);
        }
    })();
  }, []);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const catData = await response.json();
        setCategories(catData);
    })()
  }, []);

  let filteredProducts = products;
  if(searchTerm != "" || sortDir != 0) {
    filteredProducts = basicOps(products, searchTerm, sortDir, currCategory);
  }

  return (
    <>
      <header className="nav_wrapper">
        <div>
        <input className="search_input" type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}  style={{margin: 'auto'}}
        >
        </input>
        </div>
        <div>
      <ArrowCircleUpIcon 
      style={{
        color: "white",
        fontSize: "large",
        cursor: "pointer",
      }}
      onClick={() => setSortDir(1)}
      />
      <ArrowCircleDownIcon 
           style={{
            color: "white",
            fontSize:  "large",
            cursor: "pointer",
          }}
          onClick={() => setSortDir(-1)}
          />
                </div>
      </header>

      <main className="product_wrapper">
        {categories.length? <Categories category={categories}></Categories> : ""}
        {products === null ? <h4>...Loading</h4> :
          <>
          <Categories category={categories} setCurrentCategory={setCurrentCategory}/>
          <Productlist prodList={filteredProducts}></Productlist>
          </>

        }
      </main>

    </>
  )
}

export default Home