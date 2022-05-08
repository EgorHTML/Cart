import { useContext } from "react"
import { ProductsContext,FilterTextContext } from "./App"
import {CartContext} from "./ProductTable"

function Products(props:any){
    const products = useContext(ProductsContext)
    const {filterText} = useContext(FilterTextContext)

    const FilteredProducts = products.map((product,i)=>{
        let current = product.name.toLowerCase().split(" ").filter(l=>l!==" ").join("")
        let filter = filterText.toLowerCase().split(" ").filter(l=>l!==" ").join("")
        if(current.indexOf(filter) === -1){
            return
        }
        return  <Product key={i} product = {product} />
       
    })

    return <ul className="products">{FilteredProducts}</ul>
}


function Product(props:any){
    return <CartContext.Consumer>{ 
    ({products,setupCart})=>(
    <li>
        <div className="card">
        <div className="title">{props.product.name}</div>
        <div className="price">{props.product.price}</div>
        <button onClick={()=>setupCart(props.product,"add")}>Добавить</button>
        </div>
    </li>
    )
}
    </CartContext.Consumer>
}

export default Products

