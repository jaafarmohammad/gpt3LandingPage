import './App.css';
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import {Blog,Features,Footer,Header,Whatgpt3} from "./containers/index";
import Possibility from "./containers/possibility/Possibility";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      </div>

      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
