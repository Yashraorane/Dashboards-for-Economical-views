import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌍 Country Data Dashboard
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;