import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="container">
            <Header />
            <main className="content-container">
                {" "}
                <Outlet />
            </main>
        </div>
    );
}

export default App;
