import { checkResponse } from "../api";
const clientId = "774dc384c15942b2a0637338f1e99147";
const clientSecret = "431e5d12c78344e3a1a58747820c883c";
const market = "US";

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getToken = () => {
  let authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
  };
  return request("https://accounts.spotify.com/api/token", authParameters);
};

export const getTopArtistData = (token) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request(
    `https://api.spotify.com/v1/search?q=top+artist+&type=artist&market=${market}&limit=50&offset=0`,
    parameters
  );
};

export const getNewReleaseData = (token) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request(
    `https://api.spotify.com/v1/browse/new-releases?country=US&limit=15&offset=0`,
    parameters
  );
};

export const getArtistId = (token, searchInput) => {
  const formattedSearchInput = () => {
    const formattedInput = searchInput.replace("/s+/g", "+");
    return formattedInput;
  };

  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request(
    `https://api.spotify.com/v1/search?q=${formattedSearchInput(
      searchInput
    )}&type=artist`,
    parameters
  );
};

export const getArtistInfo = ({ token, id }) => {
  if (token === "") {
    return;
  } else {
    let parameters = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    return request(`https://api.spotify.com/v1/artists/${id}`, parameters);
  }
};

export const getArtistTopTracks = ({ token, id }) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
    parameters
  );
};

export const getArtistAlbums = ({ token, id }) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request( `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=US&limit=20&offset=0`,parameters);

};

export const getRelatedArtist = ({ token, id }) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request(`https://api.spotify.com/v1/artists/${id}/related-artists`, parameters);
};

export const getRecommendations = (token) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return request( "https://api.spotify.com/v1/search?q=tag%3Anew&type=album&market=US&limit=15&offset=0",parameters);
};
