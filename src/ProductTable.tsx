import React, { useState } from "react"
import Cart from "./Cart"
import Products from "./Products"

export const CartContext = React.createContext({
    products:[],
    setupCart:(product:any,type?:string)=>{}
})

function ProductTable(){
  const [products,setup] = useState([])

    function setupCart(element:any,type?:string){
        if(type === "delete"){
            setup(element)
        }else{
            const arr = products.concat(element.name)
            setup(arr)
        }
        
    }

    return <div className="product__table">
      <CartContext.Provider value={{products,setupCart}}>
        <Products/>
        <Cart />
        </CartContext.Provider>
       
    </div>
}

export default ProductTable