const PRODUCT = [
    {name:"Маргарита",price:490,stocked:true,image:""},
    {name:"Охотничья",price:600,stocked:true,image:""},
    {name:"Грибная",price:450,stocked:false,image:""},
    {name:"Датская",price:470,stocked:true,image:""},
    {name:"Happy pizza!",price:700,stocked:true,image:""}
  ]
  
 export const PRODUCTS = PRODUCT.map((e)=>{
    return {name:e.name,price:e.price,stocked:e.stocked,image:e.image,index:0}
  })