
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLanding from "./components/ui/CustomerLanding";
import Index from "./pages";
import CarouselPage from "./pages/CarouselPage";
import SliderPage from "./pages/SliderPage";
import Layout from "./components/ui/Layout";
import Button3dPage from "./pages/Button3d";
import ToggleSwitchPage from "./pages/ToggleSwitchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLanding />} />
        <Route path="/components" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="carousel" element={<CarouselPage />} />
          <Route path="slider" element={<SliderPage />} />
          <Route path="button3d" element={<Button3dPage />} />
          <Route path="toggle-switch" element={<ToggleSwitchPage />} />
          {/* Add other component routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

