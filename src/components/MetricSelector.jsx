export default function MetricSelector({ metric, setMetric }) {
  return (
    <select
      value={metric}
      onChange={(e) => setMetric(e.target.value)}
      className="border border-gray-300 rounded p-2"
    >
      <option value="population">Population</option>
      <option value="gdp">GDP</option>
    </select>
  );
}