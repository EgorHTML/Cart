import { useContext } from "react"
import { CartContext } from "./ProductTable"



function Cart(props:any){
   const {products,setupCart} = useContext(CartContext)

    function deleteItem(element:any){
        let arr = products
        arr = arr.filter((name)=>name!==element)
        setupCart(arr,"delete")
    }

    const arr = products.map((element,i) => {
        return <li key={i}>
            {element}
            <button onClick={()=>deleteItem(element)}>Удалить</button>
        </li>
    } )
    return <div className="cart">
        <ul>{arr}</ul>
    </div>
}

export default Cart