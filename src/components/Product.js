import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return <>
 
 <div class="container">
  <div class="row">
    <div class="col">
     <img className="small" src={product.image} alt={product.name} />
     
     <h3>{product.name}</h3>
    </div>
    <div class="col" style={{alignText:"center"}}>
    ₹{product.price}
    </div>
    <div class="col">
    <button onClick={() => onAdd(product)}><span>Add To Cart</span></button>
    </div>
  </div>
</div>
  </>
}
