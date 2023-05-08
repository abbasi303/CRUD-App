import { useParams,useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm"
import { useQuery } from "@tanstack/react-query";
import { fetchPost, updatePost } from "../api/posts";

import { useMutation,useQueryClient } from "@tanstack/react-query";



const EditPost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ["posts",id],
    queryFn: ()=>fetchPost(id)
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
    queryClient.invalidateQueries({queryKey:['posts']});
    navigate("/")
    }
  })

  if (isLoading)
  return 'Loading...';
if (isError)
  return `Error! :${error.message}`;

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({id, ...updatedPost});

  }

  return (
    <div>
        <PostForm onSubmit={handleSubmit} initialValue={posts} />
         </div>
  )
}

export default EditPost