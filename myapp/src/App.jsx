import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Ecom from './Ecom'
const App = () => {
  const[data,setData]=useState([])

  const fetchInfo=()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>setData(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchInfo();
  },[])
  return (
    data.map((data,index)=>{
      return(
        <div>
          <Ecom title={data.title} price={data.price} image={data.image}/>
        </div>
      )
  })
    )
}

export default App