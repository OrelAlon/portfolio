import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SideBar />
    </div>
  );
}

export default App;

// npm start
