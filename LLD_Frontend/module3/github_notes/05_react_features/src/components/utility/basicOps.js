const searchItem = (products, term) => 
{
    if(term == null){
        return products;  // return all products if item is null or undefined
    }
    else 
    {
    let searchTerm = term.toLowerCase();
    let productsArray = products.filter(item => {
        return item.title.toLowerCase().includes(searchTerm)
    })
    return productsArray;
}
}

const sortArray = (arr,sortDir) => {
    console.log("sorting", sortDir)
    if(sortDir !==0){
        let sortedArray = [];
        if(sortDir == 1){
            sortedArray = arr.sort((item1, item2) => {
                return item1.price - item2.price;
            })
            return sortedArray;
        }
        else if (sortDir == -1) {
            sortedArray = arr.sort((item1, item2) => {
                return item2.price - item1.price;
            })
            return sortedArray;

        }
    }
    else {
        return arr;
    }
}
const categorization = (arr, currCategory) => {
    if(currCategory != "All categories")
    return arr.filter((item) => item.category === currCategory)
    else 
    return arr;
}
export default function basicOps(products, searchTerm, sortDir, currCategory){
    console.log("products in utility func", sortDir);
    let modifiedArray = searchItem(products,searchTerm);
    modifiedArray = sortArray(modifiedArray,sortDir);
    modifiedArray = categorization(modifiedArray,currCategory);
    return modifiedArray;
}