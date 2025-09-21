// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setResults([data]); // make it an array for consistency
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const users = await fetchAdvancedUserData({ username, location, minRepos });
      setResults(users);
    } catch {
      setError("Looks like we cant find the user(s)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleBasicSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Basic Search
        </button>
      </form>

      <form onSubmit={handleAdvancedSearch} className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Advanced Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (
            <div key={user.id} className="border p-4 rounded flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{user.login}</p>
                {user.location && <p>📍 {user.location}</p>}
                {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

