import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import IPTVPackages from './IPTVPackages';
import Home from './Home';
import Contact from './Contact';

const IPTVRouter = () => {
    return (
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/IPTV/" element={<Home />} />
              <Route path="/packages/IPTV" element={<IPTVPackages />} />
              <Route path="/contact/IPTV" element={<Contact />} />
            </Routes>
          </div>
          
        </div>
      </Router>
    );
  };
  
  export default IPTVRouter;