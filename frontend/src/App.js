import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './components/UIC/Header';
import Home from './components/pages/Home';
import AddExperience from './components/pages/AddExperience';
import ExperienceDetails from './components/pages/ExperienceDetails';


const router = createBrowserRouter([
  {
    path: '/api',
    element: <Home></Home>
  },
  {
    path: '/api/addexperience',
    element: <AddExperience></AddExperience>
  },
  {
    path: '/api/experiencedetails/:id',
    element: <ExperienceDetails></ExperienceDetails>
  }
])

function App() {
  return (
    <div>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
