
import React, { useState } from 'react'



const PostForm = ({onSubmit, initialValue}) => {
const[post,setPost]=useState({
    name: initialValue.name || '',
    email: initialValue.email || '',
    address: initialValue.address || '',
    birthdate: initialValue.birthdate || '',
    account: initialValue.account || '',
    jobarea: initialValue.jobarea || '',
    companyname: initialValue.companyname || '',
    creditcardnum: initialValue.creditcardnum || ''

});
console.log(post)
const handleChangeInput = (e) => {
    setPost({
        ...post,
        [e.target.name]:e.target.value
    })
}

    const renderField = (label) => (
        <div className="flex flex-col mb-4">
  <label className="text-xl font-bold mb-2">{label}</label>
  <input
    onChange={handleChangeInput}
    className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 px-4"
    type="text"
    name={label.toLowerCase()}
    value={post[label.toLowerCase()]}
  />
</div>

  
  )

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        setPost({
            name:'',
            email:'' ,
            address: '',
            birthdate:'',
            account: '',
            jobarea: '',
            companyname:'',
            creditcardnum:''
        })
    }

  return (
<div className="w-full h-full flex flex-col justify-center items-center mt-16">
  <h2 className="text-2xl font-bold mt-4 gray border-2 rounded-lg px-5">ADD EMPLOYEE</h2>
  <form className="w-[100%] h-full flex flex-col mt-2" onSubmit={handleSubmit}>
    {renderField("Name")}
    {renderField("Email")}
    {renderField("Address")}
    {renderField("Birthdate")}
    {renderField("Account")}
    {renderField("Jobarea")}
    {renderField("Companyname")}
    {renderField("Creditcardnum")}
    <button
      className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
      type="submit"
    >
      Submit
    </button>
  </form>
</div>

 )

}
export default PostForm