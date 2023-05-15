import { Link } from "react-router-dom"
import { FiFileText, FiImage, FiVideo } from "react-icons/fi"
import { FaFile, FaNewspaper, FaUpload } from "react-icons/fa"

export default function Header() {

    const bgImage = process.env.PUBLIC_URL+'./images/pexels-athena-2582937.jpg'

  return (
    <header className="md:h-[37vh] h-auto flex items-center bg-sky-700 text-white md:px-[5%] px-4 py-[2.5rem]"
        style={{
            backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
    >
        <div className="md:w-[75%]">
            <h1 className="md:text-6xl text-4xl font-bold md:mb-2">Univeristy of Juba</h1>
            <h1 className="md:text-3xl text-2xl md:font-bold">Computer Science Cysber Security Information & Technology</h1>
        </div>
    </header>
  )
}

  
{/* <div className="flex items-center justify-between bg-gray-50 rounded md:px-[5%] px-3 py-2 md:m-0 m-2">
<div className="md:w-auto w-full grid md:grid-flow-col grid-cols-3 md:gap-2 gap-4 py-4">
    {links.map(link => (
        <Link className="flex md:flex-row flex-col items-center w-full font-semibold" to={link.path}>
            <span className="block md:text-2xl text-2xl text-orange-600 md:bg-transparent bg-gray-200 rounded-full p-3 md:mr-2">
                {link.icon}
            </span>
            {link.text}
        </Link>
    ))}
</div>
<button className="md:flex hidden items-center px-3 py-1 bg-orange-600 text-white rounded">
    <FaUpload className="mr-2" />
    Uplaod Resource
</button>
</div> */}

const links = [
    {text:'News', path:'/files', icon:<FaNewspaper />},
    {text:'Files', path:'/files', icon:<FiFileText />},
    {text:'Tutorials', path:'/files', icon:<FiVideo />},
    {text:'Images', path:'/files', icon:<FiImage />},
    {text:'Projects', path:'/files', icon:<FaFile />},
    {text:'Projects', path:'/files', icon:<FaFile />},
]
