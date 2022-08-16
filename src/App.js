import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="container">
            <Header />
            <div className="content-container">
                {" "}
                <Outlet />
            </div>
        </div>
    );
}

export default App;
