import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import MainSection from "@/components/MainSection";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Banner />
      <Stats />
      <MainSection />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
