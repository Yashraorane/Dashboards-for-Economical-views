import { useEffect, useState } from "react";
import countryData from "../data/countries.json"; // Replace with API later

export default function useCountryData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(countryData); // In future: fetch from API and setData(apiData)
  }, []);

  return data;
}
