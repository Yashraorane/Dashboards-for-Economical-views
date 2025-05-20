import { useEffect, useState, useMemo } from "react";
import CountryChart from "../components/CountryChart";
import MetricSelector from "../components/MetricSelector";
import { fetchCountryData } from "../api/fetchCountryData";
import ChartTypeSelector from "../components/ChartTypeSelector";
import CountryFilter from "../components/CountryFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Dashboard() {
    const [metric, setMetric] = useState("population");
    const [chartType, setChartType] = useState("bar");
    const [filter, setFilter] = useState("");
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCountryData()
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filteredCountries = useMemo(() => {
        return countries.filter((c) =>
            c.country.toLowerCase().includes(filter.toLowerCase())
        );
    }, [countries, filter]);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="w-full max-w-4xl">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
                <MetricSelector metric={metric} setMetric={setMetric} />
                <ChartTypeSelector chartType={chartType} setChartType={setChartType} />
                <CountryFilter filter={filter} setFilter={setFilter} />
            </div>
            <CountryChart data={filteredCountries} valueField={metric} chartType={chartType} />
        </div>
    );
}
