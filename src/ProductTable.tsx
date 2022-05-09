import React, {useReducer, useState } from "react"
import Cart from "./Cart"
import Products from "./Products"

type ProductCart = {name:string,price:number,stocked:boolean,image:string,index:number}

export const CartContext = React.createContext<{productsCart:ProductCart[],dispatch:(action:{type:string,element:ProductCart})=>void}>({
    productsCart:[],
    dispatch:()=>{}
})

const ProductTable = () => {
    const [productsCart,dispatch] = useReducer(reducer,[])
      
    console.log(productsCart);
      return <div className="product__table">
        <CartContext.Provider value={{productsCart,dispatch}}>
          <Products/>
          <Cart/>
          </CartContext.Provider>
         
      </div>
  }


function reducer(productsCart:ProductCart[],action:{type:string,element:ProductCart}):ProductCart[]{
    switch(action.type){
        case "add":
            if(action.element.index === 0){
                action.element.index = 1
                productsCart.push(action.element)
                return productsCart
            }else{
                action.element.index +=1
                return productsCart
            }
        case "delete":
            if(action.element.index === 1){
                const arr = productsCart.filter((e:ProductCart)=>e.name!==action.element.name)
                action.element.index = 0
                return arr
            }else{
                action.element.index-=1
                return productsCart
            }
        default:
            throw new Error("none type")
    }
}



export default ProductTable