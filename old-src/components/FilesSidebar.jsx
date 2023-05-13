import { FiDownload } from "react-icons/fi";

export default function FilesSidebar() {
  return (
    <div className="bg-white mb-6">
        <div className="bg-rose-500 text-white rounded-t-md px-3 py-2">
            TEst Programming.
        </div>
        {[...new Array(8)].map(file => (
            <div className="flex border px-4 py-2">
                <div className="flex-1">
                    Semister one results are out
                </div>
                <button className="bg-orange-500 text-white rounded flex items-center px-4">
                    <FiDownload />
                </button>
            </div>
        ))}
    </div>
  )
}
