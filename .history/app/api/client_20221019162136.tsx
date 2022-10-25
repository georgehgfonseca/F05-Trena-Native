import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.31.154:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  // Before
  const response = await get(url, params, axiosConfig);
  // After
};

export default apiClient;
