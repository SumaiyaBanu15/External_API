// API link: https://fakestoreapi.com/products

const loadStoreAPI = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data))
    .catch(err => console.log(err))
}
// Get Data
const getProduct = (data) => {
   return (
    `
    <div class="product">
        <img src="${data.image}" alt="Product Image">
        <h2>${data.title}</h2>
        <h2>${data.category}</h2>
        <h3>${data.price}</h3>
    </div>
    `
   )
}

// Display Data
const displayProducts = (products) => {
   const displayData = products.map(data => getProduct(data))
   const container = document.getElementById("productID");
   container.innerHTML = displayData.join(" ");
//    document.body.append(container);
   
}

loadStoreAPI();