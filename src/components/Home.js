import { Blogs } from "../utlis/blogdata";
import Blog from "./Blog";

const Home=()=>{
    
    const posts=Blogs?.posts;
   console.log(posts);
    return(
        <div className="my-32 mx-16  grid grid-cols-3  gap-3">
  
     {
          posts.map((blog)=>(
             <Blog  key={blog.id} blog={blog} /> 
            )
       ) }
 
     
       
        
        </div>
    )

}

export default Home;

