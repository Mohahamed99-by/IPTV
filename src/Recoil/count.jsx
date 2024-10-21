import axios from 'axios';
import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

// Define the atom (piece of state)
const ProductState = atom({
  key: 'products',
  default: [],
});

function Counter() {
    const [products, setProducts] =useRecoilState(ProductState)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => setProducts(res.data))
    }, [])
    
  

  return (
   <>
    <div>
        {products.map((product) => (
            <p key={product.id}>{product.title}</p>
        ))}
    </div>
   </>
  );
}
export default Counter;