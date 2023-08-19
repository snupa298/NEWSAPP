import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './components/Details';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
//import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/news/:id" element={<Details />} />
<Route path="/login" element={<SignInPage />} />
<Route path="/register" element={<SignUp />} />
</Routes>

</BrowserRouter>   
 </div>
  );
}

export default App;
