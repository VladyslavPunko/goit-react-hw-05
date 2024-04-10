import axios from "axios";

export const fetchTrandMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQxZjViYzU2NTQ1NTY0MTkwMjZhMDFjNTBkYTYyZiIsInN1YiI6IjY2MTVhZmRlNTkwMDg2MDE4NTdmYWZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a41XQ-C9sPnSJhakoanqL4eTGT9GoKvpRWlc4hfRshI",
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const fetchTrandMoviesById = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODQxZjViYzU2NTQ1NTY0MTkwMjZhMDFjNTBkYTYyZiIsInN1YiI6IjY2MTVhZmRlNTkwMDg2MDE4NTdmYWZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a41XQ-C9sPnSJhakoanqL4eTGT9GoKvpRWlc4hfRshI",
    },
  };

  const { data } = await axios.request(options);
  return data;
};
