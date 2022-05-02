
function Cart(props:any){
    const arr = props.cartItems.map((card:any,i:number)=>{
        return <li key={i}>{card.name}</li>
    })
    return <div className="cart">
        <ul>{arr}</ul>
    </div>
}

export default Cart