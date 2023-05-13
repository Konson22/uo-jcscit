import { FiDownload } from "react-icons/fi";
import Header from "../../components/Header";


export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="flex md:mx-[4%] mx-2 mt-3">
        <div className="flex-1 bg-white md:mr-6 md:p-4 p-2">
          <h2 className="text-2xl font-bold mb-4">Recntly uploaded Files</h2>
          {filesData.map(file => (
              <div className="md:flex items-centerr bg-gray-50 border rounded mb-3">
                <div className="flex-1 p-2">
                  <p className="text-xl">{file.title}</p>
                  <span className="text-sm">{file.subject}</span>
                </div>
                <a className=" text-orange-600 flex items-center text-sm px-3 py-1" href={process.env.PUBLIC_URL+`./files/${file.path}.pdf`} download >
                  <FiDownload className="text-2xl mr-1" />
                  <span className="md:block hiddenn">Download</span>
                </a>
              </div>
          ))}
        </div>
        <div className="md:block hidden w-[35%]">
          <div className="bg-white rounded mb-6">
            <div className="bg-rose-500 text-white px-3 py-2">
              Events
            </div>
            {[...new Array(5)].map(() => (
              <div className="border p-2 mb-6">
                Dashboard
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


const filesData = [
  {
    title:'Fundamentals of Computer',
    subject:'Computer Science',
    path:'Fundamentals-of-Computer'
  },
  {
    title:'Introduction to Computer Programming Using Java',
    subject:'Philosophy of CS',
    path:'/Introduction-to-Computer-Programming-Using-Java'
  },
  {
    title:'Basic Math Note',
    subject:'Basic Math',
    path:''
  },
  {
    title:'Basic Math Note',
    subject:'Basic Math',
    path:''
  },
]