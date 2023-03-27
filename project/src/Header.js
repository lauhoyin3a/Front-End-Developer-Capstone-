import homeLogo from './icons_assets/Logo.svg'
import Nav from './Nav';
function Header(){

    return (
        <header>

<img src={homeLogo} alt="home logo"/> 
<Nav/>
        </header>

    )
 }

 export default Header;