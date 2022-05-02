import "./styles/index.css"
import NavBar from "./NavBar"
import ProductTable from "./ProductTable"
import { useContext, useState } from "react"
import React from "react"

const PRODUCTS = [
  {name:"Маргарита",price:490,stocked:true,image:""},
  {name:"Охотничья",price:600,stocked:true,image:""},
  {name:"Грибная",price:450,stocked:false,image:""},
  {name:"Датская",price:470,stocked:true,image:""},
  {name:"Happy pizza!",price:700,stocked:true,image:""}
]


export const FilterTextContext = React.createContext({
  filterText:"",
  setText:(text:any)=>{}
})
export const ProductsContext = React.createContext(PRODUCTS)

function App() {
  const [filterText,setFilterText] = useState("")
  const a = useContext(FilterTextContext)
  function setText(event:any){
    setFilterText(event.target.value)
    a.filterText = event.target.value
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
