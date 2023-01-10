import "./styles.css";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./components/MainRoutes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
      ,
    </div>
  );
}
