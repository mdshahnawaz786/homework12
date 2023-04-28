import React, { useEffect, useState } from 'react'

import './product.css'



const Product = () => {

    const [state,setState] = useState([])

    useEffect(()=>{
        apiCall()

        return () => {
            setState([])
            console.log(state);
        }
    },[])


    async function apiCall(){
        const api = await fetch("https://fakestoreapi.com/products");
        const apiResponse = await api.text();
        const jsonData = JSON.parse(apiResponse);
        setState(jsonData)
    }


  return (
    <div className='product'>
    {state && state.map((ele) => {
        return (
            <div className="productDetails">
                <img src={ele.image} alt="" />
                <h5><b>Title: </b>{ele.title}</h5>
                <p><b>Price: </b> {ele.price}$</p>
                <button>Add to cart</button>
            </div>
        )
    })}
</div>
  )
}

export default Product