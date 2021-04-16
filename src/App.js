import Articles from "./components/Article";
import HeroSection from "./components/HeroSection";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <HeroSection />
      <Articles />
    </>
  );
}

export default App;
