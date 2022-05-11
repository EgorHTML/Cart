import { useContext } from "react"
import { getFullPrice } from "../actionsReducer"
import { CartContext,ProductCart } from "./ProductTable"

const Cart = () => {
    const {productsCart,dispatch} = useContext(CartContext)
    
    const productSets = productsCart.map((element:ProductCart,i) => {
        return <CartItem key={i} element={element} dispatch = {dispatch}/>
    } )
    
    if(productsCart.length === 0){
        return<div className="cart" style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                <p style={{"fontSize":"24px"}}>Корзина пуста</p>
            </div> 
    }else{
        return <div className="cart">
        <ul>{productSets}</ul>
        <div className="full__price" style={{"display":"flex"}}><p>Общая стоимость товаров:</p><p>{getFullPrice(productsCart)} Руб.</p></div>
        </div>
    }
}

const CartItem = (props:{element:ProductCart,dispatch:any}) => {
    return (<li className="cart__item">
        <div className="info__cart__item">
        <div className="title__cart">{props.element.name}</div>
        <div className="index__cart">{props.element.index}(шт)</div>
        </div>
        <div className="price__item">цена:{props.element.price} руб.</div>
        <button className="delete__btn" onClick={()=>props.dispatch({type:"delete",element:props.element})}>Удалить</button>
        </li>)
}
export default Cart