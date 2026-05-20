function MatchCard({ match }) {
  const homeTeam = match.teams?.home;
  const awayTeam = match.teams?.away;
  const goals = match.goals;
  const league = match.league;
  const status = match.fixture?.status;
  const date = match.fixture?.date;

  return (
    <div className="card match-card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-primary">{league?.name}</span>
          <span className="badge bg-secondary">{league?.country}</span>
        </div>

        <div className="team-row">
          <div>
            <img
              src={homeTeam?.logo}
              alt={homeTeam?.name}
              className="team-logo"
            />
            <span className="fw-semibold ms-2">{homeTeam?.name}</span>
          </div>

          <span className="score">{goals?.home ?? 0}</span>
        </div>

        <div className="team-row">
          <div>
            <img
              src={awayTeam?.logo}
              alt={awayTeam?.name}
              className="team-logo"
            />
            <span className="fw-semibold ms-2">{awayTeam?.name}</span>
          </div>

          <span className="score">{goals?.away ?? 0}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between text-muted small">
          <span>Status: {status?.long}</span>
          <span>{status?.elapsed ? `${status.elapsed}'` : status?.short}</span>
        </div>

        <p className="text-muted small mt-2 mb-0">
          {date ? new Date(date).toLocaleString() : "Date unavailable"}
        </p>
      </div>
    </div>
  );
}

export default MatchCard;