import React, { useState, useEffect, ComponentProps } from "react";
import UserProfile from "./UserProfile";

const ACCOUNT_ID = "rutago44";

type UserProfileProps = ComponentProps<typeof UserProfile>;

function GitHubUserInfo() {
  const [userInfo, setUserInfo] = useState<UserProfileProps | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${ACCOUNT_ID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setUserInfo(data as UserProfileProps))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>Loading...</div>;

  return (
    <div>
      <UserProfile {...userInfo}></UserProfile>
    </div>
  );
}

export default GitHubUserInfo;
