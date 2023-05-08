import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

const Post = () => {
const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ["posts",id],
    queryFn: ()=>fetchPost(id)
  });

  if (isLoading)
  return 'Loading...';
if (isError)
  return `Error! :${error.message}`;

  return (
<div className="text-black border-white border-2 rounded-lg p-8 flex flex-col items-center self-start">
<h1 className="text-2xl font-bold mt-4 gray border-2 rounded-lg px-5 ">EMPLOYEE DETAILS</h1>
  <h3 className="text-2xl font-bold mt-4">ID:{posts.id}</h3>
  <h3 className="text-xl font-bold mt-4">NAME: {posts.name}</h3>
  <h3 className="text-xl font-bold mt-4">EMAIL: {posts.email}</h3>
  <h3 className="text-xl font-bold mt-4">ADDRESS: {posts.address}</h3>
  <h3 className="text-xl font-bold mt-4">BIRTHDATE: {posts.birthdate}</h3>
  <h3 className="text-xl font-bold mt-4">ACCOUNT: {posts.account}</h3>
  <h3 className="text-xl font-bold mt-4">JOBAREA: {posts.jobarea}</h3>
  <h3 className="text-xl font-bold mt-4">COMPANYNAME: {posts.companyname}</h3>
  <h3 className="text-xl font-bold mt-4">CREDITCARDNUM: {posts.creditcardnum}</h3>

  
  
    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded m-5" onClick={() => navigate("/")}>
      Back to List
    </button>
  </div>
  
  )
}

export default Post
