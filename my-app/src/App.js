import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeNav from "./WeatherComponent/navBar";
import HomePage from "./WeatherComponent/homePage";
// import CalendarYear from "./WeatherComponent/calender";
// import Calendar from 'react-full-year-calendar';

import NewsPage from "./WeatherComponent/news";
import About from "./WeatherComponent/about";
import CalendarYear from "./WeatherComponent/calender";
import WorldClock from "./WeatherComponent/worldClock";
function App() {
  return (

    <BrowserRouter>
      <HomeNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<CalendarYear />} />
        <Route path="/clock" element={<WorldClock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
