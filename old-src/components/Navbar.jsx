import { FiSearch, FiUpload } from "react-icons/fi";


export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-[4%] py-4 border-b shadow-sm">
        <div className="flex items-center md:text-4xl font-bold text-red-600">
            <img className="md:h-12 md:w-16 h-10 w-10" src={process.env.PUBLIC_URL+'./images/logo.jpg'} alt="" />
            CSCIT-23
        </div>
        <div className="md:flex hidden h-[3rem] w-[60%] bg-gray-100 rounded-[1.5rem] overflow-hidden">
            <input 
                className="h-full bg-transparent w-full focus:outline-none px-3" 
                type="search"
                placeholder="Search file by Subject, year"
            />
            <button className="flex items-center text-xl px-5 bg-red-600 text-white">
                <FiSearch className="mr-2" />
                Find
            </button>
        </div>
        <button className="flex items-center bg-red-500 text-white rounded-md px-4 py-2">
            <FiUpload className="text-2xl mr-2" />
            Upload file
        </button>
    </div>
  )
}
