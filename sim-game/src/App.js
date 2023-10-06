import logo from './logo.svg';
import './App.css';
import  Login  from './Page/Login';
import SideBarForTeacher from './Componnt/SideBarForTeacher'
import SideBarForAdmin from './Componnt/SideBarForAdmin';
import {Dashboard} from './Page/Dashboard';
import { AdminBoard } from './Page/AdminBoard';

function App() {
  return (
    <div className="App">
     {/* <Login></Login> */}
     <AdminBoard></AdminBoard>
     {/* <Dashboard></Dashboard> */}
     {/* <SideBarForAdmin></SideBarForAdmin> */}
     {/* <SideBarForTeacher></SideBarForTeacher> */}
    </div>
  );
}

export default App;
