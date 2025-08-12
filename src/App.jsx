import Fotter from './components/Fotter.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Review from './pages/Review.jsx';
import Work from './pages/Work.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Pricing />
      <Review />
      <Contact />
      <Fotter />
    </>
  );
}

export default App;
