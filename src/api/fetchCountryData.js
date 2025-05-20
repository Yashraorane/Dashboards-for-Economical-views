export async function fetchCountryData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    console.log("API response status:", response.status);

    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }

    const rawData = await response.json();
    console.log("Fetched raw data:", rawData);

    const processed = rawData.map((country) => ({
      country: country.name.common,
      population: country.population || 0,
      gdp: Math.floor(Math.random() * 100000), // Placeholder GDP
    }));

    console.log("Processed data:", processed.slice(0, 5)); // Preview first 5
    return processed;
  } catch (err) {
    console.error("Error fetching country data:", err);
    throw err;
  }
}
