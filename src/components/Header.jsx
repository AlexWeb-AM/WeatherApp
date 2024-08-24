import { useContext } from "react";
import { ThemeContext } from "../context";
import { Link } from "react-router-dom";

export default function Header() {

  let ct = useContext(ThemeContext)
  

  return (
    <header className={`header ${ct.theme ? 'header_dark':'header_light'}`}>
      <div className="checkbox_div">
        <label class="switch">
          <input type="checkbox" onClick={()=>{ct.setTheme(!ct.theme)}} />
          <span class="slider"></span>
        </label>
      </div>
      
        <Link to='/'><h1>Weather</h1></Link>
      
      <div className="buttons_div">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </header>
  );
}
