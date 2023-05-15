import { FaRegComments } from "react-icons/fa";
import { FiBell, FiFile, FiHome, FiPlus, FiUpload, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";


export default function AppbarTop() {
  return (
    <div className="md:h-[4.5rem] h-[4rem] flex items-center justify-between bg-white px-[4%] border-b shadow-sm">
      <div className="flex items-center md:text-4xl font-bold text-red-600">
        <div className="md:h-12 md:w-16 h-10 w-14 mr-2">
        <img className="" src={process.env.PUBLIC_URL+'./images/logo.jpg'} alt="" />
        </div>
        <span>CSCIT-23</span>
      </div>
      <div className="md:block hidden">
        <ul className="flex text-[1.15rem] ont-semibold">
          {links.map(link => (
            <li>
              <NavLink className='block px-4' to={link.path}>{link.text}</NavLink>
            </li>
          ))}
          <li>
            
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="md:flex hidden items-center bg-red-500 text-white rounded-md md:px-4 py-2 md:ml-5">
          <FiUpload className="md:text-[1.3rem] mr-2" />
          <span className="md:block hidden">Upload file</span>
        </button>
        <span className="md:text-3xl text-2xl text-blue-800 rounded-full md:ml-4 ml-2">
          <FiBell />
        </span>
        <span className="md:text-3xl text-2xl text-blue-800 rounded-full md:ml-4 ml-2">
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

export function MoboleNavbar(){
  return(
    <div className="w-full md:hidden flex items-center justify-between bg-white fixed bottom-0 left-0 z-40 px-[5%] py-3">
      <NavLink className="flex flex-col items-center" to='/'>
        <span className="rounded-full text-[1.7rem]">
          <FiHome />
        </span>
        <span className="text-[.7rem]">Home</span>
      </NavLink>
      <NavLink className="flex flex-col items-center" to='/users'>
        <span className="rounded-full text-[1.7rem]">
          <FiUsers />
        </span>
        <span className="text-[.7rem]">Friends</span>
      </NavLink>
      <NavLink className="rounded-full bg-orange-600 text-white text-4xl border-8 border-gray-200 mt-[-2rem] p-2" to='/upload'>
        <FiPlus />
      </NavLink>
      <NavLink className="flex flex-col items-center" to='/files'>
        <span className="rounded-full text-[1.7rem]">
          <FiFile />
        </span>
        <span className="text-[.7rem]">Resource</span>
      </NavLink>
      <NavLink className="flex flex-col items-center" to='/messages'>
        <span className="rounded-full text-[1.7rem]">
          <FaRegComments />
        </span>
        <span className="text-[.7rem]">Chat</span>
      </NavLink>
    </div>
  )
}


const links = [
  {text:'Home', path:'/'},
  {text:'Learning Materials', path:'/files'},
  {text:'Collegues', path:'/users'},
  {text:'Library', path:'/users'},
  {text:'Chats', path:'/users'},
]