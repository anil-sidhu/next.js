export default async function getStaticProps(){
    let data= await fetch("https://dummyjson.com/products/");
return await data.json();

}