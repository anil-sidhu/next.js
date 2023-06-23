
async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page() {
  
    let products = await productList();
    console.log(products);
    return (<div>
        <h1>Product List</h1>
        {
            products.map((item)=>(
                <div><h3>Name: {item.title}</h3></div>
            ))
        }
    </div>)
}