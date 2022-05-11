import React, {useReducer } from "react"
import reducer from "../actionsReducer"
import Cart from "./Cart"
import Products from "./Products"

export type ProductCart = {name:string,price:number,stocked:boolean,image:string,index:number}

type CartContextType = {
    productsCart:ProductCart[]
    dispatch:(action:{type:string,element:ProductCart})=>void
}

export const CartContext = React.createContext<CartContextType>({
    productsCart:[],
    dispatch:()=>{}
})

const ProductTable = () => {
    const [productsCart,dispatch] = useReducer(reducer,[])

      return <div className="product__table">
        <CartContext.Provider value={{productsCart,dispatch}}>
          <Products/>
          <Cart/>
          </CartContext.Provider>
      </div>
  }

export default ProductTable