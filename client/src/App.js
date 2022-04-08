import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import AutoPage from './components/Pages/AutoPage/AutoPage';
import NewsPage from './components/Pages/NewsPage/NewsPage';
import FinancePage from './components/Pages/FinancePage/FinancePage';
import AboutUsPage from './components/Pages/AboutUsPage/AboutUsPage';
import TiresPage from './components/Pages/TiresPage/TiresPage';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/auto/*" element={<AutoPage />} />
          <Route path="/tires" element={<TiresPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
