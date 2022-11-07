import { createContext, useState } from "react";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const HoroscopeProvider = (props) => {
  const [sign, setSign] = useState("Taurus");
  const currentSign = horoscopesObj[sign];

  return (
    <HoroscopeContext.Provider value={{ currentSign, setSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
