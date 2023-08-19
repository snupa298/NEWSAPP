import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Details from './components/Details';
import Header from './components/Header';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
//import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/news/:id" element={<Details />} />
{/* <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} /> */}
</Routes>

</BrowserRouter>   
 </div>
  );
}

export default App;
