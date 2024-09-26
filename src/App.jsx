import FeatureSecion from "./components/FeatureSection";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7x1 mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSecion />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>

    </div>
  )
}
export default App;