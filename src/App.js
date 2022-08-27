import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import CartItems from "./components/cart/CartItems";
import { useSelector } from "react-redux";
import WishListItems from "./components/wishlist/WishListItems";

function App() {
    const showCart = useSelector((state) => state.cart.showCart);
    const showWishList = useSelector((state) => state.wishlist.showWishList);

    return (
        <div className="container">
            <Header />
            {showWishList && <WishListItems />}
            {showCart && <CartItems />}
            <main className="content-container">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
