import { useMutation,useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm"
import { createPost } from '../api/posts';
import {v4 as uuidv4} from 'uuid'








const AddPostb = () => {

  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['posts']});
      console.log("Post added successfully");
  
    }
   });

   const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post
    })
    };
    
  return (
    <div>
   <h2>Add Employee</h2>
        <PostForm onSubmit={handleAddPost} initialValue={{}}/>
        </div>  )
}

export default AddPostb