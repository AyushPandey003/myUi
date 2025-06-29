
import CircularCarousel from "./components/ui/3DCarousel/circularCarouselcopy";
import CustomerLanding from "./components/ui/CustomerLanding";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLanding />} />
        <Route path="/carousel" element={<CircularCarousel/>} />
      </Routes>
    </Router>
  );
}

export default App;