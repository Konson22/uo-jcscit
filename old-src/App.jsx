import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="md:px-[5%] py-5">
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;