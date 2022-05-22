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
import RegistrationPage from './components/Pages/RegistrationPage/Registration';
import { authorization, registration } from './actions/User';
import AdPage from './components/Pages/AdPage/AdPage';



const App = (props) => {
  
  return (
    <Router>
      <div className="App">
        <Header  newsData={props.newsData} />
        <Routes>
          <Route path="/auto/*" element={<AutoPage />} />
          <Route path="/tires" element={<TiresPage />} />
          <Route path="/news" element={<NewsPage  arrayNews={props.arrayNews}/>} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/registration" element={<RegistrationPage actionName="Зарегистрироваться" functionSubmit={registration} />} />
          <Route path="/authorization" element={<RegistrationPage actionName="Войти" functionSubmit={authorization} />} />
          <Route path="/ad" element={<AdPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
