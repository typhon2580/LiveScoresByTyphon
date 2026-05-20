import axios from "axios";

export async function getLiveScores() {
  const response = await axios.get("/api/live-scores");
  return response.data.matches || [];
}