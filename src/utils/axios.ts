import axios from "axios";
import { baseURL, baseURLAPI } from "../config/constants";
const fetchData = axios.create({
  baseURL,
});

const fetchDataFromAPI = axios.create({
  baseURL: baseURLAPI,
});

export { fetchData, fetchDataFromAPI };
