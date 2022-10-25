import client from "./client";

const endpoint = "/listings";

const getListings = (a: any, b: any, c: any) => client.get(endpoint);

export default {
  getListings,
};
