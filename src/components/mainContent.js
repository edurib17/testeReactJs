import React from 'react';
import products from '../data/products.json';
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'

function addProductToCart(item) {
    const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
    const arrayproduct = JSON.parse(oldproduct);
    let productsString = item.products;
    let products = item

    arrayproduct.push(products);
    if (productsString) {
        products = JSON.parse(productsString)
    }
    Swal.fire(
        'Produto adicionado!',
        'Com sucesso!',
        'success'
    )

    localStorage.setItem('products', JSON.stringify(arrayproduct));
}

const MainContent = () => {
    const listItems = products.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.image} />
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p className="price">R$ {item.price}</p>
                <div className="btn" id="btnClick" onClick={() => { addProductToCart(item) }}><FaShoppingCart />Adicionar</div>
            </div>
        </div>
    );
    return (
        <div className="main-content">
            {listItems}
        </div>
    )
}
export default MainContent;
