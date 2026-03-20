import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure BrowserRouter is imported
import NavBar from './components/NavBar';
import FirstPage from './components/FirstPage';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import ServicesItems from './components/ServicesItems';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import Opportunities from './components/Opportunities';
import Jobs from './components/Jobs';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className='min-h-screen flex flex-col'>
                <NavBar />
                <ScrollToTop /> {/* Add ScrollToTop here */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<FirstPage />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services-items/:id" element={<ServicesItems />} />
                        <Route path="/services-items" element={<Services />} />
                        <Route path="/programs" element={<Opportunities />} />
                        <Route path="/jobs" element={<Jobs />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;