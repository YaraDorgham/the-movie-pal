import axios from "axios";
const api_key = "78da18deb28f6efe0113be955d928e99";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: { api_key: api_key },
});
