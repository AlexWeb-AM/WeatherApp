import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherPage from "./Pages/WeatherPage";
import Header from "./components/Header";

function App() {

  const [theme, setTheme] = useState(true);

  document.body.style.backgroundColor = theme ? "#333" : "#fff";

  return (
    <Router>
      <div className="App">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Header />     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<WeatherPage />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
