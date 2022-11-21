import '../styles/category.css';

import React, { useEffect, useState } from 'react'

import ItemCard from '../components/category/itemCard';
import { LOAD_CATEGORIES } from '../services/queries';
import { useQuery } from '@apollo/client'

function Category() {
  const { error, loading, data } = useQuery(LOAD_CATEGORIES)
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (data && data) {
      setProductList(data.categories[0].products);
    }
  }, [data])

  return (
    <div className='items__container'>
      <span className='items__header'>
        Category name
      </span>
      <div className='items__list'>
        {
          productList && productList.map((_product, index) => (
            <ItemCard key={index} data={_product} isDisabled={!_product.inStock} />
          ))
        }
        <ItemCard isDisabled />
        <ItemCard isDisabled />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

    </div>
  )
}

export default Category