// API link: https://fakestoreapi.com/products

const loadStoreAPI = () => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

loadStoreAPI();