import { useState } from "react"
import Cart from "./Cart"
import Products from "./Products"

function ProductTable(){
    const [cartItems,setItems] = useState([])
    return <div className="product__table">
        <Products setItems = {setItems} cartItems = {cartItems}/>
        <Cart cartItems = {cartItems}/>
    </div>
}

export default ProductTable