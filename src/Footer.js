import restaurantFood from './assets/restauranfood.jpg'
function Footer() {

    return <footer>
        <img src={restaurantFood} alt="example of the food from the restaurant Little Lemon"/>
        <div>
            <h3>Navigation</h3>
            <ul>
                <a href="/#"><li>Home</li></a>
                <a href="/#"><li>About</li></a>
                <a href="/#"><li>Menu</li></a>
                <a href="/#"><li>Reservations</li></a>
                <a href="/#"><li>Order Online</li></a>
                <a href="/#"><li>Login</li></a>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
                <a href="/#"><li>Facebook</li></a>
                <a href="/#"><li>Instagram</li></a>
                <a href="/#"><li>Twitter</li></a>
            </ul>
        </div>
    </footer>

}

export default Footer;