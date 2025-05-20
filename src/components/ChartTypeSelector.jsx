export default function ChartTypeSelector({ chartType, setChartType }) {
  return (
    <select
      value={chartType}
      onChange={(e) => setChartType(e.target.value)}
      className="border border-gray-300 rounded p-2"
    >
      <option value="bar">Bar</option>
      <option value="line">Line</option>
    </select>
  );
}