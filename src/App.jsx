import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import AppbarTop, { MoboleNavbar } from './components/Appbar';
import Files from './pages/Files';
import MessagesPage from './pages/Messages';
import UsersPage from './pages/UsersPage';
import UploadFiles from './pages/forms/UploadFiles';


function App() {
  return (
    <div className='app-wraper bg-gray-200'>
      <AppbarTop />
      <div className="app-content flex">
        <div className="h-full md:block hidden overflow-y-scroll w-[25%] md:bg-white bg-transparent">
          <UsersPage />
        </div>
        <div className="h-full flex-1 overflow-y-scroll">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/files' element={<Files />} />
            <Route path='/messages' element={<MessagesPage />} />
            <Route path='/upload' element={<UploadFiles />} />
            <Route path='/users' element={<UsersPage />} />
          </Routes>
        </div>
      </div>
      <MoboleNavbar />
    </div>
  );
}



export default App;