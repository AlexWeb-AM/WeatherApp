import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../context";
import { useState } from "react";
import axios from "axios";
import Rain from "../components/Rain";

export default function WeatherPage() {
  let ct = useContext(ThemeContext);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=35484a4bb7906c8b234f68840bf56563`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  

  return (
    <div className="weather_div">
        <Rain />
      <div
        className={`search_div_input ${
          ct.theme ? "input_div_dark" : "input_div_light"
        }`}
      >
        <input
          value={city}
          onChange={handleInputChange}
          type="text"
          placeholder="Search City"
        />
        <IoSearch className="search_icon" onClick={handleSubmit} />
      </div>
      {weatherData && (
        <div className="result_div">
          <div className="result_text_div">
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
