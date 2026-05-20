import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LiveScores from "./pages/LiveScores";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand fw-bold" to="/">
          LiveScoresByTyphon
        </Link>

        <div className="ms-auto">
          <Link className="btn btn-outline-light btn-sm me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-warning btn-sm" to="/live">
            Live Scores
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<LiveScores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;