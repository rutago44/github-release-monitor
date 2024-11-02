import React from "react";

type UserProfileProps = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const {
    login,
    id,
    avatar_url,
    html_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  } = props;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <img
        src={avatar_url}
        alt={`${login}'s avatar`}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{login}</h2>
      <p>ID: {id}</p>
      <p>Public Repositories: {public_repos}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>
        Profile:{" "}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {html_url}
        </a>
      </p>
      <p>Account Created: {new Date(created_at).toLocaleDateString()}</p>
      <p>Last Updated: {new Date(updated_at).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;
