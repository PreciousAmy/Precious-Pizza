
import {BrowserRouter as Router} from "react-router-dom"
import { GlobalStyle } from "./Components/GlobalStyle";
import Navcar from "./Components/Navthings/Indexx";
import Hero from "./Components/Hero/Indep";
import Products from "./Components/Products/Icdex";
import { ProductData } from "./Components/Products/Data";
import Feature from "./Components/Feature/Index";

function App() {
  return (
    <Router>
        <GlobalStyle />
      
        <Hero />
        <Products  heading='choose your favourite' data={ProductData}  />
        <Feature />
      
     
    </Router>
  );
}

export default App;
