

export default function Dashboard() {

  const bgImage = process.env.PUBLIC_URL+'./images/technology-785742_1280.jpg'

  return (
    <>
      <header className="md:h-[33vh] h-auto flex items-center bg-sky-700 text-white md:px-[5%] px-4 py-[2.5rem]"
        style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${bgImage})`,
          backgroundSize:'cover',
          backgroundPosition:'bottom'
        }}
      >
        <div className="md:w-[75%]">
          <h1 className="md:text-6xl text-4xl font-bold md:mb-2">Univeristy of Juba</h1>
          <h1 className="md:text-3xl text-2xl md:font-bold">Computer Science Cysber Security Information & Technology</h1>
        </div>
      </header>
      {/* START ON SECONDARY NAVBAR */}
      {/* <div className="flex items-center justify-between md:px-[5%] md:m-0 rounded-md m-2 md:py-3 py-7 bg-white">
        <div className="md:w-auto w-full grid md:grid-flow-col grid-cols-3 md:gap-2 gap-4">
          {links.map(link => (
            <Link className="flex md:flex-row flex-col items-center w-full font-semibold md:mr-3" to={link.path}>
              <span className="block md:text-2xl text-2xl text-orange-600 md:bg-transparent bg-gray-200 rounded-full md:mr-2 md:p-0 p-3">
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
      {/* START ON SCONDARY NAVBAR */}
      <div className="md:mx-[2%] mx-2 mt-3">
        <h2 className="text-2xl font-bold">News & Update</h2>
        <div className="flex mt-3">
          <div className="flex-1 bg-whitee md:mr-5">
            {posts.map(post => (
              <div className="bg-gray-100 p-2 mb-4">
                {post.image && <img className="md:h-[280px] h-[200px]" src={post.image} alt="" />}
                <div className="md:p-3 p-2">
                  <h3 className="md:text-xl font-semibold md:mb-2 mb-1">{post.title}</h3>
                  <p className="md:text-base text-sm">{post.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:block hidden w-[30%]">
            <div className="bg-white rounded mb-6">
              <div className="bg-orange-500 text-white px-3 py-2">
                Events
              </div>
              <div className="p-3">
                <p>
                  Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone
                </p>
                <div className="flex items-center mt-3">
                  <button className="bg-orange-600 text-white rounded-md px-3 py-1">Join us</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded mb-6">
              <img className="h-[170px]" src={process.env.PUBLIC_URL+'./images/pexels-pixabay-270348.jpg'} alt="" />
              <div className="p-2">
                <p>
                  Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const posts = [
  {
      title:'Semister one results are out',
      text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone`,
      image:process.env.PUBLIC_URL+'./images/team.jpeg'
  },
  {
      title:'Semister one results are out',
      text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways,`,
      image:null
  },
  {
      title:'Semister one results are out',
      text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills`,
      image:process.env.PUBLIC_URL+'./images/team2.jpg'
  },
  {
      title:'Semister one results are out',
      text:` Nowadays, computers are an integral part of our lives. They are used for the reservation of tickets for airplanes and railways, payment of telephone and electricity bills, deposit and withdrawal of money from banks, processing of business data, forecasting of weather conditions,`,
      image:null
  },
]

// const links = [
//   {text:'News', path:'/files', icon:<FaNewspaper />},
//   {text:'Files', path:'/files', icon:<FiFileText />},
//   {text:'Tutorials', path:'/files', icon:<FiVideo />},
//   {text:'Images', path:'/files', icon:<FiImage />},
//   {text:'Projects', path:'/files', icon:<FaFile />},
//   {text:'Projects', path:'/files', icon:<FaFile />},
// ]

export const filesData = [
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