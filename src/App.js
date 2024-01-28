import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from './pages/Project'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Home from "./pages/Home";
import projects from "./data";

export default function App() {
  return (
    <div className="w-full min-h-screen  bg-[#67b1bf]  ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project projects={projects}/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}