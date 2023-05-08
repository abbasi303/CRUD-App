import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <div className='w-screen h-18 bg-blue-600 flex item-center px-10 py-2 justify-between' >


<div className='text-white text-3xl '>
      <Link to="/" style={{color:'white'}}>CRUD.com</Link>
    </div>

    <Link to={`/post/add`} className="w-48 bg-white text-blue-400 font-semibold text-xl h-12 px-6 py-2 rounded-lg'"
                      >
                        Add Employee
                      </Link>    
    </div>
  )
} 

export default Navbar