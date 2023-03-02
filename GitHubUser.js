import React, { useState, useEffect } from "react";

const loadJSON = (key) => localStorage.getItem(key);
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const zipUserData = (userData) => {
  const { name, location, avatar_url } = userData;
  return { name, location, avatar_url };
};

const GitHubUser = ({ login }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    if (loadJSON(login)) {
      setData(JSON.parse(loadJSON(login)));
      return;
    }
    setIsLoading(true);
    const getUsers = async () => {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const userData = await response.json();
      const storageUser = { ...zipUserData(userData), login };
      setData(storageUser);
      saveJSON(login, storageUser);
      setIsLoading(false);
    };
    try {
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }, [login]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <img
        src={
          data
            ? data.avatar_url
            : "https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1660028451_13-kartinkin-net-p-oboi-zagruzka-krasivo-15.jpg"
        }
        alt=""
      />
    </div>
  );
};

export default GitHubUser;
