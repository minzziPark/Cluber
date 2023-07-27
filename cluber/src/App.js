import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import IntroClub from "./component/IntroClub";
import Recruiting from "./component/Recruiting";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introclub" element={<IntroClub />} />
          <Route path="/recruiting" element={<Recruiting />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
