import axios from "axios";

const endpoint = "https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=31d4104a52ad4a5a8bcbd3148f5f46ea&language=es&q=";
const endpointPopular = "https://newsapi.org/v2/top-headlines?apiKey=5b5959685e5a4fdbb19779b19e6e3bd6&category=general"

export const getNewsByTag = async (tag = "covid") => {
   const rpta = await axios.get(endpoint + tag);
   return rpta;
}

export const getNewsPopular = async () => {
   const rpta = await axios.get(endpointPopular);
   return rpta;
}

