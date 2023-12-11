import { checkResponse } from "../api";
const clientId = "774dc384c15942b2a0637338f1e99147";
const clientSecret = "431e5d12c78344e3a1a58747820c883c";
const market = "US";



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
  const authToken = fetch(
    "https://accounts.spotify.com/api/token",
    authParameters
  ).then((res) => {
    return checkResponse(res);
  });
  return authToken;
};

export const getTopArtistData = (token) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const topArtistData = fetch(
    `https://api.spotify.com/v1/search?q=top+artist+&type=artist&market=${market}&limit=50&offset=0`,
    parameters
  ).then((res) => {
    return checkResponse(res);
  });

  return topArtistData;
};

export const getNewReleaseData = (token) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const newReleaseData = fetch(
    `https://api.spotify.com/v1/browse/new-releases?country=US&limit=15&offset=0`,
    parameters
  ).then((res) => {
    return checkResponse(res);
  });

  return newReleaseData;
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

  const artistId = fetch(
    `https://api.spotify.com/v1/search?q=${formattedSearchInput(
      searchInput
    )}&type=artist`,
    parameters
  ).then((res) => {
    return checkResponse(res);
  });

  return artistId;
};

export const getArtistInfo = ({token, id}) => {
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };


const artistInfo = fetch(`https://api.spotify.com/v1/artists/${id}`,parameters)
.then((res) => {
  return checkResponse(res)
})

return artistInfo;
};


export const getArtistTopTracks = ({token,id}) => {

  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const artistTopTracks = fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,parameters)
  .then((res) => {
    return checkResponse(res)
  });

  return artistTopTracks;
}


export const getArtistAlbums = ({token,id}) => {

  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const artistAlbums = fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=US&limit=15&offset=0`,parameters)
  .then((res) => {
    return checkResponse(res)
  });

  return artistAlbums
}


export const getRelatedArtist = ({token,id}) => {

 let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const relatedArtists = fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`,parameters)
  .then((res) => {
    return checkResponse(res)
  });

  return relatedArtists
}

export const getRecommendations = (token) => {
 
  let parameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
   const recommendations = fetch('https://api.spotify.com/v1/search?q=tag%3Anew&type=album&market=US&limit=15&offset=0', parameters)
   .then((res) => {return checkResponse(res)});

   return recommendations
}


