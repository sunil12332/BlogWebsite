import { Link, Outlet } from "react-router-dom";


const Header=()=>{
    return(
        <div>
            
        <div className="flex flex-row justify-between bg-blue-300 h-[100px]">
            <div className="w-3/12">
                <p className="relative top-[40px] left-[45px] font-bold text-2xl">Blog</p>
            </div>

            <div className=" w-3/12 flex  flex-row gap-4">
               <Link to="/">  <button className="  px-[4px] relative top-[30px] h-[50px] border-solid  border-2 border-indigo-600 rounded-md hover:bg-orange-400 hover:font-extrabold">Home </button></Link> 
               <Link to="newblog"><button  className="  px-[4px] relative top-[30px] h-[50px] border-solid  border-2 border-indigo-600 rounded-md hover:bg-orange-400  hover:font-extrabold ">Newblog</button></Link> 
                <Link to="gallery"><button  className=" px-[4px] relative top-[30px] h-[50px] border-solid  border-2 border-indigo-600 rounded-md  hover:bg-orange-400  hover:font-extrabold ">Gallery</button></Link>    
                 <Link to="newimage"><button  className=" px-[4px] relative top-[30px] h-[50px] border-solid  border-2 border-indigo-600 rounded-md  hover:bg-orange-400  hover:font-extrabold ">NewImage</button></Link>    
            </div>
      </div>
         
        <div>
            <Outlet/>
        </div>


        </div>
        

    )
}

export default Header;
