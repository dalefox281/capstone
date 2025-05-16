import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage';
import About from './Components/About';
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path='/order-online' element={<OrderOnline />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
      <Footer/>
    </>
  );
};

export default App;
