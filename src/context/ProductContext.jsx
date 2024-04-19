import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import api from '../assets/services/config';

const ProductContext = createContext();

function ProductsProvider({children}) {
  const[products , setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async () =>{
      try{
        setProducts(await api.get("/product"));
      }catch(error){
        console.log(error.message)
      }
    };

    fetchProducts();
  },[])

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductsProvider;