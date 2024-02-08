import './App.css'
import Router from './config/router';
import Navbar from './views/Navbar';
import Footer from './views/Navbar/footer';
function App() {
 
  return (
    <div>
      <Navbar />
      <Router />
      {/* <Footer />  */}

    </div>
  )
}

export default App;