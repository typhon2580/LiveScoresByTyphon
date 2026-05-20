export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all",
      {
        method: "GET",
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY,
          "x-rapidapi-host": process.env.API_FOOTBALL_HOST,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Failed to fetch live scores",
        details: data,
      });
    }

    return res.status(200).json({
      results: data.results,
      matches: data.response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error while fetching live scores",
      error: error.message,
    });
  }
}