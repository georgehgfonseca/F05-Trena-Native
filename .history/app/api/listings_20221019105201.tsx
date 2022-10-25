import client from "./client";

const endpoint = "/listings";

const getListings = (a: any, b: any, c: any) => client.get(endpoint);
const postListings = (data: any) => client.post(endpoint);

export default {
  getListings,
  postListings,
};
