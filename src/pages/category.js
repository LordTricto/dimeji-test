import '../styles/category.css';

import ItemCard from '../components/category/itemCard';
import React from 'react'

function Category() {
  return (
    <div className='items__container'>
      <span className='items__header'>
        Category name
      </span>
      <div className='items__list'>
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