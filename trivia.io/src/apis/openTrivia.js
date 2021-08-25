import axios from "axios";

const question = axios.create({
  baseURL: "https://opentdb.com/api.php",
});

export default question;
