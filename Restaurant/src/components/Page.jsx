import { useEffect, useState } from 'react';


function Page() {
  const [list,setList]=useState([])
  
  const submit=async (e)=>{
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/api/menu/all`,{
        method: "GET",
        headers: {"Content-Type": "application/json"},
        
    });
    const data=await response.json();
    setList(data);
}
useEffect(()=>{
  submit()
},[])
  return (

    <>
    <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-amber-400 mt-6">Exquisite Menu</h1>
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {list.map((dish, index) => (
        <div
          key={index}
          className="flex flex-col border border-amber-400 h-[22rem] w-[18rem] mx-2 p-4 bg-black shadow-md"
        >
          
          <div className="flex justify-center items-center h-[10rem] mb-4 bg-black">
            <img
              src={dish?.image}
              alt={dish.name}
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="text-lg font-semibold text-amber-400 mb-2">
            {dish?.name}
          </div>
          
          <div className="text-lg font-semibold text-amber-600 mb-2">
            ${dish?.price}
          </div>

          
          <div className="text-sm text-gray-400">{dish?.description}</div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Page;
