import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import { FlexContainer, Item } from '../components/Products/ProductsStyles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {   
    fetch('https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products', {
      method: 'GET', // or 'PUT'
      headers:{
        'Content-Type': 'application/json',
        'x-api-key': 'I0HMGI23tu4EYoiDi1gCz6ySYJ7wzq1W6b9wfIaB',
      }
    }).then(res =>res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>{
      setProducts([...response.items])
    });

  }, []);

  return (
    <FlexContainer>
      { products ?
          products.map((item, key)=>{
            return (<Item key={key}><Card data={item} /></Item>)
          })

          :''
      }
    
    </FlexContainer>
  )
}
