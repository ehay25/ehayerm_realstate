import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "bd4dab027cmsh59bbf8f5f4ef20dp1dfdbcjsncd13751af23e",
    },
  });

  return data;
};
