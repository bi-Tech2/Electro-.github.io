const product = [
    {
        id: 0,
        image: 'image/bi-tech=-logo.jpg',
        title: 'Z Flip Fold...',
        price: 120
    },
    {
        id: 1,
        image: 'image/bi-tech=-logo.jpg',
        title: 'J Flix...',
        price: 60
    },
    {
        id: 2,
        image: 'image/bi-tech=-logo.jpg',
        title: 'X Jblog...',
        price: 230
    },
    {
        id: 3,
        image: 'image/bi-tech=-logo.jpg',
        title: 'Grocemac...',
        price: 430
    },
]
const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src='${image}'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Add to cart</button>
                </div>
            </div>
        )
    }).join('')
};
displayItem(categories);