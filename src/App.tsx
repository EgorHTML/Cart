import "./styles/index.css"
import NavBar from "./NavBar"
import ProductTable from "./ProductTable"
import { useState } from "react"
import React from "react"
import { PRODUCTS } from "./data.js"

export const FilterTextContext = React.createContext({
  filterText:"",
  setText:(text:any)=>{}
})
export const ProductsContext = React.createContext(PRODUCTS)

const App = () => {
  const [filterText,setFilterText] = useState("")
  function setText(event:any){
    setFilterText(event.target.value)
  }
  
  return (
    <div className='wrapper'>
      <FilterTextContext.Provider value={{filterText,setText}}>
      <NavBar/>
      <ProductTable/>
      </FilterTextContext.Provider>
    </div>
  )
}

export default App;
