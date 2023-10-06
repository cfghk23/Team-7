import logo from './logo.svg';
import './App.css';
import  Login  from './Page/Login';
import SideBarForTeacher from './Componnt/SideBarForTeacher'
import SideBarForAdmin from './Componnt/SideBarForAdmin';
function App() {
  return (
    <div className="App">
     <Login></Login>
     {/* <SideBarForAdmin></SideBarForAdmin> */}
     {/* <SideBarForTeacher></SideBarForTeacher> */}
    </div>
  );
}

export default App;
