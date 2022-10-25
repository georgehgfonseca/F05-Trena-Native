import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2"

const endpoint = "/typephotos/" + apiParam;

const getTypePhotos = () => client.get(endpoint);

export default {
  getTypePhotos,
};
