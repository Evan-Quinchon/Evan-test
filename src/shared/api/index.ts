import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = process.env.NEXT_PUBLIC_API_KEY;

export const getMovies = async ({
  page = 1,
  language = "en-US",
  sort_by = "popularity.desc",
  timeZone = "America/New_York",
}) => {
  const response = await axios.get(BASE_URL + "/discover/movie", {
    params: {
      api_key,
      language,
      sort_by,
      timeZone,
      page,
    },
  });

  return response.data;
};

export const getMovieById = async (id: string) => {
  return await axios.get(BASE_URL + "/movie" + id);
};
