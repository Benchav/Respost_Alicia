import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProcessDiagnostic from "@/components/ProcessDiagnostic";
import StatisticalControl from "@/components/StatisticalControl";
import StandardProcedure from "@/components/StandardProcedure";
import FinancialAnalysis from "@/components/FinancialAnalysis";
import Improvement from "@/components/Improvement";
import Gallery from "@/components/Gallery";
import ModelViewer3D from "@/components/ModelViewer3D";
import Results from "@/components/Results";
//import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProcessDiagnostic />
        <StatisticalControl />
        <StandardProcedure />
        <FinancialAnalysis />
        <Improvement />
        <Gallery />
        <ModelViewer3D />
        <Results />
      {/*  <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
