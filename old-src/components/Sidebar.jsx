import { FaDashcube, FaUsers } from 'react-icons/fa';
import { FiChevronDown, FiFileText, FiMail, FiUser } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <aside className="w-[18%] md:flex hidden flex-col bg-white shadow-sm border-r ">
        <div className="flex items-center justify-between mb-4 border-b-2 px-4 py-3">
            <img 
                className="h-[50px] w-[50px] border-2 border-red-500 rounded-full"
                src={process.env.PUBLIC_URL+'./images/kon.png'}
                alt=''
            />
            <h3 className="flex-1 font-semibold mx-2">Konson Ak</h3>
            <FiChevronDown className='' />
        </div>
        <div className="flex-1 px-5">
            {links.map(link => (
                <div className="flex items-center font-semibold py-3" key={link.text}>
                    <div className="text-3xl mr-3">
                        {link.icon}
                    </div>
                    {link.text}
                </div>
            ))}
        </div>
    </aside>
  )
}


const links = [
    {text:'Dashboard', path:'/', icon:<FaDashcube />},
    {text:'Learning Material', path:'/', icon:<FiFileText />},
    {text:'Colleagues', path:'/', icon:<FaUsers />},
    {text:'Messages', path:'/', icon:<FiMail />},
    {text:'Assignments', path:'/', icon:<FiUser />},
    {text:'Results', path:'/', icon:<FiUser />},
    {text:'Events', path:'/', icon:<FiUser />},
]