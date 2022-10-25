import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const postListings = (data: any) => client.post(endpoint);

export default {
  getListings,
  postListings,
};
