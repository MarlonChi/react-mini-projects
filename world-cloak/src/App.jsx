import { useState } from "react";
import TimeZoneCloack from "./components/TimeZoneCloack";

function App() {
  const timeZones = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [timeZonesSelecteds, setTimeZonesSelecteds] = useState([localTimeZone]);

  const addTimeZone = (e) => {
    const newZone = e.target.value;
    if (!timeZonesSelecteds.includes(newZone)) {
      setTimeZonesSelecteds([...timeZonesSelecteds, newZone]);
    }
  };

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={addTimeZone}>
        <option value="" disabled selected>
          Selecione um fuso horário
        </option>
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <div>
        {timeZonesSelecteds.map((zone) => (
          <TimeZoneCloack key={zone} timeZone={zone} />
        ))}
      </div>
    </div>
  );
}

export default App;
