import React from "react";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <header className="max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
        <p className="text-sm text-gray-600">Search for GitHub users and view basic profile info.</p>
      </header>

      <main className="max-w-3xl mx-auto">
        <Search />
      </main>
    </div>
  );
}
