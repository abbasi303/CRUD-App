import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import PostLists from './pages/PostLists'
import Post from './pages/Post'
import EditPost from './pages/EditPost'
import AddPost from './pages/AddPost'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostLists />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/post/add" element={<AddPost />} />


        </Routes>
      </div>
    </>
  )
}

export default App
