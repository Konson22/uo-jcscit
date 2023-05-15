import { FiChevronDown, FiDownload } from "react-icons/fi";
import { filesData } from "./dashboard";
import { FaFilePdf } from "react-icons/fa";


export default function Files() {
  return (
    <>
    <div className="md:flex border-b border-white hidden md:px-[2%] px-2 py-4">
        {categories.map(category => (
            <span className="px-3 py-2 bg-white rounded mr-3">{category}</span>
        ))}
    </div>
    <div className="md:mx-[2%] mx-2 mt-4">
        <div className="flex items-center justify-between my-6">
            <h2 className="md:text-xl font-bold">All Handouts (25)</h2>
            <div className="h-[2.4rem] md:hidden flex items-center px-3 bg-white rounded mr-2">
                Subjects
                <FiChevronDown />
            </div>
        </div>
        <div className="md:bg-whitee bg-transparent md:p-6000 p-0">
            {filesData.map(file => (
                <div className="flex bg-gray-100 border rounded-md mb-3">
                    <div className="flex items-center flex-1 px-3 py-2">
                        <span className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full md:text-2xl text-xl p-1">
                            <FaFilePdf />
                        </span>
                        <p className="flex-1 ml-3">{file.title}</p>
                    </div>
                    <a className="bg-orange-600 text-white flex items-center text-sm px-1 py-1" href={process.env.PUBLIC_URL+`./files/${file.path}.pdf`} download >
                        <FiDownload className="text-xl mr-1" />
                        <span className="md:block hidden">Download</span>
                    </a>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}


const categories = [
    'All files',
    'Computer Science',
    'Philosophy of CS',
    'Basic Math',
    'Biology',
    'Chemistry',
    'Physics',
    'Arabic',
    'Frensh'
]