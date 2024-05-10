import './App.css'
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Neck from "./Component/Neck/Neck";
import Clothes from "./Component/Clothes/Clothes";
import Footer from "./Component/Footer/Footer";



function App() {
 return (
  <div className='container'>
  <Navbar/>
  <Header/>
  <Neck/>
  <Clothes/>
  <Footer/>
  </div>
 )
}

export default App
