
import Files from "../components/Files"


export default function Dashboard() {

    return (
    <div className="flex">
        <div className="flex-1">
            <Files />
        </div>
        <FilesSidebar />
    </div>
  )
}

function FilesSidebar(){
    return(
        <div className="w-[35%] md:block hidden">
          <div className="w-full bg-white mb-6">
            <div className="bg-rose-500 text-white rounded-t-md px-3 py-2">
              TEst Programming.
            </div>
            <div className="p-3">
              <p>
                payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,
              </p>
              <div className="flex mt-3">
                <span className="bg-rose-500 text-white rounded-xl px-5 py-1">Programming</span>
                <span className="bg-rose-500 text-white rounded-xl px-5 py-1 ml-2">Hosting</span>
                </div>
            </div>
          </div>
          <div className="w-full bg-white mb-5">
            <div className="bg-orange-600 text-white rounded-t-md px-3 py-2">
              Events
            </div>
            <div className="p-3">
              {[...new Array(5)].map(event => (
                <div className="flex items-center mt-3">
                  <div className="flex-1">
                    <p className="font-semibold"> They are used for the reservation</p>
                    <span className="text-sm text-gray-500">Tues 05-02-2023</span>
                  </div>
                  <span className="bg-orange-600 text-white rounded-md px-4 text-sm py-[0.18rem] ml-2">Join</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="bg-sky-700 text-white rounded-t-md px-3 py-2">
              Test Programming.
            </div>
            <div className="p-3">
              <p>
                payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,
              </p>
              <div className="flex mt-3">
                <span className="bg-rose-500 text-white rounded-xl px-5 py-1">Programming</span>
                <span className="bg-rose-500 text-white rounded-xl px-5 py-1 ml-2">Hosting</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
  


// const posts = [
//     {
//         title:'Semister one results are out',
//         text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,`,
//         image:process.env.PUBLIC_URL+'./images/team.jpeg'
//     },
//     {
//         title:'Semister one results are out',
//         text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,`,
//         image:null
//     },
//     {
//         title:'Semister one results are out',
//         text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,`,
//         image:null
//     },
//     {
//         title:'Semister one results are out',
//         text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,`,
//         image:null
//     },
// ]