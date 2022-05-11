import { ProductCart } from "./Components/ProductTable"

export default function reducer(productsCart:ProductCart[],action:{type:string,element:ProductCart}):ProductCart[]{
    switch(action.type){
        case "add":
            if(action.element.index === 0){
                action.element.index = 1
                return [...productsCart,action.element]
            }else{
                action.element.index +=1
                return [...productsCart]
            }
        case "delete":
            if(action.element.index === 1){
                productsCart = productsCart.filter((e:ProductCart)=>e.name!==action.element.name)
                action.element.index = 0
                return [...productsCart]
            }else{
                action.element.index-=1
                return [...productsCart]
            }
        default:
            throw new Error("none type")
    }
}

export function getFullPrice(products:ProductCart[]){
    let sum = 0
    products.forEach((product:ProductCart)=>{
        sum+=product.price * product.index
    })
    return sum
}
