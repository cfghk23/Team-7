import './App.css';
import StudentMainPage from './StudentMainPage';
import StudentNavBar from './StudentNavBar';
import GroceryGame from './components/miniGame/GroceryGame'
import Bank from './components/bank/Bank'
import {createBrowserRouter, RouterProvider, BrowserRouter} from 'react-router-dom'




function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentMainPage/>,
  },
  {
    path: "/GroceryGame",
    element: <GroceryGame/>,
  },
  {
    path: "/StdentNavbar",
    element: <StudentNavBar/>,
  },
  {
    path: "/Bank",
    element: <Bank/>,
  }
]);

  return (
    <>
    <StudentNavBar/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
