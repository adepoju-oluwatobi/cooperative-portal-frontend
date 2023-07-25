import Footer from './components/Footer'
import axios from 'axios';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>
    <Header />
    <HomePage />
    <Footer />
   </div>
  )
}

export default App
