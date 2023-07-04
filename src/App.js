import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { biddata, nftData } from "./data/data";

function App() {
  return (
    <div className="button min-h-[200vh]">
      <Navbar />
      <Sidebar />
      <Hero biddata={biddata} />
      <Products nftData={nftData} ifExists={false} />
      <Products nftData={nftData} ifExists={true} />
    </div>
  );
}

export default App;
