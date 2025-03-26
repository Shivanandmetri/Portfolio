import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-Loaded Components
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <p className="text-red-500 text-center font-bold">Loading...</p>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
