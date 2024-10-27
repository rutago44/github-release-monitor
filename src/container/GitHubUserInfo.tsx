import React, { useState, useEffect } from "react";

const ACCOUNT_ID = "rutago44";

function GitHubUserInfo() {
  const [userInfo, setUserInfo] = useState<JSON>();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${ACCOUNT_ID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setUserInfo(data as JSON))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>Loading...</div>;

  return <div>{JSON.stringify(userInfo)}</div>;
}

export default GitHubUserInfo;
