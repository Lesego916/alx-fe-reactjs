import axios from "axios";

const BASE = "https://api.github.com";

/**
 * Fetch a single GitHub user by username.
 * Uses endpoint: /users/{username}
 * Throws an error if not found (404) or other issues.
 */
export async function fetchUserData(username) {
  if (!username) throw new Error("Username required");
  const url = `${BASE}/users/${encodeURIComponent(username)}`;
  const res = await axios.get(url);
  return res.data;
}

/**
 * Advanced search using GitHub Search API:
 * Example: GET /search/users?q={query}+location:{location}+repos:>=X
 * Returns the response data object.
 *
 * options: { query, location, repos, page, per_page }
 */
export async function searchUsersAdvanced({ query = "", location = "", repos, page = 1, per_page = 30 }) {
  // Build query string
  let q = query.trim();
  if (location) q += ` location:${location}`;
  if (repos) q += ` repos:>=${repos}`;
  q = q.trim() || "type:user";

  const url = `${BASE}/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=${per_page}`;
  const res = await axios.get(url);
  return res.data;
}
