import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";
import settings from "../config/settings";

const apiMediaClient = create({
  baseURL: settings.apiUrl,
  headers: {
    'content-type': 'multipart/form-data'
  }
});

apiMediaClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (! authToken) return;
  request.headers["x-auth-token"] = authToken;
})

const get = apiMediaClient.get;
apiMediaClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  // Connection failed - look for the data on the cache
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiMediaClient;
