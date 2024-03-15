import React,{useEffect,useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import cat from "../Pages/Categories"

const Fetchdata = ({cat}) => {
    const [Data, setData] = useState("");
    const fetchData = async () => {
        await axios.get(cat?   `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a17f43ed4e434a34a6f57bb0f66e5894` :
            "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a17f43ed4e434a34a6f57bb0f66e5894"
        ).then((res) => setData(res.data.articles))
    };


     useEffect(() => {
        fetchData();
     }, [cat])
     
  return (
    <div className='container justify-content-center align-items-center my-4'>
        <h3  style={{fontSize:"25px"}} className='container text-info '> <u> TOP HEADLINES</u> </h3>
        <div className='container d-flex justify-content-center align-items-center flex-column my-2 ' style={{minHeight:"100vh"}}>
            {Data? 
            Data.map((items,index) => (
                <>
                <div className='container my-3 p-3' style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px" }}>  
                     <h5 className='my-2'>{items.title}</h5>
                     <div className=' d-flex justify-content-center align-items-center'>
                     <img src={items.urlToImage} alt="Image not found" className="img-fluid"
                     style={{width: "100%", height:"300px", objectFit:"cover"}} />
                     </div>
                    

                     <p>{items.content}</p>
                     <Link to={items.url} target="blank">View More</Link>
                      </div>          
                </>
            ))
            :"Loading..."}</div>
      </div>
  )
};

export default Fetchdata