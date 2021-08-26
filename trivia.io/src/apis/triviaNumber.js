import axios from "axios";

const numberFacts = axios.create({
  baseURL: "http://numbersapi.com",
});

export default numberFacts;
