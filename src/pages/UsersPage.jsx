import { FaRegCommentAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useChildren } from "../contexts/ChildrenContextProvider";


export default function UsersPage() {
    const { loading, childrenData } = useChildren()
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
            {!loading && childrenData.map(user => (
                <div className="border-b md:bg-transparent bg-gray-100 flex items-center mb-1 px-2 py-2">
                    <img 
                        className="h-[50px] w-[50px] rounded-full bg-sky-600" 
                        src={user.avatar_url
                        } 
                        alt=''
                    />
                    <div className="flex-1 ml-3">
                        <h3 className="font-semibold m-0">{user.login}</h3>
                        <h4 className="text-sm m-0 text-gray-500">IT</h4>
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
