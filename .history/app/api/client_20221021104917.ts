import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (! authToken) return;
  request.headers["x-auth-token"] = authToken;
})

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  url = url + "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2"
  console.log(url, params, axiosConfig)
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  // Connection failed - look for the data on the cache
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
