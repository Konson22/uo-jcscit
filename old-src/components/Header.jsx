import { Link } from "react-router-dom"
import { FiFileText, FiImage, FiVideo } from "react-icons/fi"
import { FaFile, FaNewspaper, FaUpload } from "react-icons/fa"

export default function Header() {

    const bgImage = process.env.PUBLIC_URL+'./images/team2.jpg'

  return (
    <header className="">
        <div className="md:h-[35vh] h-auto flex items-center bg-sky-700 text-white px-[8%] py-[4rem]"
            style={{
                backgroundImage:`linear-gradient(rgba(40, 40, 160, 0.4), rgba(40, 40, 160, 0.4)), url(${bgImage})`,
                backgroundSize:'cover',
                backgroundPosition:'top'
            }}
        >
            <h1 className="md:text-5xl text-2xl font-bold flex-1">Computer Science Cysber Security Information & Technology</h1>
        </div>
        <div className="flex items-center justify-between bg-gray-50 md:px-[5%] px-3">
            <div className="md:w-auto w-full grid md:grid-flow-col grid-cols-3 md:gap-2 gap-4 border-y-2 py-4">
                {links.map(link => (
                    <Link className="flex md:flex-row flex-col items-center w-full font-semibold" to={link.path}>
                        <span className="block md:text-2xl text-3xl md:bg-transparent bg-gray-200 md:p-0 p-3 rounded-full md:mr-2">
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
        </div>
    </header>
  )
}


const links = [
    {text:'News', path:'/files', icon:<FaNewspaper />},
    {text:'Files', path:'/files', icon:<FiFileText />},
    {text:'Tutorials', path:'/files', icon:<FiVideo />},
    {text:'Images', path:'/files', icon:<FiImage />},
    {text:'Projects', path:'/files', icon:<FaFile />},
    {text:'Projects', path:'/files', icon:<FaFile />},
]
