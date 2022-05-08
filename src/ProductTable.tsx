import React, {useState } from "react"
import Cart from "./Cart"
import Products from "./Products"

export const CartContext = React.createContext({
    products:[{name:"string",price:"number",stocked:"boolean",image:"image",index:"number"}],
    setupCart:(product:any,type?:string)=>{}
})

function ProductTable(){
  const [products,setup] = useState([])

    function setupCart(element:any,type?:string){
        switch(type){
            case "add":
                if(element.index === 0){
                    element.index = 1
                    const arr = products.concat(element)
                    setup(arr)
                }else{
                    element.index+=1
                    const arr = products.concat()
                    setup(arr)
                }
                break
            case "delete":
                if(element.index === 1){
                    const arr = products.filter((e:any)=>e.name!==element.name)
                    element.index = 0
                    setup(arr)
                }else{
                    element.index-=1
                    setup(products.concat())
                    
                }
                break
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