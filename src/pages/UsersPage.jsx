import { FaRegCommentAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


export default function UsersPage() {
  return (
    <div className="md:m-4 m-2">
        <div className="h-[3rem] flex items-center md:bg-gray-100 bg-white rounded-md my-3">
            <input className='w-full bg-transparent' type="search" />
            <button className="px-3">
                <FiSearch />
            </button>
        </div>
        <div className="bg-whitee rounded-md md:p-0 px- py-2">
            <h3 className="text-2xl m-2">Your Colleges</h3>
            {[...new Array(10)].map(() => (
                <div className="border-b md:bg-transparent bg-gray-100 flex items-center mb-1 px-2 py-2">
                    <img 
                        className="h-[50px] w-[50px] rounded-full bg-sky-600" 
                        src={process.env.PUBLIC_URL+'./images/kon.png'} 
                        alt=''
                    />
                    <div className="flex-1 ml-3">
                        <h3 className="ffont-semibold m-0">Kon Akech</h3>
                        <h4 className="text-sm m-0">Dept: IT</h4>
                    </div>
                    <button className="">
                        <FaRegCommentAlt />
                    </button>
                </div>
            ))}
        </div> 
    </div>
  )
}
