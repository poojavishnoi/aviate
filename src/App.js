import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Blockchain from './pages/Blockchain';
import Bitcoin from './pages/Bitcoin';
import Footer from './components/Footer';
import { Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/bitcoin" element={<Bitcoin/>}/>
      <Route path="/blockchain" element={<Blockchain/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
