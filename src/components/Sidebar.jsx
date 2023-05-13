import { FaUserTie } from 'react-icons/fa'
import { FiMail, FiSearch, FiUsers } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <div className="h-full w-[28%] md:flex hidden flex-col bg-white">
        <div className="flex items-center justify-between p-8">
            <div className="">
                <span className="h-[40px] w-[40px] flex items-center justify-center rounded-full text-xl bg-gray-200 mx-auto my-0">
                    <FiUsers />
                </span>
                <span className="text-[.7rem]">Colleges</span>
            </div>
            <div className="">
                <span className="h-[40px] w-[40px] flex items-center justify-center rounded-full text-xl bg-gray-200 mx-auto my-0">
                    <FiMail />
                </span>
                <span className="text-[.7rem]">Colleges</span>
            </div>
            <div className="">
                <span className="h-[40px] w-[40px] flex items-center justify-center rounded-full text-xl bg-gray-200 mx-auto my-0">
                    <FaUserTie />
                </span>
                <span className="text-[.7rem]">Lecturers</span>
            </div>
        </div>
        <div className="h-[2.6rem] flex items-center bg-gray-200 mx-3 rounded-md my-3">
            <input className='w-full bg-transparent' type="search" />
            <button className="px-3">
                <FiSearch />
            </button>
        </div>
        <div className="px-8 mb-8">
            <h2 className="text-xl font-bold">Friends</h2>
        </div>
        <div className="flex-1 overflow-y-scroll bg-green-2000 px-8">
            <div className="mt-4">
                {[...new Array(10)].map(() => (
                    <div className="flex items-center mb-3">
                        <img 
                            className="h-[45px] w-[45px] rounded-full bg-sky-600" 
                            src={process.env.PUBLIC_URL+'./images/kon.png'} 
                            alt=''
                        />
                        <div className="flex-1 ml-3">
                            <h3 className="font-semibold m-0">Kon Akech</h3>
                            <h4 className="text-sm m-0">IT</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
