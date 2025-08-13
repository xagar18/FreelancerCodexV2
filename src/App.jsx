import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Fotter from './components/Fotter.jsx';
import Navbar from './components/Navbar.jsx';
import Admin from './pages/Admin.jsx'; // Add this import
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Review from './pages/Review.jsx';
import Work from './pages/Work.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website route - all your existing components */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Work />
              <Pricing />
              <Review />
              <Contact />
              <Fotter />
            </>
          }
        />

        {/* Admin route - only Admin component */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
