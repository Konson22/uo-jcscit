import { FiDownload } from "react-icons/fi";


export default function Files() {
  return (
    <div className="flex-1 bg-white p-6 md:mr-5">
        <h2 className="text-2xl font-bold mb-4">Recntly uploaded</h2>
        <div className="">
            {[...new Array(8)].map(file => (
                <div className="flex items-centerr bg-gray-50 border rounded mb-3">
                    <div className="flex-1 p-2">
                        <p className="text-xl">
                            Semister one results are out
                        </p>
                        <span className="text-sm">Basic Math</span>
                    </div>
                    <button className=" text-orange-600 flex items-center text-sm px-3 py-1">
                        <FiDownload className="text-2xl mr-1" />
                        <span className="md:block hidden">Download</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
