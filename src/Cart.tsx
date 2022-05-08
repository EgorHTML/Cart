import { useContext } from "react"
import { CartContext } from "./ProductTable"



function Cart(props:any){
   const {products,setupCart} = useContext(CartContext)

    const arr = products.map((element,i) => {
        return <li className="cart__item" key={i}>
            <div className="info__cart__item">
            <div className="title__cart">{element.name}</div>
            <div className="index__cart">{element.index}(шт)</div>
            </div>
            <div className="price__item">цена:{element.price} руб.</div>
            <button className="delete__btn" onClick={()=>setupCart(element,"delete")}>Удалить</button>
        </li>
    } )

    if(products.length === 0){
        return<div className="cart" style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                <p style={{"fontSize":"24px"}}>Корзина пуста</p>
            </div> 
    }else{
        return <div className="cart">
        <ul>{arr}</ul>
        <div className="full__price" style={{"display":"flex"}}><p>Общая стоимость товаров:</p><p>{getFullPrice(products)} Руб.</p></div>
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