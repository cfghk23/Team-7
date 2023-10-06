import logo from './logo.svg';
import './App.css';
import  Login  from './Page/Login';
import SideBarForTeacher from './Componnt/SideBarForTeacher'
import SideBarForAdmin from './Componnt/SideBarForAdmin';
import {Dashboard} from './Page/Dashboard';
import { AdminBoard } from './Page/AdminBoard';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className='App'>
      {/* <AdminBoard></AdminBoard> */}
      <Helmet>
        <script src='https://cdn.botpress.cloud/webchat/v1/inject.js'></script>
        <script
          src='https://mediafiles.botpress.cloud/aafd4b19-1d27-4edd-9cae-af885f74a710/webchat/config.js'
          defer
        ></script>
      </Helmet>
      {/* <Login></Login>   for login page*/}
      {/* <AdminBoard></AdminBoard>   for admin page*/}
      <Dashboard></Dashboard> 
    </div>
  )
}

export default App;
