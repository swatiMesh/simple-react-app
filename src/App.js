import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookList from "./components/Book";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tour />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tours" element={<Tours />} />
          </Routes>
          <Footer />
        </Router>

      </div>
    </div>
  );
}

export default App;
