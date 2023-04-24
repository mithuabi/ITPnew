import './App.css';

import Addrepair from './componenets/Addrepair';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        {/*<NavBar />*/}
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route exat path="/add" element={<Addrepair />}></Route>
          {/* <Route exact path="/about" element={<About />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}


export default App