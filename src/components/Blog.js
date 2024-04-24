
const Blog=({blog})=>{
    return(
        <div className=" col-span-3 my-12  rounded overflow-hidden shadow-lg bg-blue-100 border border-gray-300 hover:shadow-2xl transform hover:scale-105 transition duration-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog?.title}</div>
          <p className="text-gray-700 text-base">{blog?.author}</p>
          <p className="text-gray-700 text-base">{blog?.date}</p>
          <p className="text-gray-700 text-base">{blog?.content}</p>

        </div>
        <div className="px-6 py-4">
          {blog?.tags.map((tag, index) => (
            <span key={index} className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
}

export default Blog