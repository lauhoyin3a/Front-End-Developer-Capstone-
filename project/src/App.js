import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import homeLogo from'./icons_assets/Logo.svg';

function App() {
  return (
<>
<Header/>
<meta name="description" content="React Website Project"/>
<meta name="og:title" content="Little Lemon"/>
<meta name="description" content="React Website Project"/>
<meta name="og:image" content={homeLogo}/>
<Nav/>


<Main/>

<Footer/>

</>

  );
}

export default App;
