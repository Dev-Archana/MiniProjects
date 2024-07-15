
import './App.css';
import Navbar from './customer/components/Navigation/Navbar';
import MainCarousel from './customer/components/HomeCarousel/MainCarousel'
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainCarousel />
    </div>
  );
}

export default App;
