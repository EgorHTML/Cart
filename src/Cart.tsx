import { useContext, useState } from "react"
import { CartContext } from "./ProductTable"



function Cart(props:any){
   const {productsCart,dispatch} = useContext(CartContext)
    console.log(productsCart);
    const arr = productsCart.map((element,i) => {
        return <li className="cart__item" key={i}>
            <div className="info__cart__item">
            <div className="title__cart">{element.name}</div>
            <div className="index__cart">{element.index}(шт)</div>
            </div>
            <div className="price__item">цена:{element.price} руб.</div>
            <button className="delete__btn" onClick={()=>dispatch({type:"delete",element:element})}>Удалить</button>
        </li>
    } )
    if(productsCart.length === 0){
        return<div className="cart" style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                <p style={{"fontSize":"24px"}}>Корзина пуста</p>
            </div> 
    }else{
        return <div className="cart">
        <ul>{arr}</ul>
        <div className="full__price" style={{"display":"flex"}}><p>Общая стоимость товаров:</p><p>{getFullPrice(productsCart)} Руб.</p></div>
        </div>
    }
}

function getFullPrice(products:any){
    let sum = 0
    products.forEach((product:any)=>{
        sum+=product.price * product.index
    })
    return sum
}

export default Cart