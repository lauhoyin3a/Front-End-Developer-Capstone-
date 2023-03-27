import './App.css';
import Header from './Header';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Footer from './Footer';
import homeLogo from'./icons_assets/Logo.svg';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
<Header/>
<meta name="description" content="React Website Project"/>
<meta name="og:title" content="Little Lemon"/>
<meta name="description" content="React Website Project"/>
<meta name="og:image" content={homeLogo}/>


<main>
<Routes> 
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/BookingPage" element={<BookingPage/>}></Route>
</Routes>
</main>

<Footer/>

</>

  );
}

export default App;
