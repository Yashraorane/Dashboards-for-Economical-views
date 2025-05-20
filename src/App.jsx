import { useState } from "react";
import CountryChart from "./components/CountryChart";
import countryData from "./data/countries.json";

function App() {
  const [metric, setMetric] = useState("population");

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 Country Data Dashboard
      </h1>

      <div className="mb-4">
        <label className="mr-2 text-lg font-medium">Select Metric:</label>
        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="population">Population</option>
          <option value="gdp">GDP</option>
        </select>
      </div>

      <CountryChart data={countryData} valueField={metric} />
    </div>
  );
}

export default App;
