"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AddProducts() {
  const [products, setProducts] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  
  const addProduct = async (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:4001/api/admin/addproduct',{
      name,
      price
    });
    setName('');
    setPrice('');
    fetchProducts()
  }
  const fetchProducts = async ()=>{
    const res = await axios.get('http://localhost:4001/api/admin/getproducts');
    setProducts(res.data.products);
    console.log(res.data.products)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
    <div className="h-1/2 w-screen flex justify-center items-center">
      <form onSubmit={addProduct}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
          onChange={(e)=> setPrice(e.target.value)}
          value={price}
            type="text"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>
    </div>
      <div className="h-1/2 w-1/3 flex flex-col justify-center">
     {products?.map((product,index)=><div key={index} className="bg-gray-700 m-3 p-3 ">{product.name}</div>)}
      </div>
    </>

  );
}
