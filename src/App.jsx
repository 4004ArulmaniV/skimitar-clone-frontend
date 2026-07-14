import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToHash from "./components/ScrollToHash";
import Loader from "./components/Loader";

// Pages
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ServiceDetails from "./pages/ServiceDetails";
import IndustryDetails from "./pages/IndustryDetails";
import CourseDetails from "./pages/CourseDetails";
import ServicesPage from "./pages/Services";

// Individual Pages
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import TrainingPage from "./pages/TrainingPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Individual Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Service Details */}
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/industries/:id" element={<IndustryDetails />}/>

        {/* Course Details */}
        <Route path="/courses/:id" element={<CourseDetails />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;