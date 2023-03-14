import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"


export default function Careers() {
  const [res,setRes]=useState();
  useEffect(()=>{
    getData().then(async (r)=>{
      setRes(await r.json());
    });
  },[]);

async function getData(){
  const response=await fetch('http://localhost:4000/careers');
  return response;
}


  return (
    <>
    {res&&(<div className="careers">
      {res.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>)}
    {!res&&(<div>Loading...</div>)}
    </> 
  )
}
