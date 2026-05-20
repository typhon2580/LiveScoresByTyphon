import { useEffect, useMemo, useState } from "react";
import MatchCard from "../components/MatchCard";
import { getLiveScores } from "../services/scoreService";

function LiveScores() {
  const [matches, setMatches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  async function fetchScores(isManualRefresh = false) {
    try {
      setError("");

      if (isManualRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const data = await getLiveScores();
      setMatches(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError("Could not load live scores. Please check your API key or try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchScores();

    const interval = setInterval(() => {
      fetchScores(true);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const filteredMatches = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return matches.filter((match) => {
      const home = match.teams?.home?.name?.toLowerCase() || "";
      const away = match.teams?.away?.name?.toLowerCase() || "";
      const league = match.league?.name?.toLowerCase() || "";
      const country = match.league?.country?.toLowerCase() || "";

      return (
        home.includes(term) ||
        away.includes(term) ||
        league.includes(term) ||
        country.includes(term)
      );
    });
  }, [matches, searchTerm]);

  return (
    <main className="scores-page">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div>
            <h1 className="fw-bold">Live Scores</h1>
            <p className="text-muted mb-0">
              Live football scores, match status, leagues, and countries.
            </p>

            {lastUpdated && (
              <p className="text-muted small mb-0">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>

          <button
            className="btn btn-dark mt-3 mt-md-0"
            onClick={() => fetchScores(true)}
            disabled={refreshing}
          >
            {refreshing ? "Refreshing..." : "Refresh Scores"}
          </button>
        </div>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search by team, league, or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading && <div className="alert alert-info">Loading live scores...</div>}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && filteredMatches.length === 0 && (
          <div className="empty-state text-center p-5">
            <h3>No live matches found</h3>
            <p className="text-muted mb-0">
              There may be no football matches live right now.
            </p>
          </div>
        )}

        <div className="row g-4">
          {filteredMatches.map((match) => (
            <div className="col-md-6 col-xl-4" key={match.fixture.id}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default LiveScores;