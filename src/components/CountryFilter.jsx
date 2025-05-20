export default function CountryFilter({ filter, setFilter }) {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border border-gray-300 rounded p-2"
    />
  );
}