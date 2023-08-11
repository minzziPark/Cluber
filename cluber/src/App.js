import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import IntroClub from "./component/IntroClub";
import Recruiting from "./component/Recruiting";
import Footer from "./component/Footer";
import Rogin from "./component/Rogin";
import style from "./css/App.module.css";
import Write_Recruiting from "./component/WriteRecruiting";

function App() {
  return (
    <BrowserRouter>
      <div className={`${style.app}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introclub" element={<IntroClub />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/login_page" element={<Rogin />} />
          <Route path="/write_recruiting" element={<Write_Recruiting />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
