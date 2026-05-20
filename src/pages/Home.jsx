import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-7">
            <span className="badge bg-warning text-dark mb-3">
              LiveScoresByTyphon
            </span>

            <h1 className="display-4 fw-bold text-white">
              LiveScoresByTyphon — real-time football scores in one clean dashboard.
            </h1>

            <p className="lead text-light mt-3">
              Track live matches, current scores, match status, leagues,
              countries, and kick-off details using a secure backend API.
            </p>

            <Link to="/live" className="btn btn-warning btn-lg mt-3">
              View Live Scores
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;