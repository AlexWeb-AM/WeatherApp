import { useContext } from "react"
import { ThemeContext } from "../context"
import { Link } from "react-router-dom"

export default function Main(){ 

    let ct = useContext(ThemeContext)

    return (
        <div className={`main_div ${ct.theme ? "main_div_dark":'main_div_light'}`}>
            <div className="text_h1_div">
                <h1>Know the weather of <br /> your city</h1>
                <Link to='search'><button>Get Started</button></Link>
            </div>
        </div>
    )
}