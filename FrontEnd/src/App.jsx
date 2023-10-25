import "./App.css";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Details from "./Components/Details";
import Connections from "./Components/Connections";
import Display_and_Brightness from "./Components/Display_and_Brightness";
import Sound_and_Vibrations from "./Components/Sound_and_Vibrations";
import Settings from "./Components/Settings";
import AboutPhone from "./Components/AboutPhone";




function App() {
  return (
    <div className="bg-black h-fit w-full">
     <Router >
      <Routes>
      <Route exact path="/" element={<Settings/>} /> 
      <Route exact path="/Details" element={<Details/>} /> 
      <Route exact path="/Components/Connections" element={<Connections/>} /> 
      <Route exact path="/Components/Sound_and_Vibrations" element={<Sound_and_Vibrations/>} /> 
      <Route exact path="/Components/Display_and_Brightness" element={<Display_and_Brightness/>} /> 
      <Route exact path="/Components/AboutPhone" element={<AboutPhone/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
