const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const editUserProfile = ({ name, avatar, userName }) => {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar, userName }),
  }).then((res) => checkResponse(res));
};

export const getFavoriteTracks = () => {
  return fetch(`${baseUrl}/favoriteTracks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getFavoriteAlbums = () => {
  return fetch(`${baseUrl}/favoriteAlbums`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getFavoriteArtists = () => {
  return fetch(`${baseUrl}/favoriteArtists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addFavortieArtist = ({ name, image, followers }) => {
  return fetch(`${baseUrl}/favoriteArtists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      image: image,
      followers: followers,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addFavortieTrack = ({ name, image }) => {
  return fetch(`${baseUrl}/favoriteTracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      image: image,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const addFavortieAlbum = ({ name, image, artist, totalTracks }) => {
  return fetch(`${baseUrl}/favoriteAlbums`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      image: image,
      artist: artist,
      totalTracks: totalTracks,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const deleteFavoriteTrack = (track) => {
  return fetch(`${baseUrl}/favoriteTracks/${track._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const deleteFavoriteArtist = (artist) => {
  return fetch(`${baseUrl}/favoriteArtists/${artist._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const deleteFavoriteAlbum = (album) => {
  return fetch(`${baseUrl}/favoriteAlbums/${album._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};
