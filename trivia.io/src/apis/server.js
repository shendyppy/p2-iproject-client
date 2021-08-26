import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3000",
});

// const server = axios.create({
//   baseURL: "https://trivia--io.herokuapp.com",
// });

export default server;
