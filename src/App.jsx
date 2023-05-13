import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='app-wraper bg-gray-200'>
      <Appbar />
      <div className="app-content flex">
        <Sidebar />
        <div className="h-full overflow-y-scroll">
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;