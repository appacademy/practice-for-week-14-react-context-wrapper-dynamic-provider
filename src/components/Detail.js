import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { currentSign } = useContext(HoroscopeContext);

  return (
    <div className="details">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        alt=""
      />
      <h2>Current Sign Name {currentSign.name} </h2>
      <h4>Element: {currentSign.element} </h4>
      <h4>Traits: {currentSign.traits} </h4>
    </div>
  );
};

export default Detail;
