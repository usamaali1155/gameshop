import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import Product from "../Allproducts/Product"
import search from "../search"

function ShopByGenre({ searchString, setSearchString }) {
  const { genre } = useParams()
  const location = useLocation()
  const products = useSelector(state => state.products)

  const [byGenre, setByGenre] = useState([])

  function filterByGenre() {
    setByGenre(products.filter(product => product.genre.toLowerCase() == genre))
  }

  useEffect(() => {
    filterByGenre()
  }, [products, location])
  useEffect(() => {
    setSearchString("")
  }, [])

  return (
    <div className='shop-by-genre'>
      {search(searchString, byGenre).map(product => <Product product={product} />)}
    </div>
  )
}

export default ShopByGenre