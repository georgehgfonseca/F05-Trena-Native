import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.31.154:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  // Before
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  // Connection failer - look for the data on the cache
  const data = await cache.get(url);
  return data ? {ok: true, data}
};

export default apiClient;
