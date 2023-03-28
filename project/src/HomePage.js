import restaurantfood from './icons_assets/restauranfood.jpg'
import greek from './icons_assets/greek salad.jpg'
import bruchetta from './icons_assets/bruchetta.svg'
import lemonDessert from './icons_assets/lemon dessert.jpg'
function HomePage(){

    return (
        
        <main>
          

            <section className="section1">
            <div className="description">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <a href="/BookingPage">
            <button >Reserve a table</button>
            </a>
            </div>
            <img src={restaurantfood} alt="restaurant food"/>
            </section>
         <section className="section2">
        <div className="bar">
            <h1>
                This weeks specials!
            </h1>
            <a href="/menu">
                <button>Online Menu</button>
            </a>
        </div>
        <div className='container'>
        <div className="column">
            <img src={greek} alt="greek salad"/>
            <div className="text">
            <h5>Greek salad</h5>
            <p>The famous greek salad of crispy lettuce, peppers</p>
            <p>Order a delivery</p>
            </div>
            </div>
  <div className="column">          
   <img src={bruchetta} alt="bruchetta"/>
   <div className="text">
            <h5>Bruchetta</h5>
            <p>Our Bruschetta is made from grilled bread</p>
            <p>Order a delivery</p>
            </div>
            </div>
  <div className="column"> 
  <img src={lemonDessert} alt="Lemon Dessert"/>
  <div className="text">
            <h5>Lemon Dessert </h5>
            <p>Yummy Lemon Dessert in little lemon restaurant</p>
            <p>Order a delivery</p>
            </div>
            </div>
        </div>
         </section>
        </main>

    )
 }

 export default HomePage;