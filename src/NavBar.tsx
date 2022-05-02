import { FilterTextContext } from "./App"

function NavBar(){
    
 return <div className="nav__panel">
        <SearchInput/>
        </div>
}

function SearchInput(){
    return <FilterTextContext.Consumer>
         {
             ({setText})=>(
                <input onChange={setText} className="search__input" type="text" />
             )
         }
         </FilterTextContext.Consumer>
}

export default NavBar