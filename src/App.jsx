 import HomePage from './pages/HomePage'
 import BODProfilePage from './pages/BODProfilePage'
  import ContactUS from './pages/ContactUS'
  import JobPage from './pages/JobPage'
  import PressRealeasesPage from './pages/PressRealeasesPage'
  import Navbar from "./components/Navbar"
  import   {Route , Routes} from "react-router-dom"
  import Footer from './components/Footer'

 import './App.css'

function App() {
 

  return (
    <>
                   
                
               
             
         


     <Navbar/>
     
     <Routes>

      <Route path="/" element={ <HomePage/> } /> 

      <Route path="/about" element={  <BODProfilePage/> } /> 

      <Route path="/contact" element={ <ContactUS/> } /> 

      <Route path="/jobsSection" element={<JobPage/>} /> 

      <Route path="/pressReleases" element={<PressRealeasesPage/>} /> 

      
 



      </Routes>
        
     <Footer/>





    </>
  )
}

export default App
