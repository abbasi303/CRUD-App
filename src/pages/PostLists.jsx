import { useQuery } from "@tanstack/react-query";
import { fetchPosts,deletePost } from "../api/posts";
import { useNavigate } from "react-router-dom";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
function PostLists() {

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      console.log("Post deleted successfully");

    }
  });

  const handleDeletePost = (id) => {
    deletePostMutation.mutate(id);
  }


  if (isLoading)
    return 'Loading...';
  if (isError)
    return `Error! :${error.message}`;



  return (
    <div className="w-screen h-full flex flex-col px-10 py-8 m-0">

<h1>
<div className="flex flex-col">
  <div className="overflow-hidden sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="w-[50%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead
            className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
                 <th
                    scope="col"
                    className="text-sm font-small text-white px-6 py-4"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-md text-white px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-md text-white px-6 py-4"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-md text-white px-6 py-4"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-md text-white px-6 py-4"
                  >
                    JobArea
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-md text-white px-6 py-4"
                  >
                    CompanyName
                  </th>
                
                </tr>
          </thead>
          <tbody className="border-black border-b-2">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="bg-white border-b-2 border-black"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      {post.id + 1}
                    </td>
                    <td className="text-l text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {post.name}
                    </td>
                    <td className="text-l text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {post.email}
                    </td>
                    <td className="text-l text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {post.address}
                    </td>
                    <td className="text-l text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {post.jobarea}
                    </td>
                    <td className="text-l text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {post.companyname}
                    </td>
                    <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-4 space-x-4 ">
                      <Link
                        to={`/post/${post.id}`}
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                      >
                        VIEW
                      </Link>
                      <Link
                        to={`/post/${post.id}/edit`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                      >
                        EDIT
                      </Link>
                      <Link
                        onClick={()=>handleDeletePost(post.id)}
                        to={"#"} 
                        className="bg-red-600 text-white px-6 py-2 rounded-lg"
                      >
                        DELETE
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</h1>


    </div>
    


















   

  );
}



export default PostLists
