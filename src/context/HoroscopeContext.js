import { useState, createContext } from "react";
import horoscopesObj from "../data/horoscopes.js";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Pisces");

  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
