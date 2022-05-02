import { useContext } from "react"
import { ProductsContext,FilterTextContext } from "./App"

export const cart:Map<any,any> = new Map()


function Products(props:any){
    const products = useContext(ProductsContext)
    const {filterText} = useContext(FilterTextContext)

    
    const FilteredProducts = products.map((product,i)=>{
        let current = product.name.toLowerCase().split(" ").filter(l=>l!==" ").join("")
        let filter = filterText.toLowerCase().split(" ").filter(l=>l!==" ").join("")
        if(current.indexOf(filter) === -1){
            return
        }
        return <li key={i}>
                <div className="card">
                    <div className="title">{product.name}</div>
                    <div className="price">{product.price}</div>
                    <button onClick={()=>props.setItems([...props.cartItems,product])}>Добавить</button>
                </div>
        </li>
    })

    return <ul className="products">{FilteredProducts}</ul>
}

function addItemToCart(product:any,i:number){
    if(cart.has(product.name)){
        cart.get(product.name).count+=1
    }else{
        product.count = 1
        cart.set(product.name,product)
        
    }   
}
export default Products

