import { FiBell, FiSearch, FiUpload } from "react-icons/fi";


export default function Appbar() {
  return (
    <div className="md:h-[4.5rem] h-[4rem] flex items-center justify-between bg-white px-[4%] border-b shadow-sm">
      <div className="flex items-center md:text-4xl font-bold text-red-600">
        <div className="md:h-12 md:w-16 h-10 w-14 mr-2">
        <img className="" src={process.env.PUBLIC_URL+'./images/logo.jpg'} alt="" />
        </div>
        <span>CSCIT-23</span>
      </div>
      <div className="md:flex hidden flex-1 h-[2.5rem] flex- bg-gray-100 rounded-md overflow-hidden ml-[2%]">
        <input 
          className="h-full bg-transparent w-full focus:outline-none px-3" 
          type="search"
          placeholder="Search file by Subject, year"
        />
        <button className="flex items-center text-xl px-5 bg-red-500 text-white">
          <FiSearch className="mr-2" />
          Find
        </button>
      </div>
      <button className="md:flex hidden items-center bg-red-500 text-white rounded-md md:px-4 py-2 md:mx-[2%]">
        <FiUpload className="md:text-2xl mr-2" />
        <span className="md:block hidden">Upload file</span>
      </button>
      <div className="flex items-center">
        <span className="md:text-2xl bg-gray-200 p-2 rounded-full md:ml-4 ml-2">
          <FiBell />
        </span>
        <span className="md:text-2xl bg-gray-200 p-2 rounded-full md:ml-4 ml-2">
          <FiBell />
        </span>
        <span className="flex items-center font-semibol md:ml-4 ml-2">
          <img 
            className="md:h-[35px] h-[30px] w-[30px] md:w-[35px] rounded-full bg-sky-600 mr-2" 
            src={process.env.PUBLIC_URL+'./images/kon.png'} 
            alt=''
          />
          <span className="md:block hidden">Konson</span>
        </span>
      </div>
    </div>
  )
}
