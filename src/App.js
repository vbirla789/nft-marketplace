import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { biddata, nftData } from "./data/data";

function App() {
  return (
    <div className="button md:min-h-[300vh] lg:min-h-[250vh] min-h-[250vh] md:w-[450px]">
      <Navbar />
      <Sidebar />
      <Hero biddata={biddata} />
      <Products nftData={nftData} ifExists={false} />
      <Products nftData={nftData} ifExists={true} />
    </div>
  );
}

export default App;
